import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import SignUp from "./SignUp";

export const myRouter = createBrowserRouter ([
{
  path: "/",
  element : <Home/>
},
{
  path : "/signup" ,
  element : <SignUp/>
}
])