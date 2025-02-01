"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Random = void 0;
class Random {
    static getRandomPosition(maxX, maxY) {
        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY)
        };
    }
    static getRandomDirection() {
        return Math.floor(Math.random() * 4);
    }
}
exports.Random = Random;
