import { useReducer } from "react";

const initialState = {
  counter: 100,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function counterReducer(
  state: typeof initialState,
  action: ACTIONTYPES
) {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        counter: state.counter + action.payload,
      };
    case "decrement":
      return {
        ...state,
        counter: state.counter - action.payload,
      };
    default:
       throw new Error( "Bad action")
  }
}

export default function UseReducerComponent(){
    const [state, dispatch] = useReducer(counterReducer, initialState);
    return (
        <div>
            <div>{state.counter}</div>
            <div>
                <button onClick={() => dispatch({type:"increment", payload:56 }) }>Increment</button>
                <button onClick={() => dispatch({type:"decrement", payload:26 }) }>decrement</button>
            </div>
        </div>
    )
}