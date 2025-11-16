import { useNavigate } from "react-router-dom";
const Home=()=>{
       const navigate = useNavigate();  
       
  const goToProfile = () => {
    navigate("/profile"); 
  };

    return(
        <>
        <h1>Home page</h1>
        <p>Hello Welcome to home page</p>
        <button onClick={goToProfile}> see Profile</button>
      
        </>
    );
}
export default Home;