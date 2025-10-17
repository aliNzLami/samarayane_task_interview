'use client'
import Image from 'next/image'
import icon from '@/assets/pics/sidebar.svg';
import { useCallback, useEffect, useState } from 'react';
import Sidebar from './Sidebar';

function MobileSidebar() {

    const [isOpen, setIsOpen] = useState(false); 
    const [isVisible, setIsVisible] = useState(false); 

    const toggleOffcanvas = useCallback(() => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsVisible(true);
            setTimeout(() => {
            setIsOpen(true);
            }, 10); 
        }
    }, [isOpen])

    useEffect(() => {
        if (!isOpen && isVisible) {
          const timeout = setTimeout(() => {
            setIsVisible(false);
          }, 300); 
          return () => clearTimeout(timeout);
        }
    }, [isOpen, isVisible]);

    return (
        <>
            <Image 
                src={icon}
                alt='sidebar offcanvas icon'
                width={25}
                height={25}
                className='cursor-pointer'
                onClick={toggleOffcanvas}
            />

            {
                isVisible && (
                    <div
                        className='offcanvas_mobile'
                        style={{
                            transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
                        }}
                    >
                      <div className='flex justify-end items-end'>
                        <button onClick={toggleOffcanvas} style={{ fontSize: '30px', fontWeight: 'bolder'}}>
                          &times;
                        </button>
                      </div>
                      <div className='h-[100%]'>
                        <Sidebar />
                      </div>
                    </div>
                  )
            }

            {
                isVisible && isOpen && (
                    <div
                        className='offcanvas_mobile_bg'
                        onClick={toggleOffcanvas}
                    />
                )
            }
        </>
    )
}

export default MobileSidebar