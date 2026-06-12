//props it will use to send data from parent to child componet it will red only
// it is imuatable

import Child1 from "./Child1";
import Child2 from "./Child2";
import Child3 from "./Child3";

const Parent1 = () => {
  let data1 = "Hii";
  let data2 = 8797222663;
  let data3 = { name: "john", age: 23 };
  return (
    <>
      <h1>Parent Componets</h1>

      {/* sending multiple props  */}
      <Child1 prop1={data1} props2={data2} props3={data3} />

      {/* sending single props to multiple data  */}
      <Child2 data={{ data1, data2, data3}} />

      <Child3 prop1={data1} prop2={data2} prop3={data3}/>
    </>
  );
};
export default Parent1;
