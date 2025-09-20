import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountry = (country) => {
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  const handleVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  return (
    <div>
      <h1>Hello World: {countries.length}</h1>
      <h3>Total Visited country: {visitedCountry.length}</h3>
      <h3>Total Visited Flags: {visitedFlags.length}</h3>
      <ol>
        {visitedCountry.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags={handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
