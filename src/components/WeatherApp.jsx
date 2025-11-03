
import { useState } from "react";
function WeatherApp() {
  const [temp, setTemp] = useState("");
  
  const handleChange =(event)=>  {
    const value= (event.target.value);

    if (value === "") {
      setTemp("");
    } else if (value >= 0 && value <= 55) {
      setTemp(value);
    } else {
      alert("Please enter a temperature between 0 and 55°C");
    }
  };

let message = "";

if (temp === "") {
  message = "Enter temperature";
} else if (temp > 30) {
  message = "Hot";
} else if (temp <= 30) {
  message = "Cold";
} else {
  message = "Enter a valid temperature";
}

  return (
    <div>
      <h1>Weather App </h1>
       <input type="number" placeholder="Enter temperature (0–55)" value={temp} onChange={handleChange} />
      <h2>{message}</h2>
      {temp && temp <= 30 && (
        <img
          src="https://media.istockphoto.com/id/868098786/photo/thermometer-on-snow-shows-low-temperatures-zero-low-temperatures-in-degrees-celsius-and.jpg?s=612x612&w=0&k=20&c=jOZH4RSlX29thO6GNlvTUlYKUo_DK4xVxvXUTK7Jw5s=" width="200"/>
      )}
      {temp && temp > 30 && (
        <img
          src="https://t4.ftcdn.net/jpg/05/18/43/73/360_F_518437397_j4c3cOSYK54AjCis5muIjPaHw2KBTCeH.jpg" width="200"/>
      )}
    </div>
  );
}
export default WeatherApp;
