import { configureStore } from "@reduxjs/toolkit";
import homeReduser from "./homeSlice";

const store = configureStore({
    reducer:{
      home : homeReduser,
    }
})

export default store