import { Direction } from "../models/Direction";

export class Random {
    static getRandomPosition(maxX: number, maxY: number): { x: number; y: number } {
      return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY)
      };
    }

    static getRandomDirection(): Direction {
      return Math.floor(Math.random() * 4) as Direction;
  }
  }