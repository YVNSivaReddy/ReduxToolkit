import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
console.log("In  a Stotre")
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // For connecting to Redux dev tools
    devTools: process.env.NODE_ENV !== 'production',
  },

});
