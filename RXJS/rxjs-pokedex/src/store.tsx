import {BehaviorSubject, combineLatestWith, map} from "rxjs";
import { combineLatestInit } from "rxjs/internal/observable/combineLatest";

export interface Pokemon {
    id: number;
    name: string;
    type: string[];
    hp: number;
    attack: number;
    defense: number;
    special_attack: number;
    special_defense: number;
    speed: number;
    power?: number;
    selected?: boolean;
  }

  const rawPokemon$ = new BehaviorSubject<Pokemon[]>([]);
  export const selected$ = new BehaviorSubject<number[]>([]);


  export const rawPokemonwithPower$ =  rawPokemon$.pipe(
    map( (pokemon) => pokemon.map( p => ({
        ...p, 
        power: p.hp + p.attack + p.defense + p.special_attack + p.special_defense
    })))
);

export const pokemon$ = rawPokemonwithPower$.pipe(
    combineLatestWith(selected$),
    map(([pokemon, selected]) => 
        pokemon.map((p) => ({
            ...p,
            selected: selected.includes(p.id)
        }))    
    )
)

export const deck$ = pokemon$.pipe(
    map((pokemon) => pokemon.filter(p => p.selected))
)



fetch("/pokemin-simplified.json")
  .then((res) => res.json())
  .then((data) => rawPokemon$.next(data));
