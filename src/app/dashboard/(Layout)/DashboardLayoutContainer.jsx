import Sidebar from "./Sidebar"

function DashboardLayoutContainer() {
    return (
        <>
            <div className='hidden md:block w-[20%] lg:w-[15%] sidebar-desktop'>
                <Sidebar />
            </div>
        </>
    )
}

export default DashboardLayoutContainer