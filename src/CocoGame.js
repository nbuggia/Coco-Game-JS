"use strict";

import { Level } from "./Level.js";
import { Settings } from "./Settings.js";

class CocoGame {
  constructor() {
    this.level = new Level();
    this.prev_time = Date.now();

    this.run();
  }

  run = () => {
    let new_time = Date.now();
    Settings.dt = (new_time - this.prev_time) / 1000;
    this.prev_time = new_time;

    this.level.run();

    requestAnimationFrame(this.run);
  };
}

window.addEventListener("DOMContentLoaded", () => {
  new CocoGame();
});
