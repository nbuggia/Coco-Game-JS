"use strict";

export class Level {
  constructor() {
    this.setup();
  }

  setup = async () => {
    this.canvas = document.querySelector("canvas");
  };

  run() {
    console.log("running");
  }

  setScreenSize() {
    let w = window.innerWidth;
    let h = window.innerHeight;
    this.canvas.width = w;
    this.canvas.height = h;
  }
}
