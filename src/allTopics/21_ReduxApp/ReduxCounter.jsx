import { useSelector, useDispatch } from "react-redux";
import { incre, decre, reset } from "./CounterSlice"

//useselector is used allows functional React components to extract and read data directly from the Redux store.
// useSelector to used to axis redux state and returns it

const ReduxCounter = () => {
  let count = useSelector((state) => state.counter);
  // console.log(count);

  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(incre());
  };
  const handleDecrement = () => {
    dispatch(decre());
  };
  const handleReset = () => {
    dispatch(reset());
  };

  return (
    <>
      <h1>Redux Counter {count} </h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

export default ReduxCounter;
