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

btnWhiteMode.addEventListener('click', ()=>{

   getBody.classList.toggle('active');
   getH1.classList.toggle('active');

});