import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import {Provider, useSelector} from "react-redux"
import { store } from "./lib/store";
export function App() {
  return (
    <Provider store={store}>
    <ChakraProvider theme={theme}>
      <Box maxWidth="8xl" margin="auto" p={5}>
       <TodoApp/> 
      </Box>
    </ChakraProvider>
    </Provider>
  );
};

const TodoApp = () => {
  return <div className="App"></div>
}
