import './App.css';
import Counter from './components/Counter';
// import Greetings from './components/Greetings';
// import Message from './components/Message';
import LoginButton from'./components/LoginButton';
import ToggleContent from './components/ToggleContent';
import LogIn from './components/LogIn';
// import Attendance from './components/Attendance';
import WeatherApp from './components/WeatherApp';
import StudentList from './components/StudentList';
import FruitList from './components/FruitList';
import VegetableList from './components/VegetableList';

function App() {
 const userName ="Manu"

  return (
    <div className="App">
  {/*  MAIN COMP */}
  {/* <p className='username' style={{color:"red"}}> {userName}</p> 
   <Greetings userName={userName}/> */}
  <Counter/>
  <LoginButton/>
  <br></br>
  <ToggleContent/>
  <LogIn/>

  {/* <Message/>

   <Attendance name="malai"/>
   <Attendance name="saranya"/>
     <Attendance name="hemnath"/> */}
     <WeatherApp/>
     <StudentList/>
     <FruitList/>
     <VegetableList/>
    </div>

  );
}

export default App;
