import React from 'react';
import '../style/infocard.css'; // Import the CSS file

const CountryInfo = ({ country }) => {
  if (!country) {
    return (
        <div className="country-info">
            <p className='placeholder'>Select a country</p>
        </div>
    );
  }

  return (
    <div className="country-info">
      <img className="country-flag" src={country.flags.svg} alt={`Flag of ${country.name.common}`} />
      <h2 id="name">{country.name.common}</h2>
      <div className="country-details">
        <p>
            <strong>Capital:</strong>
            <span className="block-element">
                {country.capital}
            </span>
        </p>
        <p>
            <strong>Population:</strong> 
            <span class="block-element">
                {country.population.toLocaleString().replace(/,/g, ' ')}
            </span>
        </p>
      </div>
    </div>
  );
};

export default CountryInfo;