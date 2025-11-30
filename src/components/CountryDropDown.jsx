import { useState } from "react";

function CountryDropDown() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const countryCities = {
    india: ["Chennai", "Mumbai", "Delhi", "Bangalore"],
    usa: ["New York", "Los Angeles", "Chicago", "Houston"],
    uk: ["London", "Manchester", "Birmingham", "Liverpool"]
  };

  return (
    <div>
      <h3>Country & City Selector</h3>

      <label>Country: </label>
      <select value={country} onChange={(e) => {
          setCountry(e.target.value);
          setCity(""); 
        }}
      >
        <option value="">-- Select Country --</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
      </select>

      <br /><br />


      <label>City: </label>
      <select value={city} onChange={(e) => setCity(e.target.value)} disabled={!country}> 
        <option value="">-- Select City --</option>

        {country &&
        countryCities[country].map((cityName, index) => (
            <option key={index} value={cityName}>
              {cityName}
            </option>
          ))}
      </select>
    </div>
  );
}

export default CountryDropDown;
