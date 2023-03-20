import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="Overview">
        <h1>{props.data.city}</h1>
        <ul>
          <li>
            <FormattedDate date={props.data.date} />
          </li>
        </ul>
        <br />
        <br />
      </div>

      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <WeatherIcon code={props.data.icon} alt={props.data.description} />

            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">
              <a href="/" className="celsius-link active">
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

        <div className="col-6">
          <ul className="mx-5">
            <li className="fw-normal fs-5 mb-1">
              <strong>{props.data.description}</strong>
            </li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
