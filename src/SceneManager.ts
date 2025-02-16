"use strict";

import { Scene } from "./Scene.js";

export class SceneManager {
  currentScene: Scene | null;

  constructor() {
    this.currentScene = null;
  }

  setScene(scene: Scene): void {
    this.currentScene = scene;
  }

  update(deltaTime: number): void {
    if (!this.currentScene) return;

    this.currentScene.update(deltaTime);
  }

  render(context: CanvasRenderingContext2D): void {
    if (!this.currentScene) return;

    this.currentScene.render(context);
  }
}
