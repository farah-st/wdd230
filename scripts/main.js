let date = new Date();
let lastUpdate = new Date(document.lastModified);
document.querySelector("#updated").innerHTML = `Last updated: ${lastUpdate}`;