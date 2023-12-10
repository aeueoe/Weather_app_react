import React, { useState, useEffect } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import ScaleLoader from "react-spinners/ScaleLoader";
import "@fortawesome/fontawesome-free/css/all.min.css";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      pressure: response.data.temperature.pressure,
      feels: response.data.temperature.feels_like,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "0e6edd8o3a1bf93cac4e5tc0566fb691";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather ">
        <form className="input-group flex-nowrap" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="search"
              placeholder="Search city"
              className="form-control search-input"
              onChange={handleCityChange}
            />
            &nbsp;
            <div className="input-group-btn">
              <button
                type="submit"
                className="btn"
                style={{ backgroundColor: "#e8e8e8" }}
              >
                <i className="fas fa-search"></i>
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast
          coordinates={weatherData.coordinates}
          city={weatherData.city}
        />
      </div>
    );
  } else {
    search();
    return (
      <div className="spinner">
        <ScaleLoader color="#4050d2" height={20} />
      </div>
    );
  }
}
