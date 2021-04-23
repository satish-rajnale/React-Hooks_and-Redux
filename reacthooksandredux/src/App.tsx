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
      <body>
        <div className="todoBody">
          <div className="todoLists" >
            <ul className="addList">
              {}
            </ul>
          </div>
          <div className="footer">
            <input type="text" value={task} onChange={handleChange}/>
            <button type="submit" onClick={addTodo}>Add</button>
          </div>
        </div>
        
      </body>
      </div>
    </div>
  );
}

export default App;
