import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appSlice";

const store = configureStore({
    reducer: {
        taskApp: appReducer,
    },
});

export default store;