let date = new Date();
let lastUpdate = new Date(document.lastModified);
document.querySelector(".lastUpdate").innerHTML = `Last updated: ${lastUpdate}`;