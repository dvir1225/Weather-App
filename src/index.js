import displayCurrentWeather from "./displayCurrentWeather";
import displayForecast from "./displayForecast";
import getForecastData from "./getForecastData";
import getWeatherData from "./getWeatherData";
import "./styles.css"

const selectors = {
    weather: document.getElementById('formSubmit'),
    forecast: document.getElementById('getForecast'),
    formInput: document.getElementById('formInput'),
    placeName: document.querySelector('.placeName'),
    currentTemp: document.querySelector('.currentTemp'),
    feelsLike: document.querySelector('.feelsLike'),
    greeting: document.querySelector('.greeting')
}

let intervalNum = 0
selectors.weather.addEventListener('click', ()=>{
    const place = selectors.formInput.value;
    clearInterval(intervalNum);
    intervalNum+=1;
    getCurrentWeather(place);
})

selectors.forecast.addEventListener('click', ()=>{
    const place = selectors.formInput.value;
    clearInterval(intervalNum);
    intervalNum+=1;
    getForecast(place)
})

//fetch current weather only
async function getCurrentWeather(place){
    try {
        const weather = await getWeatherData(place);
        displayCurrentWeather(weather)
        console.log('Got weather');
    }

    catch {
        console.log("Ooops... Couldn't get weather");
    }
}

async function getForecast(place){
    try {
        const forecastList = await getForecastData(place);
        displayForecast(forecastList);
        console.log('Got forecast');
    }
    catch {
        console.log("Ooops... Couldn't get forecast")
    }
}

const setGreeting = () => {
    let greeting;
    const hours = new Date().getHours();
    if (hours >= 4 && hours < 12 ){
        greeting = 'Good Morning'
    } else if (hours >= 12 && hours < 18){
        greeting = 'Good Afternoon'
    } else if (hours >=18 && hours < 22){
        greeting = 'Good Evening'
    } else {
        greeting = 'Good Night'
    } return greeting;
}

selectors.greeting.innerHTML = setGreeting();