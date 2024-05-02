import "./styles.css";
import FooterLogo from "./FooterLogo";
import SearchForm from "./SearchForm";
import Credit from "./Credit";
import AddtionalDetialsContainer from "./AddtionalDetialsContainer";

export default function App() {
  return (
  <div className="App">
  <div className="main-container container ">
  <div className="row">
  <SearchForm />
  </div>
  <div className="row">
  <div className="error"></div>
  </div>
  <span className="city-weather-details-container row">
  <div className="city-details col">
  <h1 id="city-name">Loading...</h1>
  <p id="weather-condition">-</p>
  <p id="current-time">00:00 AM GMT+00:00,</p>
  <p id="current-date">-</p>
  </div>
  <div className="current-temp-container col">
  <p id="current-temp"></p>
  <img alt="current-weather-condition" id="current-weather-icon"  />
  </div>
  </span>
  <div className="row">
  <AddtionalDetialsContainer />
  </div>
  <div id="week-weather-forecast" className="row"></div>
  </div>
  <Credit />
  <FooterLogo />
  </div>
  );
}
