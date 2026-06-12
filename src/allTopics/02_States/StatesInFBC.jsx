import { useState } from "react";

const StatesInFBC = () => {
  const [count, setCount] = useState(0); //useState given two value = [undefined,function].
  const updateCount = () => {
    setCount(count + 1);
  };

  const decrementCount = ()=>{
    setCount(count - 1);
  }
  const resetcount = () => {
    setCount (0 )
  }
  return (
    <>
      <h1>Learn states in fbc</h1>
      <h2>Counter={count}</h2>
      <button onClick={updateCount}>Increase</button>
      <button onClick={decrementCount} disabled={count === 0 ? true : false}>Decrease</button>
      <button onClick={resetcount} disabled = {count === 0 ? true : false}>Reset</button>
    </>
  );
};
export default StatesInFBC;



//! What is State?
//In React , State is a component memory . It is an object used to store data that change over time , such as  user input , a shopping cart , or  whether a toggle is active .

//! What is useState ?
//useState is a React Hoook that lets you add a state variable to your component.

//! Hoe it works (The Syntax).
//When you use it , You always returns an array consists of two value :
//1) The Current Value (what's currently in the meomry box).
//2) A Function to update it (the tool to put something new in the box). 


//! states , props, context