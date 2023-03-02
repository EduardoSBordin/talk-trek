// const spanUsername = document.querySelector('#spanUsername');

// function getUserName(){
//     //const getName = prompt('What is your name ?');

//     localStorage.setItem('userName', getName);



//     spanUsername.innerHTML = localStorage.getItem('userName');

//     if(spanUsername || getName){
//         getName.remove();
//     }
// }

// spanUsername.innerHTML = localStorage.getItem('userName');
// getUserName();
const btnWhiteMode = document.querySelector('#btnWhiteMode');

const getBody = document.querySelector('body');
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
}

btnWhiteMode.addEventListener('click', ()=>{

   getBody.classList.toggle('active');
   getH1.classList.toggle('active');
    checkTheme();
});