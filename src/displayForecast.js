import getIcon from "./getIcon";

export default function displayForecast(parsedForecast){
    let forecastList = parsedForecast.list;
    const forecastCards = document.querySelector('.forecastCards');

    function setBackgroundColor(){
        if (new Date().getHours() >=4 && new Date().getHours() <=22){
            return 'linear-gradient(315deg, rgba(96,180,226,1) 0%, rgba(0,96,193,1) 100%)';
        } else {
            return 'linear-gradient(315deg, rgba(30,94,134,1) 0%, rgba(1,55,88,1) 75%)';
        }
    }

    forecastCards.innerHTML += `<h1 class="forecastCards--title"><u>5 Day Forecast</u></h1>`
    forecastList.forEach((timestamp, index) => {
        const fullDate = new Date(timestamp.dt*1000).toGMTString();
        const date = fullDate.slice(0, 11)
        const hours = new Date(timestamp.dt*1000).getUTCHours()
        const getHours = () => {
            if(hours===12){
                return `${hours}:00 PM`
            } else if (hours === 0){
                return `12:00 AM`
            } else if (hours>12){
                return `${hours-12}:00 PM`
            } else return `${hours}:00 AM`
        };
        
        let icon = timestamp.weather[0].icon;  

        forecastCards.innerHTML += `
        <div class="forecast ${index+1}" style="background:${setBackgroundColor()}">
            <div class="forecast--left">
                <div class="forecast--dt">${date}, ${getHours()}</div>
                <div class="forecast--main"><span>${timestamp.weather[0].main}</span>, ${timestamp.weather[0].description}</div>
            </div>
            <div class=forecast--mid>
                <div class="forecast--icon"><img class="forecast--icon-img" src=${getIcon(icon)} alt=""></div>
                <div class="forecast--temp"><span>${Math.round((timestamp.main.temp)*10)/10}°</span>C</div>
            </div>
            <div class="forecast--right">
                <div class="forecast--humidity"><span>Humidity:</span> ${timestamp.main.humidity}%</div>
                <div class="forecast--wind"><span>Wind speed:</span> ${Math.round((timestamp.wind.speed)*10)/10} km/hr</div>
            </div
        </div>`;
    });
}
