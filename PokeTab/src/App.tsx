import React, { useCallback, useEffect, useState } from "react";
import { Box, Image } from "@fower/react";
import "./App.css";
import { styled } from "@fower/styled";
import usePokemon from "./usePokemon";

const Input = styled("input");
const App: React.FC = () => {
  const { filter, setFilter, pokemon } = usePokemon();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log("pokemon chaange");
  }, [pokemon]);

  useEffect(() => {
    console.log("setFilter chaange");
  }, [setFilter]);
  const onSetFilter = useCallback((event) => setFilter(event.target.value), []);
  console.log(counter);
  return (
    <Box p-10 maxW-1200 m="auto">
      <Input
        p-5
        text4XL
        border-1
        roundedXL
        borderGray500
        w="100%"
        value={filter}
        onChange={onSetFilter}
      />
      <button onClick={() => setCounter(counter + 1)}>Click</button>
      <Box grid gridTemplateColumns-2 gap-10  >
        {pokemon.map((pokemon) => (
          <Box key={pokemon.id} p-10 border-1 borderGray500 roundedXL  grid gridTemplateColumns-2 gap-10 >
            <Image
              src={`/pokemon/${pokemon.name.english.toLowerCase()}.jpg`}
              w="100%"
            />

            {pokemon.name.english}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default App;
