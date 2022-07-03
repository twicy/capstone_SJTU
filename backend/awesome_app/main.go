package main

import (
	"net/http"

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

var albums = []album{
	{ID: "1", Title: "Blue Train", Artist: "John Coltrane", Price: 56.99},
	{ID: "2", Title: "Jeru", Artist: "Gerry Mulligan", Price: 17.99},
	{ID: "3", Title: "Sarah Vaughan and Clifford Brown", Artist: "Sarah Vaughan", Price: 39.99},
}

func getAlbums(c *gin.Context) {
	c.IndentedJSON(http.StatusOK, albums)
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
	router.GET("/warnings", getWarningByTime)
	router.Run(":8080")
}