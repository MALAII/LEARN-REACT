
import { useState } from "react";

function Attendance(){
    // const students = ["Harish","Manu"," Renu"]
    // const [isPresent,setPresent] = useState(true)
    const studentList = [
        {
    name: "Harish",
    isPresent: false
    },
       {
    name: "Manu",
    isPresent: false
    },
    ]


const [students,setStudents]=useState(studentList)
console.log(students,'students')
function handleclick(studentName){
// setPresent(!isPresent)
setStudents((value)=>{
console.log(value)

})

}
return(
    <>
    <h1>Attendance</h1>
    {/* <button onClick={handleclick}>--</button> */}
 <ul>
    {
students?.map((student,index)=>(
    <>
<button onClick={handleclick(student.name)} style={{backgroundColor:(student?.isPresent )? "green"  : "red"}}>{(student.isPresent )? "present"  : "absent"}</button>
    <li key={index} >{student.name}</li>
    {/* <span key={index} style={{backgroundColor:(isPresent )? "green"  : "red"}}>{(isPresent )? "present"  : "absent"}</span> */}
    </>
))
    }
 </ul>
    </>
)
}
export default Attendance;
