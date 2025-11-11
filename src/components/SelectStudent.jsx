import { useState } from "react";

function SelectStudent() {
  const [student, setStudent] = useState("");

  const students = ["Anitha", "Rahul", "Deepak", "Gayathri"];

  const handleChange = (e) => {
    setStudent(e.target.value);
  };

  return (
    <div>
      <h2>Select a Student</h2>
      <select value={student} onChange={handleChange}>
        <option value={student}>Select a student</option>
        {students.map((stud, index) => (
          <option key={index} value={stud}>
            {stud}
          </option>
        ))}
      </select>

      <h3>
        {student ? `You selected: ${student}` : "No student selected yet"}
      </h3>
    </div>
  );
}

export default SelectStudent;
