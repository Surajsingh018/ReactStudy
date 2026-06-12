import React, { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";

const UplifitingParent = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Learn State uplifitng</h1>
      <ChildA count={count} />
      <ChildB setCount={setCount} />
    </>
  );
};

export default UplifitingParent;
