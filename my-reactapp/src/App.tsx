import React, { useState } from 'react';
import { createObservable, useObservable } from './useObservable';

const globalState = createObservable({
  count: 0,
});

function Counter() {
  const counter = useObservable(globalState);
  return (
    <div>
      <div>Count = {counter.count}</div>
      <button onClick={() => (counter.count += 1)}>Add count</button>
    </div>
  );
}
function UnsubscribedCounter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <div>UnsubscribedCount = {counter}</div>
      <button onClick={() => setCounter((counter) => (counter += 1))}>
        Add count
      </button>
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <div
          className="rowComps"
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-between',
            width: '700px',
          }}
        >
          <div>
            <Counter /> <Counter /> <Counter /> <Counter /> <Counter />
          </div>
          <div>
            <UnsubscribedCounter />
            <UnsubscribedCounter />
            <UnsubscribedCounter />
            <UnsubscribedCounter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
