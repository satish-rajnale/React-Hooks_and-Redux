import {createGlobalState} from "react-use"
import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from "react";

type ACTIONTYPES = 
| {type: "ADD"; text: String}
| {type: "REMOVE"; id: number}

interface Todo{
  id: number;
  text: String;
  done: boolean;
}
const useGlobalTodos = createGlobalState<Todo[]>([]);

export function useTodos(initialTodos: Todo[]):{
  todos: Todo[];
  addTodo: (text:string) => void;
  removeTodo: (id: number) => void;
}{

  const [todos, setTodos] = useGlobalTodos();

  useEffect(()=>{
    setTodos(initialTodos)
  },[initialTodos,setTodos]);

  const addTodo = useCallback((text:string) => {
    setTodos([...todos, {id:todos.length,text:text,done:false}])
  },[todos,setTodos]);
  const removeTodo = useCallback((removeid:number) => {
    setTodos(todos.filter(({id}) => id != removeid));

  },[todos,setTodos]);
  // const [todos, dispatch] = useReducer((state: Todo[],action: ACTIONTYPES) => {
  //   switch(action.type){
  //     case "ADD":
  //       return {
  //         ...state,
  //         {
  //           id:number,
  //           text:text,
  //         }
  //       }
  //   }
  // })
  return {todos, addTodo,removeTodo};
}
