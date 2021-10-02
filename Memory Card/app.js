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
  //   { imgSrc: "./images/black-widow.jpg", name: "Black Widow" },
  { imgSrc: "./images/loki.jpg", name: "Loki" },
  { imgSrc: "./images/thanos.jpg", name: "Thanos" },
  { imgSrc: "./images/hulk.jpg", name: "Hulk" },
  { imgSrc: "./images/thor.jpg", name: "Thor" },
  { imgSrc: "./images/iron-man.jpg", name: "Iron Man" },
  { imgSrc: "./images/captain-america.jpg", name: "Captain America" },
  { imgSrc: "./images/spiderman.jpg", name: "SpiderMan" },
  { imgSrc: "./images/drstrange.jpg", name: "Dr Strange" },
  //   { imgSrc: "./images/black-widow.jpg", name: "Black Widow" },
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
  const card = document.createElement("div");
};

cardGenerator();
