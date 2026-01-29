const API_KEY = "a3f74a3f36aa43dcbf424854262901";
const ENUGU = "6.4402,7 .4943";

function getWeather(){
    const url = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${ENUGU}&days=2&aqi=no&
    alerts=no`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        const today =
        data.forecast.forecastday[0];
        const tomorrow = 
        data.forecast.forecastday[1];

        document.getElementById("result").innerHTML= `
        <p><strong>Today:</strong> ${today.day.condition.text}.
        Average temperature around ${today.day.avgtemp_c} \u00B0C.
        Chance of rain is ${today.day.daily_chance_of_rain}%.</p>
        
         <p><strong>Tomorrow:</strong> ${tomorrow.day.condition.text}.
        Average temperature around ${tomorrow.day.avgtemp_c} \u00B0C.
        Chance of rain is ${tomorrow.day.daily_chance_of_rain}%.</p>
        `;

    })
    .catch(() => {
        document.getElementById("result").innerHTML = "<p>Unable to load weather data at the moment</p>";
    });
}