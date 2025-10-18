'use client'

import Loader from "@/components/Loader";
import Modal from "@/components/Modal"
import { setLogoutModal } from "@/lib/redux/logoutSlice";
import { logout } from "@/services/api/APIs"
import { useCallback, useState } from "react"
import { useDispatch, useSelector } from "react-redux";

function LogoutModal() {

    const dispatch = useDispatch();
    const showModal = useSelector((state) => state.logoutModal.value);
    const [loading, setLoading] = useState(false)

    const logoutHandler = () => {
        setLoading(true);
        logout()
        dispatch(setLogoutModal(false))
    }
    
    return (
        <>
            <Modal isOpen={showModal} onClose={() => dispatch(setLogoutModal(false))}>
                <span className="w-full flex justify-center">
                    آیا می خواهید خارج شوید؟
                </span>

                <button onClick={logoutHandler} className={`logoutBtn rounded ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
                    {
                        loading
                        ?
                            <Loader />
                        :
                            "بله"
                    }
                </button>
            </Modal>
        </>
    )
}

export default LogoutModal