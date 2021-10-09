document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector(".grid");
  let width = 10;
  let bombAmount = 20;
  let squares = [];

  // Create Board
  function createBoard() {
    // Get shuffled game array with random bombs
    const bombArray = Array(bombAmount).fill("bomb");
    const emptyArray = Array(width * width - bombAmount).fill("valid");
    const gameArray = emptyArray.concat(bombArray);
    const shuffleArray = gameArray.sort(() => Math.random() - 0.5);
    console.log(shuffleArray);

    for (let i = 0; i < width * width; i++) {
      const square = document.createElement("div");
      square.setAttribute("id", i);
      square.classList.add(shuffleArray[i]);
      grid.appendChild(square);
      squares.push(square);
    }
  }

  createBoard();
});
