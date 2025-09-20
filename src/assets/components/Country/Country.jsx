import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (
    <div>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name: {country.name.common} </h2>
      <h2>
        Capital: <small>{country.capital.capital["0"]}</small>
      </h2>
      <h2>
        Population: <small>{country.population.population}</small>{" "}
      </h2>
    </div>
  );
};

export default Country;
