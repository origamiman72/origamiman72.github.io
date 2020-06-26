/** Resources used:
 * https://medium.com/@anMagpie/simple-snake-game-in-html-and-javascript-ed78cffac36
 */

var canvas, ctx;

window.onload = function() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");

    document.addEventListener("keydown", keyDownEvent);

    var x = 10;
    this.setInterval(draw, 1000 / x);
}

var paused = false;

var LEFT_ARROW = 37;
var RIGHT_ARROW = 39;

var UP_ARROW = 38;
var DOWN_ARROW = 40;

var A = 65;
var D = 68;

var W = 87;
var S = 83;

var H = 72;
var L = 76;

var J = 74;
var K = 75;

var initialLength = 3;
var length = initialLength;
var snakeTrail = [];
var snakeX = snakeY = 10;

var gridSize = tileSize = 20;
var moveX = moveY = 0;

var goalX = (goalY = 15);

var background = "rgb(31, 32, 65)";
var snakeColor = "white";
var goalColor = "rgb(244, 157, 55)";
var started = false;

var darkened = false;

function pause() {
    paused = !paused;
    started = true;
    // $("#start").replaceWith("<i class=\"fas fa-pause\"></i>");
}

function moveLeft() {
    moveX = -1;
    moveY = 0;
    started = true;
    paused = false;
}
function moveRight() {
    moveX = 1;
    moveY = 0;
    started = true;
    paused = false;
}
function moveUp() {
    moveX = 0;
    moveY = -1;
    started = true;
    paused = false;
}

function moveDown() {
    moveX = 0;
    moveY = 1;
    started = true;
    paused = false;
}

function keyDownEvent(e) {
    switch(e.keyCode) {
        case LEFT_ARROW:
        case A:
        case H:
            moveLeft();
            break;
        case RIGHT_ARROW:
        case D:
        case L:
            moveRight();
            break;
        case UP_ARROW:
        case W:
        case K:
            moveUp();
            break;
        case DOWN_ARROW:
        case S:
        case J:
            moveDown();
            break;
    }
}

function draw() {

    if (!paused) {
        $(".pause").removeClass("active");
        darkened = false;

        snakeX += moveX;
        snakeY += moveY;

        if (snakeX < 0) {
            snakeX = gridSize - 1;
        } else if (snakeX > gridSize - 1) {
            snakeX = 0;
        }
        if (snakeY < 0) {
            snakeY = gridSize - 1;
        } else if (snakeY > gridSize - 1) {
            snakeY = 0;
        }

        if (snakeX == goalX && snakeY == goalY) {
            length++;
            goalX = Math.floor(Math.random() * gridSize);
            goalY = Math.floor(Math.random() * gridSize);
        }

        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = "white";

        ctx.fillStyle = snakeColor;
        ctx.strokeStyle = background;
        for (var i = 0; i < snakeTrail.length; i ++) {
            ctx.fillRect(
                snakeTrail[i].x * tileSize,
                snakeTrail[i].y * tileSize,
                tileSize,
                tileSize
            );
            ctx.strokeRect(
                snakeTrail[i].x * tileSize,
                snakeTrail[i].y * tileSize,
                tileSize,
                tileSize
            );
            if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
                length = initialLength;
                paused = true;
                if (started) {
                    reset();
                }
            }
        }

        ctx.fillStyle = goalColor;
        ctx.fillRect(goalX * tileSize, goalY * tileSize, tileSize, tileSize);
        ctx.strokeStyle = background;
        ctx.strokeRect(goalX * tileSize, goalY * tileSize, tileSize, tileSize);

        snakeTrail.push({ x: snakeX, y: snakeY });

        while (snakeTrail.length > length) {
            snakeTrail.shift();
        }
        updateScore();
    } else {
        $(".pause").addClass("active");
    }
}

function updateScore() {
    $("#score").text(length - initialLength);
}

function reset() {
    setTimeout(() => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, 1);
    setTimeout(() => {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, 200);
    setTimeout(() => {
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, 400);
    setTimeout(() => {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }, 600);
    // setTimeout(() => {
    //     ctx.fillStyle = "white";
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    // }, 800);
    setTimeout(() => {
        paused = false;
    }, 800);
    // for (var i = 0; i < snakeTrail.length; i ++) {
    //     ctx.fillRect(
    //         snakeTrail[i].x * tileSize,
    //         snakeTrail[i].y * tileSize,
    //         tileSize,
    //         tileSize
    //     );
    //     ctx.strokeRect(
    //         snakeTrail[i].x * tileSize,
    //         snakeTrail[i].y * tileSize,
    //         tileSize,
    //         tileSize
    //     );
    //     if (snakeTrail[i].x == snakeX && snakeTrail[i].y == snakeY) {
    //         length = initialLength;
    //     }
    // }
}