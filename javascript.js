(function () {
    let content = document.querySelector('.content')
    let players = [];
    const player = (name,playerNumber) => {
        let turn = () => {if (playerNumber == 'player1') {return true}}
        
        return ({name,playerNumber,turn})
    };

    const gameboard = (() => {
        /*gameboard refers to the html board 
        board refers to the javascript board*/
        let board = [
            ["","","",],
            ["","","",],
            ["","","",]
        ];
        const bindGameboard = ()=>{
            content.querySelectorAll('.square').forEach(square => {
                square.addEventListener('click', function () {updateGameboard(square)})
            });
        };
        const updateGameboard = ((square) => {
            square.classList.add("played")
            updateBoard(square,'X')
        });
        const updateBoard = ((element,letter) =>{
            let column = element.getAttribute('data-position');
            let row = element.parentElement.getAttribute('id');
            board[row][column] = letter;
        })
        bindGameboard()
        return board
    })();


    function bindEvents(){   
        //used to bind events
        content.querySelectorAll('button').forEach(button => button.addEventListener('click', function(){bindPlayer(button)}))
    };
    function bindPlayer(button) {
        //locks the player input field
        let player = content.querySelector(`#${button.className}`);
        player.readOnly = true;
        player.style.border = 'none';
        button.style.backgroundColor = 'lightgreen';
        
    };
    bindEvents();
})();

// const calculator = (() => {
//     const add = (a, b) => a + b;
//     const sub = (a, b) => a - b;
//     const mul = (a, b) => a * b;
//     const div = (a, b) => a / b;
//     return {
//       add,
//       sub,
//       mul,
//       div,
//     };
//   })();
  