const radioAnswer1 = document.querySelector('#radioAnswer1');
const radioAnswer2 = document.querySelector('#radioAnswer2');
const radioAnswer3 = document.querySelector('#radioAnswer3');

const divTask1 = document.querySelector('#divTask1');
const divTask2 = document.querySelector('#divTask2');

const btnCheck = document.querySelector('#btnCheck');
btnCheck.disabled = true;

const btnCheck2 = document.querySelector('#btnCheck2');

const checkAnswer = document.querySelector('#checkAnswer');

let timerCheckAnswer = 10;
let speedTimerCheckAnswer = 150;
let myInterval;

function btnC(){

    if(radioAnswer1 || radioAnswer2 || radioAnswer3){
        btnCheck.disabled = false;
    }
}
document.querySelector('body').addEventListener('click', () => {btnC()});

function checkingAnswer(){
    
    const createA = document.createElement('span');


    if(radioAnswer1.checked){

        createA.innerHTML = 'Dog is the correct answer!'
        checkAnswer.appendChild(createA);
        checkAnswer.style.color = '#00FF5F';

        divTask1.style.display = 'none';
        divTask2.style.display = 'flex';
    }

    if(radioAnswer2.checked){
        
        createA.innerHTML = 'Cow is the wrong answer!'
        checkAnswer.appendChild(createA);
        checkAnswer.style.color = '#FF0000';
    }

    if(radioAnswer3.checked){
        
        createA.innerHTML = 'Rat is the wrong answer!'
        checkAnswer.appendChild(createA);
        checkAnswer.style.color = '#FF0000';
    }

    myInterval = setInterval(() => {
        timerCheckAnswer--;

        if(timerCheckAnswer <= 0){
            timerCheckAnswer = 10;
            clearInterval(myInterval);
            createA.remove();

            btnCheck.style.background = '#0089EC';
            btnCheck.innerHTML = 'Check';
            btnCheck.style.width = '100px';
            btnCheck.style.transform = 'scale(1)';
            btnCheck.disabled = false;
        }else{
            
            btnCheck.style.background = '#003B66';
            btnCheck.innerHTML = 'Checking...';
            btnCheck.style.width = '120px';
            btnCheck.style.transform = 'scale(1.2)';
            btnCheck.disabled = true;
        }
        console.log(timerCheckAnswer)
    }, speedTimerCheckAnswer)

}

btnCheck.addEventListener('click', () => {

    checkingAnswer();

    // divTask1.style.display = 'none';
    // divTask2.style.display = 'flex';

})

btnCheck2.addEventListener('click', () => {

    checkingAnswer();

    divTask1.style.display = 'flex';
    divTask2.style.display = 'none';

    radioAnswer1.checked = false;
    radioAnswer2.checked = false;
    radioAnswer3.checked = false;

})