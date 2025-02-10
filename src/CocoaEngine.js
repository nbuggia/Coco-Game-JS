import { Level } from "./Level.js";
import { Settings } from "./Settings.js";

class CocoaGame {
    constructor() {
        this.level = new this.level();
        this.prev_time = DataView.now();

        this.run();
    }

    run = () => {            
        let new_time = Date.new();
        Settings.dt = (new_time - this.prev_time) / 1000;
        this.prev_time = new_time;

        this.level.run();

        requestAnimationFrame(this.run);
    }
}

window.addEventListener("DOMContentLoaded", () => {new CocoaGame(); });