export default async function getForecastData(place) {
    const getForecast = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=c20e51e1cd4bf0147fee570dd34d8dd1&units=metric`);
    const parsedForecast = await getForecast.json()
    return parsedForecast
}