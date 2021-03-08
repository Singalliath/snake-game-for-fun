import { update as updateSnake, draw as drawSnake, SNAKE_SPEED,getSnakeHead,snakeIntersection}
from './mods/snake.js'
import { update as updateFood, draw as drawFood}
from './mods/food.js'
import { outsideGrid}
from './mods/grid.js'

let LastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')


function main(currentTime) {
    if (gameOver) {
        if (confirm('Your Failure is now Complete. You may try again by pressing OK')) {
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - LastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


    
    LastRenderTime = currentTime

    update()
    draw()
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
    updateFood()
    checkDeath()

}
function draw() {
    gameBoard.innerHTML = ''
    drawSnake(gameBoard)
    drawFood(gameBoard)

}
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}