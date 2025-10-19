'use client'

import Input from "@/components/Input"
import { useState } from "react"

function PatientForm({readForm, canEdit}) {

    const [formStates, setFormStates] = useState([
        {
            placeholder: 'نام',
            title: 'name',
            type: 'string',
            value: ''
        },
        {
            placeholder: 'ایمیل',
            title: 'email',
            type: 'email',
            value: ''
        },
        {
            placeholder: 'تولد',
            title: 'dateOfBirth',
            type: 'date',
            value: ''
        },
    ])

    const onChangeHandler = (input) => {
        const newForm = [...formStates];
        newForm[input.index].value = input.value;
        setFormStates([...newForm]); 
        readForm([...newForm])
    }

    return (
        <div className='patientInfoHolder pt-4 pb-10'>
            {
                formStates.map((item, index) => 
                    item.type === 'date'
                    ?
                        <input 
                            onChange={(e) => onChangeHandler({value: e.target.value, index}) } 
                            type="date" 
                            defaultValue={item.value}
                            disabled={!canEdit}
                        />
                    :
                        <Input 
                            placeholder={item.placeholder} 
                            type={item.type} 
                            value={item.value} 
                            index={index}
                            onChange={(value) => onChangeHandler({value, index})}
                            disabled={!canEdit}
                        />
                )
            }
        </div>
    )
}

export default PatientForm