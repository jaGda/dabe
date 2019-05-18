const levelHardClasses = [
  "red",
  "red",
  "orange",
  "orange",
  "blue",
  "blue",
  "yellow",
  "yellow",
  "lightgreen",
  "lightgreen",
  "brown",
  "brown",
  "purple",
  "purple",
  "cadetblue",
  "cadetblue",
  "violet",
  "violet",
  "grey",
  "grey",
  "sandybrown",
  "sandybrown",
  "darkkhaki",
  "darkkhaki"
];

const levelHardNodes = _ => {
  levelHardClasses.forEach(levelHardClass => {
    const board = document.querySelector("#board");
    const card = document.createElement("div");
    card.classList.add("cardHard");
    board.appendChild(card);
  });
};
