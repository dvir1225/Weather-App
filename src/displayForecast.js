import getIcon from "./getIcon";

export default function displayForecast(parsedForecast){
    let forecastList = parsedForecast.list;
    const forecastCards = document.querySelector('.forecastCards');

    function setBackgroundColor(){
        if (new Date().getHours() >=4 && new Date().getHours() <=22){
            return '#60B4E2';
        } else {
            return '#185E89';
        }
    }
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
        <div class="forecast ${index+1}" style="background-color:${setBackgroundColor()}">
            <div class="forecast--dt">${date}, ${getHours()}</div>
            <div class="forecast--temp">${Math.round((timestamp.main.temp)*10)/10}°C</div>
            <div class="forecast--humidity">${timestamp.main.humidity}% Humidity</div>
            <div class="forecast--wind">Wind speed is ${timestamp.wind.speed} km/hr</div>
            <div class="forecast--main>${timestamp.weather[0].main}</div>
            <div class="forecast--description">${timestamp.weather[0].description}</div>
            <div class="forecast--icon"><img class="forecast--icon-img" src=${getIcon(icon)} alt=""></div>
        </div>`;
        
    });
}
