import { useState } from "react";

const CounterFBC = () => {
  const [count,setCount] = useState(0);

  const increment = () =>setCount(count +1)
  return (
    <>
      <h1>Hello counter FBC Components = {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={() => setCount(count -1)}>Decrement</button>
      <button onClick={()=> setCount(0)}>Reset</button>
    </>
  );
};
export default CounterFBC;
