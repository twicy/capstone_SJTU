package main

import (
	"time"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

func main() {
	// init sql connection
	InitSQL()
	// init redis connection
	InitRedis()
	//InitDataRedis()

	router := gin.Default()
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"https://foo.com"},
		AllowMethods:     []string{"PUT", "PATCH"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		AllowOriginFunc: func(origin string) bool {
			return origin == "https://github.com"
		},
		MaxAge: 12 * time.Hour,
	}))
	router.GET("/albums", getAlbums)
	router.GET("/warnings/:id", getWarningByID)
	router.GET("/warnings", getWarningAll)
	router.GET("/warnings/new", getNewWarnings)
	router.PUT("/warnings/:id", putWarning)
	router.GET("/api/history/:num", getHistory)
	router.POST("/api/generate_warnings/:id", generateWarnings)
	router.Run(":8080")

}
