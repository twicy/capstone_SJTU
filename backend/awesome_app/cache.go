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
		redisDB.Set(Ctx, id_str, string(b), 0)
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
