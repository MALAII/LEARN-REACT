import { useState } from "react";

function MessageChanger() {
  const [message, setMessage] = useState("Welcome!");

  const handleChange = () => {
    setMessage("Thank you for visiting!");
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{message}</h1>
      <button onClick={handleChange}>Change Message</button>
    </div>
  );
}

export default MessageChanger;
