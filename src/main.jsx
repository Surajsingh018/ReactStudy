//! React way to create a react element
import { createRoot } from "react-dom/client";
import App from "./App";


//global css 
import "./index.css"
createRoot(document.getElementById("root")).render(<App/> );


//! js way to create a react element

// const divTag = document.getElementById("root");
// const h1tag = document.createElement("h1");
// h1tag.textContent = "Hello React! Using JS way";
// divTag.append(h1tag);
