  
import React, { useEffect, useMemo, useState } from "react";
// import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";

import "./App.css";

import { Pokemon, rawPokemonwithPower$, pokemon$, selected$ } from "./store";

const Search = () => {
  const [search, setsearch] = useState("");
  const [Pokemon, setPokemon] = useState<Pokemon[]>([])
  
  
  useEffect(()=>{
    // rawPokemon$.subscribe(console.log);
  //  const sub =  rawPokemonwithPower$.subscribe(setPokemon);
   const sub =  pokemon$.subscribe(setPokemon);
    return () => sub.unsubscribe();
  },[]);

  const filteredPokemon = useMemo(() => {
    return Pokemon.filter((p) => p.name.toLowerCase().includes(search));
  }, [Pokemon, search])

  return(
    <div>
      <input
      placeholder="search..."
      type="search"
      value={search}
      onChange={(e) => setsearch(e.target.value)}
      />
      {filteredPokemon.map((p) => (
        <div key={p.name}>
          <input type="checkbox" 
          // checked={selected$.value.includes(p.id)}
          checked={p.selected}
          onChange={() => { 
            if(selected$.value.includes(p.id)){
              selected$.next(selected$.value.filter((id) => id !== p.id));
            }else{
              selected$.next([...selected$.value, p.id]);
            }
          }}/>
          <strong>{p.name}</strong> - {p.power}
        </div>
      ))}
    </div>
  )
}
function App() {
  return (
    <div style={{display:"grid", gridTemplateColumns:"1fr 1fr",}}>
    <Search/>
    </div>
  );
}

export default App;
