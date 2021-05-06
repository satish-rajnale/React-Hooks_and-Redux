import { useEffect, useMemo, useState } from "react";

interface Pokemon {
  id: number;
  name: {
    english: string;
    japanese: string;
  };
  type: string[];
  base: Record<string, number>;
}
export default function usePokemon(): {
  pokemon: Pokemon[];
  filter: string;
  setFilter: (v: string | ((v: string) => string)) => void;
} {
  const [filter, setFilter] = useState("");
  const [allPokemon, setAllPokemon] = useState<Pokemon[]>([]);


  
  useEffect(() => {
    fetch("/pokemon.json")
      .then((resp) => resp.json())
      .then((poke: Pokemon[]) => setAllPokemon(poke));
  }, []);

  const pokemon = useMemo(() => {
    const loweredFiltertext = filter.toLowerCase();
    return  allPokemon.filter(({ name: { english } }) =>
        english.toLowerCase().includes(loweredFiltertext)
      ).slice(0, 50);
}, [filter,allPokemon])

  return {
    pokemon,
    filter,
    setFilter,
  };
}
