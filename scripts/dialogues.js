const btnLinkViewTxt = document.querySelector('#btnLinkViewTxt');
const divTxtT = document.querySelector('#divTxtT');
const closeModal = document.querySelector('#closeModal');

btnLinkViewTxt.addEventListener('click', () => {

    divTxtT.style.display = 'flex';
    console.log('Ok')
});

closeModal.addEventListener('click', () => {

    divTxtT.style.display = 'none';
})