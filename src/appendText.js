import getTime from "./getTime";

const appendText = (weather, lat, lon) => {
    getTime(lat, lon).then((time) =>{
        document.querySelector('.placeName').innerText = weather.name;
        document.querySelector('.currentTemp').innerText = weather.current;
        document.querySelector('.feelsLike').innerText = weather.feelsLike;
        document.querySelector('.timeDate').innerText = 
        (`${time.dayOfWeek}, ${time.day}.${time.month}.${time.year}, ${time.hour}:${time.minute}:${time.second}`)
    })
    
}   

export default appendText