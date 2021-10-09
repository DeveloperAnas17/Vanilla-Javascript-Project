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

      //   Normal Click
      square.addEventListener("click", (e) => {
        click(square);
      });
    }

    // add numbers
    for (let i = 0; i < squares.length; i++) {
      let total = 0;
      const isLeftEdge = i % width === 0;
      const isRightEdge = i % width === width - 1;

      if (squares[i].classList.contains("valid")) {
        if (i > 0 && !isLeftEdge && squares[i - 1].classList.contains("bomb"))
          total++;
        if (
          i > 9 &&
          !isRightEdge &&
          squares[i + 1 - width].classList.contains("bomb")
        )
          total++;
        if (i > 10 && squares[i - width].classList.contains("bomb")) total++;
        if (
          i > 11 &&
          !isLeftEdge &&
          squares[i - 1 - width].classList.contains("bomb")
        )
          total++;
        if (i < 98 && !isRightEdge && squares[i + 1].classList.contains("bomb"))
          total++;
        if (
          i < 90 &&
          !isLeftEdge &&
          squares[i - 1 + width].classList.contains("bomb")
        )
          total++;
        if (
          i < 88 &&
          !isRightEdge &&
          squares[i + 1 + width].classList.contains("bomb")
        )
          total++;
        if (i < 89 && squares[i + width].classList.contains("bomb")) total++;
        console.log(squares[i]);
      }
    }
  }

  createBoard();

  //   Click on square actions
  function click(square) {
    if (square.classList.contains("bomb")) {
      console.log("Game Over");
    } else {
      let total = square.getAttribute("data");
      if (total != 0) {
        square.classList.add("checked");
        square.innerHTML = total;
        return;
      }
    }
  }
});
