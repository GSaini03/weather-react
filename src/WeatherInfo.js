import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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

      <div className="row mt-3 me-1">
        <div className="col-6">
          <div className="d-sm-flex">
            <div className="float-left mt-2">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>

        <div className="col-6 text-end mt-1">
          <ul>
            <li className="text-capitalize fw-bold fs-5 mb-2">
              {" "}
              {props.data.description}{" "}
            </li>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {Math.round(props.data.wind)} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
