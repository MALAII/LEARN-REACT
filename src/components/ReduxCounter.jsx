import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../redux/counterSlice"

const ReduxCounter = ()=>{
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch()

const handleIncrement =()=>{
dispatch(increment())
// if(count>= 10){
//     alert('you are out of limit')
// }
}
    return(
        <div className="ReduxCounter">
            <h1>{count}</h1>
<button onClick={handleIncrement}>+</button>
<button onClick={()=>dispatch(decrement())}>-</button>
      {/* <button onClick={() => dispatch(reset())}>Reset</button> */}
        </div>
    )
}
export default ReduxCounter