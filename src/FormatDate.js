import React from "react";

export default function FormatDate(props) {
  let daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let dayOfWeek = daysOfWeek[props.date.getDay()];
  let month = months[props.date.getMonth()];
  let dayOfMonth = props.date.getDate();
  let hours = props.date.getHours();
  let minutes = props.date.getMinutes();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return (
    <span>
      {dayOfWeek}, {month} {dayOfMonth} | {hours}:{minutes}
    </span>
  );
}
