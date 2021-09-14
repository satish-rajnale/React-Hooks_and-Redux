  
import React, { useMemo, useState } from "react";
// import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";

import "./App.css";

import { PokemonProvider, usePokemon } from "./store";
function App() {

  useEffect(()=>{
    // rawPokemon$.subscribe(console.log);
    rawPokemonwithPower$.subscribe(console.log);
  },[]);
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
