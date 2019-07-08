package main

import (
	"encoding/json"
	"fmt"
	"html/template"
	"log"
	"net/http"
)

func main() {
	fmt.Println("Launch server on http://localhost:9999")

	http.HandleFunc("/", HomePage)
	http.HandleFunc("/login", Login)
	http.Handle("/static/", http.StripPrefix("/static/", http.FileServer(http.Dir("static"))))
	log.Println(http.ListenAndServe(":9999", nil))
}

// HomePage : home page
func HomePage(w http.ResponseWriter, r *http.Request) {
	tpl, err := template.ParseFiles("html/index.html")
	if err != nil {
		log.Fatalln("Parse html file error:", err)
	}
	tpl.Execute(w, nil)
}

// Login by username and password
func Login(w http.ResponseWriter, r *http.Request) {
	akagi := user{
		Name:     "Nguyen Hoai Phuong",
		Password: "1234",
	}

	bs, err := json.Marshal(akagi)
	if err != nil {
		log.Fatalln("Encode user error:", err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.Write(bs)
}

type user struct {
	Name     string `json: name`
	Password string `json: password`
}
