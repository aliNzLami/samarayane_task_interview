'use client'

import Loader from "@/components/Loader";
import { delete_patients } from "@/services/api/APIs";
import { useState } from "react";

function PatientInfo({info, closeAndUpdate}) {

    const [patientInfo, setPatientInfo] = useState(info);
    const [canEdit, setCanEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        setLoading(true);
        delete_patients(info.id)
        .then(res => {
            setLoading(false);
            closeAndUpdate();
        })
        .catch(err => {
            setLoading(false);
        })
    }
    
    return (
        <div className='patientInfoHolder'>
            

            <div className="mt-10 flex justify-center gap-2">
                <button onClick={handleDelete} disabled={loading} className={`deletePatientBtn rounded px-5 py-2 ${loading ? "opacity-50" : ""}`}>
                    {
                        loading
                        ?
                            <Loader />
                        :
                            "حذف" 
                    }
                </button>
                { 
                        canEdit
                        ?
                            <button onClick={() => {}} disabled={loading} className={`editPatientBtn rounded px-5 py-2 ${loading ? "opacity-50" : ""}`}>
                                {
                                    loading
                                    ?
                                        <Loader />
                                    :
                                        "تایید ویرایش" 
                                }
                            </button>
                        :
                            <button onClick={() => setCanEdit(true)} className="editPatientBtn rounded px-5 py-2">
                                ویرایش
                            </button>
                }
                
            </div>
        </div>
    )
}

export default PatientInfo