import LightMode from '@/components/LightMode'
import MobileSidebar from './MobileSidebar'

function TopNav() {
    return (
        <div className='flex justify-between'>
            <span className='block md:hidden'>
                <MobileSidebar />
            </span>
            <span className='topNavbarName'>
                نام کاربری
            </span>
            <span>
                <LightMode />
            </span>
        </div>
    )
}

export default TopNav