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
       //console.log ('No of Mole : ' + i);
        document.getElementById("message").innerHTML = ('Run Game');
        
        /* Create a function to generate a unique number*/ 
          
        let number = Math.floor(Math.random() * 12) +1;    
        let selectedbutton = document.getElementById(number);
        // selectedbutton.style.backgroundColor = "red";
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
       // Timer(number);
       
        // alert(text);
        
        /* To find out if user has click thet button */
        //let button_userclick = document.getElementById('controls-area').value;
        //console.log('User :' + button_userclick);
        /*       
        if (document.getElementById(number) === document.getElementById('controls-area')) {
            button_userclick.addEventListener("click", correct_click);
        } else {
            button_userclick.addEventListener("click", wrong_click);
        }*/
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
        correct_click(number, '1')
        console.log('1');
    });
    button_2.addEventListener("click", function(){
        correct_click(number, '2')
        console.log('2');
    });
    button_3.addEventListener("click", function(){
        correct_click(number, '3')
        console.log('3');
    });
    button_4.addEventListener("click", function(){
        correct_click(number, '4')
        console.log('4');
    });
    button_5.addEventListener("click", function(){
        correct_click(number, '5')
        console.log('5');
    });
    button_6.addEventListener("click", function(){
        correct_click(number, '6')
        console.log('6');
    });
    button_7.addEventListener("click", function(){
        correct_click(number, '7')
        console.log('7');
    });
    button_8.addEventListener("click", function(){
        correct_click(number, '8')
        console.log('8');
    });
    button_9.addEventListener("click", function(){
        correct_click(number, '9')
        console.log('9');
    });
    button_10.addEventListener("click", function(){
        correct_click(number, '10')
        console.log('10');
    });
    button_11.addEventListener("click", function(){
        correct_click(number, '11')
        console.log('11');
    });
    button_12.addEventListener("click", function(){
        correct_click(number, '12')
        console.log('12');
    });
}    

function correct_click(number, user_clickbutton) {

    console.log(number + user_clickbutton);
    if (number == user_clickbutton){
        
        let selectedbutton = document.getElementById(user_clickbutton);
        selectedbutton.style.backgroundColor = "white";
        selectedbutton.style.color= "grey";
        console.log('Right click');

    } else {
        console.log('Wrong click');
    }
}

function wrong_click() {
    console.log('Wrong click')
}

function getDelay_disappear(number, i){

    setTimeout(function(){

        let selectedbutton = document.getElementById(number);
        selectedbutton.style.backgroundColor = "white";
    }, i * 4000)

    
}

function Timer(number) {
    
    let selectedbutton = document.getElementById(number);
    selectedbutton.style.backgroundColor = "white";
    //console.log (number);
   
}