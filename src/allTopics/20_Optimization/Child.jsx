import React from "react";

const Child = (props) => {
  console.log("I am Child Comp" , props.data);

  return (
    <>
      <h1>Child Component</h1>
    </>
  );
};

export default React.memo(Child);

//! it is used to memoize a component untill props are unchanged
