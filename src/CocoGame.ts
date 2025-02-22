"use strict";

interface GameOptions {
  width: number;
  height: number;
}

class AsciiGame {
  private width: number;
  private height: number;
  private screen: string[][];

  constructor(options: GameOptions) {
    this.width = options.width;
    this.height = options.height;
    this.screen = [];
    this.clearScreen();
  }

  private clearScreen(): void {
    this.screen = Array(this.height)
      .fill(null)
      .map(() => Array(this.width).fill(" "));
  }

  public setPixel(x: number, y: number, char: string): void {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      this.screen[y][x] = char;
    }
  }

  public draw(): void {
    let output = "";
    for (const row of this.screen) {
      output += row.join("") + "\n";
    }
    console.clear(); // Clear the console for a smoother animation
    console.log(output);
  }

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public clear(): void {
    this.clearScreen();
  }
}
