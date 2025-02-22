"use strict";
export class CocoGame {
    constructor(options) {
        this.width = options.width;
        this.height = options.height;
        this.screen = [];
        this.clearScreen();
    }
    clearScreen() {
        this.screen = Array(this.height)
            .fill(null)
            .map(() => Array(this.width).fill(" "));
    }
    setPixel(x, y, char) {
        if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
            this.screen[y][x] = char;
        }
    }
    draw() {
        let output = "";
        for (const row of this.screen) {
            output += row.join("") + "\n";
        }
        console.clear(); // Clear the console for a smoother animation
        console.log(output);
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
}
