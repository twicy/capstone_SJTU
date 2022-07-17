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


type Consumption struct {
	ID         int `json:"id"`
	Week       int `json:"week"`
	Shift	   int `json:"shift"`
	Consumption_ID int `json:"consumption_id"`
	Consumption int `json:"consumption"`
}

type Production struct {
	ID         int `json:"id"`
	Week       int `json:"week"`
	Shift	   int `json:"shift"`
	Production_ID int `json:"production_id"`
	Production int `json:"production"`
}

type HistoryCompare struct {
	ID         int `json:"id"`
	Warning_ID int `json:"warning_id"`
	Value	   int `json:"value"`
	Time	   time.Time `json:"time" time_format:"unix"`
	IfNewest  int `json:"if_newest"`
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