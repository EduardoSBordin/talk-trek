const btnWhiteMode = document.querySelector('#btnWhiteMode');

let getBody = document.querySelector('body');
//getBody.style.background = '#21333D';
const getH1 = document.querySelector('h1');

let getDivTBT1 = document.querySelector('.divTBT1');
let getDivTBT2 = document.querySelector('.divTBT2');
let getDivTBT3 = document.querySelector('.divTBT3');
let getDivTBT4 = document.querySelector('.divTBT4');
let getDivTBT5 = document.querySelector('.divTBT5');
let getDivTBT6 = document.querySelector('.divTBT6');

let txtTask1 = document.querySelector('.txtTask1');
let txtTask2 = document.querySelector('.txtTask2');
let txtTask3 = document.querySelector('.txtTask3');
let txtTask4 = document.querySelector('.txtTask4');
let txtTask5 = document.querySelector('.txtTask5');
let txtTask6 = document.querySelector('.txtTask6');

let divInf = document.querySelector('#divInf');
divInf.style.backdropFilter = `blur(6px)`;

let title = document.querySelector('#title');

let verifyTheme = 0;

console.log(verifyTheme);

function checkTheme(){


    // txtTask1.classList.toggle('active');
    // txtTask2.classList.toggle('active');
    // txtTask3.classList.toggle('active');
    // txtTask4.classList.toggle('active');
    // txtTask5.classList.toggle('active');
    // txtTask6.classList.toggle('active');

}

function localStorageThem(){

    let arrayColor = ['#21333D', 'whitesmoke', '#32424F', '#32424f86', 'red', 'rgba(255, 255, 255, 0.25)'];

    verifyTheme++;

    if(verifyTheme <= 1){

        getBody.style.background = arrayColor[0];

        getDivTBT1.style.background = arrayColor[2];
        getDivTBT2.style.background = arrayColor[2];
        getDivTBT3.style.background = arrayColor[2];
        getDivTBT4.style.background = arrayColor[2];
        getDivTBT5.style.background = arrayColor[2];
        getDivTBT6.style.background = arrayColor[2];

        divInf.style.background = arrayColor[3];
        

        title.style.color = arrayColor[1];

        txtTask1.style.color = arrayColor[1];
        txtTask2.style.color = arrayColor[1];
        txtTask3.style.color = arrayColor[1];
        txtTask4.style.color = arrayColor[1];
        txtTask5.style.color = arrayColor[1];
        txtTask6.style.color = arrayColor[1];

        console.log(verifyTheme);
    }else{

        verifyTheme = 0;

        getBody.style.background = arrayColor[1];

        getDivTBT1.style.background = arrayColor[1];
        getDivTBT2.style.background = arrayColor[1];
        getDivTBT3.style.background = arrayColor[1];
        getDivTBT4.style.background = arrayColor[1];
        getDivTBT5.style.background = arrayColor[1];
        getDivTBT6.style.background = arrayColor[1];

        divInf.style.background = arrayColor[5];
        //divInf.style.backdropFilter = `blur(2px)`;

        title.style.color = arrayColor[0];

        txtTask1.style.color = arrayColor[0];
        txtTask2.style.color = arrayColor[0];
        txtTask3.style.color = arrayColor[0];
        txtTask4.style.color = arrayColor[0];
        txtTask5.style.color = arrayColor[0];
        txtTask6.style.color = arrayColor[0];

        console.log(verifyTheme);
    }

    localStorage.setItem('getBodyTheme', getBody.style.background);

    localStorage.setItem('getDivInf', divInf.style.background);

    localStorage.setItem('title', title.style.color);

    localStorage.setItem('getDivTBT1', getDivTBT1.style.background);
    localStorage.setItem('getDivTBT2', getDivTBT2.style.background);
    localStorage.setItem('getDivTBT3', getDivTBT3.style.background);
    localStorage.setItem('getDivTBT4', getDivTBT4.style.background);
    localStorage.setItem('getDivTBT5', getDivTBT5.style.background);
    localStorage.setItem('getDivTBT6', getDivTBT6.style.background);

    localStorage.setItem('txtTask1', txtTask1.style.color);
    localStorage.setItem('txtTask2', txtTask1.style.color);
    localStorage.setItem('txtTask3', txtTask1.style.color);
    localStorage.setItem('txtTask4', txtTask1.style.color);
    localStorage.setItem('txtTask5', txtTask1.style.color);
    localStorage.setItem('txtTask6', txtTask1.style.color);
    
}


btnWhiteMode.addEventListener('click', ()=>{

    
    localStorageThem();

    localStorage.setItem('getVerifyTheme', verifyTheme);
    verifyTheme = localStorage.getItem('getVerifyTheme');
});

verifyTheme = localStorage.getItem('getVerifyTheme');

getBody.style.background = localStorage.getItem('getBodyTheme');

title.style.color = localStorage.getItem('title');

divInf.style.background = localStorage.getItem('getDivInf');

getDivTBT1.style.background = localStorage.getItem('getDivTBT1');
getDivTBT2.style.background = localStorage.getItem('getDivTBT2');
getDivTBT3.style.background = localStorage.getItem('getDivTBT3');
getDivTBT4.style.background = localStorage.getItem('getDivTBT4');
getDivTBT5.style.background = localStorage.getItem('getDivTBT5');
getDivTBT6.style.background = localStorage.getItem('getDivTBT6');

txtTask1.style.color = localStorage.getItem('txtTask1');
txtTask2.style.color = localStorage.getItem('txtTask2');
txtTask3.style.color = localStorage.getItem('txtTask3');
txtTask4.style.color = localStorage.getItem('txtTask4');
txtTask5.style.color = localStorage.getItem('txtTask5');
txtTask6.style.color = localStorage.getItem('txtTask6');