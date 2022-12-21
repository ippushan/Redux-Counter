import { createSlice, configureStore } from "@reduxjs/toolkit";

const intialState = {counter : 0, toggleHandler : false}
const counterSlice = createSlice({
  name : 'counter',
  intialState,  
  reducers :{
    increment(state,action){
      state.counter = state.counter + action.value
    },
    decrement(state){
      state.counter--
    },
    toggle(state){
      state.toggleHandler = !state.toggleHandler
    }
  }
})

const store = configureStore({
  reducer : counterSlice.reducer
});


export default store; 


