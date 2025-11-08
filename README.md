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

Day 2: 28/10/2025:
file structure
component- is a building block of react project it is a resuable piece of code
function components - functional component is a js function which returns the jsx element.
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

Day 3:29/10/2025:
        state: state is special memory inside a component that can holds data which can change over time
        Hooks: hook is a special function used to  state management, lifecycle methods , side effects 
        usestate: usestate is a hook used to manage state in the component 
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

task for monday:
1. select tag learn (static drop down) create and come
2. form (submit) learn and come  create and come
3. js test 




