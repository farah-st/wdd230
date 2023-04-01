function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x=document.getElementById("hamburgerBtn");
x.onclick=toggleMenu;

let lastUpdate = document.lastModified;
document.querySelector("#lastUpdate").innerHTML = `Last modification: ${lastUpdate}`;

//storage locan and session 
localStorage.setItem("name", "Farah Stumpf - Permanent");
sessionStorage.setItem("class", "WDD230 - not Permanent");