import { createStore } from '@reduxjs/toolkit'
import CounterReducer from "./Slices/CounterSlice";


const store = createStore(CounterReducer);

export default store;