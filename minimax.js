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
    const tie = () => {
        for (let r=0;r<3;r++) {
            for (let c=0; c<3;c++) {
                if (jsBoard[r][c] == '') {
                    return false
                } 
            }
        }
        return true
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
    return {checkWin,play,reset,tie}
})();

