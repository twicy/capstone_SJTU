package main

import (
	"fmt"
	"net/http"
	"strconv"

	"github.com/gin-gonic/gin"
)

func getWarningByID(c *gin.Context) {
	id_str := c.Param("id")
	id, err := strconv.Atoi(id_str)
	if err != nil {
		panic(err.Error())
	}
	war := getWarningByIDSQL(id)
	war_redis := getWarningByIDRedis(id)
	use_redis := true
	if use_redis {
		c.IndentedJSON(http.StatusOK, war_redis)
	} else {
		c.IndentedJSON(http.StatusOK, war)
	}

}

func getWarningAll(c *gin.Context) {
	wars := getWarningAllSQL()
	c.IndentedJSON(http.StatusOK, wars)
}

func putWarning(c *gin.Context) {
	var warup WarningUpdate
	err := c.ShouldBindJSON(&warup)
	if err != nil {
		panic(err.Error())
	}
	putWarningSQL(warup)
	c.IndentedJSON(http.StatusOK, gin.H{
		"message": fmt.Sprintf("Successfully update to warning id %d", warup.ID),
	})
}
