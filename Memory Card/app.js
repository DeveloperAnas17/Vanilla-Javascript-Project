// Grab a couple of things

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

// Link text
playerLivesCount.textContent = playerLives;

// Generate the data

const getData = () => [
  { imgSrc: "./images/hulk.jpg", name: "Hulk" },
  { imgSrc: "./images/thor.jpg", name: "Thor" },
  { imgSrc: "./images/iron-man.jpg", name: "Iron Man" },
  { imgSrc: "./images/captain-america.jpg", name: "Captain America" },
  { imgSrc: "./images/spiderman.jpg", name: "SpiderMan" },
  { imgSrc: "./images/drstrange.jpg", name: "Dr Strange" },
  { imgSrc: "./images/loki.jpg", name: "Loki" },
  { imgSrc: "./images/thanos.jpg", name: "Thanos" },
  { imgSrc: "./images/hulk.jpg", name: "Hulk" },
  { imgSrc: "./images/thor.jpg", name: "Thor" },
  { imgSrc: "./images/iron-man.jpg", name: "Iron Man" },
  { imgSrc: "./images/captain-america.jpg", name: "Captain America" },
  { imgSrc: "./images/spiderman.jpg", name: "SpiderMan" },
  { imgSrc: "./images/drstrange.jpg", name: "Dr Strange" },
  { imgSrc: "./images/loki.jpg", name: "Loki" },
  { imgSrc: "./images/thanos.jpg", name: "Thanos" },
];

// Randomize
const randomize = () => {
  const cardData = getData();
  cardData.sort(() => Math.random() - 0.5);
  return cardData;
};

// Card Generator function
const cardGenerator = () => {
  const cardData = randomize();
  // Genrate the HTML

  cardData.forEach((item, index) => {
    const card = document.createElement("div");
    const face = document.createElement("img");
    const back = document.createElement("div");
    card.classList = "card";
    face.classList = "face";
    back.classList = "back";
    // Attach the info to the cards
    face.src = item.imgSrc;
    card.setAttribute("name", item.name);
    // Attack the cards to the sections
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

    card.addEventListener("click", (e) => {
      card.classList.toggle("toggleCard");
      checkCards(e);
    });
  });
};

// Check Cards
const checkCards = (e) => {
  const clickCard = e.target;
  clickCard.classList.add("flipped");
  const flippedCards = document.querySelectorAll(".flipped");
  const toggleCard = document.querySelectorAll(".toggleCard");
  // Logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("Match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        card.style.pointerEvents = "none";
      });
      playerLives++;
      playerLivesCount.textContent = playerLives;
    } else {
      console.log("Dont Match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
      playerLives--;
      playerLivesCount.textContent = playerLives;

      if (playerLives === 0) {
        restart("Try Again");
      }
    }
  }
  // Run a check if we won the game
  if (toggleCard.length === 16) {
    restart("You Won");
  }
};

// Restart
const restart = (text) => {
  let cardData = randomize();
  let faces = document.querySelectorAll(".face");
  let cards = document.querySelectorAll(".card");
  section.style.pointerEvents = "none";
  cardData.forEach((item, index) => {
    cards[index].classList.remove("toggleCard");
    // Randomize
    setTimeout(() => {
      cards[index].style.pointerEvents = "all";
      faces[index].src = item.imgSrc;
      cards[index].setAttribute("name", item.name);
      section.style.pointerEvents = "all";
    }, 1000);
  });
  playerLives = 6;
  playerLivesCount.textContent = playerLives;

  setTimeout(() => window.alert(text), 1000);
};

cardGenerator();
