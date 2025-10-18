'use client'

import Loader from "@/components/Loader";
import { login } from "@/services/api/APIs";
import { useState } from "react"

function LoginBtn() {

    const [loading, setLoading] = useState(false);

    const handleCLick = () => {
        setLoading(true);
        login()
        .then(res => {
            setLoading(false);
        })
        .catch(err => {
            setLoading(false);
        })
    }

    return (
        <button 
            onClick={handleCLick}
            className={`authCardContainer text-26 px-15 py-5 rounded shadow-lg mt-7 showSmoothly ${loading ? "authCardContainer_clicked" : ""}`}
        >
            {
                loading
                ?
                    <Loader 
                    />
                :
                    "ورود"
            }
        </button>
    )
}

export default LoginBtn