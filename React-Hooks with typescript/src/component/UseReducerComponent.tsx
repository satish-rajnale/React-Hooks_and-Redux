import { useReducer } from "react";

const initialState = {
  counter: 100,
};

type ACTIONTYPES =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: number };

function counterReducer(state: typeof initialState, action: ACTIONTYPES) {
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
      throw new Error("Bad action");
  }
}

export default function UseReducerComponent() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <div>{state.counter}</div>
      <div>
        <button onClick={() => dispatch({ type: "increment", payload: 56 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", payload: 26 })}>
          decrement
        </button>
      </div>
    </div>
  );
}



// trying simple example 
// here button is a small component thta gets rendered multiple time in parent component and for each 
// compo it maintains its own state

// also if used onlu clickedState = "one" as initialstate it does not accept the change it goes under switch sttement
// so you have to use a iniState similar object to wrap around it and also make sure you are returning a obj in switch case statement



function ClickReducer({clickedState} : typeof clickedState){
  switch(clickedState){
    case "one":
      return {clickedState:"Two"};
      case "Two":
      return {clickedState:"Three"};
      case "Three":
      return {clickedState:"one"};
      default:
        throw new Error("Bad action");
    
  }
}

 let InitState = {clickedState : "one"}


export function Button(){
  const [{clickedState}, dispatch] = useReducer(ClickReducer, InitState );
  // here you can extract state directly from detructuring : //see above main example//
  //meaning dont have to define a state variable at place of {clickedState}
  // but when multiple state values are renderd doing this wont be sufficient
  return (
    <div onClick={ dispatch}>Button Clicked : {clickedState}</div>
  )
}


export function SecondReducerExample(){
  return (
    <>
    <div style={{color:"red"}}>
      <Button/>
    </div>
    <div style={{color:"black"}}>
    <Button/>
  </div>
  <div style={{color:"blue"}}>
  <Button/>
</div>
</>
  )
}