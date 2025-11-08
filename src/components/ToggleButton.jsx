import { useState } from "react";
function ToggleButton(){
    const [clicked , setClick]=useState(false)
    const HandleClick=()=>{
        setClick(!clicked)
    }
    return(
        <>
        <button onClick={HandleClick}>{clicked ? "Light Mode" : "Dark Mode" } </button>
        </>
    );
}
export default ToggleButton;