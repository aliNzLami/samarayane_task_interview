import LogoutModal from "./LogoutModal"
import Sidebar from "./Sidebar"
import TopNav from "./TopNav"

function DashboardLayoutContainer() {
    return (
        <>
            <LogoutModal />
            
            <div className='hidden md:block w-[22%] lg:w-[15%] sidebar-desktop'>
                <Sidebar />
            </div>
            <div className='w-[100%] md:w-[78%] lg:w-[85%] topNav'>
                <TopNav />
            </div>
        </>
    )
}

export default DashboardLayoutContainer