async function getWeatherData (){
    try {
        const place = prompt('Where would you like to get the weather at?')
        const getWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=c20e51e1cd4bf0147fee570dd34d8dd1&units=metric&exclude=minutely,hourly,daily,alerts`)
        const parsedData = await getWeatherData.json()
        let weather = {
            name: parsedData.name,
            current: parsedData.main.temp,
            feelsLike: parsedData.main.feels_like,
            minTemp: parsedData.main.temp_min,
            maxTemp: parsedData.main.temp_max,
            weatherMain: parsedData.weather[0].main,
            weatherDescription: parsedData.weather[0].description
        };
        appendText(weather)
    }

    catch {
        alert("Ooops... there's an error");
    }
}

function appendText(weather){
    selectors.placeName.innerText = weather.name;
    selectors.currentTemp.innerText = weather.current;
    selectors.feelsLike.innerText = weather.feelsLike;
}

getWeatherData()

const selectors = {
    placeName: document.querySelector('.placeName'),
    currentTemp: document.querySelector('.currentTemp'),
    feelsLike: document.querySelector('.feelsLike')
}

