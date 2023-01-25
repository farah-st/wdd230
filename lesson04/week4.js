const button = document.querySelector(".btn");
function show(){
    // button.classList.add("newstyle");
    button.classList.toggle("newstyle");

}
button.addEventListener("click", show);

//Hamburger meny button JS
const mainNav = document.querySelector(".navigation");
const hamButton = document.querySelector(".ham");
//when we press this button we want this to happend () function
hamButton.addEventListener('click', ()=> {
    mainNav.classList.toggle('responsive');

}) 