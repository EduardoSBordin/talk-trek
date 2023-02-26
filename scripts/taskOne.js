const radioAnswer1 = document.querySelector('#radioAnswer1');
const radioAnswer2 = document.querySelector('#radioAnswer2');
const radioAnswer3 = document.querySelector('#radioAnswer3');

const radioAnswer4 = document.querySelector('#radioAnswer4');
const radioAnswer5 = document.querySelector('#radioAnswer5');
const radioAnswer6 = document.querySelector('#radioAnswer6');

const score = document.querySelector('#score');

const divTask1 = document.querySelector('#divTask1');
const divTask2 = document.querySelector('#divTask2');

const btnCheck = document.querySelector('#btnCheck');
btnCheck.disabled = true;

const btnCheck2 = document.querySelector('#btnCheck2');

const checkAnswer = document.querySelector('#checkAnswer');

let timerCheckAnswer = 10;
let speedTimerCheckAnswer = 150;
let myInterval;
let scoreNum = 0;

function btnC(){

    if(radioAnswer1 || radioAnswer2 || radioAnswer3){
        btnCheck.disabled = false;
    }
}
document.querySelector('body').addEventListener('click', () => {btnC()});

function checkingAnswer1(){
    
    const createA = document.createElement('span');
    createA.id = 'spanScore';

    if(radioAnswer1.checked){

        createA.innerHTML = '+1'

        checkAnswer.appendChild(createA);
        checkAnswer.style.color = '#00FF5F';

        divTask1.style.display = 'none';
        divTask2.style.display = 'flex';

        scoreNum += 1;
        score.innerHTML = scoreNum;
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

function checkingAnswer2(){
    
    const createA = document.createElement('span');
    createA.id = 'spanScore';

    if(radioAnswer6.checked){

        createA.innerHTML = '+1'

        checkAnswer.appendChild(createA);
        checkAnswer.style.color = '#00FF5F';

        divTask1.style.display = 'none';
        divTask2.style.display = 'flex';

        scoreNum += 1;
        score.innerHTML = scoreNum;
    }

    if(radioAnswer5.checked){
        
        createA.innerHTML = 'Bird is the wrong answer!'
        checkAnswer.appendChild(createA);
        checkAnswer.style.color = '#FF0000';
    }

    if(radioAnswer4.checked){
        
        createA.innerHTML = 'Monkey is the wrong answer!'
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

    checkingAnswer1();

    // divTask1.style.display = 'none';
    // divTask2.style.display = 'flex';

})

btnCheck2.addEventListener('click', () => {

    checkingAnswer2();

    divTask1.style.display = 'flex';
    divTask2.style.display = 'none';

    radioAnswer1.checked = false;
    radioAnswer2.checked = false;
    radioAnswer3.checked = false;

})