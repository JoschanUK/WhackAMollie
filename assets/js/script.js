



// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

/* Level 1 will have 5 mole */
let startMole = 1;
let totalMole = 5;
let whichButton = 0;
let level = 2;

/* Creating Event listner for the game control - Start, end and info game */

let button_start = document.getElementById('play');
let button_end = document.getElementById('end');
let button_info = document.getElementById('info');

button_start.addEventListener("click", runGame);
button_end.addEventListener("click", endGame);
button_info.addEventListener("click", showInfo);

/* How the game is run */
/* Level 1 will start with 5 mole with 1 hamburger*/

function runGame() {

            if (startMole <= totalMole) {
            
            let number = Math.floor(Math.random() * 12) + 1; 
           
            console.log ('Random No : ' + number);
            for(let i = 1; i <=12; i++){
    
                let button = document.getElementById(i);
                button.addEventListener("click", function(){
                    console.log('Bef Random No :' + number + ' User :' + i);                       
                   correct_click(number, i); 
                   
                   console.log('Random No :' + number + ' User :' + i);
                 });
            }
           let selectedbutton = document.getElementById(number);
            selectedbutton.style.backgroundColor = "red";
    
        } else{
            document.getElementById("message").innerHTML = ('Proceed to Level ' + level);
            //document.getElementById("level").innerHTML = ('Level ' + level);
            increaseLevel();
            runGame();
        
        }
        startMole+= 1;
        

}
function increaseLevel(){
    document.getElementById("level").innerHTML = ('Level ' + level);
    level+=1;
    startMole = 1;
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

function correct_click(number, user_clickbutton) {

    //console.log('Random No :' + number + ' User :' +user_clickbutton);
    if (number == user_clickbutton){
        
        let selectedbutton = document.getElementById(user_clickbutton);
        selectedbutton.style.backgroundColor = "white";
        selectedbutton.style.color= "grey";
        console.log('Right click');
        score('10');
        runGame();
        

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

