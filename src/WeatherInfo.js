import React from "react";

import "./WeatherInfo.css";

export default function WeatherInfo() {
  let weatherData = {
    date: "Friday 10:10",
    description: "Partly Cloudy",
    temperature: 19,
    iconUrl: "https://cdn-icons-png.flaticon.com/512/5370/5370498.png",
    humidity: 80,
    wind: 20,
  };

  return (
    <div>
      <div className="Overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Local Time: {weatherData.date}</li>
        </ul>
        <br />
        <br />
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img
              src={weatherData.iconUrl}
              alt={weatherData.description}
              className="icon"
            />
            <div className="float-left">
              <span className="temperature">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="units">
                <a href="/" className="celsius-link" class="active">
                  °C{" "}
                </a>{" "}
                |
                <a href="/" className="fahrenheit-link">
                  {" "}
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="col-6">
          <ul className="mx-5">
            <li className="fw-normal fs-5.5">
              <strong>{weatherData.description}</strong>
            </li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
