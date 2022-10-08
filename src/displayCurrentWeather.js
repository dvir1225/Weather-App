import getTime from "./getTime";
import getIcon from "./getIcon";

const displayCurrentWeather = (weather) => {
    const weatherDiv = document.querySelector('.weatherDiv');
    const visibility = weather.visibility;
    const getVisibility = () => {
        let result;
        if(visibility<40){
            result = 'Dense fog'
        } else if(visibility<200){
            result = 'Thick fog'
        }else if(visibility<400){
            result = 'Fog'
        } else if(visibility<1000){
            result = 'Moderate fog'
        } else if(visibility<2000){
            result = 'Very poor visibility'
        } else if(visibility<4000){
            result = 'Poor visibility'
        } else if(visibility<9000){
            result = 'Moderate visibility'
        } else if(visibility<20000){
            result = 'Good visibility'
        } else if(visibility<40000){
            result = 'Very good visibility'
        } else {
            result = 'Excellent visibility'
        }
        return result;
    }

    weatherDiv.innerHTML = `
    <div class="placeName">${weather.name}, ${weather.country}</div>
    <div class="timeDate">${getTime(weather)}</div>
    <div class="currentTemp">Current temp is ${weather.current}°C</div>
    <div class="feelsLike">Feels like ${weather.feelsLike} °C</div>
    <div class="visibility">${getVisibility()}</div>
    <div class="icon"><img class="weatherIcon" src=${getIcon(weather.icon)} alt=""></div>`;

    setInterval(function (){document.querySelector('.timeDate').innerText = getTime(weather)}, 1000);
}   

export default displayCurrentWeather