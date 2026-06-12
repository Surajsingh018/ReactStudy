import { useState } from "react";

const Togglecomponets = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Hello World");

  const updateToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <h1>{data}</h1>
      <button onClick={() => setData("Byee world")}>change</button>
      <hr />
      <button onClick={updateToggle}>Toggle me </button>
      {toggle && <h1>Hello suraj</h1>}
    </>
  );
};
export default Togglecomponets;