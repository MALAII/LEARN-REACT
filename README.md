Day 1:27/10/2025 :
BOM
DOM
react
library
npm -installation and execution
npx- execution only
node
node installation
create react app
babel - compiler/ transpilar  converts jsx to pure js
package.json - blueprint or metadata of a particular project
src- source file that contains all the code files of your  particular project
node.js - runtime environment for js

Day 2: 28/10/2025:
file structure 
component- is a building block of react project it is a resuable piece of code.
types : 1. functional component 
        2. Class components
function components - functional component is a js function which returns the jsx element.
Key - key should be unique and stable across render.
jsx: javascript xml (not html it is html like syntax)
rules for jsx:
           1.returns only one parent element
           2.embedded js using {}
           3.inline styles  are applied using {{}}
           4. using  "className" instead of  using "class"
           5. Using camelCasing for event handlers and attributes -(onClick)
           5.create a folder inside src as components (parsel casing )
inside that file - Greetings. import it in app
           6. props - it is a property used to pass data from parent component to the child component
           prop drilling- props passing deeping through many components

Day 3:29/10/2025:
        state: state is special memory inside a component that can holds data which can change over time
        Hooks: hook is a special function used to  state management, lifecycle methods , side effects 
        usestate:   usestate is a hook used to manage state in the component 
        use state is assigned to a array of values one is state variable and state function 
        const [state, setState]=usestate(initial value)
        events:action performed by user
        synthetic events: react wrap html events. like (onClick)

Day 4:30/10/2025:
object destructuring const student = { name: "Gayathri", age: 22, course: "MERN", city: "Chennai" };
// Split (extract) some properties 
const { name, age } = student;
console.log(name); // Gayathri 
console.log(age); // 22 
task : Show each student’s name (from props) with a Present/Absent button. Use state to toggle and display the attendance status.

Day 5:31/10/2025:
listing in react by map and key
ternary operator , boolean in state
tasks:
1. in counter component create a reset button and set to zero
2. create a login button , if logged in show welcome message else show you are not loggedin -use ternary , state , (create a login button component and home component)
3. hide and show button :
a.create a component with content that can be toggled visible or hidden
b.use a button to show or hide the content dynamically

Day 6: 3/11/2025
task: 
ternary operator login and && operator
1.weather app temp=> is more than 30 hot : else cold
2.need input field  for entering temp
3.temp enter (0-55)  limit
4. temp below 30 one image should be there for cold : temp above 30 one image shoud  be there for hot using && 

Day 7 : 4/11/2025
nothing taken task checking done

Day 8 : 5/11/2025
event handler - it  is a function that handles the user interaction like clicking mouse 
task:
1.  list of vegetable and price object
list vegetables =[{ name: "carrot", color:"orange", price: 30 }, { name: "potato", color: "brown", price: 20 }]
2. for listing arrays in react "map" is the best option
 vegetables 
3. create a table with some list (3 rows) 

Day 9 : 6/11/2025

1: Weather Info with Object Prop
 Create a component that accepts a single object as a prop
      (example: { city: "Chennai", temp: 30 }) and displays:
 output:
          Current temperature in Chennai is 30°C
WeatherInfo -- parent comp
weather = { city: "Chennai", temp: 30 } -- props
WeatherDisplay - child comp
display: use template literal eg :
{nfjkghijsf ${userName}}
weather.city weather.temp

2: User Login Status with Conditional Prop

    Pass a user object as a prop 
     (example: { name: "Manu", isLoggedIn: true }).

 output:
"Welcome back!" if isLoggedIn is true, otherwise show "Please login".
LoginParent - parent LoginStatus - child
{ name: "Manu", isLoggedIn: true } -- props
isLoggedIn ? "Welcome back!" : "Please login"

3: Colors with Array Prop:
Pass an array of colors as a prop (example: ["Red", "Blue", "Yellow"]). Display them in one line like: output: Primary colors are: Red, Blue, Yellow

colorParent - PrimayColor -

props - ["Red", "Blue", "Yellow"] colors.map((color,index)=>(

))

Day 10: 7/11/2025 
Table Task Create a JSX component that shows a student details table. Columns: Roll No, Name, Grade. Add at least 3 rows with sample data. Use className="student-table" for the table. Expected Output: Roll No Name Grade 1 Anitha A 2 Rahul B 3 Deepak A+

