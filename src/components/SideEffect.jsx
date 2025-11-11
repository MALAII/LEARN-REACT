import {useEffect, useState } from "react";

function SideEffect({userName}){
    const [name, setName]=useState("")
    const [email, setEmail]=useState("")

    useEffect(()=>{
        console.log("iam here every render")
    })

    useEffect(()=>{
        console.log("iam here for initial render")
})

    useEffect(()=>{
      console.log("I am run only when state change in dependancy array")
    if(name==="admin")
    {
        alert("pls check the notification")
    }
    },[name])
    
    return(
        <>
        {name}
        <button onClick={()=>setName("Raju")}>Change Name</button>
        <button onClick={()=>setName(userName[0])}>Change to props name</button>
        <button onClick={()=>setEmail(`${name}@gmail.com`)}>change email</button>

        </>
    );
}
export default SideEffect;