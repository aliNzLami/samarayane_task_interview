'use client'
import icon from '@/assets/pics/lightDark.png'
import Image from 'next/image'
import { useCallback, useEffect } from 'react';

function LightMode() {

    const changeDark = (isDark) => {
        const mode = isDark ? "dark" : "light";
        localStorage.setItem('lightMode', mode);
        if(isDark) {
            document.body.classList.add('darkMode');
        }
        else {
            document.body.classList.remove('darkMode');
        }
    }

    const checkLight = useCallback(() => {
        const mode = localStorage.getItem('lightMode');
        if(!mode) {
            changeDark(false);
        }
        else {
            if(mode === 'dark') {
                changeDark(false);
            }
            else {
                changeDark(true);
            }
        }
    }, [])

    useEffect(() => {
        const mode = localStorage.getItem('lightMode');
        if(mode === 'dark') changeDark(true)
    }, [])
    
    
    return (
        <Image  
            src={icon.src}
            alt='light/dark mode toggle'
            width={25}
            height={25}
            className='cursor-pointer'
            onClick={checkLight}
        />
    )
}

export default LightMode