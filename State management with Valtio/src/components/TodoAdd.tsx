import * as React from "react";
import { Button, Input, Grid } from "@chakra-ui/react";
import { useProxy } from 'valtio';
import  store  from "../store";


function TodoAdd() {
  const snapshot = useProxy(store);

  return (
    
    
    
    <Grid pt={2} templateColumns="5fr 1fr" columnGap="3">
      <Input
        placeholder="New todo"
        value={snapshot.newTodo}
        onChange={({ target }) => (store.newTodo = target.value)}
      />
      <Button onClick={() => store.addTodo()}>Add Todo</Button>
    </Grid>
  );
}

export default TodoAdd;
