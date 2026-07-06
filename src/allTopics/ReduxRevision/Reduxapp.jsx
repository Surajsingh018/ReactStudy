import Counter from "./counter";
import { configureStore,createSlice } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//! Step 2 : - Create a slice/Feature and export all actions
const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    incre: (prevState) => {
      return prevState + 1;
    },
    decre: (prevState) => {
      return prevState > 0 ? prevState -1 : 0 ;
    },
    reset :(prevState)=> {
      return  0;
    }
  },
});
export const { incre, decre , reset } = counterSlice.actions; //{incre: f , decre: f}

//! Step 1 : - create a store
const myStore = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

const Reduxapp = () => {
  return (
    <div>
      <Provider store={myStore}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Reduxapp;
