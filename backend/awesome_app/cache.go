// Everything about cache/redis lives here

package main

import (
	"context"
	"fmt"

	"github.com/go-redis/redis/v9"
	_ "github.com/go-sql-driver/mysql"
)

// redis connection as a global variable
var redisDB *redis.Client

func InitRedis() (err error) {
	redisDB = redis.NewClient(&redis.Options{
		Addr:     "127.0.0.1:6379",
		Password: "",
		DB:       0,
	})
	Ctx := context.TODO()
	_, err = redisDB.Ping(Ctx).Result()
	if err != nil {
		fmt.Println("Redis Connection fail", err)
	}
	return
}
