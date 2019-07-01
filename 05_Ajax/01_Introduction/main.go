package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

// IndexHTML : container of index.html
var IndexHTML []byte

func init() {
	var err error
	IndexHTML, err = ioutil.ReadFile("./html/index.html")
	if err != nil {
		log.Fatalln(err)
	}
}

func main() {
	fmt.Println("Starting server on http://localhost:9999")
	http.HandleFunc("/", IndexHandler)
	http.Handle("/js/", http.StripPrefix("/js/", http.FileServer(http.Dir("js"))))
	http.Handle("/resources/", http.StripPrefix("/resources/", http.FileServer(http.Dir("resources"))))
	http.ListenAndServe(":9999", nil)
}

// IndexHandler : open index.html
func IndexHandler(w http.ResponseWriter, r *http.Request) {
	w.Write(IndexHTML)
}
