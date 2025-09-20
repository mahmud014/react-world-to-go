import React, { useState } from "react";
import "./Country.css";
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // basic system
    // if (visited) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    // second system
    // setVisited(visited ? false : true);
    // third system
    setVisited(!visited);
    handleVisitedCountry(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common} </h2>
      <p>Capital: {country.capital.capital["0"]}</p>
      <p>Population: {country.population.population}</p>
      <p>Region: {country.region.region}</p>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 300000 ? "(Big Country)" : "(Small Country)"}{" "}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}{" "}
      </button>
      <button
        onClick={() => {
          handleVisitedFlags(country.flags.flags.png);
        }}
      >
        Add Flag
      </button>
    </div>
  );
};

export default Country;
