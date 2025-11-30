import { useState } from "react";

function SpeedChecker() {
  const [speed, setSpeed] = useState("");
  const [message, setMessage] = useState("");

  const checkSpeed = (e) => {
    e.preventDefault();

    const value = Number(speed);

    if (value > 80) {
      setMessage(" Over Speeding");
    } 
    else if (value >= 40 && value <= 80) {
      setMessage(" Normal Speed");
    } 
    else if (value < 40) {
      setMessage("Too Slow");
    }
  };

  return (
    <div>
     

      <form onSubmit={checkSpeed}>
        <label>Enter Speed: </label>
        <input
          type="number"
          value={speed}
          onChange={(e) => setSpeed(e.target.value)}
        />
        <button type="submit">Check</button>
      </form>

      <h2>{message}</h2>
    </div>
  );
}

export default SpeedChecker;
