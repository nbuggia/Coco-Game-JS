"use strict";

import { CocoGame } from "./../../dist/CocoGame.js";

function main() {
  const game = new AsciiGame({ width: 20, height: 10 });

  let playerX = 5;
  let playerY = 5;

  function update() {
    game.clear();
    game.setPixel(playerX, playerY, "P");
    game.draw();
  }

  function handleInput(event) {
    if (event.key === "ArrowLeft") {
      playerX = Math.max(0, playerX - 1);
    } else if (event.key === "ArrowRight") {
      playerX = Math.min(game.getWidth() - 1, playerX + 1);
    } else if (event.key === "ArrowUp") {
      playerY = Math.max(0, playerY - 1);
    } else if (event.key === "ArrowDown") {
      playerY = Math.min(game.getHeight() - 1, playerY + 1);
    }
  }

  setInterval(update, 100);
  document.addEventListener("keydown", handleInput);
}

main();
