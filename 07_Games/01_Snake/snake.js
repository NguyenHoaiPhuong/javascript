const cvs = document.getElementById("snake")
const ctx = cvs.getContext("2d")

// unit box pixel
const box = 32

// ground
const ground = {
    img: new Image(),
    x: 0,
    y: 0,

    init: function() {
        this.img.src = "img/ground.png"
    },

    draw: function() {
        ctx.drawImage(this.img, this.x, this.y)
    }
}

// food
const food = {
    img: new Image(),
    x: 0,
    y: 0,

    init: function() {
        this.img.src = "img/food.png";
        this.setPosition();
    },

    setPosition: function() {
        this.x = Math.floor(Math.random()*17 + 1) * box;
        this.y = Math.floor(Math.random()*15 + 3) * box;
    },

    draw: function() {
        ctx.drawImage(this.img, this.x, this.y);
    }
}

const snake = {
    pos: [{
        x: 0,
        y: 0
    }],

    init: function() {
        this.pos[0].x = 9*box
        this.pos[0].y = 10*box
    },

    draw: function() {
        for (let i = 0; i < this.pos.length; i++) {
            ctx.fillStyle = (i == 0)? "green" : "white";
            ctx.fillRect(this.pos[i].x, this.pos[i].y, box, box)
            ctx.strokeStyle = "red"
            ctx.strokeRect(this.pos[i].x, this.pos[i].y, box, box)
        }
    }
}

const score = {
    value: 0,
    x: 0,
    y: 0,

    init: function() {
        this.value = 0
        this.x = 2*box
        this.y = 1.6*box
    },

    draw: function() {
        ctx.fillStyle = "blue"
        ctx.font = "45px Arial"
        ctx.fillText(this.value, this.x, this.y)
    }
}

const sound = {
    audio: new Audio(),

    setSource: function(status) {
        switch (status) {
            case "LEFT":
                this.audio.src = "audio/left.mp3";
                break;
            case "RIGHT":
                this.audio.src = "audio/right.mp3";
                break;
            case "DOWN":
                this.audio.src = "audio/down.mp3";
                break;
            case "UP":
                this.audio.src = "audio/up.mp3";
                break;
            case "DEAD":
                this.audio.src = "audio/dead.mp3";
                break;
            case "EAT":
                this.audio.src = "audio/eat.mp3";
                break;
            default:
                this.audio.src = "";
                break;
        }
    },

    play: function() {
        this.audio.play()
    }
}

let state = ""
let dir = ""

function direction(event) {
    let key = event.keyCode;
    if (key == 37 && state != "RIGHT") {
        dir = "LEFT";
    } else if (key == 38 && state != "DOWN") {
        dir = "UP";
    } else if (key == 39 && state != "LEFT") {
        dir = "RIGHT";
    } else if (key == 40 && state != "UP") {
        dir = "DOWN";
    }

    sound.setSource(dir)
    sound.play()
}

function setStateAndPlaySound(s) {
    state = s;
    sound.setSource(state)
    sound.play()
}

function initGame() {
    document.addEventListener("keydown", direction)

    ground.init()
    score.init()
    food.init()
    snake.init()
}

function collision(head, array) {
    for (let i = 0; i < array.length; i++) {
        if (head.x == array[i].x && head.y == array[i].y) {
            return true
        }
    }
    return false
}

function snakeMove() {
    // reset state
    state = ""

    let headX = snake.pos[0].x;
    let headY = snake.pos[0].y;
    switch (dir) {
        case "LEFT":
            headX -= box;
            break;
        case "RIGHT":
            headX += box;
            break;
        case "DOWN":
            headY += box;
            break;
        case "UP":
            headY -= box;
            break;
        default:
            break;
    }    

    // check if snake eats food
    if (headX == food.x && headY == food.y) {
        score.value++;
        setStateAndPlaySound("EAT")
        food.setPosition()
    } else {
        snake.pos.pop()
    }

    // check if game over
    if (headX < box || headY < 3 * box || headX > 17 * box || headY > 17 * box) {
        gameOver()
    }

    let newHead = {
        x: headX,
        y: headY
    }
    if (collision(newHead, snake.pos)) {
        gameOver()
    }
    
    snake.pos.unshift(newHead)
}

function gameOver() {
    setStateAndPlaySound("DEAD")
    clearInterval(game)
    document.removeEventListener("keydown", direction)
}

function gamePlay() {
    ground.draw()
    score.draw()
    food.draw()
    snake.draw()

    snakeMove()
}

initGame()
let game = setInterval(gamePlay, 200)