const spanUsername = document.querySelector('#spanUsername');

function getUserName(){
    const getName = prompt('What is your name ?');

    localStorage.setItem('userName', getName);



    spanUsername.innerHTML = localStorage.getItem('userName');
}

spanUsername.innerHTML = localStorage.getItem('userName');
getUserName();