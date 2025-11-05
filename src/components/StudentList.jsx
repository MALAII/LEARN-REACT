// listing  array using map function:

function StudentList() {
    let student = ['malai', 'saranya', 'hemnath', 'sachin']
    return (
        <>     
        <ul style={{listStyle:"none"}}>
            {student.map((stud, index)=>(
                <li key={index}>{index}{stud}</li>
            ))}
            </ul>  
        </>
    );
}
export default StudentList;
