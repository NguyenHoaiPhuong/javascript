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
	if r.Method == "GET" {
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
	} else if r.Method == "POST" {
		err := r.ParseForm()
		if err != nil {
			log.Fatalln(err)
		}
		user := r.FormValue("username")
		pass := r.FormValue("password")
		fmt.Println(user)
		fmt.Println(pass)
		http.Redirect(w, r, "/login", http.StatusOK)
		fmt.Fprintf(w, "User name: %s\nPassword : %s\n", user, pass)
	}

}

type user struct {
	Name     string `json: name`
	Password string `json: password`
}
