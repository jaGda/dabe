const cardsColorHard = [
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

const cardsNodeHard = _ => {
  cardsColorHard.forEach(color => {
    const parent = document.querySelector(".board");
    const card = document.createElement("div");
    card.classList.add("cardHard");
    parent.appendChild(card);
  });
};
