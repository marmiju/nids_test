'use client'
import { Navlink } from '@/lib/Navlink';
import React, { useState } from 'react'
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineAccountCircle } from "react-icons/md";


export const Mobile = () => {
    const [isOpen, setIsOpen] = useState(false)

    function handledrawer() {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }
    return (
        <div className='md:hidden'>
            <div className=' flex justify-between text-4xl '>
                <div onClick={handledrawer}>
                    <HiMenuAlt2 />
                    <div className={`${isOpen ? 'w-2/3' : '-ml-40'} absolute text-sm transition-all duration-300 grid gap-2  p-2 rounded-2xl backdrop-blur-3xl border border-gray-200 shadow`}>
                        <Navlink></Navlink>
                    </div>
                </div>
                <div><MdOutlineAccountCircle /></div>

            </div>


        </div>
    )
}
