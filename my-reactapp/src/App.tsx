// import React, { useState } from 'react';
// import { createObservable, useObservable } from './useObservable';

// const globalState = createObservable({
//   count: 0,
// });

// function Counter() {
//   const counter = useObservable(globalState);
//   return (
//     <div>
//       <div>Count = {counter.count}</div>
//       <button onClick={() => (counter.count += 1)}>Add count</button>
//     </div>
//   );
// }
// function UnsubscribedCounter() {
//   const [counter, setCounter] = useState(0);
//   return (
//     <div>
//       <div>UnsubscribedCount = {counter}</div>
//       <button onClick={() => setCounter((counter) => (counter += 1))}>
//         Add count
//       </button>
//     </div>
//   );
// }
// function App() {
//   return (
//     <div className="App">
//       <div className="App-header">
//         <div
//           className="rowComps"
//           style={{
//             flexDirection: 'row',
//             display: 'flex',
//             justifyContent: 'space-between',
//             width: '700px',
//           }}
//         >
//           <div>
//             <Counter /> <Counter /> <Counter /> <Counter /> <Counter />
//           </div>
//           <div>
//             <UnsubscribedCounter />
//             <UnsubscribedCounter />
//             <UnsubscribedCounter />
//             <UnsubscribedCounter />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;
import React from 'react';
// import './style.css';

export default function App() {
  // React is loaded and is available as React and ReactDOM
  // imports should NOT be used
  return <List items={['A', 'B', 'C']} />;
}

const List = (props) => {
  const [listItems, setListItems] = React.useState([]);

  React.useEffect(() => {
    setListItems(props.items);
  }, []);
  React.useEffect(() => {
    console.log(listItems);
  }, [listItems]);
  const setOrder = (index) => {
    let currentList = [...listItems];
    let selectedItem = currentList.splice(index, 1);
    currentList.unshift(selectedItem[0]);
    console.log(currentList);
    setListItems(currentList);
  };
  return (
    <ul>
      {listItems.map((item, index) => (
        <li key={index} onClick={() => setOrder(index)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

// React is loaded and is available as React and ReactDOM
// imports should NOT be used
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       spanClicked: 0,
//       spanElements: [1, 2, 3, 4, 5],
//     };
//   }
//   setNo = (no) => {
//     this.setState({ spanClicked: no });
//   };

//   render() {
//     return (
//       <div id="rating">
//         {/* @ts-ignore */}
//         {this.state.spanElements.map((item, index) => (
//           <SpanEL
//             key={item}
//             spanNo={item}
//             //@ts-ignore
//             spanClicked={this.state.spanClicked}
//             setNo={this.setNo}
//           />
//         ))}
//       </div>
//     );
//   }
// }

// function SpanEL(props) {
//   let classes = props.spanNo <= props.spanClicked ? 'active' : '';
//   console.log(props.spanNo);
//   return (
//     <>
//       {classes !== '' ? (
//         <span className={classes} onClick={() => props.setNo(props.spanNo)}>
//           *
//         </span>
//       ) : (
//         <span onClick={() => props.setNo(props.spanNo)}>*</span>
//       )}
//     </>
//   );
// }
