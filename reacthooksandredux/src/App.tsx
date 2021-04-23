import React, { useState } from 'react';

import './App.css';
import Header from './Header';

function App() {
  const [task, setTask] = useState<string>("");// <string | null> throws error that value cannot be null; 
  const [todoList, setTodoList] = useState<Array<string>>([]);// null does not work Array<string |null> it shows error that string[] cannot be null


 const handleChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setTask(event.target.value);
 }

 const addTodo  = ( ) => {
   setTodoList([...todoList, task]);
}


  return (
    <div className="App">
      <div className="todoApp">
      <header className="App-header">
       <Header buttontext="Todo App" incrementor={3}/> 
       
      </header>
      <section>
        <div className="todoBody">
          <div className="todoLists" >
            <ul className="addList">
              {todoList.length!==0 ? 
                todoList.map((data, index) => (
                  <li key={index} className="listitem">
                    <div>{data}</div><button>X</button>
                  </li>
                ))
              : null }
            </ul>
          </div>
          
        </div>
        <div className="footer">
            <input type="text" value={task} onChange={handleChange}/>
            <button type="submit" onClick={addTodo}>Add</button>
          </div>
      </section>
      </div>
    </div>
  );
}

export default App;
