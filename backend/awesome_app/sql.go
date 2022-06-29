// Everything about SQL lives here

package main

import (
	"database/sql"
	"fmt"

	_ "github.com/go-sql-driver/mysql"
)

// sql connection as a global variable
var SQLDB *sql.DB

func InitSQL() (err error) {
	SQLDB, err = sql.Open("mysql", "dong12:ve450@/dong")
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
