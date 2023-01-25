const button = document.querySelector(".btn");
function show(){
    // console.log("Function is working");
    button.classList.add("newstyle");
    // console.log("Function is working");
}
button.addEventListener("click", show);