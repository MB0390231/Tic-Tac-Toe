// const game = (() => {
//     let jsBoard = [
//         ['','',''],
//         ['','',''],
//         ['','','']
//     ];
//     const checkWin = (letter) => {
//         let checkRows = () => {
//             for(let r=0; r<3; r++) {
//                 let count = 0;
//                 for (let c=0; c<3; c++) {
//                     if (jsBoard[r][c]==letter) {
//                         count++;
//                     }
//                 }
//                 if (count == 3) {return true}
//             }
//             return false
//         };
//         let checkColumns = () => {
//             for (let c=0;c<3;c++) {
//                 let count = 0;
//                 for (let r=0; r<3;r++) {
//                     if (jsBoard[r][c] == letter ) {
//                         count++;
//                     }
//                 }
//                 if (count==3) {return true}
//             }
//             return false
//         };
//         let checkDiagonals = () => {
//             if (jsBoard[0][0]==letter && jsBoard[1][1]==letter && jsBoard[2][2]==letter) {
//                 return true
//             } if (jsBoard[0][2]==letter && jsBoard[1][1]==letter && jsBoard[2][0]==letter) {
//                 return true
//             }
//             return false
//         };
//     return checkRows() || checkColumns() || checkDiagonals()
//     };
//     const tie = () => {
//         for (let r=0;r<3;r++) {
//             for (let c=0; c<3;c++) {
//                 if (jsBoard[r][c] == '') {
//                     return false
//                 }
//             }
//         }
//         return true
//     };
//     const play = (letter,row,column) => {
//         jsBoard[row][column] = letter;
//         return
//     };
//     const reset = () => {
//         for (let r=0;r<3;r++) {
//             for (let c=0;c<3;c++) {
//                 jsBoard[r][c] = "";
//             }
//         }
//         return
//     };
//     return {checkWin,play,reset,tie}
// })();

// const controller = (() => {
//     const content = document.querySelector('.content').children;
//     const board = content[2];
//     const player1 = content[0];
//     const player2 = content[4];
//     const ready = document.querySelector('.ready');
//     const reset = document.querySelector('.reset');
//     const inputList = document.querySelectorAll('input');
//     const pList = document.querySelectorAll('p');
//     playerTracker = 0;

//     const player = (name,letter) => {
//         const getName = () => name;
//         const getLetter = () => letter;
//         return {getName,getLetter}
//     }
//     players = [];
//     let bindButtons = () => {
//         ready.addEventListener('click', function() {
//             if (player1.value == '' || player2.value == '') {return window.alert('Must fill out players names!')}
//             pushPlayers();
//             lockPlayers();
//             generateBoard();
//             flow();
//         })
//         reset.addEventListener('click',function() {resetEverything()})
//     };
//     let pushPlayers = () =>{
//         players.push(player(player1.value,'X'));
//         players.push(player(player2.value,'O'));
//     };
//     const lockPlayers = () => {
//         inputList.forEach(input => {input.readOnly = true; input.classList.add('locked')});
//         pList.forEach(p =>{p.style.fontSize = '2rem';});
//         ready.remove();
//         return
//     };
//     const generateBoard = () => {
//         while (board.firstChild) {board.removeChild(board.firstChild);};
//         for (let r=0;r<3;r++) {
//             let row = document.createElement('div');
//             row.classList.add('row');
//             row.setAttribute('row',r);
//             for (let c=0;c<3;c++) {
//                 let square = document.createElement('div');
//                 square.classList.add('square');
//                 square.setAttribute('column',c)
//                 row.appendChild(square)
//             }
//             board.appendChild(row)
//         }
//         return
//     };
//     const flow = () => {
//         const grid = document.querySelectorAll('.square');
//         grid.forEach(square => square.addEventListener('click',function () {
//             index = playerTracker%2;
//             currentPlayer = players[index]
//             if (square.getAttribute('played') == 'true') {return}
//             if (game.checkWin(currentPlayer.getLetter())) {return}
//             fillSquare(square);
//         }))
//     };
//     const fillSquare = (square) => {
//         game.play(currentPlayer.getLetter(),square.parentNode.getAttribute('row'),square.getAttribute('column'));
//         square.setAttribute('played','true')
//         square.innerText = currentPlayer.getLetter();
//         if (game.checkWin(currentPlayer.getLetter())) {
//             displayWinner(false);
//             return
//         };
//         if (game.tie()) {
//             displayWinner(true);
//             return
//         };
//         playerTracker++;
//     };
//     const resetEverything = () =>{
//         let winner = document.querySelector('.winner')
//         if (winner) {winner.remove()}
//         generateBoard();
//         game.reset()
//         flow();
//         playerTracker = 0;
//     };
//     const displayWinner = (tie) => {
//         let div = document.createElement('div');
//         div.classList = 'winner';
//         div.textContent = tie ? "Tie!" : currentPlayer.getName() + " has won!"
//         document.querySelector('body').appendChild(div);
//     };
//     bindButtons();
//     return
// })();

const ticTacToe = () => {
  const cacheDom = () => {};
  const bindEvents = () => {};
  const init = (player1, player2) => {
    //create a new gameboard
    //create player1 and player 2 using this
    //choose first turn
  };

  const chooseFirstTurn = () => {
    //return n where 0 < n < 1
    // if n <= .5 then its player1 turn toggle player turn
    //else player2 turn toggle player turn
    //alert the players of who is going first
  };

  const gameboard = () => {
    var board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
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
    return { play };
  };

  const playerFactory = (name, letter) => {
    const name = name;
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
};

const gameboard = () => {
  //private
  var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];
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
  return { play };
};
