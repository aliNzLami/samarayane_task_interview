'use client'

import Loader from "@/components/Loader";
import { delete_patients, edit_patients } from "@/services/api/APIs";
import { useState } from "react";
import PatientForm from "./PatientForm";
import { updatePatientsList } from "@/services/helpers/updatePatients";
import { toast } from "react-toastify";
import { validatePatientForm } from "@/services/helpers/validatePatientForm";
import { useDispatch } from "react-redux";

function PatientInfo({info, closeAndUpdate}) {

    const dispatch =  useDispatch();
    const [patientInfo, setPatientInfo] = useState(info);
    const [canEdit, setCanEdit] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleDelete = () => {
        setLoading(true);
        delete_patients(info.id)
        .then(res => {
            setLoading(false);
            toast.success('بیمار با موفقیت حذف شد')
            closeAndUpdate();
        })
        .catch(err => {
            setLoading(false);
        })
    }

    const readForm = (newForm) => {
        if(newForm) {
            const data = {};
            for(let i of newForm) {
                data[i.title] = i.value
            }
            setPatientInfo({
                id: info.id,
                ...data
            });
        }
    }

    const editPatient = () => {
        setLoading(true);
        const isValid = validatePatientForm(patientInfo);

        if(isValid === true) {
            callAPI();
        }
        else {
            toast.error(isValid)
            setLoading(false);
        }
    }
    
    function callAPI() {
        edit_patients(patientInfo.id, patientInfo)
        .then(res => {
            setLoading(false);
            closeAndUpdate();
            toast.success('اطلاعات با موفقیت آپدیت شد')
        })
        .catch(err => {
            setLoading(false);
            closeAndUpdate();
            toast.error('لطفا دوباره تلاش کنید')
        })
    }
    
    return (
        <div className='patientInfoHolder pb-5'>

            <div className="px-5 patientInfoHolder py-5">
                <PatientForm initialData={patientInfo} canEdit={canEdit} readForm={readForm} />
            </div>
            

            <div className="flex justify-center gap-2">
                <button onClick={handleDelete} disabled={loading} className={`deletePatientBtn rounded px-5 py-2 ${loading ? "opacity-50" : ""}`}>
                    {
                        loading
                        ?
                            <Loader />
                        :
                            "حذف بیمار" 
                    }
                </button>
                { 
                        canEdit
                        ?
                            <button onClick={editPatient} disabled={loading} className={`editPatientBtn rounded px-5 py-2 ${loading ? "opacity-50" : ""}`}>
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