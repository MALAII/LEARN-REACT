import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const[email, setEmail]=useState('');
    const[password,setPassword]=useState('');
      const navigate = useNavigate();  

    const handlesubmit=(e)=>{
        e.preventDefault();
        if(email==="admin123@gmail.com" && password=="1234")
        {
       navigate("/home");
        }
        else{
            alert ("enter the valid credentails")
        }

    }
    const reset=()=>{
        setEmail('');
        setPassword('');
    }

    return(
       <div className="login">
      <h1>Login Page</h1>
      <form onSubmit={handlesubmit}>
           EMAIL : <input type="email" placeholder="enter your mail" value={email} onChange={(e)=>{setEmail(e.target.value)}} required />
<br></br>
           PASSWORD: <input type="password" placeholder="enter your password" value={password} onChange={(e)=>{setPassword(e.target.value)}} required />
           <br>
           </br>
            <button type="submit">Submit</button>
            <br>
            </br>
            <button  onClick={reset}type="reset">Reset</button>
      </form>

       
       </div>
    );
}
export default Login;