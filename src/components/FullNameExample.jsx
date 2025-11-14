import { useState, useEffect } from "react";

function FullNameExample() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [fullname, setFullname] = useState("");

  useEffect(() => {
    setFullname(`${firstname} ${lastname}`);
  }, [firstname, lastname]);


  return (
    <>
    <label>FirstName: </label>
      <input 
        type="text" 
        placeholder="First Name" 
        onChange={(e) => setFirstname(e.target.value)} 
      />
      <br>
      </br>
      <label>
        LastName: </label>

      <input 
        type="text" 
        placeholder="Last Name" 
        onChange={(e) => setLastname(e.target.value)} 
      />

      <p>Full Name: {fullname}</p>
    </>
  )
}
export default FullNameExample;