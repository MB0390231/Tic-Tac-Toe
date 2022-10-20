const gameboard = () => {
  var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
  const cacheDom = () => {};

  const bindEvents = () => {};
  const init = () => {
    this.resetBoard();
    this.cacheDom();
    this.bindEvents();
    this.renderBoard();
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
    //reset board
  };
  return { play, resetBoard };
};

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
  var gameboard = gameboard;

  const init = () => {
    cacheDom();
    bindEvents();
  };

  const cacheDom = () => {
    this.player1 = document.querySelector("#player1").value;
    this.player2 = document.querySelector("#player2").value;
    this.ready = document.querySelector(".ready");
    this.reset = document.querySelector(".reset");
  };
  const bindEvents = () => {
    this.ready.addEventListener("click", this.startnewGame);
    this.reset.addEventListener("click", this.resetGame);
  };

  const startNewGame = () => {
    gameboard.init();
  };
  const chooseFirstTurn = () => {
    //return n where 0 < n < 1
    // if n <= .5 then its player1 turn toggle player turn
    //else player2 turn toggle player turn
    //alert the players of who is going first
  };
  return { init };
})();

ticTacToe.init();
