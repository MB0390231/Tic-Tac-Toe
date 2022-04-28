const game = (() => {
    let jsBoard = [
        ['','',''],
        ['','',''],
        ['','','']
    ];
    const checkWin = (letter) => {
        let checkRows = () => {
            for(let r=0; r<3; r++) {
                let count = 0;
                for (let c=0; c<3; c++) {
                    if (jsBoard[r][c]==letter) {
                        count++;
                    }
                }
                if (count == 3) {return true}
            }
            return false
        };
        let checkColumns = () => {
            for (let c=0;c<3;c++) {
                let count = 0;
                for (let r=0; r<3;r++) {
                    if (jsBoard[r][c] == letter ) {
                        count++;
                    } 
                }
                if (count==3) {return true}
            }
            return false
        };
        let checkDiagonals = () => {
            if (jsBoard[0][0]==letter && jsBoard[1][1]==letter && jsBoard[2][2]==letter) {
                return true
            } if (jsBoard[0][2]==letter && jsBoard[1][1]==letter && jsBoard[2][0]==letter) {
                return true
            }
            return false
    };
    return checkRows() || checkColumns() || checkDiagonals()
    };
    const play = (letter,row,column) => {
        jsBoard[row][column] = letter;
        return
    };
    const reset = () => {
        for (let r=0;r<3;r++) {
            for (let c=0;c<3;c++) {
                jsBoard[r][c] = "";
            }
        }
        return
    };
    return {checkWin,play,reset}
})();



const controller = (() => {
    const content = document.querySelector('.content').children;
    const board = content[2];
    const player1 = content[0];
    const player2 = content[4];
    const ready = document.querySelector('.ready');
    const reset = document.querySelector('.reset')
    const player = (name,letter) => {
        const getName = () => name;
        const getLetter = () => letter;
        return {getName,getLetter}
    }
    players = [];
    //push players
    ready.addEventListener('click', function() {
        if (player1.value == '' || player2.value == '') {return window.alert('Must fill out players names!')}
        players.push(player(player1.value,'X'));
        players.push(player(player2.value,'O'));
        lockPlayers();
        generateBoard();
        flow();
        return
    });
    reset.addEventListener('click',function() {resetEverything()})
    const lockPlayers = () => {
        //lock input
        document.querySelectorAll('input').forEach(input => {
            input.readOnly = true;
            input.style.border = 'none';
            input.style.fontSize = '2rem';
            input.style.width = 'auto'
        });
        document.querySelectorAll('p').forEach(p =>{
            p.style.fontSize = '2rem';
        });
        ready.remove();
        return
    };
    const generateBoard = () => {
        game.reset();
        for (let r=0;r<3;r++) {
            let row = document.createElement('div');
            row.classList.add('row');
            row.id = r;
            for (let c=0;c<3;c++) {
                let square = document.createElement('div');
                square.classList.add('square');
                square.setAttribute('column',c)
                row.appendChild(square)
            }
            board.appendChild(row)
        }
        return
    };
    const flow = () => {
        count = 0;
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => square.addEventListener('click',function () {
            fillSquare(square,squares);
        }))
    };
    const fillSquare = (square) => {
        let row = square.parentNode.id;
        let column = square.getAttribute('column');
        index = count%2;
        currentPlayer = players[index]
        if (square.getAttribute('played') == 'true' || game.checkWin(currentPlayer.getLetter())) {return}
            game.play(currentPlayer.getLetter(),row,column);
            square.setAttribute('played','true')
            square.innerHTML = currentPlayer.getLetter();
            if (game.checkWin(currentPlayer.getLetter())) {
                displayWinner(currentPlayer.getName())
                return
            }
            count++;
    };
    const resetEverything = () =>{
        let board = document.querySelector('.board');
            while (board.firstChild) {
            board.removeChild(board.firstChild);
            };
        document.querySelector('.winner').remove()
        generateBoard();
        flow();
    };
    const displayWinner = (name) => {
        let winner = document.createElement('div');
        winner.classList = 'winner';
        winner.textContent = name + ' has won!';
        document.querySelector('body').appendChild(winner);
    }
    return 
})();

