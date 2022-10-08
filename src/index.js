import displayCurrentWeather from "./displayCurrentWeather";
import displayForecast from "./displayForecast";
import getForecastData from "./getForecastData";
import getWeatherData from "./getWeatherData";
import "./styles.css"

const selectors = {
    welcomePage: document.querySelector('.welcomePage'),
    weatherDiv: document.querySelector('.weatherDiv'),
    currentWeatherCard: document.querySelector('.currentWeatherCard'),
    weather: document.getElementById('formSubmit'),
    forecast: document.getElementById('getForecast'),
    formInput: document.getElementById('formInput'),
    searchbar: document.querySelector('.searchbar'),
    placeName: document.querySelector('.placeName'),
    currentTemp: document.querySelector('.currentTemp'),
    feelsLike: document.querySelector('.feelsLike'),
    greeting: document.querySelector('.greeting')
}

function scrollUp() {
    document.documentElement.scrollTop = 0;
}

let intervalNum = 0
selectors.weather.addEventListener('click', ()=>{
    const place = selectors.formInput.value;
    clearInterval(intervalNum);
    intervalNum+=1;
    selectors.welcomePage.style.display = 'none';
    document.querySelector('header').appendChild(selectors.searchbar);
    if(!selectors.searchbar.classList.contains('header')){
        selectors.searchbar.classList.add('header');
    }
    selectors.weatherDiv.classList.remove('hide');
    getCurrentWeather(place);
    getForecast(place);
    scrollUp()
})
document.querySelector('.scrollUp').addEventListener('click', scrollUp);

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
const hours = new Date().getHours();

(function setBackgroundColor(){
    if (hours >=4 && hours <=22){
    selectors.welcomePage.style.background = 'linear-gradient(315deg, rgba(96,180,226,1) 0%, rgba(0,96,193,1) 100%)';
    selectors.currentWeatherCard.style.background = 'linear-gradient(315deg, rgba(96,180,226,1) 0%, rgba(0,96,193,1) 100%)';

    } else {
        selectors.welcomePage.style.background = 'linear-gradient(315deg, rgba(30,94,134,1) 0%, rgba(1,55,88,1) 75%)';
        selectors.currentWeatherCard.style.background = 'linear-gradient(315deg, rgba(30,94,134,1) 0%, rgba(1,55,88,1) 75%)';
    }
})()

const setGreeting = () => {
    let greeting;
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

selectors.greeting.innerHTML = `<span>${setGreeting()},</span>
    <span>Where would you like to get the weather at?</span>`