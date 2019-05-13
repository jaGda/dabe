let valueInput;

const startInitHard = _ => {
  document.getElementById("userName").style.display = "none";
  cardsColor = hardLevelClasses;
  hardLevelNodes();
  cards = [...document.querySelectorAll(".cardHard")];
  gamePairs = cards.length / 2;
  levelHard = true;
  init();
  timer.start();
};

document.getElementById("hard").onclick = _ => {
  document.getElementById("board").classList.remove("board");
  document.getElementById("board").classList.add("board_hard");
  valueInput = document.getElementById("userNameInput").value;
  valueInput ? startInitHard() : alert("Username is required.");
};

const startInitEasy = _ => {
  document.getElementById("userName").style.display = "none";
  cardsColor = easyLevelClasses;
  easyLevelNodes();
  cards = [...document.querySelectorAll(".cardEasy")];
  gamePairs = cards.length / 2;
  levelHard = false;
  init();
  timer.start();
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
