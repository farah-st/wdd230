const apiURL = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/dolores%20hidalgo?unitGroup=metric&key=C555DG7C296D2Y7XGB2ZBBH3D&contentType=json"
const getWeather = async () => {
    const response = await fetch(apiURL);
    const data = await response.json();
    console.log(data);
    let t = data.currentConditions.temp;
    document.querySelector('#t').textContent = t.toFixed(1);
    // let image = `https://raw.githubusercontent.com/visualcrossing/WeatherIcons/main/SVG/1st%20Set%20-%20Color/${data.currentConditions.icon}.svg`;
    document.querySelector("#humidity").innerHTML = data.currentConditions.humidity;
    document.querySelector('#condition').textContent =  data.currentConditions.conditions;
    document.querySelector('#weather_icon').src = image;
    document.querySelector('#weather_icon').alt= data.currentConditions.conditions + ' icon';

  };
getWeather();

