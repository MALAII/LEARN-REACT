import { useReducer } from "react";

const initialState = {
    count: 0,
}

const reducer = (state, actions) => {
    switch (actions.type) {
        case 'increment':
            return { count: state.count + 1 }
        case 'decrement':
            return { count: state.count - 1 }
        case'reset':
        return {state};
    }
}

function ReducerHook() {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="reducerhook">

            <button onClick={() => { dispatch({ type: "increment" }) }} >+</button>
            {state.count}
            <button onClick={() => { dispatch({ type: "decrement" }) }} >-</button>
            <button onClick={()=>{dispatch({type: "reset"})}}>Reset</button>

        </div>
    );
}
export default ReducerHook;