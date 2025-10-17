'use client'

import { useCallback } from "react"

function Logout() {

    const handleLogout = useCallback(() => {
        
    }) 

    return (
        <div onClick={handleLogout} className='sidebarItems text-20 mb-4 cursor-pointer'>
            خروج
        </div>
    )
}

export default Logout