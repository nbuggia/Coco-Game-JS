"use strict";
export class Sprite {
    constructor(x, y, width, height, imagePath) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.texture = new Image();
        this.texture.src = imagePath;
    }
    update(deltaTime) {
        // Update logic for the sprite
    }
    render(context) {
        if (this.texture.complete) {
            // image has fully loaded
            console.log("Image loaded");
            context.drawImage(this.texture, this.x, this.y, this.width, this.height);
        }
        else {
            // image not loaded, draw a placeholder
            console.log("Image not loaded");
            context.fillStyle = "grey";
            context.fillRect(this.x, this.y, this.width, this.height);
            this.texture.onload = () => {
                context.drawImage(this.texture, this.x, this.y, this.width, this.height);
            };
        }
    }
}
