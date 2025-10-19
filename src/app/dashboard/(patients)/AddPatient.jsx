'use client'

import Modal from '@/components/Modal'
import { useState } from 'react';
import PatientForm from './PatientForm';
import { validatePatientForm } from '@/services/helpers/validatePatientForm';
import Loader from '@/components/Loader';
import { toast } from 'react-toastify';
import { create_patients } from '@/services/api/APIs';
import { updatePatientsList } from '@/services/helpers/updatePatients';
import { useDispatch } from 'react-redux';

function AddPatient() {

    const dispatch =  useDispatch();
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    let formStates = null;

    const readForm = (newForm) => {
        formStates = [...newForm];
    }

    const prepareData = () => {
        if(formStates) {
            const data = {};
            for(let i of formStates) {
                data[i.title] = i.value
            }
            return data;
        }
    }

    const createPatient = () => {
        setLoading(true);
        const data = prepareData();
        const isValid = validatePatientForm(data);

        if(isValid === true) {
            callAPI(data);
        }
        else {
            toast.error(isValid)
            setLoading(false);
        }
        
    }
    
    function callAPI(data) {
        create_patients(data)
        .then(res => {
            setLoading(false);
            updatePatientsList(dispatch)
            setShowModal(false);
            toast.success('بیمار با موفقیت افزوده شد')
        })
        .catch(err => {
            setLoading(false);
            toast.error('لطفا دوباره تلاش کنید')
        })
    }

    return (
        <>
            <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <div className="px-5 patientInfoHolder py-5">
                    <PatientForm canEdit={true} readForm={readForm} />
                    <div className='w-full flex justify-center'>
                        <button onClick={createPatient} className='addPatient px-5 py-2 text-16 rounded mb-5'>
                            {
                                loading
                                ?
                                    <Loader />
                                :
                                    'افزودن بیمار'
                            }
                        </button>
                    </div>
                </div>
            </Modal>
            
            <button onClick={() => setShowModal(true)} className='addPatient px-5 py-2 text-24 rounded mb-5'>
                افزودن بیمار
            </button>
        </>
    )
}

export default AddPatient