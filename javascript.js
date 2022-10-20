const gameboard = (() => {
  var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const cacheDom = () => {};

  const bindEvents = () => {};
  const init = () => {
    resetBoard();
    cacheDom();
    bindEvents();
    renderBoard();
  };
  const play = (row, column, letter) => {
    //check positions availability
    //also check if the board is full
    //play letter
    //render board
  };
  const checkForWin = () => {
    //check columns and rows and diagonals and return true for wins
    //use the board variable to check
  };
  const renderBoard = () => {
    //render the board onto the page
  };
  const resetBoard = () => {
    //reset the board array to empty srings
    board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  };
  return { init, play, resetBoard };
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

  return { toggleTurn, getName, getLetter, getScore };
};

const ticTacToe = (() => {
  const init = () => {
    cacheDom();
    if (this.player1 === "" || this.player2 === "") {
      alert("Please enter player names");
      return;
    } else {
      this.player1 = playerFactory(this.player1, "X");
      this.player2 = playerFactory(this.player2, "O");
      this.gameboard = gameboard.init();
    }
    bindEvents();
  };

  const cacheDom = () => {
    this.player1 = document.querySelector("#player1").value;
    this.player2 = document.querySelector("#player2").value;
    console.log(
      `Player 1: ${this.player1} created\Player : ${this.player2} created`
    );
    this.reset = document.querySelector(".reset");
  };
  const bindEvents = () => {
    this.reset.addEventListener("click", this.resetGame);
  };

  const chooseFirstTurn = () => {
    //return n where 0 < n < 1
    // if n <= .5 then its player1 turn toggle player turn
    //else player2 turn toggle player turn
    //alert the players of who is going first
  };
  return { init };
})();

document.querySelector(".ready").addEventListener("click", () => {
  ticTacToe.init();
});
