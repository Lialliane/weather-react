import "./App.css";
import FooterLogo from "./FooterLogo";
import Credit from "./Credit";
import AdditionalWeatherDetails from "./AdditionalWeatherDetails";
import axios from "axios";
import {useState, useEffect } from "react";
import FormatDate from './FormatDate';
import WeatherIcon from "./WeatherIcon";
import WeekWeatherForecast from "./WeekWeatherForecast";




export default function App() {
  let [error, setError] = useState(null);
  let [weatherInfo , setWeatherInfo]= useState(null);
  let [weekWeatherInfo , setweekWeatherInfo] = useState(null);
  let [firstApiCall, setFirstApiCall]= useState(true);
  let [city, setCity] = useState('');
  let [unitSelected, setUnitSelected] = useState('c');
  let [canUseLocation, setCanUseLocation] = useState(null);
  let key='6e4a909c74d0fa723ce663bd96696094';
  
  useEffect(()=>{
    const confirmation = window.confirm("Would you allow this program to use you location to lookup your current city weather? \n (P.S. You need to disable your AdBlock for it to work!)");
    setCanUseLocation(confirmation);
    },[]);
  

  useEffect(()=>{
    if(canUseLocation){
      setFirstApiCall(false);
    }
    
      
  },[weatherInfo,error, canUseLocation]);
  


  
  let ipAddressURL = 'https://json.geoiplookup.io/';


  if(firstApiCall && canUseLocation){
      axios.get(ipAddressURL).then(getCityWeather).catch(handleError);
  }

  function updateCity(event){
      setError('');
      setCity(event.target.value);
  }

  function searchCity(event){
    event.preventDefault();
    getCityWeather();
  }
  

  function getCityWeather(response = ''){

    console.log("ip adress"+ response);
    let weatherApi='';
    

    if(typeof response == "object") {
      // have not used set city here becuase city value does not reflect in this call and waits 
      // until a new rerender to be applied, and thus url is updated with NULL instead of new city value,
      weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${response.data.city}&appid=${key}&units=metric`;
      console.log(city);
    }
    else
      weatherApi=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
    axios.get(weatherApi).then(function(response){
      console.log(response);
      setWeatherInfo(response.data);
      getFullWeekWeather(response.data.coord.lat,response.data.coord.lon);
    }).catch(handleError);
  }

  function getFullWeekWeather(latitude,longitude){
    let fullWeekWeatherApi=`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${key}&units=metric`;
    axios.get(fullWeekWeatherApi).then( function(response){
      console.log("full week");
      console.log(response.data.list);
      sortWeekDays(response.data.list);
    } ).catch(handleErrorForWeekForecast);
  }
  function sortWeekDays(weekDaysForecast){
    //this function picks list of temperature of weekdays at 12 pm (serving as max temp)
    //and at 9 pm (serving as min temp) and dicards the rest
    let timeReg = /\s\d\d/ ;
    let updatedWeekDayList = [];
    let minTemperatureList = [];
    let updatedForecast={};
    weekDaysForecast.forEach((day) => {
      
      if(day.dt_txt.match(timeReg)[0]===' 12'){
        updatedWeekDayList.push(day);
      }
      else if(day.dt_txt.match(timeReg)[0]===' 21'){
        minTemperatureList.push(day.main.temp);
      }
      
    }
   )
   

   updatedForecast= {
    weekDayList: updatedWeekDayList,
    minTemperature: minTemperatureList
   };
   console.log("new week list:");
   console.log(updatedForecast);
   setweekWeatherInfo(updatedForecast);
  }

  function handleError(errorData){
    
    console.log("Error: ");
    console.log(errorData);
    
    

    if(city==='' && errorData.response){
      console.log("first if");
      setError("Please do not leave field empty!");
    }
    else if(/[^A-Za-z_.'\- ]/.test(city)){
      console.log("second if");
      setError("Only letters and (- . ' _ ) symbols are allowed!");
    }
    else if(Object.hasOwn(errorData, "response") && errorData.response.data.cod==="404"){
      setError("City not found, please enter a valid city name!");
    }
    else{
      setError('Sorry, something went wrong. Please try again later.');
  }
  }
  function handleErrorForWeekForecast(errorData){
    setweekWeatherInfo(null);
    console.log(errorData);
  }

  function UnitButtons(){
  
    function updateUnit(){
      if(unitSelected==='c'){
        setUnitSelected('f');
        
      }
      else
      setUnitSelected('c');
    }
  
    if(unitSelected==='c'){
    return <span className="unit-buttons d-flex justify-content-end"><button className="temperature-unit-selector selected" >°C</button> | <button className="temperature-unit-selector deselected" onClick={updateUnit}>°F</button></span> 
    }
    else
    return <span className="unit-buttons d-flex justify-content-end"><button className="temperature-unit-selector deselected" onClick={updateUnit}>°C</button> | <button className="temperature-unit-selector selected">°F</button></span> 
  }

  function convertCelsiusToFahrenhiet(temperature){

    return Math.round((temperature * 9/5) + 32);

  }


  return (
  <div className="App">
    <div className="main-container container ">
      <div className="row">
        <form onSubmit={searchCity}>
          <input
            type="text"
            id="search-field"
            required
            placeholder="Enter city name"
            spellCheck="true"
            pattern="^[a-zA-Z\s_\-]+$"
            onInvalid = {handleError}
            onChange = {updateCity}
          />
          <input type="submit" value="Search" id="submit-button" />
        </form>
      </div>
      <div className="row">
        {error===''?<div />:<div className="error-message">{error}</div>}
      </div>
      <span className="city-weather-details-container row">
        <div className="city-details col">
          {(weatherInfo!=null)?<span>
            <h1 id="city-name">{weatherInfo.name}</h1> 
            <p id="weather-condition">{weatherInfo.weather[0].description}</p>
            <FormatDate dateData = {weatherInfo.dt} fullDate={true}/>
          </span>
          : <span>
          <h1 id="city-name">{canUseLocation===false?(""):"Loading"}</h1> 
          <p id="weather-condition">-</p> 
          <p id="current-time">00:00 AM,</p>
          <p id="current-date">-</p>
        </span>}
          
        </div>
        <div className="current-temp-container col">
          <span className='d-flex flex-column'>
            <p id="current-temp">
              {weatherInfo!=null?
              (unitSelected==='f'? convertCelsiusToFahrenhiet(weatherInfo.main.temp)
              :Math.round(weatherInfo.main.temp))
              : null}
              </p>
            <UnitButtons />
          </span>
          {weatherInfo==null? <WeatherIcon weatherConditionIcon = {null} alt = "Current Weather Condition" currentWeather={true} /> :<WeatherIcon weatherConditionIcon = {weatherInfo.weather[0].icon} alt = {weatherInfo.weather[0].description} currentWeather={true} /> }
        </div>
      </span>
      <div className="row">
        <AdditionalWeatherDetails weatherInfo = {weatherInfo} />
      </div>
      {/* This may seem like a useless condition but it prevents the app from breaking if null is sended to component as value is yet to be updated */}
      {weekWeatherInfo?
      <WeekWeatherForecast weatherForecast={weekWeatherInfo.weekDayList} minTemperature={weekWeatherInfo.minTemperature} unitSelected={unitSelected} /> : null}
    </div>
    <Credit />
    <FooterLogo />
  </div>
  );
}

