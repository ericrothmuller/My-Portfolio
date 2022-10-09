import React from "react";
import "../../../Style.css";

export default function WeatherDashboard() {
  return (
    <div className="portfolioDetails animate__animated animate__fadeIn animate__faster">
      <p>
        <strong>Description:</strong> A weather app that displays a searched for
        city's current temperature, wind speed, humidity, and UV index and a 5
        day forecast.
      </p>
      <p>
        <strong>Built for:</strong> U.C. Berkeley Coding Bootcamp
      </p>
      <p>
        <strong>Built with:</strong> HTML, CSS, JavaScript, OpenWeather API,
        Git, and GitHub.
      </p>
      <p>
        <strong>Deployed link:</strong>{" "}
        <a href="https://ericrothmuller.github.io/Pick-Your-City-Weather-Forecast/">
          ericrothmuller.github.io/Pick-Your-City-Weather-Forecast/
        </a>
      </p>
    </div>
  );
}
