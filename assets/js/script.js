// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
/*
let button = document.getElementsByClassName('play');
    button.addEventListener("click", function() {
        if (button === "play") {
            runGame();
        } else if (button === "end") {
            endGame();
        } else if (button === "info") {
            showInfo();
        }
    });
*/

/* Creating Event listner for the game control - Start, end and info game */
 
let button_start = document.getElementById('play');
let button_end = document.getElementById('end');
let button_info = document.getElementById('info');

button_start.addEventListener("click", runGame);
button_end.addEventListener("click", endGame);
button_info.addEventListener("click", showInfo);


function runGame(event) {

    console.log ('Run Game');
    document.getElementById("demo").innerHTML = ('Run Game');
    
}

function endGame(event) {

    console.log ('End Game');
    document.getElementById("demo").innerHTML = ('End Game');
    
}

function showInfo(event) {

    console.log ('Show Info');
    document.getElementById("demo").innerHTML = ('Show Info');
}