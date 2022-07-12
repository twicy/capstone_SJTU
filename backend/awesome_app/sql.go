// Everything about SQL lives here

package main

import (
	"database/sql"

	_ "github.com/go-sql-driver/mysql"
)

// sql connection as a global variable
var SQLDB *sql.DB

func InitSQL() (err error) {
	SQLDB, err = sql.Open("mysql", "client1:password@/testdb")
	if err != nil {
		panic(err.Error())
	}
	return
}

func getWarningByIDSQL(id int) (war Warning) {
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
	return war
}

func getWarningAllSQL() (wars []Warning) {
	rows, err := SQLDB.Query("SELECT * FROM warning")
	if err != nil {
		panic(err.Error())
	}
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
	return wars
}

func putWarningSQL(warup WarningUpdate) {
	sqlStmt := "UPDATE warning SET value = ? WHERE id = ?"
	_, err := SQLDB.Exec(sqlStmt, warup.Value, warup.ID)
	if err != nil {
		panic(err.Error())
	}
}

