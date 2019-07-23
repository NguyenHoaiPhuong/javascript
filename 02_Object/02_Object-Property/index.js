const notify = () => {
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value

    let me = new Person(name, age)

    for (x in me) {
        alert(x)        // x is property name
        alert(me[x])    // me[x] will return property value
    }
}

function Person(name, age) {
    this.name = name
    this.age = age
}