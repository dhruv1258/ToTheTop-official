let burger = document.querySelector('.burger');
let navbar = document.querySelector('.navbar');
let navList = document.querySelector('.nav-list');
let rightNav = document.querySelector('.right-nav');


burger.addEventListener('click', ()=>{
    navList.classList.toggle('visibility-class');
    rightNav.classList.toggle('visibility-class');
    navbar.classList.toggle('h-nav');

})