import { useState } from "react";

function StudentRegistrationForm() {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [date, setDate] = useState('');
    const [registered,setRegistered]=useState(false);

    const handlesubmit=(e)=>{
        e.preventDefault()
        setRegistered(true)
        alert(`Student Registered : ${name}- ${age} years old`)

    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <table>
                    <tbody>
                    <tr>
                        <td><label  className="form-label">NAME: </label></td>
                        <td><input type="text"value={name}onChange={(e)=>{setName(e.target.value)}} placeholder="enter your name" required></input></td>
                    </tr>
                    <tr>
                        <td><label  className="form-label">AGE: </label></td>
                        <td><input type="number" value={age}  onChange={(e)=>{setAge(e.target.value)}} placeholder="enter your age"     required></input></td>
                    </tr>
                    <tr>
                        <td><label  className="form-label">Email: </label></td>
                        <td><input type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="enter your mail"     required></input></td>
                    </tr>
                    <tr>
                        <td><label  className="form-label">PASSWORD: </label></td>
                        <td><input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="enter your password"     required></input></td>
                    </tr>
                    <tr>
                        <td><label  className="form-label">DOB: </label></td>
                        <td><input type="date" value={date}  onChange={(e)=>{setDate(e.target.value)}} placeholder="enter your DOB"     required></input></td>
                    </tr>
                    <tr>
                        <td><button type="submit">Submit</button></td>
                    </tr>
                 </tbody>
                </table>
            </form>

            {registered && (
                <h2>Student Registered : {name} - {age} years old</h2>
            )}
        </>
    );
}
export default StudentRegistrationForm;