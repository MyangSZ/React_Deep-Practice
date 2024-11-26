import React from "react";
import { useCounter } from "./context/counterContext";

function App() {
  const [counter, setCounter] = useCounter();
  return (
    <>
      <div>counter : {counter}</div>
      <button onClick={() => setCounter((prev) => prev + 1)}>+1</button>
      <button onClick={() => setCounter((prev) => prev - 1)}>-1</button>
    </>
  );
}

export default App;
