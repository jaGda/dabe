let gameResult = 0;
let activeCard = "";
const activeCards = [];

const clickCard = function(cards) {
  activeCard = this;
  if (activeCard === activeCards[0]) return;
  activeCard.classList.remove("hidden");
  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  } else {
    activeCards[1] = activeCard;
    cards.forEach(card => card.removeEventListener("click", clickCard));
    setTimeout(() => {
      if (activeCards[0].className === activeCards[1].className) {
        activeCards.forEach(card => card.classList.add("off"));
        gameResult++;
        cards = cards.filter(card => !card.classList.contains("off"));
        if (gameResult === gamePairs) {
          timer.stop();
          displayResults(results);
          document.getElementById("results").style.display = "flex";
        }
      } else {
        activeCards.forEach(card => card.classList.add("hidden"));
      }
      activeCard = "";
      activeCards.length = 0;
      cards.forEach(card => card.addEventListener("click", cards => clickCard(cards)));
    }, 500);
  }
};

const init = (cards, cardsColor) => {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position, 1);
  });
  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("hidden");
      card.addEventListener("click", cards => clickCard(cards));
    });
  }, 1000);
};
