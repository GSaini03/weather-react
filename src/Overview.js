import React from "react";

import "./Overview.css";

export default function Overview() {
  let weatherData = {
    city: "Paris",
    date: "Friday 10:10",
    description: "Partly Cloudy",
    temperature: 19,
    imgUrl: "https://cdn-icons-png.flaticon.com/512/5370/5370498.png",
    humidity: 80,
    wind: 20,
  };

  return (
    <div>
      <div className="Overview">
        <h1 className="city">{weatherData.city}</h1>
        <ul>
          <li>
            Last updated: <span className="date">{weatherData.date}</span>
          </li>
        </ul>
        <br />
        <br />
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.imgUrl}
              className="icon"
            />
            <div className="float-left">
              <strong className="temperature">{weatherData.temperature}</strong>
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
          <ul className="WeatherCondition">
            <li className="description">{weatherData.description}</li>
            <li>
              Humidity: <span className="humidity">{weatherData.humidity}</span>
              %
            </li>
            <li>
              Wind: <span className="wind">{weatherData.wind}</span> km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
