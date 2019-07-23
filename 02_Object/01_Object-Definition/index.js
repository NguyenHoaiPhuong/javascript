const Login = () => {
    let doc = document.getElementById("root")
    doc.innerHTML = ""

    // Create an object with keyword new
    let user = new Object()
    user.name = "akagi"
    user.password = "akagi@1234"

    let userLabel = document.createElement("LABEL")
    userLabel.setAttribute("style", "display: inline-block; width: 100px")
    userLabel.innerHTML = "User:"
    doc.appendChild(userLabel)

    let userInput = document.createElement("INPUT")
    userInput.setAttribute("type", "text")
    userInput.setAttribute("placeholder", user.name)
    doc.appendChild(userInput)

    // New line
    doc.appendChild(document.createElement("BR"))

    let passLabel = document.createElement("LABEL")
    passLabel.setAttribute("style", "display: inline-block; width: 100px")
    passLabel.innerHTML = "Password:"
    doc.appendChild(passLabel)

    let passInput = document.createElement("INPUT")
    passInput.setAttribute("type", "password")
    passInput.setAttribute("placeholder", user.password)
    doc.appendChild(passInput)

    // New line
    doc.appendChild(document.createElement("BR"))

    let submit = document.createElement("INPUT")
    submit.setAttribute("type", "button")
    submit.setAttribute("value", "Submit")
    doc.appendChild(submit)
}

const Contact = () => {
    let doc = document.getElementById("root");
    doc.innerHTML = ""

    // Object admin created by using object literal
    let admin = {
        firstName: "Nguyen",
        lastName: "Hoai Phuong",
        age: 34,
        city: "Ho Chi Minh",
        country: "Vietnam"
    };

    let nameLabel = document.createElement("LABEL");
    nameLabel.setAttribute("style", "width: 100px; display: inline-block")
    nameLabel.innerHTML = "Name:"
    doc.appendChild(nameLabel)
    
    let nameTxt = document.createElement("INPUT")
    nameTxt.setAttribute("TYPE", "text")
    nameTxt.setAttribute("placeholder", admin.firstName + " " + admin.lastName)
    doc.appendChild(nameTxt)

    // New line
    doc.appendChild(document.createElement("BR"))

    let ageLabel = document.createElement("LABEL")
    ageLabel.setAttribute("style", "width: 100px; display: inline-block")
    ageLabel.innerHTML = "Age:"
    doc.appendChild(ageLabel)

    let ageTxt = document.createElement("INPUT")
    ageTxt.setAttribute("TYPE", "text")
    ageTxt.setAttribute("placeholder", admin.age.toString())
    doc.appendChild(ageTxt)

    // New line
    doc.appendChild(document.createElement("BR"))

    let cityLabel = document.createElement("LABEL")
    cityLabel.setAttribute("style", "width: 100px; display: inline-block")
    cityLabel.innerHTML = "City:"
    doc.appendChild(cityLabel)    

    let cityTxt = document.createElement("INPUT")
    cityTxt.setAttribute("TYPE", "text")
    cityTxt.setAttribute("placeholder", admin.city)
    doc.appendChild(cityTxt)

    // New line
    doc.appendChild(document.createElement("BR"))

    let countryLabel = document.createElement("LABEL")
    countryLabel.setAttribute("style", "width: 100px; display: inline-block")
    countryLabel.innerHTML = "Country:"
    doc.appendChild(countryLabel)    

    let countryTxt = document.createElement("INPUT")
    countryTxt.setAttribute("TYPE", "text")
    countryTxt.setAttribute("placeholder", admin.country)
    doc.appendChild(countryTxt)

    // New line
    doc.appendChild(document.createElement("BR"))
}