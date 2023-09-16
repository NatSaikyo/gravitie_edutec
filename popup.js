function abrirPopup() {
    const openpopup = document.querySelector('#popup');
    openpopup.classList.remove('popup_n');
    const closemenu = document.querySelector('#menu_y');
    closemenu.classList.add('menu_n');
}

function closePopup() {
    const closepopup = document.querySelector('#popup');
    closepopup.classList.add('popup_n');
    const openmenu = document.querySelector('#menu_y');
    openmenu.classList.remove('menu_n');    
}

function openRegra() {
    const openregra = document.querySelector('#popup_regra');
    openregra.classList.remove('popup_regras_n');
}

function closeRegra() {
    const closeregra = document.querySelector('#popup_regra');
    closeregra.classList.add('popup_regras_n');
}