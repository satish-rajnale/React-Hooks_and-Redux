import React, { useEffect, useMemo, useState } from "react";
import { useObservableState } from "observable-hooks";
import { BehaviorSubject, combineLatestWith, map } from "rxjs";

import "./App.css";

import {
  Pokemon,
  deck$,
  rawPokemonwithPower$,
  pokemon$,
  selected$,
} from "./store";

const Deck = () => {
  const deck = useObservableState(deck$, []);

  return (
    <div>
      <div>Deck</div>
      <div>
        {deck.map((p) => (
          <div key={p.id} style={{display:"flex"}}>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
              alt={p.name}
            />
    <div>
              <div>{p.name}</div>
            </div>
         
          </div>
        ))}
      </div>
    </div>
  );
};

const Search = () => {
  const [search, setsearch] = useState("");
  const [Pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    // rawPokemon$.subscribe(console.log);
    //  const sub =  rawPokemonwithPower$.subscribe(setPokemon);
    const sub = pokemon$.subscribe(setPokemon);
    return () => sub.unsubscribe();
  }, []);

  const filteredPokemon = useMemo(() => {
    return Pokemon.filter((p) => p.name.toLowerCase().includes(search));
  }, [Pokemon, search]);

  return (
    <div>
      <input
        placeholder="search..."
        type="search"
        value={search}
        onChange={(e) => setsearch(e.target.value)}
      />
      {filteredPokemon.map((p) => (
        <div key={p.name}>
          <input
            type="checkbox"
            // checked={selected$.value.includes(p.id)}
            checked={p.selected}
            onChange={() => {
              if (selected$.value.includes(p.id)) {
                selected$.next(selected$.value.filter((id) => id !== p.id));
              } else {
                selected$.next([...selected$.value, p.id]);
              }
            }}
          />
          <strong>{p.name}</strong> - {p.power}
        </div>
      ))}
    </div>
  );
};
function App() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
      <Search />
      <Deck />
    </div>
  );
}

export default App;
