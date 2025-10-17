'use client'
import icon from '@/assets/pics/lightDark.png'
import Image from 'next/image'

function LightMode() {
    return (
        <Image  
            src={icon.src}
            alt='light/dark mode toggle'
            width={25}
            height={25}
            className='cursor-pointer'
        />
    )
}

export default LightMode