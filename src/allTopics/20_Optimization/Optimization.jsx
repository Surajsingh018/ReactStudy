import { useState, useMemo, useCallback } from "react";
import Child from "./Child";

const Optimization = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  const handleAdd = () => setAdd((prev) => prev + 1);
  const handleMinus = () => setMinus((prev) => prev - 1);

  //! usememo it return a memoized value
  //! it is used to uncessary conditon or perfomance ko avoid krne k liye
  const multiply = useMemo(() => {
    console.log("multiply");
    return add * 5;
  }, [add]);

  //! it returns a memoized function
  const data = useCallback(() => {
    console.log("I am data function");
  }, []);
  
  return (
    <>
      <h1>Learn Optimization Technique</h1>

      <section>
        <strong>Adddition:-{add}</strong>
        <button onClick={handleAdd}>Increment</button>
      </section>

      <hr />
      <section>
        <strong>Subtract:-{minus}</strong>
        <button onClick={handleMinus}>Decrement</button>
      </section>
      <hr />

      <section>
        <h3>Multiplication is {multiply}</h3>
      </section>
      <hr />
      <Child data={data} />
    </>
  );
};

export default Optimization;
