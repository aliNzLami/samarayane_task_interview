'use client'

import { usePathname, useRouter } from "next/navigation"
import { useCallback, useEffect } from "react";

function SidebarItems({item}) {
    const route = useRouter();
    const pathName = usePathname();

    const handleRoute = useCallback(() => {
        route.push(item.url)
    }, [pathName])

    return (
        <div 
            className={`sidebarItems rounded p-3 mb-4 cursor-pointer ${pathName === item.url ? "sidebarItems_active" : ""}`}
            key={item.url}
            onClick={handleRoute}
        >
            { item.title }
        </div>
    )
}

export default SidebarItems