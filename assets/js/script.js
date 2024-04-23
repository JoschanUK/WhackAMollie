// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/* Level 1 will have 5 mole */
let total_mole = 5;

/* Creating Event listner for the game control - Start, end and info game */

let button_start = document.getElementById('play');
let button_end = document.getElementById('end');
let button_info = document.getElementById('info');

button_start.addEventListener("click", runGame);
button_end.addEventListener("click", endGame);
button_info.addEventListener("click", showInfo);

/* How the game is run */
/* Level 1 will start with 5 mole with 1 hamburger*/


function runGame(event) {

    //let i = 0;
    for(let i = 1; i <=total_mole; i++){
        console.log ('No of Mole : ' + i);
        document.getElementById("message").innerHTML = ('Run Game');
        let number = Math.floor(Math.random() * 12) +1;    
        //let selectedbutton = document.getElementById(number);
        //selectedbutton.style.backgroundColor = "red";
        console.log ('Random No : ' + number);
        //   document.getElementById("message").innerHTML = ('No of Mole +' + number);
        // setTimeout(Timer, 4000, number);
        getDelay_appear(number, i);
     //   getDelay_disappear(number, i);
            
    }

    
     
    
}

function endGame(event) {

    console.log ('End Game');
    document.getElementById("message").innerHTML = ('End Game');
    location.reload();
    
}

function showInfo(event) {

    console.log ('Show Info');
    document.getElementById("message").innerHTML = ('Click stop button to refresh');
    var showInfo = document.createElement('h1');
    showInfo.textContent = 'Mollies is a very cheeky mole living in the northern part of England. She loves to pop into the house to steal your food. What you need to do is to hit Mollie when she appears. She also likes to eat your hamburgers. So when the hamburger appears, take it back from Mollie by clicking on it and you will get extra points.';
    showInfo.style.color = 'blue';
    var oldElement = document.getElementById('controls-area');
    oldElement.replaceWith(showInfo);

    /*Disable the play button and get info buttons */
    var button_info = document.getElementById('info');
    var button_play = document.getElementById('play');

    // Then, disable the button
    button_info.disabled = true;
    button_play.disabled = true;
    button_info.style.backgroundColor = "white";
    button_play.style.backgroundColor = "white";
}
function getDelay_appear(number, i){

    setTimeout(function(){

        let selectedbutton = document.getElementById(number);
        selectedbutton.style.backgroundColor = "red";
    }, i * 2000)
    
    
}

function getDelay_disappear(number, i){

    setTimeout(function(){

        let selectedbutton = document.getElementById(number);
        selectedbutton.style.backgroundColor = "white";
    }, i * 4000)

    
}
/*
function Timer(number) {
    
    let selectedbutton = document.getElementById(number);
    selectedbutton.style.backgroundColor = "white";
    //console.log (number);
   
  }*/