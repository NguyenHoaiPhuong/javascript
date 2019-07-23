const notify = () => {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let city = document.getElementById("city").value

    let me = new Person(name, age, "red")
    me.city = city  // Add new property
    delete me.eyeColor  // Delete existing property

    for (x in me) {
        alert(x)        // x is property name
        alert(me[x])    // me[x] will return property value
    }
}

function Person(name, age, eyeColor) {
    this.name = name
    this.age = age
    this.eyeColor = eyeColor
}