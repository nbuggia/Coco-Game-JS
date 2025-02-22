"use strict";

interface GameOptions {
  width: number;
  height: number;
  gameDivId: string;
  fontFamily: string;
}

interface Sprite {
  x: number;
  y: number;
  dx: number;
  dy: number;
  char: string;
}

export class CocoGame {
  private width: number;
  private height: number;
  private screen: string[][];
  private sprites: Sprite[] = [];
  private gameDiv: HTMLElement;
  private fontCanvas: HTMLCanvasElement; // for measuring text width
  private fontContext: CanvasRenderingContext2D; // for measuring text width
  private fontFamily: string;

  constructor(options: GameOptions) {
    this.width = options.width;
    this.height = options.height;
    this.fontFamily = options.fontFamily || "monospace";
    this.screen = [];
    this.sprites = [];

    // configure gameDiv
    const gameDiv = document.getElementById(options.gameDivId);
    if (!gameDiv) {
      throw new Error(`Game div with id ${options.gameDivId} not found.`);
    }
    this.gameDiv = gameDiv;
    this.gameDiv.style.fontFamily = this.fontFamily;

    // create reusable canvas and context for measuring text width on resize
    const canvas = document.createElement("canvas");
    this.fontCanvas = canvas;
    const context = canvas.getContext("2d");
    if (!context) {
      throw new Error("Could not get 2d context.");
    }
    this.fontContext = context;

    this.clearScreen();
  }

  private clearScreen(): void {
    this.screen = Array(this.height)
      .fill(null)
      .map(() => Array(this.width).fill("W"));
  }

  public resizeGameDiv() {
    const charWidth = this.getCharWidth();
    const charHeight = this.getCharHeight();
    const gameWidth = this.width * charWidth;
    const gameHeight = this.height * charHeight;

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    let scale = Math.min(windowWidth / gameWidth, windowHeight / gameHeight);

    this.gameDiv.style.width = `${gameWidth}px`;
    this.gameDiv.style.height = `${gameHeight}px`;
    this.gameDiv.style.transform = `scale(${scale})`;
    this.gameDiv.style.transformOrigin = "top left";
  }

  private getCharWidth(): number {
    // re-use canvas object for better performance
    this.fontContext.font = this.fontFamily;
    const metrics = this.fontContext.measureText("W");
    return metrics.width;
  }

  private getCharHeight(): number {
    const test = document.createElement("div");
    test.style.fontFamily = "monospace";
    test.style.fontSize = "1em";
    test.textContent = "W";
    document.body.appendChild(test);
    const height = test.offsetHeight;
    document.body.removeChild(test);
    return height;
  }

  public isClickInGameDiv(event: MouseEvent): boolean {
    const rect = this.gameDiv.getBoundingClientRect();
    return (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    );
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
    this.gameDiv.textContent = output;
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

  public addSprite(sprite: Sprite): void {
    this.sprites.push(sprite);
    console.log("sprites: " + this.sprites.length);
  }

  public updateSprites(): void {
    for (const sprite of this.sprites) {
      sprite.x += sprite.dx;
      sprite.y += sprite.dy;

      if (sprite.x < 0 || sprite.x >= this.width) {
        sprite.dx *= -1;
      }
      if (sprite.y < 0 || sprite.y >= this.height) {
        sprite.dy *= -1;
      }
    }
  }

  public drawSprites(): void {
    for (const sprite of this.sprites) {
      this.setPixel(Math.round(sprite.x), Math.round(sprite.y), sprite.char);
    }
  }
}
