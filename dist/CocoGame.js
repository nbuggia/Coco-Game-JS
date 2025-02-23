"use strict";
export class CocoGame {
    constructor(options) {
        this.width = options.width;
        this.height = options.height;
        this.fontFamily = options.fontFamily || "monospace";
        this.fontSize = options.fontSize;
        this.screen = [];
        this.sprites = [];
        // configure gameCanvas
        this.gameCanvas = document.getElementById(options.gameCanvasId);
        if (!this.gameCanvas) {
            throw new Error(`Canvas with id '${options.gameCanvasId}' not found.`);
        }
        this.gameContext = this.gameCanvas.getContext("2d");
        // measure the width and height of a character
        this.gameContext.font = `${this.fontSize}px ${this.fontFamily}`;
        this.charWidth = this.gameContext.measureText("W").width;
        this.charHeight = this.fontSize;
        this.clearScreen();
    }
    clearScreen() {
        this.screen = Array(this.height)
            .fill(null)
            .map(() => Array(this.width).fill("."));
    }
    setPixel(x, y, char) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.screen[y][x] = char;
        }
    }
    draw() {
        this.gameContext.clearRect(0, 0, this.gameCanvas.width, this.gameCanvas.height);
        this.gameContext.font = `${this.fontSize}px ${this.fontFamily}`;
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                this.gameContext.fillText(this.screen[y][x], x * this.charWidth, (y + 1) * this.charHeight);
            }
        }
    }
    getWidth() {
        return this.width;
    }
    getHeight() {
        return this.height;
    }
    clear() {
        this.clearScreen();
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
        console.log("sprites: " + this.sprites.length);
    }
    updateSprites() {
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
    drawSprites() {
        for (const sprite of this.sprites) {
            this.setPixel(Math.round(sprite.x), Math.round(sprite.y), sprite.char);
        }
    }
    resizeGameDiv() {
        const gameWidth = this.width * this.charWidth;
        const gameHeight = this.height * this.charHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        let scale = Math.min(windowWidth / gameWidth, windowHeight / gameHeight);
        this.gameCanvas.style.width = `${gameWidth}px`;
        this.gameCanvas.style.height = `${gameHeight}px`;
        this.gameCanvas.style.transform = `scale(${scale})`;
        this.gameCanvas.style.transformOrigin = "top left";
    }
}
