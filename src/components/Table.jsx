function StudentTable() {
  const Students=[
    {
     Rollno: 1,
     Name: "Arun",
     Grade : "A"
    },
    {
       Rollno: 2,
     Name: "Sara",
     Grade : "A"
    },
      {
       Rollno: 3,
     Name: "Ravi",
     Grade : "B"
    },
    {
       Rollno: 4,
     Name: "Priya",
     Grade : "B"
    }
]

  return (
    <div className="StudentTable">
      <h2>Student Details</h2>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Grade</th>
          </tr>
        </thead>
        <tbody>
           
           {Students.map((student,index)=>(
            <tr key={index}>
            <td>{student.Rollno}</td>
            <td>{student.Name}</td>
            <td>{student.Grade}</td>
            </tr>
           ))}
        </tbody>
      </table>
    </div>
  );
}
export default StudentTable;
