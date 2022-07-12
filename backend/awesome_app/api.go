package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

// check redis
// redis exists: get from redis
// redis doesn't exist: get from sql, add to redis(in goroutine)
func getWarningByID(c *gin.Context) {
	id_str := c.Param("id")
	id, err := strconv.Atoi(id_str)
	if err != nil {
		panic(err.Error())
	}
	// check if exists in redis
	exist := checkExistByIDRedis(id)
	if exist {
		war_redis := getWarningByIDRedis(id)
		c.IndentedJSON(http.StatusOK, war_redis)
	} else {
		war := getWarningByIDSQL(id)
		go addWarningRedis(war)
		c.IndentedJSON(http.StatusOK, war)
	}
}

// get all warnings always from sql
func getWarningAll(c *gin.Context) {
	wars := getWarningAllSQL()
	c.IndentedJSON(http.StatusOK, wars)
}

// update sql
// delete redis(in goroutine)
func putWarning(c *gin.Context) {
	var warup WarningUpdate
	err := c.ShouldBindJSON(&warup)
	if err != nil {
		panic(err.Error())
	}
	putWarningSQL(warup)
	go deleteWarningByIDRedis(warup.ID)
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": fmt.Sprintf("Successfully update to warning id %d", warup.ID),
	})
}

func generateWarnings(c *gin.Context) {
	// Note that history here does not have ID, but only warning_id
	// did not assign ID here for the sake of concurrency
	id_str := c.Param("id")
	id, _ := strconv.Atoi(id_str)
	var warinsert WarningInsert
	err := c.ShouldBindJSON(&warinsert)
	if err != nil {
		panic(err.Error())
	}
	fmt.Println(id)
	go insertWarningRedis(warinsert)
	insertWarningSQL(warinsert)
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": fmt.Sprintf("Successfully inserted a new warning with warning id %s:", id_str),
	})
}

func getNewWarnings(c *gin.Context) {
	// from redis
	newwars := getNewWarningsRedis()
	c.IndentedJSON(http.StatusOK, newwars)
}

func errorResponse(err error) gin.H {
	return gin.H{"error": err.Error()}
}
