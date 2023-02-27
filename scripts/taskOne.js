const radioAnswer1 = document.querySelector('#radioAnswer1');
const radioAnswer2 = document.querySelector('#radioAnswer2');
const radioAnswer3 = document.querySelector('#radioAnswer3');

const radioAnswer4 = document.querySelector('#radioAnswer4');
const radioAnswer5 = document.querySelector('#radioAnswer5');
const radioAnswer6 = document.querySelector('#radioAnswer6');

const divRadioAnswer = document.querySelector('#divRadiosAnswers');
const divRadioAnswer2 = document.querySelector('#divRadiosAnswers2');

const score = document.querySelector('#score');

const divTask1 = document.querySelector('#divTask1');
const divTask2 = document.querySelector('#divTask2');

const btnCheck = document.querySelector('#btnCheck');
btnCheck.disabled = true;

const btnCheck2 = document.querySelector('#btnCheck2');
btnCheck2.disabled = true;

const btnRemoveLastScore = document.querySelector('#btnRemoveLastScore');

const checkAnswer = document.querySelector('#checkAnswer');

let timerCheckAnswer = 10;
let speedTimerCheckAnswer = 150;
let myInterval;
let scoreNum = 0;

function btnC(){

    if(radioAnswer1.checked || radioAnswer2.checked || radioAnswer3.checked || radioAnswer4.checked || radioAnswer5.checked || radioAnswer6.checked){
        btnCheck.disabled = false;
        btnCheck2.disabled = false;

        // alert();
    } 
    // else{
    //     btnCheck.disabled = true;
    //     btnCheck2.disabled = true;
    // }

}

document.querySelector('#divRadiosAnswers').addEventListener('click', () => {
    btnC();
})
document.querySelector('#divRadiosAnswers2').addEventListener('click', () => {
    btnC();
})

document.querySelector('#divRadiosAnswers').addEventListener('mouseenter', () => {
    console.log('OK');
})

function checkingAnswer1(){

    const createA = document.createElement('span');
    createA.id = 'spanScore';

    if(radioAnswer1.checked){

        createA.innerHTML = '+1'

        checkAnswer.appendChild(createA);
        checkAnswer.style.color = 'black';
        createA.style.background = '#00FF5F';

        divTask1.style.display = 'none';
        divTask2.style.display = 'flex';

        scoreNum += 1;
        score.innerHTML = scoreNum;

        // btnCheck.disabled = true;
    }

    if(radioAnswer2.checked){
        
        createA.innerHTML = 'Cow is the wrong answer!'
        checkAnswer.appendChild(createA);
        checkAnswer.style.color = 'white';
        createA.style.background = '#FF0000';
        
    }

    if(radioAnswer3.checked){
        
        createA.innerHTML = 'Rat is the wrong answer!'
        checkAnswer.appendChild(createA);
        checkAnswer.style.color = 'white';
        createA.style.background = '#FF0000';
    }

    myInterval = setInterval(() => {
        timerCheckAnswer--;

        if(timerCheckAnswer <= 0){
            
            btnCheck.disabled = false;

            btnCheck.style.background = '#0089EC';
            btnCheck.innerHTML = 'Check';
            btnCheck.style.width = '100px';
            btnCheck.style.transform = 'scale(1)';
            
            timerCheckAnswer = 10;
            clearInterval(myInterval);
            createA.remove();
        }else if(timerCheckAnswer >= 1){
            
            btnCheck.disabled = true;

            btnCheck.style.background = 'black';
            btnCheck.innerHTML = 'Disabled';
            btnCheck.style.width = '120px';
            btnCheck.style.transform = 'scale(1.2)';
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
        checkAnswer.style.color = 'black';
        createA.style.background = '#00FF5F';

        divTask1.style.display = 'flex';
        divTask2.style.display = 'none';

        scoreNum += 1;
        score.innerHTML = scoreNum;

        // btnCheck2.disabled = true;
    }

    if(radioAnswer5.checked){
        
        createA.innerHTML = 'Bird is the wrong answer!'
        checkAnswer.appendChild(createA);
        checkAnswer.style.color = 'white';
        createA.style.background = '#FF0000';
    }

    if(radioAnswer4.checked){
        
        createA.innerHTML = 'Monkey is the wrong answer!'
        checkAnswer.appendChild(createA);
        checkAnswer.style.color = 'white';
        createA.style.background = '#FF0000';
    }

    myInterval = setInterval(() => {
        timerCheckAnswer--;

        if(timerCheckAnswer <= 0){

            btnCheck2.disabled = false;

            timerCheckAnswer = 10;
            clearInterval(myInterval);
            createA.remove();

            btnCheck2.style.background = '#0089EC';
            btnCheck2.innerHTML = 'Check';
            btnCheck2.style.width = '100px';
            btnCheck2.style.transform = 'scale(1)';
        }else if(timerCheckAnswer >= 1){
            
            btnCheck2.disabled = true;

            btnCheck2.style.background = 'black';
            btnCheck2.innerHTML = 'Disabled';
            btnCheck2.style.width = '120px';
            btnCheck2.style.transform = 'scale(1.2)';
        }
        console.log(timerCheckAnswer)
    }, speedTimerCheckAnswer)

}

function getScore(){

    localStorage.setItem('scoreUser', scoreNum);
    score.innerHTML = localStorage.getItem('scoreUser');
}

btnCheck.addEventListener('click', () => {

    checkingAnswer1();
    getScore();

    // divTask1.style.display = 'none';
    // divTask2.style.display = 'flex';

    radioAnswer4.checked = false;
    radioAnswer5.checked = false;
    radioAnswer6.checked = false;

    btnCheck2.disabled = true;
    console.log('Btn 2 disabled');
})

btnCheck2.addEventListener('click', () => {

    checkingAnswer2();
    getScore();
    // divTask1.style.display = 'flex';
    // divTask2.style.display = 'none';

    radioAnswer1.checked = false;
    radioAnswer2.checked = false;
    radioAnswer3.checked = false;

    btnCheck.disabled = true;
    console.log('Btn 1 disabled');

})
score.innerHTML = localStorage.getItem('scoreUser');

btnRemoveLastScore.addEventListener('click', () => {

    score.innerHTML ='0';
    localStorage.clear();
    scoreNum = 0;
});