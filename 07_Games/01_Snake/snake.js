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
}

function startGame() {    
    let game = setInterval(draw, 100)
}

initGame()
startGame()