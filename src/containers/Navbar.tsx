"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <nav className='flex flex-row items-center justify-between pt-[51px]' style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0))"}}>
            <Link className="logo flex items-center gap-[15px]" href={'/'}>
                <svg width={35} height={36} viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6474 12.6194V0.5H13.3526V12.6194L2.73121 8.85821L0 16.903L10.9249 20.8731L4.04624 30.4851L10.7225 35.5L17.5 26.097L24.2775 35.5L30.9538 30.4851L24.0751 20.8731L35 16.903L32.2688 8.85821L21.6474 12.6194Z" fill="white" />
                </svg>
                <svg width={2} height={26} viewBox="0 0 2 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.6" d="M1 0.5L1 25.5" stroke="white" />
                </svg>
                <div className="text-white font-medium leading-[normal]">NL Agency</div>
            </Link>
            <div className='flex flex-row items-center gap-6'>
                <Link className={(pathname == '/' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal]"} href={'/'}>
                    About us
                </Link>
                <Link className={(pathname == '/cases' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal]"} href={'/cases'}>
                    Cases
                </Link>
                <Link className={(pathname == '/contact' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal]"} href={'/contact'}>
                    Contact
                </Link>
                <Link className={(pathname == '/vacancy' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal]"} href={'/vacancy'}>
                    Vacancy
                </Link>
            </div>
            <div className='flex flex-row items-center'>
                <Link href={'/explore-services'} className={style.buttonBorder + " flex justify-center items-center py-4 px-8 rounded-full text-white text-center text-sm"}>
                    Explore services
                </Link>
            </div>
        </nav >
    )
}

export default Navbar
