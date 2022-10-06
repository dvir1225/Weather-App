export default function displayForecast(parsedForecast){
    let forecastList = parsedForecast.list;
    const weatherDiv = document.querySelector('.weatherDiv');
    weatherDiv.innerHTML=`<div class="location">${parsedForecast.city.name}, ${parsedForecast.city.country}</div>`;
    console.log(parsedForecast)
    forecastList.forEach((timestamp, index) => {
        const fullDate = new Date(timestamp.dt*1000).toGMTString();
        const date = fullDate.slice(0, 11)
        const hours = new Date(timestamp.dt*1000).getUTCHours()
        const getHours = () => {
            if(hours>=12){
                return `${hours}:00`
            } else return `0${hours}:00`
        };
        weatherDiv.innerHTML += `
        <div class="timestamp ${index+1}">
            <div class="timestamp--dt">${date}, ${getHours()}</div>
            <div class="timestamp--temp">${Math.round((timestamp.main.temp)*10)/10}°C</div>
            <div class="timestamp--humidity">${timestamp.main.humidity}% Humidity</div>
            <div class="timestamp--wind">Wind speed is ${timestamp.wind.speed} km/hr</div>
            <div class="timestamp--main>${timestamp.weather[0].main}</div>
            <div class="timestamp--description">${timestamp.weather[0].description}</div>
            <div class="timestamp--icon">${timestamp.weather[0].icon}</div>
        </div>`
    })
}
