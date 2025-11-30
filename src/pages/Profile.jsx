import { useParams } from "react-router-dom";
import profile from "../assets/profile-pic.png";


function Profile() {

  const {username, _id}=useParams();
  return (
    <>
      <h1> Profile Page</h1>

      <img  src={profile} alt="profile " width="250px" />
      <h1>hello welcome {username} your id number is {_id}</h1>
      <h2>Name: Malaiyarasi</h2>
      <p>Age: 22</p>
      <p>Email: malaiyarasi249@gmail.com</p>
      <p>Location: Chennai</p>
      
    </>
  );
}

export default Profile;
