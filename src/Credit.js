import { React } from "react";
import "./Credit.css"

export default function Credit() {
  return (
    <p className="credits">
      This project was coded by
      <a
        href="https://www.shecodes.io/graduates/104683-lujain-alkhatib" rel="noreferrer"
        target="_blank" 
      >{" "}
        Lujain Khatib
      </a>{" "}
      and is on 
      <a href="https://github.com/Lialliane/weather-react" rel="noreferrer" target="_blank" >
        {" "}
        GitHub
      </a>{" "}
      and hosted on 
      <a href="https://l-weather-react.netlify.app" rel="noreferrer" target="_blank">{" "}
        Netlify
      </a>. Weather condition images provided by 
      <a href="https://www.amcharts.com" rel="noreferrer" target="_blank" > {" "} amCharts.</a>
    </p>
  );
}

