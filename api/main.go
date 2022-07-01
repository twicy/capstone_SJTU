package main

import (
    //"net/http"
    "github.com/gin-gonic/gin"
	"github.com/jmoiron/sqlx"
	"fmt"
    //"database/sql"
    _ "github.com/go-sql-driver/mysql"
	"github.com/go-sql-driver/mysql"
)

type Warning struct {
    ID     string  `json:"id"`
	Label_Chinese     string  `json:"label_Chinese"`
	Label_English     string  `json:"label_English"`
	Function_name     string  `json:"function_name"`
	Function_Chinese     string  `json:"function_Chinese"`
	function_English     string  `json:"function_English"`
	group_label_Chinese     string  `json:"group_label_Chinese"`
	group_label_English     string  `json:"group_label_English"`
	machine_obj_Chinese     string  `json:"machine_obj_Chinese"`
	machine_obj_English     string  `json:"machine_obj_English"`
	value     string  `json:"value"`
	time     string  `json:"time"`
}



func main() {

	cfg := mysql.Config{
		User:   "root",
		Passwd: "",
		Net:    "tcp",
		Addr:   "127.0.0.1:3306",
		DBName: "testdb",
	}

    //router := gin.Default()
	//test
    //router.GET("/warning/:id", getWarningByID)
    //router.Run("localhost:8080")
	db, err := sqlx.Open("mysql", cfg.FormatDSN())
	if err != nil {
        panic(err.Error())
    }
	defer db.Close()
	results := []Warning{}
	err = db.Select(&results, "SELECT * ORDER BY time DES")
	if err != nil {
		fmt.Println(err)
		return
	}
	fmt.Printf("%v", results)
}


func getWarningByID(c *gin.Context) {
	return
}