import Image from 'next/image'

import icon from '@/assets/pics/sidebar.svg';

function MobileSidebar() {
    return (
        <div>
            <Image 
                src={icon}
                alt='sidebar offcanvas icon'
                width={25}
                height={25}
                className='cursor-pointer'
            />
        </div>
    )
}

export default MobileSidebar