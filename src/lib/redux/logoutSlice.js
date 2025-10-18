'use client'

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false
}

export const logoutSlice = createSlice({
    name: 'logoutSlice',
    initialState,
    reducers: {
        setLogoutModal: (state, actions) => {
            state.value = actions.payload;
        }
    }
})

export const { setLogoutModal } = logoutSlice.actions;
export default logoutSlice.reducer; 