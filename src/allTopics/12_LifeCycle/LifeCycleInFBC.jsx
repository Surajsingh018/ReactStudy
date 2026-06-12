import { useEffect, useRef, useState } from "react";

const LifeCycleInFBC = () => {
  const [count, setCount] = useState(0);
  const intialRender = useRef(true) // {current : true}
  
  useEffect(() => {
    console.log("Component Mountend");
    const id = setInterval(()=>{
      console.log("Api Called");
      
    },2000)
    return () =>{
      //clean-up function
      clearInterval(id) 
      console.log("component Unmounted");
      
    }
  }, []);

  useEffect(() => {
    if(intialRender.current) {
      intialRender.current = false;
      return;
    }
    console.log("Component Updated");
  }, [ count ]);
  return (
    <>
      <h1>Learn LifeCycle in FBC</h1>
      <h2>Counter:{count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
};
export default LifeCycleInFBC;
