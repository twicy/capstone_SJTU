package main

import (
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
	AddData(1, "YYier", "DDong", 23)
}
