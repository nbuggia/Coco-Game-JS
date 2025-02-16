"use strict";
export class Scene {
    constructor() {
        this.sprites = [];
    }
    addSprite(sprite) {
        this.sprites.push(sprite);
    }
    update(deltaTime) {
        this.sprites.forEach((sprite) => sprite.update(deltaTime));
    }
    render(context) {
        this.sprites.forEach((sprite) => sprite.render(context));
    }
}
