import { useState } from "react";
function TemperatureCheck() {
  const [temp, setTemp] = useState("");
  const [message, setMessage] = useState("");
  const checkTemperature = (e) => {
    e.preventDefault();
    
    const value = Number(temp);

    if (value > 40) {
      setMessage(" High Fever");
    } else if (value >= 30 && value <= 40) {
      setMessage("Normal Temperature");
    } else if (value < 30) {
      setMessage(" Low Temperature");
    } else {
      setMessage("");
    }
  };

  return (
    <div> 

      <form onSubmit={checkTemperature}>
        <label>Enter Temperature: </label>
        <input type="number" value={temp} onChange={(e) => setTemp(e.target.value)}/>
        <button type="submit">Check</button>
      </form>
      <h2>{message}</h2>
    </div>
  );
}
export default TemperatureCheck;
