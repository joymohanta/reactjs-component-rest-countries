import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, population, area, flags } = props.country;
  return (
    <div className="country">
      <h2>Name: {name.common} </h2>
      <h4>Capital: {capital} </h4>
      <h5>Population: {population} </h5>
      <h5>Area: {area} square km </h5>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;
