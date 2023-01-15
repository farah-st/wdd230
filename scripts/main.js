let date = document.lastModified;
let lastModifiedDate = new Date(date);
document.querySelector(".updated").innerHTML = `Last updated: ${lastModifiedDate}`;

let date = new Date();
let lastUpdate = new Date(document.lastModified);
document.querySelector(".lastUpdate").innerHTML = `Last updated: ${lastUpdate}`;