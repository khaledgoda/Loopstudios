let burger = document.querySelector(`.burger`);
let header = document.querySelector(`header .container`);
let burgerNav = document.querySelector(`.burger-container`);
let close = document.querySelector(`.close`);
let link = document.querySelector(`ul a`);
let addCards = document.querySelector(`.button-main`);
let addCards1 = document.querySelector(`.button`);
let newCards = document.querySelector(`div.add-cards`);

burger.addEventListener(`click`, ()=> {
    header.style.display = `none`;
    burgerNav.style.display =`block`;
});

close.addEventListener(`click`, ()=> {
    header.style.display = `block`;
    burgerNav.style.display =`none`;
});

link.addEventListener(`click`, ()=> {
    header.style.display = `block`;
    burgerNav.style.display =`none`;
});

addCards.addEventListener(`click`, ()=> {
    newCards.style.display = `block`;
});

addCards1.addEventListener(`click`, ()=> {
    newCards.style.display = `block`;
});