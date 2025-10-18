'use client'

import { configureStore } from "@reduxjs/toolkit";
import logoutSlice from "./logoutSlice";
import patientsSlice from "./patientsSlice";

export const store = configureStore({
    reducer: {
        logoutModal: logoutSlice,
        patientsSlice: patientsSlice
    }
})