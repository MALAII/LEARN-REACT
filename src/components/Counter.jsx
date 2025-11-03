import { useState } from "react"
function Counter(){
const [count, setCount] = useState(0)
const increment = ()=> setCount(count+1)
const decrement = ()=> {
   if(count>0) {
    setCount(count-1)
}else {
        alert ('counter should be more than zero')
     }
    };
     const reset = () => {
    setCount(0);
  };

    return (
        <> 
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>
        </>
    )
};
 
export default Counter;
