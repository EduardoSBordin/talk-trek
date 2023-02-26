const radioAnswer1 = document.querySelector('#radioAnswer1');
const radioAnswer2 = document.querySelector('#radioAnswer2');
const radioAnswer3 = document.querySelector('#radioAnswer3');

const btnCheck = document.querySelector('#btnCheck');

const checkAnswer = document.querySelector('#checkAnswer');

function checkingAnswer(){

    if(radioAnswer1.checked){
        checkAnswer.innerHTML = 'Dog is the correct answer!';
        checkAnswer.style.color = '#00FF5F';
    }

    if(radioAnswer2.checked){
        checkAnswer.innerHTML = 'Cow is the wrong answer!';
        checkAnswer.style.color = '#FF0000';
    }

    if(radioAnswer3.checked){
        checkAnswer.innerHTML = 'Rat is the wrong answer!';
        checkAnswer.style.color = '#FF0000';
    }
}

btnCheck.addEventListener('click', () => {

    checkingAnswer();

    // alert();
})