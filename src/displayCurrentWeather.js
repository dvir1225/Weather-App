import getTime from "./getTime";
import getIcon from "./getIcon";

const displayCurrentWeather = (weather) => {
    const currentWeatherCard = document.querySelector('.currentWeatherCard');
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
    document.querySelector('.currentPlace').innerHTML = 
    `<span>${weather.name}, ${weather.country}</span>`

    currentWeatherCard.innerHTML = `
    <div class="weatherCard-body">
        <div class="weatherCard-body-left">
            <div class="placeName">
                Current weather at <span>${weather.name}, ${weather.country}</span>
            </div>
            <div class="timeDate">${getTime(weather)}</div>
            <div class="weatherCard-weather">
                <img class="weatherIcon" src=${getIcon(weather.icon)} alt="">
                <span class="currentTemp"><span>${weather.current}°</span>C</span>
            </div>
        </div>
        <div class="weatherCard-body-right">
            <div class="feelsLike">Feels like ${weather.feelsLike}° C</div>
            <div class="humidity"> Humidity: ${weather.humidity}%</div>
            <div class="wind">Wind speed: ${weather.wind} km/hr</div>
            <div class="visibility">${getVisibility()}</div>
        </div>
    </div>
    <div class="weatherCard-description">
        <span>${weather.weatherMain}</span>, ${weather.weatherDescription}
    </div>`

    setInterval(function (){
        document.querySelector('.timeDate').innerText = getTime(weather)
    }, 1000);
}   

export default displayCurrentWeather