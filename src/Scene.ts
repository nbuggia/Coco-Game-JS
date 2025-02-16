"use strict";

import { Sprite } from "./Sprite.js";

export class Scene {
  sprites: Sprite[];

  constructor() {
    this.sprites = [];
  }

  addSprite(sprite: Sprite) {
    this.sprites.push(sprite);
  }

  update(deltaTime: number) {
    this.sprites.forEach((sprite) => sprite.update(deltaTime));
  }

  render(context: CanvasRenderingContext2D) {
    this.sprites.forEach((sprite) => sprite.render(context));
  }
}
