import { useEffect, useState } from "react";

function LoginEffect() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 1️⃣ Runs on every render
  useEffect(() => {
    console.log("You are logged in (runs on every render)");
  });

  // 2️⃣ Runs only when the component loads (once)
  useEffect(() => {
    alert("The page is loaded");
  }, []);

  // 3️⃣ Runs only when login state changes
  useEffect(() => {
    if (isLoggedIn) {
      console.log("You are logged in");
    } else {
      console.log("You are not logged in");
    }
  }, [isLoggedIn]);

  return (
    <>
      <h2>{isLoggedIn ? "Welcome Back!" : "Please Log In"}</h2>
      <button onClick={() => setIsLoggedIn(true)}>Log In</button>
      <button onClick={() => setIsLoggedIn(false)}>Log Out</button>
    </>
  );
}

export default LoginEffect;
