'use client'

function Input({placeholder, type, value, index, onChange, disabled}) {
    return (
        
        <div className="relative mb-5">

            <input 
                id={`form_name${index}`} 
                className="form-control" 
                type={type} 
                defaultValue={value}
                onChange={(e) => onChange(e.target.value)} 
                disabled={disabled}
            />

            <label for={`form_name${index}`} className={`${value === "" ? "" : "activelabel"}`}>
                { placeholder }
            </label>

        </div>
    )
}



export default Input
