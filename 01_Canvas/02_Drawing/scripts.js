var iLine = 0
var iRect = 0
var iCircle = 0
var iText = 0

var rect = {
    x: 0,
    y: 0,
    w: 175,
    h: 75
}

var circle = {
    x: 100,
    y: 50,
    r: 35,
    startAngle: 0,
    endAngle: 2*Math.PI
}

function drawRect() {
    var canvas = document.getElementById("1001")
    var ctx = canvas.getContext("2d")
    
    if (iRect % 2 == 0) {
        ctx.fillStyle = "#00FF00"
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
    } else {
        ctx.clearRect(rect.x, rect.y, rect.w, rect.h)
    }
    iRect++
}

function drawCircle() {
    var canvas = document.getElementById("1002")
    var ctx = canvas.getContext("2d")

    if (iCircle % 2 == 0) {
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.r, circle.startAngle, circle.endAngle)
        ctx.stroke()
    } else {
        ctx.clearRect(0, 0, 200, 100)
    }
    iCircle++    
}

function drawLine() {
    var start = {
        x: 0,
        y: 0
    }

    var stop = {
        x: 100,
        y: 50
    }

    var canvas = document.getElementById("1003")
    var ctx = canvas.getContext("2d")
    if (iLine % 2 == 0) {
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(stop.x, stop.y)
        ctx.stroke()
    } else {
        ctx.clearRect(0, 0, 200, 100)
    }
    iLine++
}

function drawText() {
    var canvas = document.getElementById("1004")
    var ctx = canvas.getContext("2d")
    if (iText % 2 == 0) {
        ctx.font = "30px Arial"
        ctx.fillText("Hello World", 20, 30)
        ctx.strokeText("Hello World", 20, 70)
    } else {
        ctx.clearRect(0, 0, 200, 100)
    }
    iText++
}