'use client'

import Loader from "@/components/Loader";
import Table from "@/components/Table";
import { updatePatientsList } from "@/services/helpers/updatePatients"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function PatientsTable() {

    const dispatch = useDispatch();
    const patientsList = useSelector((state) => state.patientsSlice.value);
    

    useEffect(() => {
        updatePatientsList(dispatch);
    }, [])

    

    return (
        <>
            {
                patientsList
                ?
                    <>
                        {
                            patientsList.length
                            ?
                                <Table list={patientsList} header={['ID', 'نام', 'تاریخ', 'ایمیل', 'وضعیت']} />
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