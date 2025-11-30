import './App.css';
// import AgeChecker from './components/AgeChecker';
// import CountryDropDown from './components/CountryDropDown';
// import Counter from './components/Counter';
// import Greetings from './components/Greetings';
// import Message from './components/Message';
// import LoginButton from'./components/LoginButton';
// import ToggleContent from './components/ToggleContent';
// import LogIn from './components/LogIn';
// import Attendance from './components/Attendance';
// import WeatherApp from './components/WeatherApp';
// import StudentList from './components/StudentList';
// import FruitList from './components/FruitList';
// import VegetableList from './components/VegetableList';
// import StudentTable from './components/Table';
// import WeatherInfo from './components/WeatherInfo';
// import LoginParent from './components/LoginParent';
// import ColorParent from './components/ColorParent';
// import Table from './components/Table';
// import ToggleButton from './components/ToggleButton';
// import MessageChanger from './components/MessageChanger';
import Form from './components/Form';
// import StudentRegistrationForm from './components/StudentRegistrationForm';
// import SelectStudent from './components/SelectStudent';
// import SideEffect from './components/SideEffect';
// import LoginEffect from './components/LoginEffect';
// import FeedbackForm from './components/FeedbackForm';
// import {BrowserRouter, Routes,Route ,Link} from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Profile from './pages/Profile';
// import Login from './pages/Login';
// import HospitalCounter from './components/HospitalCounter';
// import ProductCart from './components/ProductCart';
// import SpeedChecker from './components/SpeedChecker';
// import TemperatureCheck from './components/TemperatureCheck';
// import FullNameExample from './components/FullNameExample';

// import Profile from './components/Profile';
// import TrafficSignalReducer from './components/TrafficSignalReducer';

 import ReducerHook from './components/ReducerHook';



function App() {
 const userName ="Manu"

  return (
    <div className="App">
  {/*  MAIN COMP */}
  {/* <p className='username' style={{color:"red"}}> {userName}</p> 
   <Greetings userName={userName}/> */}
  {/* <Counter/>
  <LoginButton/> */}
  <br></br>
  {/* <ToggleContent/>
  <LogIn/> */}

  {/* <Message/>
   <Attendance name="malai"/>
   <Attendance name="saranya"/>
     <Attendance name="hemnath"/> */}
     {/* <WeatherApp/>
     <StudentList/>
     <FruitList/>
     <VegetableList/>
     <StudentTable/> */}
     {/* <WeatherInfo/>
     <LoginParent/>
     <ColorParent/> */}
     {/* <Table/>
     <ToggleButton/>
     <MessageChanger/> */}
     <Form/>
     {/* <StudentRegistrationForm/>
     {/* <SelectStudent/> */}
     {/* <SideEffect userName="malai"/>
     <LoginEffect/>  */}
     {/* <FeedbackForm/> */}

     {/* <BrowserRouter>

     <nav>
       <Link to={'/login'}>Login</Link>|
      <Link to={'/home'}>Home</Link>|
      <Link to={'/profile/:username/:_id'}>Profile</Link>|
      <Link to={'/about'}>About</Link>|
    
     

      </nav> */}
{/* 
     <Routes>
    <Route path='/home' element ={<Home/>} />
    <Route path='/about' element ={<About/>}/>
    <Route path='/profile/:username/:_id' element ={<Profile/>}/>
    <Route path='/login' element ={<Login/>}/> */}

     {/* </Routes>
     </BrowserRouter> */}
     {/* <FullNameExample/> */}
     {/* <HospitalCounter/>
     <hr></hr> <br></br>
     <TemperatureCheck/>
     <hr></hr><br></br>
     <AgeChecker/>
     <hr></hr><br></br>
     <SpeedChecker/>
     <br></br>
     <ProductCart/> */}
     {/* <CountryDropDown/> */}

  {/* <Profile/>
  <TrafficSignalReducer/> */}
  <ReducerHook/>
  
    </div>

  );
}
export default App;
