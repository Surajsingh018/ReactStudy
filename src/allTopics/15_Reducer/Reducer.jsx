import { useReducer } from "react";
import { intialState } from "./CounterState";
import { reducerFunc } from "./CounterState";

const Reducer = () => {
  const [count, dispatch] = useReducer(reducerFunc, intialState);
  return (
    <>
      <h1>Learn Reducer {count}</h1>
      <button onClick={() => dispatch("incre")}>Incerement</button>
      <button onClick={() => dispatch("decre")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </>
  );
};
export default Reducer;
