import getTime from "./getTime";

const appendText = (weather) => {
        document.querySelector('.placeName').innerText = weather.name;
        document.querySelector('.currentTemp').innerText = weather.current;
        document.querySelector('.feelsLike').innerText = weather.feelsLike;
        document.querySelector('.timeDate').innerText = getTime(weather)
        setInterval(function (){document.querySelector('.timeDate').innerText = getTime(weather)}, 1000);
}   

export default appendText