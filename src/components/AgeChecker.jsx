import { useState } from "react";

function AgeChecker() {
  const [age, setAge] = useState("");
  const [message, setMessage] = useState("");

  const checkAge = (e) => {
    e.preventDefault();

    const value = Number(age);

    if (value < 13) {
      setMessage(" Child");
    } 
    else if (value >= 13 && value <= 19) {
      setMessage(" Teenager");
    } 
    else if (value >= 20) {
      setMessage(" Adult");
    }
  };

  return (
    <div>
    

      <form onSubmit={checkAge}>
        <label>Enter Age: </label>
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        <button type="submit">Check</button>
      </form>

      <h2>{message}</h2>
    </div>
  );
}

export default AgeChecker;

