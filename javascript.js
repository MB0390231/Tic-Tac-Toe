const gameboard = (() => {
  const init = (board) => {
    renderBoard(board);
  };
  const createBoard = (n) => {
    const board = [];
    for (let i = 0; i < n; i++) {
      board.push([]);
      for (let j = 0; j < n; j++) {
        board[i].push("");
      }
    }
    return board;
  };

  const play = (board, row, column, letter) => {
    //check positions availability
    if (board[row][column] === "") {
      board[row][column] = letter;
      return true;
    }
    return false;
  };
  const checkForWin = (board, letter) => {
    //check rows and columns to see if there 3 in a row
    for (let i = 0; i < board.length; i++) {
      let row = 0;
      let column = 0;
      for (let j = 0; j < board.length; j++) {
        if (board[i][j] === letter) {
          row++;
        }
        if (board[j][i] === letter) {
          column++;
        }
      }
      if (row === 3 || column === 3) {
        return true;
      }
    }
    //check diagonals
    let diagonal1 = 0;
    let diagonal2 = 0;
    for (let i = 0; i < board.length; i++) {
      if (board[i][i] === letter) {
        diagonal1++;
      }
      if (board[i][board.length - 1 - i] === letter) {
        diagonal2++;
      }
    }
    if (diagonal1 === 3 || diagonal2 === 3) {
      return true;
    }
    return false;
  };
  //create a function that renders the board
  const renderBoard = (board) => {
    //get the board element
    let board_elem = document.querySelector(".board");
    //clear the board
    while (board_elem.firstChild) {
      board_elem.removeChild(board_elem.firstChild);
    }
    // create the board
    var row_count = 0;
    for (let r = 0; r < board.length; r++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.setAttribute("data-row", row_count);
      var column_count = 0;
      for (let c = 0; c < board[r].length; c++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.setAttribute("data-col", column_count);
        square.textContent = board[r][c];
        row.appendChild(square);
        column_count++;
      }
      board_elem.appendChild(row);
      row_count++;
    }
    console.log("rendering board");
  };

  const resetBoard = (board) => {
    //reset the boarrd array to empty srings
    //render the board
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        board[r][c] = "";
      }
    }
    renderBoard(board);
    bindEvents();
    return;
  };
  const checkForDraw = (board) => {
    //check if there are any empty strings in the board
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === "") {
          return false;
        }
      }
    }
    return true;
  };

  return { init, createBoard, play, resetBoard, checkForWin, checkForDraw };
})();

const playerFactory = (name, letter) => {
  var name = name;
  var letter = letter;
  var score = 0;
  var turn = false;
  const toggleTurn = () => {
    turn = turn ? false : true;
  };
  const getName = () => name;
  const getLetter = () => letter;
  const getScore = () => score;
  const getTurn = () => turn;

  return { getTurn, toggleTurn, getName, getLetter, getScore };
};

const ticTacToe = (() => {
  var board = gameboard.createBoard(3);
  const init = () => {
    cacheDom();
    if (this.player1 === "" || this.player2 === "") {
      alert("Please enter player names");
      return;
    }
    //generate number between 0 and 1
    //if 0 player1 starts, if 1 player2 starts
    this.player1 = playerFactory(this.player1, "X");
    this.player2 = playerFactory(this.player2, "O");
    let random = Math.floor(Math.random() * 2);
    if (random === 0) {
      this.player1.toggleTurn();
      alert(`${this.player1.getName()} starts`);
    } else {
      this.player2.toggleTurn();
      alert(`${this.player2.getName()} starts`);
    }
    console.log(
      `Player 1: ${this.player1.getName()} created\nPlayer 2: ${this.player2.getName()} created`
    );

    gameboard.init(board);
    bindEvents();
  };

  const cacheDom = () => {
    this.player1 = document.querySelector("#player1").value;
    this.player2 = document.querySelector("#player2").value;
    this.reset = document.querySelector(".reset");
  };
  const bindEvents = () => {
    this.reset.addEventListener("click", () => {
      gameboard.resetBoard(board);
    });
    //add event listeners to the squares
    let squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", (e) => {
        playSquare(e);
      });
    });
  };
  const playSquare = (e) => {
    let row = e.target.parentElement.getAttribute("data-row");
    let column = e.target.getAttribute("data-col");
    //check which players turn it is
    player = this.player1.getTurn() ? this.player1 : this.player2;
    //play the square
    if (gameboard.play(board, row, column, player.getLetter())) {
      //check for win
      e.target.textContent = player.getLetter();
      if (gameboard.checkForWin(board, player.getLetter())) {
        alert(`${player.getName()} wins!`);
        gameboard.resetBoard(board);
        bindEvents();
      }
      //check for draw
      if (gameboard.checkForDraw(board)) {
        alert("Draw!");
        gameboard.resetBoard(board);
        bindEvents();
      }
      //add player letter to the square
      //toggle the players turn
      this.player1.toggleTurn();
      this.player2.toggleTurn();
      return;
    }
    alert("That square is already taken");
    return;
  };

  return { init };
})();

document.querySelector(".ready").addEventListener("click", () => {
  ticTacToe.init();
  document.querySelector(".ready").style.display = "none";
  //lock player1 and player2 input
  document.querySelector("#player1").disabled = true;
  document.querySelector("#player2").disabled = true;
});

//If you want to play with the computer, uncomment the code below
// const computer = (() => {
//   const play = (board) => {
//     //get a random row and column
//     let row = Math.floor(Math.random() * 3);
//     let col = Math.floor(Math.random() * 3);
//     //check to see if the square is empty
//     if (board[row][col] === "") {
//       //play the square
//       gameboard.play(board, row, col, "O");
//       //render the board
//       gameboard.renderBoard(board);
//       //check for win
//       if (gameboard.checkForWin(board, "O")) {
//         alert("Computer wins");
//         gameboard.resetBoard(board);
//         bindEvents();
//       }
//       //toggle turn
//       player1.toggleTurn();
//       player2.toggleTurn();
//     } else {
//       play(board);
//     }
//   };
//   return { play };
// })();
