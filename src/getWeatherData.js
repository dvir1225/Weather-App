async function getWeatherData(place){
    const getWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=c20e51e1cd4bf0147fee570dd34d8dd1&units=metric&exclude=minutely,hourly,daily,alerts`)
    const parsedData = await getWeatherData.json()
    let weather = {
        name: parsedData.name,
        current: Math.floor(parsedData.main.temp),
        feelsLike: Math.floor(parsedData.main.feels_like),
        minTemp: Math.floor(parsedData.main.temp_min),
        maxTemp: Math.floor(parsedData.main.temp_max),
        weatherMain: parsedData.weather[0].main,
        weatherDescription: parsedData.weather[0].description,
        humidity: parsedData.main.humidity,
        offset: parsedData.timezone
    };
    return weather
}

export default getWeatherData;