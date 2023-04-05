import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.dayData.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.dayData.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.dayData.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.dayData.weather[0].icon} size={45} />
      <div className="WeatherForecast-temperature mt-2">
        <span className="WeatherForecast-temperature-max">
          {maxTemperature()}
        </span>{" "}
        <span className="WeatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
