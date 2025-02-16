"use strict";
export class SceneManager {
    constructor() {
        this.currentScene = null;
    }
    setScene(scene) {
        this.currentScene = scene;
    }
    update(deltaTime) {
        if (!this.currentScene)
            return;
        this.currentScene.update(deltaTime);
    }
    render(context) {
        if (!this.currentScene)
            return;
        this.currentScene.render(context);
    }
}
