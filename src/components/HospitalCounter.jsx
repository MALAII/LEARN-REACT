import { useState } from "react";

function HospitalCounter() {
  const [count, setCount] = useState(0);

  const room = count===0 ? "please wait": count % 2 === 0 ? "Room 2" : "Room 1";

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h2>Current Count: {count}</h2>

      <h2>Go to the: {room}</h2>

      <button onClick={increment}> Increment </button>

      <button onClick={decrement} > Decrement</button>
    </div>
  );
}

export default HospitalCounter;
