var canvas, ctx;

var gridSize = 20;

// Colors
var boardColor = "#ffffff";
const snakeColor = "#0d0f73";
const flashColor = snakeColor;
const appleColor = "#FB8B24";

// TODO:
easterEggThreshold = 50;

// Util
function mod(n, m) {
    return ((n % m) + m) % m;
}

// Classes
class Position {
    constructor(x, y) {
        this.x = mod(x, gridSize);
        this.y = mod(y, gridSize);

    }

    equals(otherPos) {
        return this.x == otherPos.x && this.y == otherPos.y;
    }
}

class Snake {
    constructor() {
        this.trail = [];
        this.trail.push(new Position(Math.floor(gridSize / 2), Math.floor(gridSize / 2)));
    }

    getNewHead() {
        var snakeHead = this.trail[0];
        return new Position(snakeHead.x + currDir.x, snakeHead.y + currDir.y);
    }

    addNewHead(newHead) {
        this.trail.unshift(newHead);
    }

    removeTail() {
        this.trail.pop();
    }

    checkCollision(otherPos) {
        return this.trail.some(position => position.equals(otherPos));
    }

    draw() {
        this.trail.forEach((tile) => drawTile(snakeColor, tile.x, tile.y));
    }
}

const Direction = {
    Up: { x: 0, y: -1 },
    Down: { x: 0, y: 1 },
    Left: { x: -1, y: 0 },
    Right: { x: 1, y: 0 }
};

const Keys = {
    H: 72,
    J: 74,
    K: 75,
    L: 76
}

const GameStates = {
    Playing: "Playing",
    Paused: "Paused",
    GameOver: "GameOver"
}

var currDir;
var snake;
var score;
var highScore;
var applePosition;
var gameState;

// Game State
const showPauseScreen = () => {
    document.getElementById("pause-screen").classList.add("visible");
    document.getElementById("top-pause-button").classList.add("active");
}

const hidePauseScreen = () => {
    document.getElementById("pause-screen").classList.remove("visible");
    document.getElementById("top-pause-button").classList.remove("active");
}

function togglePause() {
    if (gameState == GameStates.Playing) {
        pauseGame();
    } else {
        unPause();
    }
}

function pauseGame() {
    gameState = GameStates.Paused;
    showPauseScreen();
}

function unPause() {
    if (gameState == GameStates.Paused) {
        gameState = GameStates.Playing;
        hidePauseScreen();
    }
}

function startGame() {
    fillBoard(boardColor);
    score = 0;
    updateScore();
    snake = new Snake();
    currDir = Direction.Up;
    spawnApple();
    gameState = GameStates.Playing;
}

function resetGame() {
    gameState = GameStates.GameOver;

    // Doesn't always show up without this
    setTimeout(() => {
        fillBoard(flashColor);
    }, 1);

    setTimeout(() => {
        fillBoard(boardColor)
    }, 200);
    setTimeout(() => {
        fillBoard(flashColor)
    }, 400);
    setTimeout(() => {
        fillBoard(boardColor);
    }, 600);

    // Looks kinda cool idk
    for (i = 0; i < 5; i++) {
        setTimeout(() => {
            startGame();
        }, 800 + i * 100);
    }
}

function runGame() {
    if (gameState == GameStates.Playing) {
        // if (score > easterEggThreshold) {
        //     easterEgg();
        // }
        doGameTick();
        drawGame();
    }
}

// Game logic
function doGameTick() {
    var newHead = snake.getNewHead();

    // Handle Collision
    if (snake.checkCollision(newHead)) {
        resetGame();
        return;
    }

    // Eat apple
    if (newHead.equals(applePosition)) {
        score++;
        updateScore();
        spawnApple();
    } else {
        // Remove tail if no apple
        snake.removeTail();
    }

    // Add new head
    snake.addNewHead(newHead);
}

function spawnApple() {
    do {
        applePosition = new Position(
            Math.floor(Math.random() * gridSize),
            Math.floor(Math.random() * gridSize))
    } while (snake.checkCollision(applePosition));
}

function handleKey(e) {
    switch (e.keyCode) {
        case Keys.H:
            currDir = Direction.Left;
            unPause();
            break;
        case Keys.J:
            currDir = Direction.Down;
            unPause();
            break;
        case Keys.K:
            currDir = Direction.Up;
            unPause();
            break;
        case Keys.L:
            currDir = Direction.Right;
            unPause();
            break;
    }
}

// Drawing 
function fillBoard(color) {
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function drawGame() {
    fillBoard(boardColor);

    snake.draw();
    drawTile(appleColor, applePosition.x, applePosition.y);
}

function drawTile(color, x, y) {
    const tileSize = canvas.width / gridSize;

    ctx.fillStyle = color;
    ctx.strokeStyle = boardColor;
    ctx.fillRect(tileSize * x, tileSize * y, tileSize, tileSize);
    ctx.strokeRect(tileSize * x, tileSize * y, tileSize, tileSize);
}

function updateScore() {
    document.getElementById("score").innerHTML = score;
    if (score > highScore) {
        highScore = score;
        localStorage.setItem("highScore", highScore);
    }
    document.getElementById("high-score").innerHTML = highScore;
}

function easterEgg() {
    const tileSize = canvas.width / gridSize;
    let widthDiff = screen.width - canvas.width;
    let heightDiff = screen.height - canvas.height;
    canvas.width = screen.width;
    canvas.height = screen.height;
    gridSize = canvas.width / tileSize;

    snake.trail = snake.trail.map(pos => new Position(pos.x + widthDiff, pos.y + heightDiff));
    applePosition = new Position(applePosition.x + widthDiff, applePosition.y + heightDiff);
    canvas.style.width = screen.width + "px";
    canvas.style.height = screen.height + "px";
    canvas.style.position = "fixed";
    canvas.style.top = "0px";
    canvas.style.left = "0px";
    boardColor = "rgba(0, 0, 0, 0)";
}

window.onload = function () {
    canvas = document.getElementById("snake-game");
    if (canvas.getContext) {
        ctx = canvas.getContext("2d");

        highScore = localStorage.getItem("highScore");
        if (highScore) {
            highScore = parseInt(highScore);
        } else {
            highScore = 0;
        }
        updateScore();

        document.addEventListener("keydown", handleKey);

        startGame();

        var ticksPerSec = 10;
        this.setInterval(runGame, 1000 / ticksPerSec);
    } else {
        alert("There was an error loading the game.")
        return;
    }
}
