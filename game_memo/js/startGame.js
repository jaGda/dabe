let valueInput;

const initHard = () => {
  cardsNodeHard();
  const cards = [...document.querySelectorAll(".cardHard")];
  const gamePairs = cards.length / 2;
  document.getElementById("userName").style.display = "none";
  init(cards, cardsColorHard);
  timer.start();
};

const initEasy = () => {
  cardsNodeEasy();
  const cards = [...document.querySelectorAll(".cardEasy")];
  const gamePairs = cards.length / 2;
  document.getElementById("userName").style.display = "none";
  init(cards, cardsColorEasy);
  timer.start();
};

document.getElementById("easy").onclick = _ => {
  valueInput = document.getElementById("userNameInput").value;
  valueInput ? initEasy() : alert("Username is required.");
};

document.getElementById("hard").onclick = _ => {
  valueInput = document.getElementById("userNameInput").value;
  valueInput ? initHard() : alert("Username is required.");
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
