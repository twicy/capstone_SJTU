// all the struct should live here
// if the first letter is capitalized in struct name, like "Person",
// then it means that this struct will be used OUTSIDE the package
// otherwise, it means this struct will be used INSIDE this package (package main),
// which is the case in model.go
package main

type person struct {
	ID        int
	LastName  string
	FirstName string
	Age       int
}

// experiment struct for gin
type album struct {
	ID     string  `json:"id"`
	Title  string  `json:"title"`
	Artist string  `json:"artist"`
	Price  float64 `json:"price"`
}
