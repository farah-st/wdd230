const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/carlsbad%20ca?unitGroup=us&key=C555DG7C296D2Y7XGB2ZBBH3D&contentType=json"
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = t.toFixed(1);
    let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector("#humidity").innerHTML = data.currentConditions.humidity;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';

    document.querySelector('#weather1').innerHTML = data.days[0].datetime;
    document.querySelector("#temp0").innerHTML = data.days[0].temp;
    document.querySelector("#minTemp0").innerHTML = data.days[0].tempmin;
    document.querySelector("#maxTemp0").innerHTML = data.days[0].tempmax;
    document.querySelector('#weather2').innerHTML = data.days[1].datetime;
    document.querySelector("#temp2").innerHTML = data.days[1].temp;
    document.querySelector("#minTemp2").innerHTML = data.days[1].tempmin;
    document.querySelector("#maxTemp2").innerHTML = data.days[1].tempmax;
    document.querySelector('#weather3').innerHTML = data.days[2].datetime;
    document.querySelector("#temp3").innerHTML = data.days[2].temp;
    document.querySelector("#minTemp3").innerHTML = data.days[2].tempmin;
    document.querySelector("#maxTemp3").innerHTML = data.days[2].tempmax;


  };
getWeather();

