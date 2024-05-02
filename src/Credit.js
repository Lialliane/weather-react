import { React } from "react";

export default function Credit() {
  return (
    <p className="credits">
      This project was coded by
      <a
        href="https://www.shecodes.io/graduates/104683-lujain-alkhatib"
        target="_blank"
      >
        Lujain Khatib
      </a>{" "}
      and is
      <a href="https://github.com/Lialliane/Weather_app" target="_blank">
        {" "}
        on GitHub
      </a>{" "}
      and
      <a href="https://l-weather-app.netlify.app" target="_blank">
        hosted on Netlify
      </a>
    </p>
  );
}
