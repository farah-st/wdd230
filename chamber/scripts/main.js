const date1 = document.querySelector("#date1");
const message = document.querySelector("#emessage");
try {
	const options = {
		weekday: "long",
		day: "numeric",
		month: "long",
		year: "numeric"
	};
	date1.innerHTML = `${new Date().toLocaleDateString("en-UK", options)}</span>`;
} catch (e) {
	console.log("Error with code or your browser does not support Locale");
}

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x=document.getElementById("hamburgerBtn");
x.onclick=toggleMenu;

let lastUpdate = document.lastModified;
document.querySelector("#lastUpdate").innerHTML = `Last modification: ${lastUpdate}`;

let date = new Date();
// returns a number 0-sun , 1-mon 
weekDay= date.getDay(); 
if(weekDay == 1 || weekDay == 2) {
	document.getElementById("date2").innerHTML ="🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m";
};

//storage locan and session 
localStorage.setItem("name", "Farah Stumpf - Permanent");
sessionStorage.setItem("class", "WDD230 - not Permanent");