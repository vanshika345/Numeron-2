// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html

const num1box = document.getElementById('number1')
var num1 = Math.round(Math.random()*100);

const num2box = document.getElementById('number2')
var num2 = Math.round(Math.random()*100);

const num3box=document.getElementById('number3')



var num3;

function randomise(){

     num1=Math.round(Math.random()*100)
     num2=Math.round(Math.random()*100)
    

    let operator = Math.round(Math.random()*5)

    console.log(operator)

    switch(operator){
        case 1: 
            num3=num1 + num2;
            break;

        case 2:
            num3=num1-num2;
            break;

        case 3:
            num3=num1*num2;
            break;

        case 4:
            num3=Math.round(num1/num2)
            break;

        case 5:
            num3=num1%num2
            break;

        case 0:
            randomise()
    }


 


// Iteration 3: Creating variables required to make the game functional

num1box.innerHTML=num1;
num2box.innerHTML=num2;

// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"

num3box.innerHTML=num3;

// Iteration 5: Creating a randomise function to make the game functional

}

randomise()


let score = 0;
// Iteration 6: Making the Operators (button) functional

var plus = document.getElementById('plus')
plus.onclick=()=>{
    if(num3==num1+num2){
        score++;
        randomise();
        reset(TimerId);
        
    }

    else{
        location.href='./gameover.html?score=' +score;
    }
};

var minus = document.getElementById('minus')
minus.onclick=()=>{
    if(num3==num1-num2 ){
        score++;
        randomise();
        reset(TimerId);
    }
    else{
        location.href='./gameover.html?score=' +score;
    }
};

var mul = document.getElementById('mul')
mul.onclick=()=>{
    if(num3==num1*num2){
        score++;
        randomise();
        reset(TimerId);
    }
    else{
        location.href='./gameover.html?score=' +score;
    }
};

var divide = document.getElementById('divide')
divide.onclick=()=>{
    if(num3==Math.round(num1/num2)){
        score++;
        randomise();
        reset(TimerId);
    
    }
    else{
        location.href='./gameover.html?score=' +score;
    }
};

var modulas = document.getElementById('modulus')
modulas.onclick=()=>{
    if(num3==num1%num2){
        score++;
        randomise();
        reset(TimerId);
    }
    else{
        location.href='./gameover.html?score=' +score;
    }
};



// Iteration 7: Making Timer functional
 
var timer = document.getElementById('timer')
var time=10;
var TimerId;

function showTimer(){
    time = 10;
    timer.innerText = time;
    TimerId = setInterval(()=>{

        time--;
        if(time==0){
            location.href='./gameover.html'
        }
        timer.innerText=time;

    },1000)
}

showTimer()

function reset(TimerId){
    clearInterval(TimerId)
    time=10;
    showTimer()
}