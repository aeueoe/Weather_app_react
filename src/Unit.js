import React, { useState } from "react";

export default function ConvertUnit(props) {
  const [unit, setUnit] = useState("celsius");

  function ConvertInCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function ConvertInFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="weather-temperature">
        <span className="Temperature">{Math.round(props.celsius)}</span>
        <span className="Unit">
          °C |{" "}
          <a href="/" onClick={ConvertInFahrenheit}>
            °F
          </a>{" "}
        </span>
      </div>
    );
  } else {
    return (
      <div className="weather-temperature">
        <span className="Temperature">{Math.round(fahrenheit())}</span>
        <span className="Unit">
          <a href="/" onClick={ConvertInCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
