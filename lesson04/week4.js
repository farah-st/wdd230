const button = document.querySelector(".btn");
function show(){
    console.log("Function is working");
    button.classList.add("newstyle");
}
button.addEventListener("click", show);