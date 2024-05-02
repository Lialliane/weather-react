import { React } from "react";

export default function AddtionalDetialsContainer() {
  return (
    <div className="additional-weather-details">
      <button className="additional-details-button">
        Additional Details
        <span className="material-symbols-outlined" id="arrow">
          arrow_drop_down
        </span>
      </button>
      <div id="additional-details-container">
        <p className="row align-items-end">
          {" "}
          <span className="col-md-5 col-sm-6 col-9">
            {" "}
            <span className="material-symbols-outlined">device_thermostat</span>
            Temp: Max <span id="max-temp">19°C</span>
          </span>
          <span className="col-md-3 col-6">
            {" "}
            , Min <span id="min-temp">19°C</span>
          </span>{" "}
          <span className="col-md-4 mt-md-0 col-6 mt-3">
            , Feels like <span id="feels-like">19°C</span>
          </span>
        </p>
        <hr />
        <p>
          <span className="material-symbols-outlined">humidity_percentage</span>{" "}
          Humidity: <span id="humidity">19%</span>
        </p>
        <hr />
        <p>
          <span className="material-symbols-outlined">
            swap_driving_apps_wheel
          </span>
          Pressure: <span id="pressure">1023</span>
        </p>
        <hr />
        <p>
          <span className="material-symbols-outlined">air</span>
          Wind: <span id="wind-speed">19 km/h</span>
        </p>
      </div>
    </div>
  );
}
