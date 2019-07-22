const Login = () => {
    let doc = document.getElementById("root")

    let userLabel = document.createElement("LABEL")
    userLabel.innerHTML = "User:"
    doc.appendChild(userLabel)

    let userInput = document.createElement("INPUT")
    doc.appendChild(userInput)

    // New line
    doc.appendChild(document.createElement("BR"))

    let passLabel = document.createElement("LABEL")
    passLabel.innerHTML = "Password:"
    doc.appendChild(passLabel)

    let passInput = document.createElement("INPUT")
    doc.appendChild(passInput)

    // New line
    doc.appendChild(document.createElement("BR"))

    let submit = document.createElement("INPUT")
    submit.setAttribute("type", "button")
    submit.setAttribute("value", "Submit")
    doc.appendChild(submit)
}

const Contact = () => {
    
}