task for monday:
1. select tag learn (static drop down) create and come
2. form (submit) learn and come  create and come
3. js test 

Day 11 : 10/11/2025

form submit taken 
controlled components : component controlled by react state
uncontrolled components: component controlled by DOM itself.

class task: email in form
task:  Form Task
Create a Student Registration Form with the following inputs:
Name (text input)
Age (number input)
Email (email input)
Password (password input)
Date of Birth (date input)
Use proper className for each input (e.g., "form-input", "form-label").
Display below the form:
Student Registered: [Name] - [Age] years old

Day 12 : 11/11/2025

useEffect= it is a  react hook  used for handling side effects in your component.
login --> post API (posting something to backend)
navigate to dashboard
--> render --> side effect --> products api 

useEffect format:
useEffect (()=>{
    <!-- side Effects code -->
})

case 1 --> 1. No dependency array → runs on every render
useEffect (()=>{
     <!-- side Effects code -->
})

case 2 --> 2. Empty dependency array [] → runs only once initially - (mounted)
run after initial render - if the dependency array is empty it runs initially 
useEffect (()=>{
     <!-- side Effects code -->
} ,[]) - dependancy array or second argument in useEffect

case 3 -->  dependency array with values - runs whenever the  state changes 
const [name , setName]=useState("")
useEffect (()=>{
     <!-- side Effects code -->
}, [name,age])

Day 13:12/11/2025

class task:
Feedback Form – Username, Rating (1–5), Comment.
Display submitted feedback below form.

Day 14 : 13/11/2025
Router dom  --> used to routes pages
install library

  <BrowserRouter>
  <!-- main wraper of router dom -->

<nav>
  <Link to={"/home"}>Home</Link>
  <Link to={"/about"}>About</Link>
  <!-- link the path -->
</nav>
  <Routes>
    <!--wrapper for collecting each routes router dom -->

<Route path='/home' element ={<Home/>} />
<Route path='/about' element ={<About/>} />
<!-- defining the path for each page -->
  </Routes>
  </BrowserRouter>

task:
full name = state ==> (string)
user 2 inputs ==> first name and last name input
first name==> state
last name==> state 
combine these two name inputs and shwo in full name state
useEffect(()={
     setFullname(`${firstname} ${lastname}`)
},[firstname, lastname])

Day 15 : 14/11/2025

useNavigate() -->  navigate to next page without reloading the page
useParams() -->useParams() is a React Router hook that helps you read the values from the URL.
We need useParams() to read these values.

Day 16: 17/11/2025
group task given:
todo list
1. todo input field + button 
2. show list
3. update
4. delete
5. date add 
6. routing

Day 17 : 18/11/2025
same todo list group task done

Day 18 : 19/11/2025
Task given in cls :
1. hospital counter
2. Temperature checker
3. Age checker
4. speed checker
task given to complete : Create a simple product list with at least three items, each having a name and price. Display all the products on the screen with an “Add to Cart” button next to each. When a user clicks the button, add that product to a cart array and show all the selected items below. Allow the user to remove any item from the cart. Finally, display the total number of items in the cart at the top

Day 19 : 20/11/2025 
question asked 
SPA - A Single Page Application is a type of web application that loads only 
one HTML page, and updates the content dynamically using JavaScript 
without refreshing the whole page .
fragments - 1. Fragments groups the jsx elements
            2. Wrapper that doesn't add any new nodes in DOM 
            3. which won't affect the styling of the particular project so using instead of <div>.
            <div> will take the default margin and padding that may affect the styling of the project so 
            using Fragments<></> instead of <div></div>
            cannot add stylename in fragments <></>
            class task : select dropdown 
task : lifting state up
lifecyclye methods
default props
mounting unmounting

Day 20 : 21/11/2025:
vite installed 
react revision done

Day 21 : 22/11/2025:
revision done (absent)
 
Day 22: 24/11/2025:
Redux installation 
npm install @reduxjs/toolkit react-redux
https://redux.js.org/tutorials/quick-start

Day 23: 25/11/2025:
class task given in vite - routing - login page, home , profile, about

Day 24: 26/11/2025:
task - simple calculator (group task)

Day 25 : 27/11/2025:
API INTEGRATION
 
Day 26 : 28/11/2025:
reducerhook taken
task given :
usecallback
react memo


















