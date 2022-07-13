// Everything about cache/redis lives here

package main

import (
	"context"
	"encoding/json"
	"strconv"

	"github.com/go-redis/redis/v9"
	_ "github.com/go-sql-driver/mysql"
)

// redis connection as a global variable
var redisDB *redis.Client
var Ctx = context.TODO()

func InitRedis() (err error) {
	redisDB = redis.NewClient(&redis.Options{
		Addr:     "127.0.0.1:6379",
		Password: "",
		DB:       0,
	})
	_, err = redisDB.Ping(Ctx).Result()
	if err != nil {
		panic(err.Error())
	}
	return
}

// a function that inserts all data in the cache from SQL
// here we transform struct into json string and transform back later
// another method to use struct in redis: https://redis.uptrace.dev/guide/scanning-hash-fields.html
func InitDataRedis() {
	wars := getWarningAllSQL()
	for i := 0; i < len(wars); i++ {
		id_int := wars[i].ID
		id_str := strconv.Itoa(id_int)
		b, err := json.Marshal(wars[i])
		if err != nil {
			panic(err.Error())
		}
		redisDB.Set(Ctx, id_str, string(b), 0) //value 0 means no expiration
	}
}

func addWarningRedis(war Warning) {
	id_int := war.ID
	id_str := strconv.Itoa(id_int)
	b, err := json.Marshal(war)
	if err != nil {
		panic(err.Error())
	}
	redisDB.Set(Ctx, id_str, string(b), 0)
}

func checkExistByIDRedis(id int) bool {
	id_str := strconv.Itoa(id)
	exist, err := redisDB.Exists(Ctx, id_str).Result()
	if err != nil {
		panic(err.Error())
	}
	if exist == 1 {
		return true
	} else {
		return false
	}
}

func getWarningByIDRedis(id int) (war Warning) {
	id_str := strconv.Itoa(id)
	s, err := redisDB.Get(Ctx, id_str).Result()
	if err != nil {
		panic(err.Error())
	}
	json.Unmarshal([]byte(s), &war)
	return war
}

// NOTE: the id here is the UNIQUE id, not the warning_id
func deleteWarningByIDRedis(id int) {
	id_str := strconv.Itoa(id)
	_, err := redisDB.Del(Ctx, id_str).Result()
	if err != nil {
		panic(err.Error())
	}
}

// structure of redis:
// {id:{warning_id:int, if_newest:int, value:int}}

func insertWarningRedis(warinsert WarningInsert) {
	id := warinsert.ID
	id_str := strconv.Itoa(id)
	warning_id := warinsert.Warning_ID
	_, err := redisDB.HSet(Ctx, id_str, "warning_id", warning_id, "if_newest", 1, "value", 1).Result()
	if err != nil {
		panic(err.Error())
	}

}

// ref: https://redis.uptrace.dev/guide/get-all-keys.html#iterating-over-keys
func getNewWarningsRedis() (newwars []Warning) {
	iter := redisDB.Scan(Ctx, 0, "*", 0).Iterator()
	for iter.Next(Ctx) {
		key := iter.Val()
		if_newest, err := redisDB.HGet(Ctx, key, "if_newest").Result()
		if err != nil {
			panic(err)
		}
		if if_newest == "1" {
			warning_id, _ := redisDB.HGet(Ctx, key, "warning_id").Result()
			warning_id_int, _ := strconv.Atoi(warning_id)
			newwar := getWarningByIDSQL(warning_id_int)
			//set if_newest to 0
			redisDB.HSet(Ctx, key, "warning_id", warning_id, "if_newest", 0, "value", 1)
			newwar.Value = 1
			newwars = append(newwars, newwar)
		}

	}
	if err := iter.Err(); err != nil {
		panic(err)
	}
	return newwars
}
