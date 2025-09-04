let p1 = document.getElementById("player1");
let p2 = document.getElementById("player2");
let win = document.getElementById("win");
let lose = document.getElementById("lose");
let draw = document.getElementById("draw");

function play(choice) {
  let cpu = ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
  console.log("Player:", choice, "| CPU:", cpu);

  win.classList.add("hidden");
  lose.classList.add("hidden");
  draw.classList.add("hidden");

  p1.classList.remove("rock", "paper", "scissors", "shake");
  p2.classList.remove("rock", "paper", "scissors", "shake");
  p1.classList.add("rock", "shake");
  p2.classList.add("rock", "shake");

  setTimeout(function () {
    p1.className = "player " + choice;
    p2.className = "player " + cpu;

    if (choice === cpu) {
      console.log("Result: draw");
      draw.classList.remove("hidden");
    } else if ((choice === "rock" && cpu === "scissors") || (choice === "paper" && cpu === "rock") || (choice === "scissors" && cpu === "paper")) {
      console.log("Result: player wins");
      win.classList.remove("hidden");
    } else {
      console.log("Result: cpu wins");
      lose.classList.remove("hidden");
    }
  }, 1800);
}

document.querySelector(".rock").onclick = function () {
  play("rock");
};
document.querySelector(".paper").onclick = function () {
  play("paper");
};
document.querySelector(".scissors").onclick = function () {
  play("scissors");
};
