const game = (board) => {
    const checkWin = (letter) => {
        let checkRows = () => {
            for(let r=0; r<3; r++) {
                let count = 0;
                for (let c=0; c<3; c++) {
                    if (board[r][c]==letter) {
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
                    if (board[r][c] == letter ) {
                        count++;
                    }
                }
                if (count==3) {return true}
            }
            return false
        };
        let checkDiagonals = () => {
            if (board[0][0]==letter && board[1][1]==letter && board[2][2]==letter) {
                return true
            } if (board[0][2]==letter && board[1][1]==letter && board[2][0]==letter) {
                return true
            }
            return false
        };
    return checkRows(letter,board) || checkColumns(letter,board) || checkDiagonals(letter,board)
    };
    const full = () => {
        for (let r=0;r<3;r++) {
            for (let c=0; c<3;c++) {
                if (board[r][c] == '') {
                    return false
                }
            }
        }
        return true
    };
    const play = (letter,row,column) => {
        board[row][column] = letter;
        return
    };
    const reset = () => {
        for (let r=0;r<3;r++) {
            for (let c=0;c<3;c++) {
                board[r][c] = "";
            }
        }
        return
    };
    const getMoves = () => {
        //need a way to return rows and columns in the board that are free
        let moves = [];
        for (let r=0;r<3;r++) {
            for (let c=0;c<3;c++) {
                if (board[r][c]=="") {moves.push([r,c])}
            };
        };
        return moves
    };

    const minimax = function(board,depth,maximizing) {
        //need to check who won or if it was a tie so I can set a score to it.
        //maximizer will always be the letter o
        if (checkWin('O')) {return 10+depth}
        if (depth == 0) {return}
        if (checkWin('X')) {return -10-depth}
        console.log(depth)
        //need to copy new board after placing move
        const copy = structuredClone(board);
        const moves = getMoves(copy);
        if (maximizing) {
        best = Infinity;
        moves.forEach((move) => {
            copy[move[0]][move[1]] = "O"
            value = minimax(copy,depth-1,false);
            best = Math.max(value,best)
            return best
        })} else {
        best = -Infinity;
        moves.forEach((move) => {
            //need to copy new board after placing move
            copy[move[0]][move[1]] = 'O';
            value = minimax(copy,depth-1,true);
            best = Math.max(value,best)
            return best
        })};
    };
  
    return {board,minimax,checkWin,play,reset,full,getMoves}
};

let board = game([
    ['X','','X'],
    ['','O',''],
    ['O','','X']
]);

