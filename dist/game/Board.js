"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
const Config_1 = require("./Config");
class Board {
    constructor() {
        this.grid = Array(Config_1.CONFIG.BOARD_HEIGHT)
            .fill(0)
            .map(() => Array(Config_1.CONFIG.BOARD_WIDTH).fill(Config_1.CONFIG.CELL_EMPTY));
    }
    setCell(position, value) {
        this.grid[position.y][position.x] = value;
    }
    getCell(position) {
        return this.grid[position.y][position.x];
    }
    clear() {
        this.grid = this.grid.map(row => row.map(() => Config_1.CONFIG.CELL_EMPTY));
    }
    render() {
        console.clear();
        this.grid.forEach(row => {
            console.log(row.join(' '));
        });
    }
}
exports.Board = Board;
