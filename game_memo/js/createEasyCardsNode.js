const cardsColorEasy = [
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
  "cadetblue"
];

const cardsNodeEasy = _ => {
  cardsColorEasy.forEach(color => {
    const parent = document.querySelector(".board");
    const card = document.createElement("div");
    card.classList.add("cardEasy");
    parent.appendChild(card);
  });
};
