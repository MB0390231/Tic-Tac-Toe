(function () {
    let content = document.querySelector('.content')
    let gameboard = [
        //connects the html elements
        ["","","",],
        ["","","",],
        ["","","",]
    ];
    const person = (name,letter) => {
        return {name,letter}
    };
    function bindEvents(){   
        //used to bind events
        content.querySelectorAll('.square').forEach(square => {
            square.addEventListener('click', function () {updateBoard(square)})
        });
        content.querySelectorAll('button').forEach(button => button.addEventListener('click', function(){bindPlayer(button)}))
    };
    function updateBoard (square) {
        square.classList.add("played")
        updateBoard(square.getAttribute('data-position'),player)
        // updateBoard(square)
    };
    function updateBoard(index) {
        //keeps the items in the gameboard array in line with the html elements
        gameboard[index] = player.letter;

    };
    function bindPlayer(button) {
        //locks the player input field
        content.querySelector(`#${button.className}`).readOnly = true;
        button.style.backgroundColor = 'lightgreen';
    };
    bindEvents();
})()