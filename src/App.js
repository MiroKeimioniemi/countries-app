import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import CountryDropdown from './components/dropdown';
import CountryInfo from './components/infocard';

function App() {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <CountryDropdown onCountrySelect={handleCountrySelect}/>
      <CountryInfo country={selectedCountry} />
    </div>
  );
}

export default App;
