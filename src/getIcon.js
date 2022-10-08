export default function getIcon (icon){
    let iconSrc;
    if (icon==="01d"){
        iconSrc =  '../src/images/clear.png';
    } else if (icon==="01n"){
        iconSrc =  '../src/images/nt_clear.png';
    } else if (icon==="02d"){
        iconSrc =  '../src/images/mostlysunny.png';
    } else if (icon==="02n"){
        iconSrc =  '../src/images/nt_mostlysunny.png';
    } else if (icon==="03d"){
        iconSrc =  '../src/images/mostlycloudy.png';
    } else if (icon==="03n"){
        iconSrc =  '../src/images/nt_mostlycloudy.png';
    } else if (icon==="04d"){
        iconSrc =  '../src/images/cloudy.png';
    } else if (icon==="04n"){
        iconSrc =  '../src/images/nt_cloudy.png';
    } else if (icon==="09d"){
        iconSrc =  '../src/images/chancerain.png';
    } else if (icon==="09n"){
        iconSrc =  '../src/images/nt_chancerain.png';
    } else if (icon==="10d"){
        iconSrc =  '../src/images/rain.png';
    } else if (icon==="10n"){
        iconSrc =  '../src/images/nt_rain.png';
    } else if (icon==="11d"){
        iconSrc =  '../src/images/tstorms.png';
    } else if (icon==="11n"){
        iconSrc =  '../src/images/nt_tstorms.png';
    } else if (icon==="13d"){
        iconSrc =  '../src/images/snow.png';
    } else if (icon==="13n"){
        iconSrc =  '../src/images/nt_snow.png';
    } else if (icon==="50d"){
        iconSrc = '../src/images/fog.png';
    } else if (icon==="50n"){
        iconSrc = '../src/images/nt_fog.png';
    } return iconSrc;
}