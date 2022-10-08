import clear from "../src/images/clear.svg";
import nt_clear from '../src/images/nt_clear.svg';
import mostlysunny from '../src/images/mostlysunny.svg';
import nt_mostlysunny from '../src/images/nt_mostlysunny.svg'
import mostlycloudy from '../src/images/mostlycloudy.svg';
import nt_mostlycloudy from '../src/images/nt_mostlycloudy.svg';
import cloudy from '../src/images/cloudy.svg';
import nt_cloudy from '../src/images/nt_cloudy.svg';
import chancerain from '../src/images/chancerain.svg';
import nt_chancerain from '../src/images/nt_chancerain.svg';
import rain from '../src/images/rain.svg'
import nt_rain from '../src/images/nt_rain.svg'
import tstorms from '../src/images/tstorms.svg'
import nt_tstorms from '../src/images/nt_tstorms.svg'
import snow from '../src/images/snow.svg'
import nt_snow from '../src/images/nt_snow.svg'
import fog from '../src/images/fog.svg'
import nt_fog from '../src/images/nt_fog.svg'


export default function getIcon (icon){
    let iconSrc;
    if (icon==="01d"){
        iconSrc = clear;
    } else if (icon==="01n"){
        iconSrc = nt_clear;
    } else if (icon==="02d"){
        iconSrc = mostlysunny;
    } else if (icon==="02n"){
        iconSrc = nt_mostlysunny;
    } else if (icon==="03d"){
        iconSrc =  mostlycloudy;
    } else if (icon==="03n"){
        iconSrc =  nt_mostlycloudy;
    } else if (icon==="04d"){
        iconSrc = cloudy;
    } else if (icon==="04n"){
        iconSrc = nt_cloudy;
    } else if (icon==="09d"){
        iconSrc = chancerain;
    } else if (icon==="09n"){
        iconSrc = nt_chancerain;
    } else if (icon==="10d"){
        iconSrc = rain;
    } else if (icon==="10n"){
        iconSrc =  nt_rain;
    } else if (icon==="11d"){
        iconSrc = tstorms;
    } else if (icon==="11n"){
        iconSrc = nt_tstorms;
    } else if (icon==="13d"){
        iconSrc = snow;
    } else if (icon==="13n"){
        iconSrc =  nt_snow;
    } else if (icon==="50d"){
        iconSrc = fog;
    } else if (icon==="50n"){
        iconSrc = nt_fog;
    } return iconSrc;
}