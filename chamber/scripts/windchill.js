const temp = document.querySelector('.t').textContent;

const windspeed = document.querySelector('.ws').textContent;
let chill = Math.round((35.74 + (0.6215 * temp))-(35.75 * Math.pow(windspeed,0.16)) + (0.4275*temp*Math.pow(windspeed,0.16)));

let windchill = document.querySelector('.wc');

if (temp <= 50 && windspeed >= 3){
	windchill.textContent = chill + ' mph';
}

