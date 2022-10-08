import getIcon from "./getIcon";

export default function displayForecast(parsedForecast){
    let forecastList = parsedForecast.list;
    const weatherDiv = document.querySelector('.weatherDiv');
    weatherDiv.innerHTML=`<div class="location">${parsedForecast.city.name}, ${parsedForecast.city.country}</div>`;
    
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

        weatherDiv.innerHTML += `
        <div class="timestamp ${index+1}">
            <div class="timestamp--dt">${date}, ${getHours()}</div>
            <div class="timestamp--temp">${Math.round((timestamp.main.temp)*10)/10}°C</div>
            <div class="timestamp--humidity">${timestamp.main.humidity}% Humidity</div>
            <div class="timestamp--wind">Wind speed is ${timestamp.wind.speed} km/hr</div>
            <div class="timestamp--main>${timestamp.weather[0].main}</div>
            <div class="timestamp--description">${timestamp.weather[0].description}</div>
            <div class="timestamp--icon"><img class="timestamp--icon-img" src=${getIcon(icon)} alt=""></div>
        </div>`
    })
}
