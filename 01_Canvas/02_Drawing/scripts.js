var iRect = 0

var rect = {
    x: 0,
    y: 0,
    w: 175,
    h: 75
}

function drawRect() {
    var canvas = document.getElementById("1001")
    ctx = canvas.getContext("2d")
    
    if (iRect % 2 == 0) {
        ctx.fillStyle = "#00FF00"
        ctx.fillRect(rect.x, rect.y, rect.w, rect.h)
    } else {
        ctx.clearRect(rect.x-1, rect.y-1, rect.w, rect.h)
    }
    iRect++
}