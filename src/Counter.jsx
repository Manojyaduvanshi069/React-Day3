import { useState } from "react";

export default function Counter() {
  //let [StateVariable, setStateVariable] = useState(0);
  let [count, setCount] = useState(0);
  console.log("Component is rendered!");
  console.log(`count=${count}`);

  let incCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Count={count}</h3>
      <button onClick={incCount}>Increase Count</button>
    </div>
  );
}
