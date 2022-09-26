import appendText from "./appendText";
import getTime from "./getTime";
import getWeatherData from "./getWeatherData";

const selectors = {
    submit: document.getElementById('formSubmit'),
    formInput: document.getElementById('formInput'),
    placeName: document.querySelector('.placeName'),
    currentTemp: document.querySelector('.currentTemp'),
    feelsLike: document.querySelector('.feelsLike')
}

let intervalNum = 0
selectors.submit.addEventListener('click', ()=>{
    const place = selectors.formInput.value;
    clearInterval(intervalNum)
    intervalNum+=1;
    getCurrentWeather(place)
})

//fetch current weather only
async function getCurrentWeather(place){
    try {
        const weather = await getWeatherData(place);
        appendText(weather)
        console.log('success');
    }

    catch {
        console.log("Ooops... there's an error");
    }
}