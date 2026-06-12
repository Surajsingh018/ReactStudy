//!it used to avoiding props drilling
//1) create context  :- create krna
//2)provide context  :- provide axis
// 3) consume context :- used krna

import { createContext } from "react";

//! step1 : Create A Context
export const MyContext = createContext(); //return context object

//!step2: Provide A Context
const ContextProvider = (props) => {
  let str = "Hii!! Im coming from context";
  return (
    <>
      <MyContext.Provider value={str}  >{props.children}</MyContext.Provider>
    </>
  );
};
export default ContextProvider;
