import { useState } from "react";

function FeedbackForm() {

    const [name, setName] = useState('');
    const [rating, setRating] = useState('');
    const [comment, setComment] = useState('');
    const [show, setShow] = useState(false);


    const handlesubmit = (e) => {
        e.preventDefault();
        setShow(true);
        alert(`NAME : ${name} \n RATING : ${rating} \n COMMENTS : ${comment}`);

    }
    return (
        <>
            <form onSubmit={handlesubmit}>
                <table>
                    <tr>
                        <td><label>Name:</label></td>
                        <td><input type="text" placeholder="enter your name" value={name} onChange={(e) => { setName(e.target.value) }}></input></td>
                    </tr>
                    <tr>

                        <td><label> Rating :</label> </td>
                        <td><select value={rating} onChange={(e) => { setRating(e.target.value) }}>
                            <option value='' >Choose Rating</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>

                        </select></td>

                        {/* <td><input type="number" placeholder="rate (1 to 5) " value={rating} onChange={(e) => { setRating(e.target.value) }}></input></td> */}
                    </tr>
                    <tr>
                        <td><label>Comments:</label></td>
                        <td> <textarea placeholder="enter your comments" value={comment} onChange={(e) => { setComment(e.target.value) }}>
                        </textarea></td>
                    </tr>
                    <tr>
                        <td><button type="submit">Submit</button></td>
                    </tr>
                </table>
            </form>
            {show && (
                <>
                    <h4>NAME : {name} </h4>
                    <h4>RATING : {rating}</h4>
                    <h4>COMMENTS: {comment}</h4>
                </>

            )}


        </>
    );
}
export default FeedbackForm;