"use strict";

import { CocoGame } from "./../../dist/CocoGame.js";

function main() {
  const game = new CocoGame({ width: 200, height: 50, gameDivId: "game-demo", fontFamily: "monospace" });

  function update() {
    game.clear();
    game.resizeGameDiv();
    game.draw();
  }

  function handleMouseClick(event) {
    if (game.isClickInGameDiv(event)) {
      console.log("Yes");
    } else {
      console.log("No");
    }
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    console.log("Mouse click at", x, y);

    const sprite = {
      x: x / 10,
      y: y / 10,
      dx: Math.random() * 2 - 1,
      dy: Math.random() * 2 - 1,
      char: "*",
    };
    game.addSprite(sprite);
  }

  setInterval(update, 100);
  document.addEventListener("click", handleMouseClick);
}

main();
