import React from "react";
import FormattedDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import Unit from "./Unit";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo row mt-5">
      <div className="col-lg-4 col-sm-12">
        <div className="data-column ">
          <h1>{props.data.city}</h1>
          <div className="date-time mt-1">
            <FormattedDate date={props.data.date} />
            <br />
            <strong>{props.data.description}</strong>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12 icon-unit">
        <div class="temperature-container d-flex justify-content-end">
          <WeatherIcon code={props.data.icon} size={55} />
          <div>
            <Unit celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-sm-12">
        <div className="data-column ">
          <ul className="MoreData">
            <li>
              Feels: <strong>{Math.round(props.data.feels)} </strong>°
            </li>
            <li>
              Humidity: <strong>{props.data.humidity} %</strong>
            </li>
            <li>
              Wind: <strong>{props.data.wind} km/h</strong>
            </li>
            <li>
              Pressure: <strong>{props.data.pressure} mmHg</strong>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
