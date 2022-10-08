export default function getIcon (icon){
    let iconSrc;
    if (icon==="01d"){
        iconSrc =  '../src/images/clear.svg';
    } else if (icon==="01n"){
        iconSrc =  '../src/images/nt_clear.svg';
    } else if (icon==="02d"){
        iconSrc =  '../src/images/mostlysunny.svg';
    } else if (icon==="02n"){
        iconSrc =  '../src/images/nt_mostlysunny.svg';
    } else if (icon==="03d"){
        iconSrc =  '../src/images/mostlycloudy.svg';
    } else if (icon==="03n"){
        iconSrc =  '../src/images/nt_mostlycloudy.svg';
    } else if (icon==="04d"){
        iconSrc =  '../src/images/cloudy.svg';
    } else if (icon==="04n"){
        iconSrc =  '../src/images/nt_cloudy.svg';
    } else if (icon==="09d"){
        iconSrc =  '../src/images/chancerain.svg';
    } else if (icon==="09n"){
        iconSrc =  '../src/images/nt_chancerain.svg';
    } else if (icon==="10d"){
        iconSrc =  '../src/images/rain.svg';
    } else if (icon==="10n"){
        iconSrc =  '../src/images/nt_rain.svg';
    } else if (icon==="11d"){
        iconSrc =  '../src/images/tstorms.svg';
    } else if (icon==="11n"){
        iconSrc =  '../src/images/nt_tstorms.svg';
    } else if (icon==="13d"){
        iconSrc =  '../src/images/snow.svg';
    } else if (icon==="13n"){
        iconSrc =  '../src/images/nt_snow.svg';
    } else if (icon==="50d"){
        iconSrc = '../src/images/fog.svg';
    } else if (icon==="50n"){
        iconSrc = '../src/images/nt_fog.svg';
    } return iconSrc;
}