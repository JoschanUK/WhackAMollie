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

    
    for(let i = 1; i <=total_mole; i++){
       
        document.getElementById("message").innerHTML = ('Run Game');
        
        /* Create a function to generate a unique number*/ 
          
        let number = Math.floor(Math.random() * 12) +1;    
        let selectedbutton = document.getElementById(number);
        console.log ('Random No : ' + number);
        getDelay_appear(number, i);
        getUser_Input(number);
        
       // getDelay_disappear(number, i);

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

function getUser_Input(number){
    
    let button_1 = document.getElementById('1');
    let button_2 = document.getElementById('2');
    let button_3 = document.getElementById('3');
    let button_4 = document.getElementById('4');
    let button_5 = document.getElementById('5');
    let button_6 = document.getElementById('6');
    let button_7 = document.getElementById('7');
    let button_8 = document.getElementById('8');
    let button_9 = document.getElementById('9');
    let button_10 = document.getElementById('10');
    let button_11 = document.getElementById('11');
    let button_12 = document.getElementById('12'); 

    button_1.addEventListener("click", function(){
        correct_click(number, '1');
        return;
        
    });
    button_2.addEventListener("click", function(){
        correct_click(number, '2');
        return;
    });
    button_3.addEventListener("click", function(){
        correct_click(number, '3');
        return;
    });
    button_4.addEventListener("click", function(){
        correct_click(number, '4');
        return;
    });
    button_5.addEventListener("click", function(){
        correct_click(number, '5');
        return;
    });
    button_6.addEventListener("click", function(){
        correct_click(number, '6');
        return;
    });
    button_7.addEventListener("click", function(){
        correct_click(number, '7');
        return;
    });
    button_8.addEventListener("click", function(){
        correct_click(number, '8');
        return;
    });
    button_9.addEventListener("click", function(){
        correct_click(number, '9');
        return;
    });
    button_10.addEventListener("click", function(){
        correct_click(number, '10');
        return;
    });
    button_11.addEventListener("click", function(){
        correct_click(number, '11');
        return;
    });
    button_12.addEventListener("click", function(){
        correct_click(number, '12');
        return;
    });
}    

function correct_click(number, user_clickbutton) {

    console.log('Random No :' + number + ' User :' +user_clickbutton);
    if (number == user_clickbutton){
        
        let selectedbutton = document.getElementById(user_clickbutton);
        selectedbutton.style.backgroundColor = "white";
        selectedbutton.style.color= "grey";
        console.log('Right click');
        score('10');
        return;

    } else {
        console.log('Wrong click');
        document.getElementById("message").innerHTML = ('Game Over');
                
    }
}

function score(add_score){
    
    const now_score = document.getElementById("result");
    //console.log (now_score.textContent + add_score);
    const total_score = Number(now_score.textContent) + Number(add_score);
    document.getElementById("result").innerHTML = (total_score);
    console.log('total score:' + total_score);
}