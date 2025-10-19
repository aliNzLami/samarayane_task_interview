'use client'

import Loader from "@/components/Loader";
import Modal from "@/components/Modal";
import Table from "@/components/Table";
import { updatePatientsList } from "@/services/helpers/updatePatients"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PatientInfo from "./PatientInfo";

function PatientsTable() {

    const dispatch = useDispatch();
    const patientsList = useSelector((state) => state.patientsSlice.value);
    const [patientModal, setPatientModal] = useState(false);
    
    const closeAndUpdate = () => {
        setPatientModal(false);
        updatePatientsList(dispatch);
    }

    useEffect(() => {
        updatePatientsList(dispatch);
    }, [])

    return (
        <>
            <Modal isOpen={patientModal} onClose={() => setPatientModal(false)}>
                <PatientInfo closeAndUpdate={closeAndUpdate} info={patientModal} />
            </Modal>

            {
                patientsList
                ?
                    <>
                        {
                            patientsList.length
                            ?
                                <Table 
                                    list={patientsList} 
                                    header={['ID', 'نام', 'تاریخ', 'ایمیل', 'وضعیت']} 
                                    onClickItems={(patient) => setPatientModal(patient)}
                                />
                            :
                                <div className="min-h-[80vh] flex justify-center items-center text-20 noPatients">
                                    هنوز بیماری ثبت نشده است
                                </div>
                        }
                    </>
                :
                    <div className="min-h-[80vh] flex justify-center items-center">
                        <Loader />
                    </div>
            }
        </>
    )
}

export default PatientsTable