package main

import (
	"time"
)

type Warning struct {
	ID                  int       `json:"id"`
	Label_Chinese       string    `json:"label_Chinese"`
	Label_English       string    `json:"label_English"`
	Function_name       string    `json:"function_name"`
	Function_Chinese    string    `json:"function_Chinese"`
	Function_English    string    `json:"function_English"`
	Group_label_Chinese string    `json:"group_label_Chinese"`
	Group_label_English string    `json:"group_label_English"`
	Machine_obj_Chinese string    `json:"machine_obj_Chinese"`
	Machine_obj_English string    `json:"machine_obj_English"`
	Value               int       `json:"value"`
	Time                time.Time `json:"time" time_format:"unix"`
}

type WarningUpdate struct {
	ID    int `json:"id"`
	Value int `json:"value"`
}

// experiment struct for gin
type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}

type WarningInsert struct {
	ID         int `json:"id"`
	Warning_ID int `json:"warning_id"`
}


type History struct {
	ID         int `json:"id"`
	Warning_ID int `json:"warning_id"`
	Value	   int `json:"value"`
	Time	   time.Time `json:"time" time_format:"unix"`
}

type AltraWarning struct {
	ID                  int       `json:"id"`
	Warning_ID 			int 	  `json:"warning_id"`
	Label_Chinese       string    `json:"label_Chinese"`
	Label_English       string    `json:"label_English"`
	Function_name       string    `json:"function_name"`
	Function_Chinese    string    `json:"function_Chinese"`
	Function_English    string    `json:"function_English"`
	Group_label_Chinese string    `json:"group_label_Chinese"`
	Group_label_English string    `json:"group_label_English"`
	Machine_obj_Chinese string    `json:"machine_obj_Chinese"`
	Machine_obj_English string    `json:"machine_obj_English"`
	Value               int       `json:"value"`
	Time                time.Time `json:"time" time_format:"unix"`
}