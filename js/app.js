const game = new Game();
const btnStart = document.querySelector("#begin-game");

btnStart.addEventListener("click", function () {
  game.startGame();
  this.style.display = "none";
  document.getElementById("play-area").style.opacity = "1";
});
document.addEventListener("keydown", (e) => game.handleKeydown(e));
