"use strict";

import { SceneManager } from "./SceneManager.js";

export class CocoGame {
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  sceneManager: SceneManager;
  lastTime: number;
  running: boolean;

  constructor(canvasId: string) {
    const c = document.getElementById(canvasId) as HTMLCanvasElement | null;
    if (!c) {
      throw new Error(`Canvas with id ${canvasId} not found`);
    }
    this.canvas = c;

    const ctx = this.canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Could not get 2d rendering context");
    }
    this.context = ctx;

    // scene manager
    this.sceneManager = new SceneManager();
    this.lastTime = Date.now();
    this.running = false;
  }

  start(): void {
    this.running = true;
    this.loop(0);
  }

  stop(): void {
    this.running = false;
  }

  loop(currentTime: number): void {
    if (!this.running) return;

    const deltaTime = (currentTime - this.lastTime) / 1000;
    this.lastTime = currentTime;

    this.update(deltaTime);
    this.render();

    requestAnimationFrame(this.loop.bind(this));
  }

  update(deltaTime: number): void {
    // scene manager update  // update logic
  }

  render(): void {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    // scene manager render
  }
}
