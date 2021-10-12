import * as React from "react";
import { ChakraProvider, Box, theme } from "@chakra-ui/react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "./lib/store";
import { useEffect } from "hoist-non-react-statics/node_modules/@types/react";
export function App() {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Box maxWidth="8xl" margin="auto" p={5}>
          <TodoApp />
        </Box>
      </ChakraProvider>
    </Provider>
  );
}

const TodoApp = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state);
  useEffect(() => {
    dispatch({ type: "TODO_FETCH_SCCEEDED" });
    return () => {};
  }, []);
  return <div className="App">{JSON.stringify(todos)}</div>;
};
