import { useState } from "react";
import axios from "axios";

function Form() {
    const [name, setName] = useState('')
    const [email, setemail] = useState('')

    const handlesubmit = (e) => {
        e.preventDefault() // prevents reloading the page 
        alert(`Name: ${name}   Email: ${email}`)
        let userData={
    email: email
        }
        
        axios.post('https://jsonplaceholder.typicode.com/posts', userData)
        .then((response)=>{
            console.log(response)
        })
    }


    return (
        <>
            <form onSubmit={handlesubmit}>
                <table>
                    <tr>
                        <td><label>NAME : </label></td>
                        <td> <input type="text" value={name} onChange={(e) =>  setName(e.target.value) } placeholder="enter your name"></input></td>
                    </tr>
                  
                    <tr>
                        <td><label>EMAIL: </label></td>
                        <td><input type="text" value={email} onChange={(e) =>  setemail(e.target.value) } placeholder="Enter your email">
                        </input></td>
                    </tr>
                    <tr>
                        <td><button>Submit</button></td>
                    </tr>
                </table>
            </form>
        </>
    );
}
export default Form;