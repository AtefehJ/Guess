let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (guess == secretNumber) {
    document.querySelector(".number").textContent = secretNumber;
    // document.querySelector(".message").textContent =
    //   "🎉 Congratulations.You Won!";
    displayMessage("🎉 Congratulations.You Won!");
    document.querySelector(".number").style.width = "15rem";
    document.querySelector("body").style.color = "#222";
    document.querySelector("body").style.backgroundImage =
      "linear-gradient(to right, #006400, #60b347)";

    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  } else if (!guess) {
    // document.querySelector(".message").textContent = "Please enter a numebr!";
    document.querySelector(".message").style.color = "#FF6347";
    displayMessage("Please enter a numebr!");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector(".message").textContent =
      //     guess > secretNumber ? "📈 It's too high" : "📉 It's too low";
      displayMessage(
        guess > secretNumber ? "📈 It's too high" : "📉 It's too low"
      );
      score--;
      document.querySelector(".score").textContent = score;
      document.querySelector(".score").style.color = "#FF6347";
    } else {
      //document.querySelector(".message").textContent = "💥 You lost the game!";
      displayMessage("💥 You lost the game!");
      document.querySelector(".message").style.color = "#FF6347";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector("body").style.backgroundImage =
    "linear-gradient(to right, #222, #1b657e)";
  displayMessage("Start guessing...");
  document.querySelector(".number").style.width = "10rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.color = "#eee";
  document.querySelector(".score").textContent = score;
  document.querySelector(".score").style.color = "#eee";
  document.querySelector(".guess").value = "";
});
