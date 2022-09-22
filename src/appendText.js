const appendText = (weather) => {
    document.querySelector('.placeName').innerText = weather.name;
    document.querySelector('.currentTemp').innerText = weather.current;
    document.querySelector('.feelsLike').innerText = weather.feelsLike;
}

export default appendText