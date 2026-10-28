import { configureStore } from "@reduxjs/toolkit";
import destinationReducer from "../redux/destinationSlice";

export const store = configureStore({
  reducer: {
    destinations: destinationReducer
  }
});