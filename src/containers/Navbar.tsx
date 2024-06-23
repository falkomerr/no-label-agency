"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import style from './Navbar.module.css'
import LanguagrSelect from '@/components/common/LanguagrSelect'
import { useTranslation } from '@/hook/useLanguageStore'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const pathname = usePathname()
    const { getTranslation } = useTranslation();
    return (
        <div>
            <nav className='hidden md:flex absolute w-screen flex-row items-center justify-center pt-[51px] px-4 md:px-12 xl:px-20 z-10' style={{ background: "linear-gradient(180deg, rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0))" }}>
                <div className="flex flex-row items-center justify-between w-full max-w-[1440px]">
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
                            {getTranslation('nav.about')}
                        </Link>
                        <Link className={(pathname == '/cases' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal]"} href={'/cases'}>
                            {getTranslation('nav.cases')}
                        </Link>
                        <Link className={(pathname == '/contact' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal]"} href={'/contact'}>
                            {getTranslation('nav.contact')}
                        </Link>
                        <Link className={(pathname == '/vacancy' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal]"} href={'/vacancy'}>
                            {getTranslation('nav.vacancy')}
                        </Link>
                    </div>
                    <div className='flex flex-row items-center gap-5'>
                        <LanguagrSelect />
                        <Link href={'#bot'} className={style.buttonBorder + " flex justify-center items-center py-4 px-8 rounded-full text-white text-center text-sm"}>
                            {getTranslation('nav.explore')}
                        </Link>
                    </div>
                </div>
            </nav >
            <nav className={(isOpen ? '' : 'invisible') + ' fixed flex flex-row md:hidden justify-between bg-[#0A0D1D]/[0.1] backdrop-blur-3xl items-center w-screen z-40 py-4 px-4'}>
                <Link className="logo flex items-center gap-[15px]" href={'/'}>
                    <svg width={35} height={36} viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.6474 12.6194V0.5H13.3526V12.6194L2.73121 8.85821L0 16.903L10.9249 20.8731L4.04624 30.4851L10.7225 35.5L17.5 26.097L24.2775 35.5L30.9538 30.4851L24.0751 20.8731L35 16.903L32.2688 8.85821L21.6474 12.6194Z" fill="white" />
                    </svg>
                </Link>
                <div className="flex flex-row gap-5 items-center">
                    <LanguagrSelect />
                    <div className="cursor-pointer flex flex-col flex-shrink-0 justify-center items-end gap-1.5 w-[1.375rem]" onClick={() => setIsOpen(!isOpen)}>
                        <svg width={24} height={3} viewBox="0 0 24 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 0.134766C1.24061 0.134766 0.625 0.750374 0.625 1.50977C0.625 2.26916 1.24061 2.88477 2 2.88477V0.134766ZM2 2.88477H24V0.134766H2V2.88477Z" fill="white" />
                        </svg>
                        <svg width={18} height={3} viewBox="0 0 18 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.04401 0.115234C1.28461 0.115234 0.669006 0.730843 0.669006 1.49023C0.669006 2.24963 1.28461 2.86523 2.04401 2.86523L2.04401 0.115234ZM2.04401 2.86523L18.0001 2.86523L18.0001 0.115233L2.04401 0.115234L2.04401 2.86523Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </nav>
            <nav className={isOpen ? "hidden" : "flex" + " fixed left-0 top-0 w-screen h-screen bg-[#0A0A0A]/[.50] backdrop-blur-sm flex-col justify-between z-40 py-4 px-4"}>
                <div className="flex flex-row justify-between items-center">
                    <Link className="logo flex items-center gap-[15px]" href={'/'}>
                        <svg width={35} height={36} viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21.6474 12.6194V0.5H13.3526V12.6194L2.73121 8.85821L0 16.903L10.9249 20.8731L4.04624 30.4851L10.7225 35.5L17.5 26.097L24.2775 35.5L30.9538 30.4851L24.0751 20.8731L35 16.903L32.2688 8.85821L21.6474 12.6194Z" fill="white" />
                        </svg>
                    </Link>
                    <div className="flex flex-row gap-5 items-center">
                        <LanguagrSelect />
                        <div className="cursor-pointer flex flex-col flex-shrink-0 justify-center items-end gap-1.5 w-[1.375rem]" onClick={() => setIsOpen(!isOpen)}>
                            <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.22192 17.7783L18.7783 2.22197" stroke="white" strokeWidth="2.75" strokeLinecap="round" />
                                <path d="M3.22192 2.22168L18.7783 17.778" stroke="white" strokeWidth="2.75" strokeLinecap="round" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center gap-5 my-5'>
                    <Link className={(pathname == '/' ? "" : "opacity-50") + " text-white text-xl font-medium leading-[normal]"} href={'/'}>
                        {getTranslation('nav.about')}
                    </Link>
                    <Link className={(pathname == '/cases' ? "" : "opacity-50") + " text-white text-xl font-medium leading-[normal]"} href={'/cases'}>
                        {getTranslation('nav.cases')}
                    </Link>
                    <Link className={(pathname == '/contact' ? "" : "opacity-50") + " text-white text-xl font-medium leading-[normal]"} href={'/contact'}>
                        {getTranslation('nav.contact')}
                    </Link>
                    <Link className={(pathname == '/vacancy' ? "" : "opacity-50") + " text-white text-xl font-medium leading-[normal]"} href={'/vacancy'}>
                        {getTranslation('nav.vacancy')}
                    </Link>
                </div>
                <div className="w-full flex flex-row justify-center mb-32">
                    <Link href={'#bot'} className={style.buttonBorder + " flex justify-center max-w-60 w-full items-center py-4 px-8 rounded-full text-white text-center text-xl"}>
                        {getTranslation('nav.explore')}
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
