// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function(){

    /* Creating Event listner for the game control - Start, end and info game */
    let button_start = document.getElementById('play');
    let button_end = document.getElementById('end');
    let button_info = document.getElementById('info');
    
    button_start.addEventListener("click", runGame);
    button_end.addEventListener("click", endGame);
    button_info.addEventListener("click", showInfo);
    
    /* Loading of the Modal Box by calling a function*/
    window.onload = function() {
        modalBox(); 
    };
    
    /* For loop to addEventListener to the game-area 12 buttons */
    for (let i = 0; i <= 12; i++) {

        let button = document.getElementById(i);
        button.addEventListener("click", function () {
       
        /* After a user click on the button, check click against array */
        correct_click(listOfNumbers[whichButton-1], i); 
         });
     }
     whichButton+= 1;
});

/* Level 1 will have 5 mole */
let startMole = 1;
let totalMole = 6;
let whichButton = 0;
let totalHamburger = 0;
let level = 2;
let total_mole_hamburger = 0;
let listOfNumbers = [];

/* Generate either 0, 1 or 2 hamburgers */
totalHamburger = Math.floor(Math.random() * 3);   

 /* Generate 5 random numbers and place in array */
listOfNumbers = generateNumber(totalHamburger);
total_mole_hamburger = totalMole + totalHamburger;

/* How the game is run */
/* Level 1 will start with 5 mole with 1 hamburger*/

function runGame() {

    if (startMole != (total_mole_hamburger)) {
        if (listOfNumbers[startMole-1] != '0'){
            let selectedbutton = document.getElementById(listOfNumbers[startMole-1]);
            selectedbutton.innerHTML = '<img src="assets/images/heading_logo.png" />';
            startMole+= 1;
        } else {
                /*Display hamburger*/
                let selectedbutton = document.getElementById(listOfNumbers[startMole-1]);
                selectedbutton.style.backgroundColor = "white";
                selectedbutton.innerHTML = '<img src="assets/images/hamburger.png" />';
                startMole+= 1;
            }
        }
        else {
            increaseLevel();
        }
}

/* This function is to increase the level of the game from level 1 onwards */
function increaseLevel(){
   
    document.getElementById("level").innerHTML = ('Level ' + level);
    /* Reset global variables */
    startMole = 1;
    whichButton = 1;
    listOfNumbers = [];
    let totalHamburger = 0;
    total_mole_hamburger = 0;

    /* Generate either 0, 1 or 2 hamburgers */
    totalHamburger = Math.floor(Math.random() * 3);   
    listOfNumbers = generateNumber(totalHamburger);
    alert('Level ' + level + ' - ' + 'Ready , Steady ... Go!'  );
    total_mole_hamburger = totalMole + totalHamburger;
    level+=1;
    runGame();
}

/* This is the function to automatically generate the numbers of moles and total hamburger and put it into an array */
function generateNumber(totalHamburger) {

    let numbers = [];
    let positionHamburger = [];
    let noOfArrays = 0;
    
    /* To randomly find the position where the hamburger should be place in an array */
    for (let x = 0; x < totalHamburger; x++) {
        positionHamburger[x] = Math.floor(Math.random() * 6);
    }
    noOfArrays = totalHamburger + 5;
    for (let i = 0; i<noOfArrays; i++){

        if (i == positionHamburger[0]) {
            numbers[i] = '0';
        } else if (i == positionHamburger[1]) {
            numbers[i] = '0';
        } else if (i == positionHamburger[2]) {
            numbers[i] = '0';
        } else {
            numbers[i] = Math.floor(Math.random() * 12) + 1;    
        }
    }
    return numbers;
}

/* This function is when an game over event happens */
function endGame(event) {

    document.getElementById("message").innerHTML = ('End Game');
    location.reload();
}

/* This function is when user click the infor control button and will display the game info on screen */
function showInfo(event) {

    document.getElementById("message").innerHTML = ('Click stop button to refresh');
    var showInfo = document.createElement('h1');
    showInfo.textContent = 'Mollie is a very cheeky mole living in the northern part of England. She loves to pop into the house to steal your food. What you need to do is to hit Mollie when she appears. She also likes to eat your hamburgers. So when the hamburger appears, take it back from Mollie by clicking on it and you will get extra points.     <Press the red button to continue>';
    showInfo.style.color = 'grey';
    showInfo.style.backgroundColor = "white";
    showInfo.style.width = '60%';
    var oldElement = document.getElementById('controls-area');
    oldElement.replaceWith(showInfo);
    disable_button();
}

/* This function is to compare the selected number from the array and what the user has click to determine to proceed
or is game over */
function correct_click(number, user_clickbutton) {

    if (number == user_clickbutton){
        
        let selectedbutton = document.getElementById(user_clickbutton);
        selectedbutton.innerHTML = '';
        score('10');
        
        if (number == '0'){  
            selectedbutton.innerHTML = '';
            score('10');    
        }
        whichButton+= 1;
        runGame();
    } else {
            document.getElementById("message").innerHTML = ('Game Over'); 
            disable_button();
            alert('Game Over -  Click red button to end game...');
            endGame();
      }
}

/* This function is to keep track of scores of the game */
function score(add_score){
    
    const now_score = document.getElementById("result");
    const total_score = Number(now_score.textContent) + Number(add_score);
    document.getElementById("result").innerHTML = (total_score);
}

/* This is a function to disable the control buttons */
function disable_button() {

    /*Disable the play button and get info buttons */
    var button_info = document.getElementById('info');
    var button_play = document.getElementById('play');

    // Then, disable the button
    button_info.disabled = true;
    button_play.disabled = true;
    button_info.style.backgroundColor = "white";
    button_play.style.backgroundColor = "white";
}

/* This function is to display the Modal box at the beginning of the game */
function modalBox () {
    
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    /* When the user clicks on <span> (x), close the modal */
    span.onclick = function() {
        modal.style.display = "none";
    };

    /* When the user clicks anywhere outside of the modal, close it */
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
