'use client'

import { setPatientsList } from "@/lib/redux/patientsSlice";
import { get_patients } from "../api/APIs";


export const updatePatientsList = async (dispatch) => {
    const res = await get_patients();
    if(res && res.length) {
        dispatch(setPatientsList(res));
    }
    else {
        dispatch(setPatientsList([]));
    }
}
