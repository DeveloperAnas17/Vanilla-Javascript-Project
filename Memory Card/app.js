// Grab a couple of things

const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 0;

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
  // Logic
  if (flippedCards.length === 2) {
    if (
      flippedCards[0].getAttribute("name") ===
      flippedCards[1].getAttribute("name")
    ) {
      console.log("Match");
    } else {
      console.log("Dont Match");
      flippedCards.forEach((card) => {
        card.classList.remove("flipped");
        setTimeout(() => card.classList.remove("toggleCard"), 1000);
      });
    }
  }
};

cardGenerator();
