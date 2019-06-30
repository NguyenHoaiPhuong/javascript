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
        this.x = Math.floor(Math.random()*17 + 1) * box;
        this.y = Math.floor(Math.random()*15 + 3) * box;
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

const direction = {
    d: "",
    sound: new Audio(),

    setSound: function() {
        if (this.d == "LEFT") {
            this.sound.src = "/audio/left.mp3"
        } else if (this.d == "RIGHT") {
            this.sound.src = "/audio/right.mp3"
        } else if (this.d == "UP") {
            this.sound.src = "/audio/up.mp3"
        } else if (this.d == "DOWN") {
            this.sound.src = "/audio/down.mp3"
        }
        this.sound.play()
    },

    set: function(event) {
        let key = event.keyCode;
        if (key == 37 && this.d != "RIGHT") {
            this.d = "LEFT";
            this.setSound();
        } else if (key == 38 && this.d != "DOWN") {
            this.d = "UP";
            this.setSound();
        } else if (key == 39 && this.d != "LEFT") {
            this.d = "RIGHT";
            this.setSound();
        } else if (key == 40 && this.d != "UP") {
            this.d = "DOWN";
            this.setSound();
        }
    }
}


function draw() {
    ground.draw()
    score.draw()
    food.draw()
    snake.draw()
}

function initGame() {
    ground.init()
    score.init()
    food.init()
    snake.init()
    document.addEventListener("keydown", direction.set)
}

function startGame() {    
    let game = setInterval(draw, 100)
}

initGame()
startGame()