'use client'

import { useRouter } from "next/navigation"

function SidebarItems({item}) {
    const route = useRouter();

    return (
        <div 
            className='sidebarItems mb-4 cursor-pointer' 
            key={item.url}
            onClick={() => route.push(item.url)}
        >
            { item.title }
        </div>
    )
}

export default SidebarItems