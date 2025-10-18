'use client'

import { setLogoutModal } from "@/lib/redux/logoutSlice";
import { useDispatch } from "react-redux";

function Logout() {

    const dispatch = useDispatch();

    return (
        <div 
            onClick={() => dispatch(setLogoutModal(true))}
            className='sidebarItems text-20 mb-4 cursor-pointer'
        >
            خروج
        </div>
    )
}

export default Logout