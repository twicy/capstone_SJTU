// Everything about SQL lives here

package main

import (
	"database/sql"
	"time"

	_ "github.com/go-sql-driver/mysql"
)

// sql connection as a global variable
var SQLDB *sql.DB

func InitSQL() (err error) {
	SQLDB, err = sql.Open("mysql", "client1:password@/testdb?parseTime=true")
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
	sqlStmt := "UPDATE history SET value = ? WHERE id = ?"
	_, err := SQLDB.Exec(sqlStmt, warup.Value, warup.ID)
	if err != nil {
		panic(err.Error())
	}
}

func insertWarningSQL(warinsert WarningInsert) {
	sqlStmt := `
	INSERT INTO history (
		id,
		warning_id,
		value,
		time)
	VALUES (?,?,?,?);`

	_, err := SQLDB.Exec(
		sqlStmt,
		warinsert.ID,
		warinsert.Warning_ID,
		1,
		time.Now(),
	)

	if err != nil {
		panic(err.Error())
	}

}

//given an integer, this function returns that many records if possible
//return an array of warnings where the id here is warning_id, namely warning type
func getHistorySQL(n int)(wars []AltraWarning) {
	sqlStmt := `SELECT * FROM history ORDER BY id DESC LIMIT ?;`

	rows, err := SQLDB.Query(sqlStmt, n)

	if err != nil {
		panic(err.Error())
	}

	for rows.Next() {
		var hist History
		err := rows.Scan(
			&hist.ID,
			&hist.Warning_ID,
			&hist.Value,
			&hist.Time,
		)
		if err != nil {
			panic(err.Error())
		}
		
		var war Warning = getWarningByIDSQL(hist.Warning_ID) 
		var altWar AltraWarning
		altWar.ID = hist.ID
		altWar.Warning_ID = war.ID
		altWar.Label_Chinese = war.Label_Chinese
		altWar.Label_English = war.Label_English
		altWar.Function_name = war.Function_name
		altWar.Function_Chinese = war.Function_Chinese
		altWar.Function_English = war.Function_English
		altWar.Group_label_Chinese = war.Group_label_Chinese
		altWar.Group_label_English = war.Group_label_English
		altWar.Machine_obj_Chinese = war.Machine_obj_Chinese
		altWar.Machine_obj_English = war.Machine_obj_English
		altWar.Value = hist.Value
		altWar.Time = hist.Time
		wars = append(wars, altWar)
	}
	return wars
}
