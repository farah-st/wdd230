const mainNav = document.querySelector(".navigation");
const hamButton = document.querySelector(".ham");
hamButton.addEventListener('click', ()=> {
    mainNav.classList.toggle('responsive');

}) 