function greeting(name) {
    console.log("Hello " + name)
}

function processUserInput(callback) {
    var name = prompt("Please enter your name:", "Akagi Nguyen")
    callback(name)
}

processUserInput(greeting)