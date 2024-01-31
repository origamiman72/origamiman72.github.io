---
layout: default
title: Abhik Ahuja - Snake
---


# Snake

<div class="description-text" markdown="1">
A simple snake game using vim controls.     
Use **HJKL** to move.     

Make sure plugins such as [Vimium](https://addons.mozilla.org/en-US/firefox/addon/vimium-ff/) are disabled before playing. Not mobile compatible unless you have a hardware keyboard, for some reason.     
[Code](https://github.com/origamiman72/origamiman72.github.io/blob/master/assets/js/snake.js)
</div>

<link href="/assets/css/snake.css" rel="stylesheet" />
<div class="game-top-bar">
    <div class="scores">
        <h2>Score: <span id="score">0</span></h2>
        <h2>High Score: <span id="high-score">0</span></h2>
    </div>
    <div>
        <a onclick="togglePause()" id="top-pause-button">
            <i class="fas fa-pause"></i>
        </a>
    </div>
</div>
<div class="game">
    <canvas id="snake-game" width=360 height=360>
    </canvas>
    <div class="overlay-screen active" id="pause-screen" onclick="togglePause()">
        <a>
            <!-- <div class="overlay-text">Paused</div> -->
            <i id="start" class="fas fa-play"></i>
        </a>
    </div>
    <!-- <div class="overlay-screen more-opacity" id="gameover-screen" onclick="startGame()">
        <a>
            <div class="overlay-text large-text">Game Over</div>
            <i id="start" class="fas fa-play"></i>
        </a>
    </div>
    <div class="overlay-screen full-opacity active visible" id="start-screen" onclick="startGame()">
        <a>
            <div class="overlay-text large-text">Start Game</div>
            <i id="start" class="fas fa-play"></i>
        </a>
    </div> -->
</div>
<script src="/assets/js/snake.js" />