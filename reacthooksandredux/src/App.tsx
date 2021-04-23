import React from 'react';

import './App.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Header buttontext="Hello fro header" incrementor={3}/> 
       
      </header>
    </div>
  );
}

export default App;
