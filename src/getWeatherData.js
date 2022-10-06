export default async function getWeatherData(place){
    const getWeatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=c20e51e1cd4bf0147fee570dd34d8dd1&units=metric&exclude=minutely,hourly,daily,alerts`)
    const parsedData = await getWeatherData.json()
    console.log(parsedData)
    let weather = {
        name: parsedData.name,
        country: parsedData.sys.country,
        current: Math.round((parsedData.main.temp)*10)/10,
        feelsLike: Math.round((parsedData.main.feels_like)*10)/10,
        weatherMain: parsedData.weather[0].main,
        weatherDescription: parsedData.weather[0].description,
        icon: parsedData.weather[0].icon,
        visibility: parsedData.visibility,
        humidity: parsedData.main.humidity,
        wind: parsedData.wind.speed,
        offset: parsedData.timezone
    };
    return weather
}

