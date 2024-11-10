"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import style from './Footer.module.css'
import InputText from '@/components/interfaces/InputText'
import InputTel from '@/components/interfaces/InputTel'
import Switch from '@/components/interfaces/Switch'
import InputTextArea from '@/components/interfaces/InputTextArea'
import RangeSlider from '@/components/interfaces/RangeSlider'
import { useTranslation } from '@/hook/useLanguageStore'
import Button from '@/components/interfaces/Button'
import CaseView from './CaseView'
import useProjectStore from '@/hook/useProjectStore'
import { TCanvas } from './canvas/TCanvas'

const Footer = () => {
    const [budjet, setBudjet] = useState([5000, 60000]);
    const { currentProject } = useProjectStore();
    const [bg, setBg] = useState('/img/interface/bg-footer-bag.png')
    const [index, setIndex] = useState(0)

    useEffect (() => {
        // if(currentProject) console.log(currentProject.glare)

        if (currentProject && currentProject.glare) setBg(currentProject.glare)
        if (currentProject) setIndex(currentProject.id)
    }, [currentProject])

    const pathname = usePathname()
    const { getTranslation } = useTranslation();
    return (
        <div className="bg-black rounded-t-[45px] overflow-hidden relative">
            <div className="absolute w-full h-[800px]"><TCanvas index={index}/></div>
            <div className="absolute m-auto -right-4 flex-shrink-0 w-screen h-[5.75rem] top-[800px] bg-black" style={{boxShadow: '0px 0px 63.1px 49px #000000'}}/>
            {/* <div style={{ backgroundImage: "url(" + bg + ")"}} className={"transition-all absolute h-[600px] w-full pointer-events-none top-0 right-0 bg-right-top bg-no-repeat bg-contain z-20"} /> */}
            <div className="absolute pointer-events-none h-full w-full max-w-[600px] lg:max-w-[800px] m-auto bg-[url(/img/interface/bg-footer-form2.png)] bottom-32 sm:bottom-0 right-0 bg-right-bottom bg-no-repeat bg-contain" />
            <div className='flex pointer-events-none flex-row w-full justify-center'>
                <div className="flex flex-col w-full max-w-[1300px] mt-24 mx-4 md:mx-12 xl:mx-28 lg:mx-20 mb-24">
                    <div className="opacity-[0.7] text-white text-xs ml-4 sm:text-base font-medium leading-[normal] z-20">{getTranslation('footer.text1')}</div>
                    <CaseView />

                    <div className='flex flex-row justify-center lg:justify-start'>
                        {/* <div className="text-white cursor-pointer relative bg-[#DACDFF]/[.03] w-max sm:ml-24 py-4 pl-16 pr-[88px] rounded-full linerBorderGradient">
                            {getTranslation('footer.text10')}
                            <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.60))" }}>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                                </svg>
                            </div>
                        </div> */}
                        <Button href={""} className='sm:ml-24 pointer-events-auto'>
                            {getTranslation('footer.text10')}
                        </Button>
                    </div>
                </div>
            </div>
            <div className="relative flex-col items-center justify-center pt-28 flex">
                <div className="absolute h-[300px] md:h-[413px] w-full bg-[url(/img/interface/bg-footer-form1.png)] top-0 left-0 bg-left-top bg-no-repeat bg-contain" />
                <span id="bot" className={style.textGradient + " pl-52 md:pl-56 opacity-[0.6] text-[39px] md:text-[65px] lg:text-[113px] font-semibold leading-[120%] text-center"}>Get&nbsp;In Touch with&nbsp;Us</span>
                <div className='flex flex-col md:grid md:grid-cols-5 gap-8 w-full max-w-[1000px] px-8 pt-16'>
                    <div className='col-span-2 flex flex-col items-start gap-12'>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="text-white text-sm leading-[140%] z-10">{getTranslation('footer.text11')}</div>
                            <InputText placeholder='Alex' />
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="text-white text-sm leading-[140%] z-10">{getTranslation('footer.text12')}</div>
                            <InputText placeholder='ex. jameslaurentsdesign@gmail.com' />
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="text-white text-sm leading-[140%]">{getTranslation('footer.text13')}</div>
                            <InputTel placeholder='+1 (123) 456 78 92' />
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="text-white text-sm leading-[140%]">{getTranslation('footer.text14')}</div>
                            <div className="flex items-start justify-between">
                                <div className="opacity-[0.4] text-white text-xs leading-[140%]">{getTranslation('footer.text15') + Math.floor(budjet[0] / 1000) + 'K'}</div>
                                <div className="opacity-[0.4] text-white text-xs leading-[140%]">{getTranslation('footer.text16') + Math.floor(budjet[1] / 1000) + 'K +'}</div>
                            </div>
                            <RangeSlider value={budjet} setValue={setBudjet} min={1000} max={100000} />
                        </div>
                    </div>
                    <div className='col-span-3 flex flex-col gap-7'>
                        <div className='flex flex-col gap-3'>
                            <div className="text-white text-sm leading-[140%]">{getTranslation('footer.text17')}</div>
                            <div className='flex flex-wrap justify-start gap-2'>
                                <Switch name={'Logo'} />
                                <Switch name={'Website'} />
                                <Switch name={'Branding'} />
                                <Switch name={'3D'} />
                                <Switch name={'Identily'} />
                                <Switch name={'Booklet'} />
                                <Switch name={'Brand Identity'} />
                                <Switch name={'Product design'} />
                                <Switch name={'More...'} />
                            </div>
                        </div>
                        <div className='h-full flex flex-col gap-3'>
                            <div className="text-white text-sm leading-[140%]">{getTranslation('footer.text18')}</div>
                            <InputTextArea placeholder={getTranslation('component.inputArea.placeholder')} />
                        </div>
                    </div>
                </div>
                {/* TODO: Сделать блять обработку и отправку формы на сервер бл, ААААААААААА */}
                {/* <div className={style.bSubmit + " text-white mt-14 mb-9 cursor-pointer relative bg-[#DACDFF]/[.03] w-full max-w-[334px] py-4 pl-16 pr-[88px] flex flex-row items-center justify-center rounded-full linerBorderGradient"}>
                    {getTranslation('footer.text19')}
                    <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.60)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.3  0))" }}>
                        <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                        </svg>
                    </div>
                </div> */}
                <Button href={""} className={style.bSubmit + " mt-14 mb-9 w-full max-w-[334px] flex flex-row items-center justify-center"}>
                    {getTranslation('footer.text19')}
                </Button>
            </div>
            <div className="w-full flex flex-row justify-center">
                <div className='px-4 md:px-12 xl:px-20 lg:px-36 py-11 lg:py-32 flex flex-col w-full gap-14 max-w-[1440px]'>
                    <nav className='hidden md:flex flex-row items-center justify-between pt-[51px] z-10'>
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
                            <Link className={(pathname == '/' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal] transition-all hover:opacity-100"} href={'/'}>
                                {getTranslation('nav.about')}
                            </Link>
                            <Link className={(pathname == '/cases' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal] transition-all hover:opacity-100"} href={'/cases'}>
                                {getTranslation('nav.cases')}
                            </Link>
                            <Link className={(pathname == '/contact' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal] transition-all hover:opacity-100"} href={'/contact'}>
                                {getTranslation('nav.contact')}
                            </Link>
                            <Link className={(pathname == '/vacancy' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal] transition-all hover:opacity-100"} href={'/vacancy'}>
                                {getTranslation('nav.vacancy')}
                            </Link>
                        </div>
                        <Link href={'#top'} className='transition-all rounded-full hover:scale-95 hover:bg-[#fff]/[.1]'>
                            <svg className='cursor-pointer' width={51} height={51} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g filter="url(#filter0_b_2_569)">
                                    <rect width={51} height={51} rx="25.5" fill="black" fillOpacity="0.23" />
                                    <rect x="0.689341" y="0.689341" width="49.6213" height="49.6213" rx="24.8107" stroke="url(#paint0_linear_2_569)" strokeOpacity="0.4" strokeWidth="1.37868" />
                                    <path d="M26.1201 17.6139C25.784 17.2908 25.2496 17.3013 24.9265 17.6373L19.6608 23.1137C19.3377 23.4497 19.3481 23.9841 19.6842 24.3072C20.0202 24.6304 20.5546 24.6199 20.8778 24.2838L25.5584 19.416L30.4262 24.0966C30.7623 24.4197 31.2967 24.4092 31.6198 24.0732C31.9429 23.7371 31.9325 23.2028 31.5964 22.8796L26.1201 17.6139ZM26.6774 33.4267L26.379 18.2059L24.691 18.2389L24.9895 33.4598L26.6774 33.4267Z" fill="white" />
                                </g>
                                <defs>
                                    <filter id="filter0_b_2_569" x={-22} y={-22} width={95} height={95} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                        <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                        <feGaussianBlur in="BackgroundImageFix" stdDeviation={11} />
                                        <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_569" />
                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_569" result="shape" />
                                    </filter>
                                    <linearGradient id="paint0_linear_2_569" x1="0.0487325" y1="-0.154101" x2="25.2247" y2="50.7972" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="white" />
                                        <stop offset={1} stopColor="white" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </Link>
                    </nav >
                    <nav className='flex md:hidden flex-col items-center justify-between pt-[51px] z-10'>
                        <div className='flex flex-row items-center justify-between w-full'>
                            <Link className="logo flex items-center gap-[15px]" href={'/'}>
                                <svg width={35} height={36} viewBox="0 0 35 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21.6474 12.6194V0.5H13.3526V12.6194L2.73121 8.85821L0 16.903L10.9249 20.8731L4.04624 30.4851L10.7225 35.5L17.5 26.097L24.2775 35.5L30.9538 30.4851L24.0751 20.8731L35 16.903L32.2688 8.85821L21.6474 12.6194Z" fill="white" />
                                </svg>
                            </Link>
                            <Link href={'#top'}>
                                <svg className='cursor-pointer' width={51} height={51} viewBox="0 0 51 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_b_2_569)">
                                        <rect width={51} height={51} rx="25.5" fill="black" fillOpacity="0.23" />
                                        <rect x="0.689341" y="0.689341" width="49.6213" height="49.6213" rx="24.8107" stroke="url(#paint0_linear_2_569)" strokeOpacity="0.4" strokeWidth="1.37868" />
                                        <path d="M26.1201 17.6139C25.784 17.2908 25.2496 17.3013 24.9265 17.6373L19.6608 23.1137C19.3377 23.4497 19.3481 23.9841 19.6842 24.3072C20.0202 24.6304 20.5546 24.6199 20.8778 24.2838L25.5584 19.416L30.4262 24.0966C30.7623 24.4197 31.2967 24.4092 31.6198 24.0732C31.9429 23.7371 31.9325 23.2028 31.5964 22.8796L26.1201 17.6139ZM26.6774 33.4267L26.379 18.2059L24.691 18.2389L24.9895 33.4598L26.6774 33.4267Z" fill="white" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_b_2_569" x={-22} y={-22} width={95} height={95} filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation={11} />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_569" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_569" result="shape" />
                                        </filter>
                                        <linearGradient id="paint0_linear_2_569" x1="0.0487325" y1="-0.154101" x2="25.2247" y2="50.7972" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="white" />
                                            <stop offset={1} stopColor="white" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                </svg>
                            </Link>
                        </div>
                        <div className='flex flex-row items-center justify-around gap-6 mt-6'>
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
                    </nav >
                    <div className="flex flex-col gap-3 md:flex-row justify-between items-center opacity-50">
                        <div className="text-white text-sm font-semibold leading-[normal]">{getTranslation('nav.vacancy')}</div>
                        <div className="text-white text-sm font-semibold leading-[normal]">© 2024 No Lable Agency</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
