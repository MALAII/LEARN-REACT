import profile from "../assets/profile-pic.png";


function Profile() {
  return (
    <>
      <h1> Profile Page</h1>

      <img  src={profile} alt="profile " width="250px" />

      <h2>Name: Malaiyarasi</h2>
      <p>Age: 22</p>
      <p>Email: malaiyarasi249@gmail.com</p>
      <p>Location: Chennai</p>

    </>
  );
}

export default Profile;
