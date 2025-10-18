'use client'

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: null
}

export const patientsSlice = createSlice({
    name: 'patientsSlice',
    initialState,
    reducers: {
        setPatientsList: (state, actions) => {
            state.value = actions.payload;
        }
    }
})

export const { setPatientsList } = patientsSlice.actions;
export default patientsSlice.reducer; 