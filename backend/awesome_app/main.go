package main

import (
	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

// thread A: write
func AddData(ID int, LastName string, FirstName string, Age int) {
	// delete cache

	// write sql
	// check if it exists in SQL
	doesExist := SQLExists(ID)
	if doesExist {
		// update
		SQLUpdate(ID, LastName, FirstName, Age)
	} else {
		// insert
		SQLInsert(ID, LastName, FirstName, Age)
	}
}

func main() {
	// init sql connection
	InitSQL()
	// init redis connection
	InitRedis()
	AddData(1, "YYier", "DDong", 24)
	router := gin.Default()
	router.GET("/albums", getAlbums)
	router.GET("/warnings/:id", getWarningByID)
	router.GET("/warnings", getWarningAll)
	router.PUT("/warnings/:id", putWarning)
	router.Run(":8080")
}
