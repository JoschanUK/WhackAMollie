// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
/*

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

    var showInfo = document.createElement('h1');
    showInfo.textContent = 'Mollies is a very cheeky mole living in the northern part of England. She loves to pop into the house to steal your food. What we need to do is to hit Mollie when she appears. She also likes to steal your hamburgers. So when the hamburger appears, steal it back from Mollie and you will get extra points.';
    showInfo.style.color = 'blue';
    var oldElement = document.getElementById('controls-area');
    oldElement.replaceWith(showInfo);
    let button_info = document.getElementById('info');
    button_info.addEventListener("click", showGame);
}

function showGame(event){

    var showInfo = document.createElement('h1');
    showInfo.textContent = '<div id="controls-area"><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button><button class="btn btn--big btn--grey"><i class="fas fa-times"></i></button></div>';
    var oldElement = document.getElementById('controls-area');
    oldElement.replaceWith(showInfo);       
}