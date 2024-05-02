import { React } from "react";

export default function Credit() {
  return (
    <p className="credits">
      This project was coded by
      <a
        href="https://www.shecodes.io/graduates/104683-lujain-alkhatib" rel="noreferrer"
        target="_blank" 
      >
        Lujain Khatib
      </a>{" "}
      and is
      <a href="https://github.com/Lialliane/weather-react" rel="noreferrer" target="_blank" >
        {" "}
        on GitHub
      </a>{" "}
      and
      <a href="https://l-weather-react.netlify.app" rel="noreferrer" target="_blank">
        hosted on Netlify
      </a>
    </p>
  );
}

