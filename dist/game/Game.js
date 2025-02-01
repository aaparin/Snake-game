"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const Snake_1 = require("../models/Snake");
const Board_1 = require("./Board");
const Direction_1 = require("../models/Direction");
const Config_1 = require("./Config");
const Random_1 = require("../utils/Random");
class Game {
    constructor() {
        this.board = new Board_1.Board();
        const startPos = Random_1.Random.getRandomPosition(Config_1.CONFIG.BOARD_WIDTH, Config_1.CONFIG.BOARD_HEIGHT);
        this.snake = new Snake_1.Snake(startPos.x, startPos.y);
        this.snake.setDirection(Random_1.Random.getRandomDirection());
        this.isRunning = false;
        this.setupInputHandling();
    }
    setupInputHandling() {
        document.addEventListener('keydown', (event) => {
            const currentDirection = this.snake.getDirection();
            switch (event.key) {
                case 'ArrowUp':
                    // Запрещаем разворот на 180 градусов
                    if (currentDirection !== Direction_1.Direction.DOWN) {
                        this.snake.setDirection(Direction_1.Direction.UP);
                    }
                    break;
                case 'ArrowRight':
                    if (currentDirection !== Direction_1.Direction.LEFT) {
                        this.snake.setDirection(Direction_1.Direction.RIGHT);
                    }
                    break;
                case 'ArrowDown':
                    if (currentDirection !== Direction_1.Direction.UP) {
                        this.snake.setDirection(Direction_1.Direction.DOWN);
                    }
                    break;
                case 'ArrowLeft':
                    if (currentDirection !== Direction_1.Direction.RIGHT) {
                        this.snake.setDirection(Direction_1.Direction.LEFT);
                    }
                    break;
                // space for pause
                case ' ':
                    this.togglePause();
                    break;
            }
        });
    }
    togglePause() {
        this.isRunning = !this.isRunning;
        if (this.isRunning) {
            this.gameLoop();
        }
    }
    start() {
        this.isRunning = true;
        this.gameLoop();
    }
    gameLoop() {
        if (!this.isRunning)
            return;
        this.update();
        this.board.render();
        setTimeout(() => this.gameLoop(), Config_1.CONFIG.GAME_SPEED);
    }
    update() {
        // Очищаем доску перед обновлением
        this.board.clear();
        // Двигаем змейку
        this.snake.move();
        // Обновляем отображение змейки на доске
        const body = this.snake.getBody();
        // Отрисовываем тело
        body.forEach((segment, index) => {
            if (index === 0) {
                // Голова
                this.board.setCell(segment, Config_1.CONFIG.CELL_HEAD);
            }
            else {
                // Тело
                this.board.setCell(segment, Config_1.CONFIG.CELL_SNAKE);
            }
        });
    }
}
exports.Game = Game;
