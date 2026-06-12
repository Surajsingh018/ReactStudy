import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
// import Home from "./Home";
// import SignUp from "./SignUp";

const Home = lazy(()=>import("./Home"))
const SignUp = lazy(()=>import("./SignUp"))

const Routing1 = () => {
  return (
    <>
      <BrowserRouter>
      <Suspense fallback={<h1>loading....</h1>} >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
      
    </>
  );
};

export default Routing1;
