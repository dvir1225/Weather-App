import appendText from "./appendText";
const selectors = {
    submit: document.getElementById('formSubmit'),
    formInput: document.getElementById('formInput'),
    placeName: document.querySelector('.placeName'),
    currentTemp: document.querySelector('.currentTemp'),
    feelsLike: document.querySelector('.feelsLike')
}


selectors.submit.addEventListener('click', ()=>{
    const place = selectors.formInput.value;
    getWeatherData(place)
})

async function getWeatherData(place){
    try {
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
        appendText(weather);
        console.log('success')
    }

    catch {
        console.log("Ooops... there's an error");
    }
}