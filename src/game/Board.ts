import { Position } from '../models/Position';
import { CONFIG } from './Config';
import { Renderer } from './Renderer';

export class Board {
  private grid: number[][];
  private renderer: Renderer;

  constructor() {
    this.grid = Array(CONFIG.BOARD_HEIGHT)
      .fill(0)
      .map(() => Array(CONFIG.BOARD_WIDTH).fill(CONFIG.CELL_EMPTY));
    this.renderer = new Renderer(CONFIG.BOARD_WIDTH, CONFIG.BOARD_HEIGHT);
  }

  setCell(position: Position, value: number): void {
    this.grid[position.y][position.x] = value;
  }

  getCell(position: Position): number {
    return this.grid[position.y][position.x];
  }

  clear(): void {
    this.grid = this.grid.map(row => row.map(() => CONFIG.CELL_EMPTY));
    this.renderer.clear();
  }

  render(): void {
    this.renderer.clear();
    for(let y = 0; y < CONFIG.BOARD_HEIGHT; y++) {
      for(let x = 0; x < CONFIG.BOARD_WIDTH; x++) {
        if(this.grid[y][x] !== CONFIG.CELL_EMPTY) {
          this.renderer.drawCell(x, y, this.grid[y][x]);
        }
      }
    }
  }
}