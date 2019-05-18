let valueInput;

const startInitHard = _ => {
  document.getElementById("userName").style.display = "none";
  cardsColor = levelHardClasses;
  levelHardNodes();
  cards = [...document.querySelectorAll(".cardHard")];
  gamePairs = cards.length / 2;
  levelHard = true;
  init();
  timer.start();
};

const startInitEasy = _ => {
  document.getElementById("userName").style.display = "none";
  cardsColor = levelEasyClasses;
  levelEasyNodes();
  cards = [...document.querySelectorAll(".cardEasy")];
  gamePairs = cards.length / 2;
  levelHard = false;
  init();
  timer.start();
};

document.getElementById("hard").onclick = _ => {
  valueInput = document.getElementById("userNameInput").value;
  if (valueInput) {
    document.getElementById("board").classList.remove("board");
    document.getElementById("board").classList.add("board_hard");
  }
  valueInput ? startInitHard() : alert("Username is required.");
};

document.getElementById("easy").onclick = _ => {
  valueInput = document.getElementById("userNameInput").value;
  valueInput ? startInitEasy() : alert("Username is required.");
};

document.getElementById("pause").onclick = _ => {
  timer.stop();
  cards.forEach(card => card.removeEventListener("click", clickCard));
};

document.getElementById("return").onclick = _ => {
  timer.start();
  cards.forEach(card => card.addEventListener("click", clickCard));
};

document
  .getElementById("restart")
  .addEventListener("click", () => location.reload());
