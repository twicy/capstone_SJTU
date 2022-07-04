// Everything about SQL lives here

package main

import (
	"database/sql"
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
)

// sql connection as a global variable
var SQLDB *sql.DB

func InitSQL() (err error) {
	SQLDB, err = sql.Open("mysql", "client1:password@/testdb")
	if err != nil {
		fmt.Println("SQL Connection fail", err)
	}
	return
}

func SQLExists(ID int) (exists bool) {
	row := SQLDB.QueryRow("SELECT ID FROM Persons Where ID = ?", ID)
	person := person{}
	if err := row.Scan(&person.ID); err != nil {
		fmt.Println("can not find ID = ", ID)
		return false
	}
	return true
}

func SQLUpdate(ID int, LastName string, FirstName string, Age int) {
	sqlStmt := "UPDATE Persons SET LastName = ?, FirstName = ?, Age = ? WHERE ID = ?"
	_, err := SQLDB.Exec(sqlStmt, LastName, FirstName, Age, ID)
	if err != nil {
		fmt.Println("can not update = ", err)
	}
}

func SQLInsert(ID int, LastName string, FirstName string, Age int) {
	sqlStmt := "INSERT INTO Persons VALUES (?, ?, ?, ?)"
	_, err := SQLDB.Exec(sqlStmt, ID, LastName, FirstName, Age)
	if err != nil {
		fmt.Println("can not insert = ", err)
	}
}

func getWarningByID(c *gin.Context) {
	id := c.Param("id")
	var war Warning
	err := SQLDB.QueryRow(
		"SELECT * FROM warning where id = ?",
		id).
		Scan(
			&war.ID,
			&war.Label_Chinese,
			&war.Label_English,
			&war.Function_name,
			&war.Function_Chinese,
			&war.Function_English,
			&war.Group_label_Chinese,
			&war.Group_label_English,
			&war.Machine_obj_Chinese,
			&war.Machine_obj_English,
			&war.Value,
			&war.Time,
		)
	if err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}
	c.IndentedJSON(http.StatusOK, war)
}

func getWarningAll(c *gin.Context) {
	rows, err := SQLDB.Query("SELECT * FROM warning")
	if err != nil {
		panic(err.Error()) // proper error handling instead of panic in your app
	}
	var wars []Warning
	for rows.Next() {
		var war Warning
		err := rows.Scan(
			&war.ID,
			&war.Label_Chinese,
			&war.Label_English,
			&war.Function_name,
			&war.Function_Chinese,
			&war.Function_English,
			&war.Group_label_Chinese,
			&war.Group_label_English,
			&war.Machine_obj_Chinese,
			&war.Machine_obj_English,
			&war.Value,
			&war.Time,
		)
		if err != nil {
			panic(err.Error())
		}
		wars = append(wars, war)
	}
	c.IndentedJSON(http.StatusOK, wars)
}

func putWarning(c *gin.Context) {
	// get the model if exist

}
