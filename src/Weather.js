import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  // const [ready, setReady] = useState(false);
  // const [weatherData, setWeatherData] = useState({});
  const [weatherData, setWeatherData] = useState({ ready: false });

  const [city, setCity] = useState(props.defaultCity);
  // const [currentLocation, setCurrentLocation] = useState(null);

  function handleResponse(response) {
    // console.log(response.data);
    // setReady(true);
    // setCurrentLocation(response.data.current);

    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    //search for a city
  }

  function search() {
    const apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  // function currentLocation(params) {}

  // if (ready) {
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter City/Town..."
                className="form-control shadow-sm border border-success p-2 border-opacity-10 rounded-pill"
                autoFocus="on"
                onChange={updateCity}
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="SearchButton form control shadow-sm border border-success p-2 border-opacity-10 rounded-pill btn btn-info w-145"
              />
            </div>
          </div>
        </form>

        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
