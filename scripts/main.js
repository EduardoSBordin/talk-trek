const btnWhiteMode = document.querySelector('#btnWhiteMode');

const getBody = document.querySelector('body');
getBody.style.background = '#21333D';
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

let title = document.querySelector('#title');

let verifyTheme = 0;

function checkTheme(){

    getDivTBT1.classList.toggle('active');
    getDivTBT2.classList.toggle('active');
    getDivTBT3.classList.toggle('active');
    getDivTBT4.classList.toggle('active');
    getDivTBT5.classList.toggle('active');
    getDivTBT6.classList.toggle('active');

    txtTask1.classList.toggle('active');
    txtTask2.classList.toggle('active');
    txtTask3.classList.toggle('active');
    txtTask4.classList.toggle('active');
    txtTask5.classList.toggle('active');
    txtTask6.classList.toggle('active');

    divInf.classList.toggle('active');

    title.classList.toggle('active');
}

function localStorageThem(){

    localStorage.setItem('getVerifyTheme', verifyTheme);
    localStorage.getItem('getVerifyTheme');

    verifyTheme++;

    if(verifyTheme <= 1){

        getBody.style.background = '#21333D';
        console.log(verifyTheme);
    }else{
        verifyTheme = 0;

        getBody.style.background = 'whitesmoke';
        console.log(verifyTheme);
    }

    //console.log(verifyTheme);
}
localStorageThem();

btnWhiteMode.addEventListener('click', ()=>{

//    getBody.classList.toggle('active');
   //getH1.classList.toggle('active');
    checkTheme();
    localStorageThem();
});