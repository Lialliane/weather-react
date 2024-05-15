import { React } from "react";
import WeatherIcon from "./WeatherIcon";
import FormatDate from "./FormatDate";

export default function WeekWeatherForecast({weatherForecast, unitSelected}){
    console.log("inside week weather function:");
    console.log(weatherForecast);
    let numberOfWeeksToRender = 5;

    function formatTemp(temp){
        console.log("this is iside temp function");
        console.log(temp);
        let newTemp= temp;
        if(unitSelected==='f'){
            newTemp = (temp * 9/5) + 32;
        }

        if(temp<10){
            return "0" + Math.round(newTemp);
        }
        else
            return Math.round(newTemp);
    }
    

    return <div id="week-weather-forecast" className="row">
        
        {(weatherForecast? weatherForecast.map((weekDay, index) => (index<numberOfWeeksToRender)?
        <div className="week-weather-container d-lg-flex flex-lg-row flex-column col-2 container ">
                <div className="week-weather col-6">
                    <b className="week-day-date d-block">
                    <FormatDate dateData={weekDay.dt} fullDate={false} />
                    </b>
                    <p className="week-day-temp d-flex flex-column">
                        <span>{formatTemp(weekDay.main.temp_max)}°{unitSelected.toUpperCase()}</span>
                        <span>{formatTemp(weekDay.main.temp_min)}°{unitSelected.toUpperCase()}</span>
                    </p>

                </div>
                <WeatherIcon weatherConditionIcon = {weekDay.weather[0].icon} alt={weekDay.weather[0].description} currentWeather={false} />
        </div>: null ) : null)}
    </div>;
}