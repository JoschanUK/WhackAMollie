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
    
    /* For loop to addEventListener to the game-area 12 buttons */
    for (let i = 0; i <= 12; i++) {

        let button = document.getElementById(i);
         button.addEventListener("click", function () {

            /* Display the whack image over the button */
           // button.innerHTML = '<img src="assets/images/whack.png" />';
            
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
let listOfNumbers = [];

/* Generate either 0, 1 or 2 hamburgers */
totalHamburger = Math.floor(Math.random() * 3);   
console.log ('total hamburger : ' + totalHamburger);
 /* Generate 5 random numbers and place in array */
listOfNumbers = generateNumber(totalHamburger);
    
/* How the game is run */
/* Level 1 will start with 5 mole with 1 hamburger*/

function runGame() {

            //console.log('startMole' + startMole);
            if (startMole != (totalMole+totalHamburger )) {
                if (listOfNumbers[startMole-1] != '0'){
                    let selectedbutton = document.getElementById(listOfNumbers[startMole-1]);
                    selectedbutton.style.backgroundColor = "red";
                    startMole+= 1;
                } else {
                    /*Display hamburger*/
                    alert('Display Hamburger !!!')
                    let selectedbutton = document.getElementById(listOfNumbers[startMole-1]);
                    selectedbutton.style.backgroundColor = "red";
                    selectedbutton.innerHTML = '<img src="assets/images/hamburger.png" />';
                    startMole+= 1;
                    
                }
            }
            else {
                increaseLevel();
            }
        
}

function increaseLevel(){
    document.getElementById("level").innerHTML = ('Level ' + level);
    
    /* Reset global variables */
    startMole = 1;
    whichButton = 1;
    listOfNumbers = [];
    let totalHamburger = 0;

    /* Generate either 0, 1 or 2 hamburgers */
    totalHamburger = Math.floor(Math.random() * 3);   
    listOfNumbers = generateNumber(totalHamburger);
    alert('Level ' + level + ' - ' + 'Ready , Steady ... Go!'  );
    level+=1;
    runGame();
}


function generateNumber(totalHamburger) {

    let numbers = [];
    let positionHamburger = [];
    let noOfArrays = 0;
    

    /* To randomly find the position where the hamburger should be place in an array */
    for (x = 0; x < totalHamburger; x++) {
        positionHamburger[x] = Math.floor(Math.random() * 6);
    }
   
    console.log ('array of hamburger : ' + positionHamburger);

    noOfArrays = totalHamburger + 5;
    console.log('noOfArrays : ' + noOfArrays);
    for (i = 0; i<noOfArrays; i++){

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
    console.log('generateNumber : ' + numbers);
    return numbers;
    

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
    showInfo.textContent = 'Mollie is a very cheeky mole living in the northern part of England. She loves to pop into the house to steal your food. What you need to do is to hit Mollie when she appears. She also likes to eat your hamburgers. So when the hamburger appears, take it back from Mollie by clicking on it and you will get extra points.     <Press the red button to continue>';
    showInfo.style.color = 'grey';
    showInfo.style.backgroundColor = "white";
    showInfo.style.width = '60%';
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

function correct_click(number, user_clickbutton) {

    console.log('Random No :' + number + ' User :' +user_clickbutton);
    if (number == user_clickbutton){
        
        let selectedbutton = document.getElementById(user_clickbutton);
        selectedbutton.style.backgroundColor = "white";
        selectedbutton.style.color= "grey";
        //console.log('Right click');
        score('10');
        whichButton+= 1;
        runGame();
    } else if (number == '0') {
        let selectedbutton = document.getElementById(user_clickbutton);
        selectedbutton.style.backgroundColor = "white";
        selectedbutton.style.color= "grey";
        console.log('Right click');
        score('20');
        whichButton+= 1;
        runGame();
    }
    
    else {
       // console.log('Wrong click');
        document.getElementById("message").innerHTML = ('Game Over'); 
        alert('Game Over -  Click red button to end game or blue button to restart the game ...');
        throw ('Game Over');  
        

                
    }
}

function score(add_score){
    
    const now_score = document.getElementById("result");
    //console.log (now_score.textContent + add_score);
    const total_score = Number(now_score.textContent) + Number(add_score);
    document.getElementById("result").innerHTML = (total_score);
  //  console.log('total score:' + total_score);
}

