class Timer {
  constructor(timer) {
    this.timer = timer;
    this.gameTime = 0;
    this.interval = null;
    // this.start = this.start.bind(this);
    // this.stop = this.stop.bind(this);
  }

  start() {
    this.interval = setInterval(() => {
      this.gameTime += 0.01;
      this.timer.innerHTML = this.gameTime.toFixed(2);
    }, 10);
  }

  stop() {
    clearInterval(this.interval);
  }
}

const timer = new Timer(document.getElementById("timer"));

/***************************************************************************************** */

const cardsColor = [
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

let cards = document.querySelectorAll(".card");

cards = [...cards];

const gamePairs = cards.length / 2;

let gameResult = 0;

let activeCard = "";

const activeCards = [];

//const startTime = new Date().getTime();

const clickCard = function() {
  activeCard = this;

  if (activeCard == activeCards[0]) return;

  activeCard.classList.remove("hidden");

  if (activeCards.length === 0) {
    activeCards[0] = activeCard;
    return;
  } else {
    cards.forEach(card => card.removeEventListener("click", clickCard));
    activeCards[1] = activeCard;
    setTimeout(() => {
      if (activeCards[0].className === activeCards[1].className) {
        activeCards.forEach(card => card.classList.add("off"));
        gameResult++;
        cards = cards.filter(card => !card.classList.contains("off"));
        if (gameResult == gamePairs) {
          //const endTime = new Date().getTime();
          //const gameTime = (endTime - startTime) / 1000;
          //alert(`Twoj wynik to: ${gameTime} sekund`);
          timer.stop();
        }
      } else {
        activeCards.forEach(card => card.classList.add("hidden"));
      }
      activeCard = "";
      activeCards.length = 0;
      cards.forEach(card => card.addEventListener("click", clickCard));
    }, 500);
  }
};

const init = _ => {
  cards.forEach(card => {
    const position = Math.floor(Math.random() * cardsColor.length);
    card.classList.add(cardsColor[position]);
    cardsColor.splice(position, 1);
  });
  setTimeout(() => {
    cards.forEach(card => {
      card.classList.add("hidden");
      card.addEventListener("click", clickCard);
    });
  }, 1000);
};

document.getElementById("start").addEventListener("click", init);
document.getElementById("start").addEventListener("click", () => {
  timer.start();
});
document.getElementById("pause").addEventListener("click", () => {
  timer.stop();
});
document.getElementById("restart").addEventListener("click", () => {
  location.reload();
});
