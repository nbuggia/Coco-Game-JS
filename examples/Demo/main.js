"use strict";

import { CocoGame } from "./../../dist/CocoGame.js";

function main() {
  const game = new CocoGame({
    width: 200,
    height: 50,
    gameDivId: "game-demo-canvas",
    fontFamily: "monospace",
    fontSize: 16,
  });

  const canvas = document.getElementById("game-canvas");

  function update() {
    game.clear();
    game.updateSprites();
    game.drawSprites();
    //    game.resizeGameDiv();
    game.draw();
  }

  function handleMouseClick(event) {
    const rect = canvas.getBoundingClientRect();

    if (
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom
    ) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const sprite = {
        x: x / game.charWidth,
        y: y / game.charHeight,
        dx: Math.random() * 2 - 1,
        dy: Math.random() * 2 - 1,
        char: "*",
      };
      game.addSprite(sprite);
    }
  }

  setInterval(update, 100);
  document.addEventListener("click", handleMouseClick);

  function resizeCanvas() {
    const gameWidth = game.getWidth() * game.charWidth;
    const gameHeight = game.getHeight() * game.charHeight;

    canvas.width = gameWidth;
    canvas.height = gameHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

main();
