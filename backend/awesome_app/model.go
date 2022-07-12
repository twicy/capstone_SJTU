// all the struct should live here
// if the first letter is capitalized in struct name, like "Person",
// then it means that this struct will be used OUTSIDE the package
// otherwise, it means this struct will be used INSIDE this package (package main),
// which is the case in model.go
package main

type Warning struct {
	ID                  int    `json:"id"`
	Label_Chinese       string `json:"label_Chinese"`
	Label_English       string `json:"label_English"`
	Function_name       string `json:"function_name"`
	Function_Chinese    string `json:"function_Chinese"`
	Function_English    string `json:"function_English"`
	Group_label_Chinese string `json:"group_label_Chinese"`
	Group_label_English string `json:"group_label_English"`
	Machine_obj_Chinese string `json:"machine_obj_Chinese"`
	Machine_obj_English string `json:"machine_obj_English"`
	Value               int    `json:"value"`
	Time                string `json:"time"`
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

type History struct {
	WarningID           int    `json:"warning_id"`
	Value               int    `json:"value"`
	Time                string `json:"time"`
}

