import { useState, React } from "react";
import "./AdditionalWeatherDetails.css";

export default function AdditionalWeatherDetails({weatherInfo}) {
  let weatherCondition;
  if(weatherInfo!=null){
    weatherCondition = {
      maxTemp : Math.round(weatherInfo.main.temp_max),
      minTemp : Math.round(weatherInfo.main.temp_min),
      feelsLike: Math.round(weatherInfo.main.feels_like),
      humidity: weatherInfo.main.humidity,
      pressure : weatherInfo.main.pressure,
      wind: Math.round(weatherInfo.wind.speed)
    };
}
else {
  weatherCondition = {
    maxTemp : 0,
    minTemp : 0,
    feelsLike: 0,
    humidity: 0,
    pressure : 0,
    wind: 0
  };
}
  let [opened, setOpened] = useState(null);

  let additionalDetailsContainer = [<span> 
  <p className="row align-items-end">
    {" "}
    <span className="col-md-5 col-sm-6 col-9">
      {" "}
      <span className="material-symbols-outlined">device_thermostat</span>
      Temp: Max <span id="max-temp">{weatherCondition.maxTemp}°C</span>
    </span>
    <span className="col-md-3 col-6">
      {" "}
      , Min <span id="min-temp">{weatherCondition.minTemp}°C</span>
    </span>{" "}
    <span className="col-md-4 mt-md-0 col-6 mt-3">
      , Feels like <span id="feels-like">{weatherCondition.feelsLike}°C</span>
    </span>
  </p>
  <hr />
  <p>
    <span className="material-symbols-outlined">humidity_percentage</span>
    Humidity: <span id="humidity">{weatherCondition.humidity}%</span>
  </p>
  <hr />
  <p>
    <span className="material-symbols-outlined">
      swap_driving_apps_wheel
    </span>
    Pressure: <span id="pressure">{weatherCondition.pressure}</span>
  </p>
  <hr />
  <p>
    <span className="material-symbols-outlined">air</span>
    Wind: <span id="wind-speed">{weatherCondition.wind} km/h</span>
  </p>
</span>];

    function openContainer(){
      if(opened==null)
        setOpened(true);
      
      else
        setOpened(!opened);
    }


  if(opened == null){
    return (
      <span>
        <div className="additional-weather-details">
        <button className="additional-details-button " >
          Additional Details
          <span className="material-symbols-outlined" id="arrow" onClick={openContainer}>
            arrow_drop_down
          </span>
        </button>
        <div id="additional-details-container">
          {additionalDetailsContainer}
        </div>
      </div>
        <div className = "emptyMovingContainer">
        </div>
      </span>
    );
  }
  else if(opened){
    return (
    <span>
      <div className="additional-weather-details">
      <button className="additional-details-button " onClick={openContainer} >
        Additional Details
        <span className="material-symbols-outlined rotateArrowOpen" id="arrow">
          arrow_drop_down
        </span>
      </button>
      <div id="additional-details-container" className="animationContainer1">
        {additionalDetailsContainer}
      </div>
    </div>
      <div className = "emptyMovingContainer animationContainer2">
      </div>
    </span>
  );}
  else
  return (
    <span>
      <div className="additional-weather-details">
      <button className="additional-details-button " onClick={openContainer} >
        Additional Details
        <span className="material-symbols-outlined rotateArrowClose" id="arrow">
          arrow_drop_down
        </span>
      </button>
      <div id="additional-details-container" className="animationContainer1Reverse">
        {additionalDetailsContainer}
      </div>
    </div>
      <div className = "emptyMovingContainer animationContainer2Reverse">
      </div>
    </span>
  );
  
}


