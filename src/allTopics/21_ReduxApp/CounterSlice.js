import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name : "counter",
  initialState : 0,
  reducers :{
    incre: (prev, action) => (prev + 1 ) ,
    decre: (prev, action) => (prev > 1 ? prev -1 :0),
    reset: (prev, action) => (0),
  }
})
export const {incre, decre,reset} = counterSlice.actions;