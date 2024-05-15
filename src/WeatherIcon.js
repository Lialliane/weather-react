
export default function WeatherIcon({weatherConditionIcon, alt, currentWeather}){
    let img;
    let className = null;
    let id = null;

    if(currentWeather){
        id = "current-weather-icon";
    }
    else
        className="week-day-icon img-fluid col-6";

    switch(weatherConditionIcon){
        case "01d" :
            img = <img src = "assets/day.svg" alt = {alt} id={id} className={className} />;
            break;
        case "01n" :
            img = <img src = "assets/night.svg" alt = {alt} id={id} className={className}/>;
            break;
        case "02d" :
            img = <img src = "assets/cloudy-day-1.svg" alt = {alt}  id={id} className={className}/>;
            break;
        case "02n" :
            img = <img src = "assets/cloudy-night-1.svg" alt = {alt} id={id} className={className}/>;
            break;
        case "03d" :
            img = <img src = "assets/cloudy-day-3.svg" alt = {alt}  id={id} className={className}/>;
            break;
        case "03n" :
            img = <img src = "assets/cloudy-night-3.svg" alt = {alt}  id={id} className={className}/>;
            break;
        case "04d" :
        case "04n" :
            img = <img src = "assets/cloudy.svg" alt = {alt} id={id}  className={className}/>;
            break; 
            
        case "09d" :
        case "09n" :
            case "10n" :
            img = <img src = "assets/rainy-6.svg" alt = {alt} id={id} className={className}/>;
            break; 
        case "10d" :
            img = <img src = "assets/rainy-3.svg" alt = {alt} id={id} className={className}/>;
            break; 
        case "11d" :
        case "11n" :
            img = <img src = "assets/thunder.svg" alt = {alt} id={id} className={className}/>;
            break; 
        case "13d" :
        case "13n" :
            img = <img src = "assets/snowy-6.svg" alt = {alt} id={id} className={className}/>;
            break; 
        case "50d" :
        case "50n" :
            img = <img src = "https://openweathermap.org/img/wn/50d@2x.png" alt = {alt} id={id} className={className}/>;
            break; 
        default:
            img = <img src = "assets/blank"  alt = {alt} id={id} className={className}/>;
        }

        

    return img;

}