import { configureStore } from "@reduxjs/toolkit";

import UserReducer from "./userSlice";

export const makeStore = () => {
    return configureStore({
        reducer: {
            user: UserReducer,
        },
    });
};