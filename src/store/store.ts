import { configureStore } from "@reduxjs/toolkit";
import todoStore from "./todoStore";

export default configureStore({
    reducer: {
        todo: todoStore.reducer,
    },
    devTools: true
})
