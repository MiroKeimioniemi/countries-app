import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/dropdown.css';

const CountryDropdown = ({ onCountrySelect }) => {
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      axios.get('https://restcountries.com/v3.1/all?fields=name,flags,capital,population')
        .then(response => {
          setCountries(response.data);
        })
        .catch(error => {
          console.error('Error fetching data: ', error);
        });
    }, []);
  
    return (
        <select className="country-dropdown" onChange={e => {
            const selectedCountry = countries.find(country => country.name.common === e.target.value);
            onCountrySelect(selectedCountry);
          }}>
          {countries.sort((a, b) => a.name.common.localeCompare(b.name.common)).map((country, index) => (
            <option key={index} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      );
  };

export default CountryDropdown;