
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Header from "./Header";
import { getList } from "./placeholder";
import {createGlobalState} from "react-use"

interface Todo{
  id: number;
  text: String;
  done: boolean;
}
const useGlobalTodos = createGlobalState<Todo[]>([]);


function Todo() {
  const [todos, setTodos] = useGlobalTodos();
    const [task, setTask] = useState<string>(""); // <string | null> throws error that value cannot be null;
    const [todoList, setTodoList] = useState<Array<string>>(["Hii I am here"]); // null does not work Array<string |null> it shows error that string[] cannot be null
    const [dark, setDark] = useState<boolean>(false);
    const [list, setList] = useState<Array<string>>([]);
    const [alert, setAlert] = useState<boolean>(false);
    const mounted = useRef(true);
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setTask(event.target.value);
    };
    useEffect(() => {
      mounted.current = true;
      if (list.length!==0 && !alert) {
        return;
      }
      const data = getList();
      if (data && mounted.current ) {
        setList(data);
        setAlert(false);
      }
     // console.log("fetched")
      return () => {mounted.current = false}
    }, [alert]);
   // console.log(list)
  
    const addTodo = useCallback((text:string) => {
      setTodos([...todos, {id:todos.length,text:text,done:false}])
    },[todos]);
    const changeBack = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setDark(!dark);
    };
  
  
    const theme = useMemo(() => {
      return {
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
      };
    }, [dark]);
  
    useEffect(() => {
     // console.log("theme chnaged");
    }, [theme]);
  

    return (
        <>
        <header className="App-header">
          <Header buttontext="Todo App" incrementor={3} />
          <div style={theme}>
            {" "}
            <button onClick={changeBack}>Click</button>
          </div>
        </header>
        <section>
          <div className="todoBody">
            <div className="todoLists">
              <ul className="addList">
                {todoList.length !== 0
                  ? todoList.map((data, index) => (
                      <li key={index} className="listitem">
                        <div>{data}</div>
                        <button>X</button>
                      </li>
                    ))
                  : null}
              </ul>
            </div>
          </div>
          <div className="footer">
            <input type="text" value={task} onChange={handleChange} />
            <button type="submit" >
              {/* onClick={addTodo}> */}
              Add
            </button>
          </div>
        </section>
        </>
    )
}

export default Todo
