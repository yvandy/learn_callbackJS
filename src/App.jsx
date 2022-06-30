import { useState } from 'react';
import * as learn from "./learnThis"
function Child({ handleClick }) {

  function runFun(handleClick) {
    console.log("I am clicked !!")
    return handleClick();
  }

  // runFun(handleClick) => log, return karega handleClick : xxxABCD
  return <button onClick={handleClick }>Increment</button>;
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    console.log("koko");
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Count is: {count}</h2>
      <Child handleClick={handleClick} />
    </div>
  );
}