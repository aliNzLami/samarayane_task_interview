'use client'

import { configureStore } from "@reduxjs/toolkit";
import logoutSlice from "./logoutSlice";

export const store = configureStore({
    reducer: {
        logoutModal: logoutSlice
    }
})