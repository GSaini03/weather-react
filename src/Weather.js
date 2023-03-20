import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //console.log(response.data);
    setReady(true);
    setWeatherData({
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function search() {
    const apiKey = "92da49e2f9d279a1bc35d15429ac6c6d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q= ${city} &appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Type a city"
                className="form-control shadow-sm border border-success p-2 border-opacity-10 rounded-pill"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form control shadow-sm border border-success p-2 border-opacity-10 rounded-pill btn btn-info w-100"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
