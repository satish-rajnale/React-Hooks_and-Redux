import React, { useCallback, useEffect, useRef, useState } from "react";

export default function UseCallbackComponent() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

  const increment = useCallback((incrementor) => {
    return [count+incrementor, count+incrementor + 1];
  }, [count])

  const ToggleTheme = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };
  return (
    <div style={ToggleTheme}>
      <input
      type="number"
        value={count}
        onChange={({ target }) => setCount(parseInt(target.value))}
      />
      <button onClick={() => setDark((curDark) => !curDark)}>Hello</button>
      <Hello increment={increment} />
      <div>Render : {count}</div>
    </div>
  );
}

export const Hello = ({ increment }) => {
  // increment can be stored in memo but it changes everytime increment changes and increment changes all the time
  const [items, setItems] = useState([]);
  useEffect(() => {
      console.log("count",items)
    setItems(increment(20));
  }, [increment]);
  const renders = useRef(0);
  console.log("renders", renders.current++);
  return (
    <ul>
      {items.map((i, ind) => (
        <li key={ind}>{i}</li>
      ))}
    </ul>
  );
};
