import logo from '@/assets/pics/public-health-icon.svg'
import { dashboardRoutes } from '@/lib/dashboardRoutes'
import Image from 'next/image'
import SidebarItems from './SidebarItems'
import Logout from './Logout'

function Sidebar() {
    return (
        <>
            <div className="flex flex-col justify-between h-[100%]">
                <nav className="flex flex-col gap-4">
                    <div className="w-[100%] flex items-center justify-center mb-10">
                        <Image alt="Sama Patient Logo" src={logo.src} width={80} height={80} />
                    </div>
                    {
                        dashboardRoutes.map(item => {
                            return (
                                <SidebarItems key={item.url} item={item} />
                            )
                        })
                    }
                </nav>
                
                <Logout />
            </div>
        </>
    )
}

export default Sidebar