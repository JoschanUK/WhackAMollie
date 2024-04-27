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
    for (let i = 1; i <= 12; i++) {

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
let totalMole = 5;
let whichButton = 0;
let level = 2;
let listOfNumbers = [];

 /* Generate 5 random numbers and place in array */
   
 listOfNumbers = generateNumber();
    for (test=0; test<5; test++){
        console.log('list of numbers ' + test + " - " + listOfNumbers[test]);
    }

/* How the game is run */
/* Level 1 will start with 5 mole with 1 hamburger*/

function runGame() {

            console.log('startMole' + startMole);
            if (startMole != 6) {
                let selectedbutton = document.getElementById(listOfNumbers[startMole-1]);
                selectedbutton.style.backgroundColor = "red";
                startMole+= 1;
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
    listOfNumbers = generateNumber();
    alert('Level ' + level + ' - ' + 'Ready , Steady ... Go!'  );
    level+=1;
    runGame();
}


function generateNumber() {

    let numbers = [];
    for (i = 0; i<5; i++){
        numbers[i] = Math.floor(Math.random() * 12) + 1;    
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
        

    } else {
       // console.log('Wrong click');
        document.getElementById("message").innerHTML = ('Game Over'); 
        alert('Game Over -  Click red button to restart ...');
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

