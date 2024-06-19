"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import style from './Footer.module.css'
import InputText from '@/components/interfaces/InputText'
import InputTel from '@/components/interfaces/InputTel'
import Switch from '@/components/interfaces/Switch'
import InputTextArea from '@/components/interfaces/InputTextArea'
import CaseMobile, { Case } from '@/components/Case'
import RangeSlider from '@/components/interfaces/RangeSlider'

const Footer = () => {
    const pathname = usePathname()
    return (
        <div className="bg-black rounded-t-[45px] overflow-hidden relative">
            <div className="absolute h-[600px] w-full bg-[url(/img/interface/bg-footer-bag.mobile.png)] sm:bg-[url(/img/interface/bg-footer-bag.png)] top-0 right-0 bg-right-top bg-no-repeat bg-contain z-20" />
            <div className="absolute h-full w-full max-w-[600px] lg:max-w-[800px] m-auto bg-[url(/img/interface/bg-footer-form2.png)] bottom-32 sm:bottom-0 right-0 bg-right-bottom bg-no-repeat bg-contain" />
            <div className='flex flex-row w-full justify-center'>
                <div className="flex flex-col w-full max-w-[1300px] mt-24 mx-4 md:mx-12 xl:mx-28 lg:mx-20 mb-24">
                    <div className="opacity-[0.7] text-white text-xs ml-4 sm:text-base font-medium leading-[normal] z-20">[OUR CASE STUDIES]</div>
                    <div className="relative hidden lg:flex flex-row mt-20 mb-8">
                        <div className='flex flex-row'>
                            <svg width="2" height="448" viewBox="0 0 2 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path opacity="0.8" d="M1 0L1.00002 448" stroke="white" strokeDasharray="5 5" />
                            </svg>
                            <div className='flex flex-col h-full justify-between'>
                                <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H8" stroke="white" />
                                </svg>
                                <div className="relative">
                                    <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H8" stroke="white" />
                                    </svg>
                                    <svg className="absolute -left-12 m-auto -top-5" width={43} height={45} viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.5" filter="url(#filter0_f_2_543)">
                                            <path d="M27.4199 22.5L15.5399 29.3589L15.5399 15.6411L27.4199 22.5Z" fill="#FF4D00" />
                                        </g>
                                        <path opacity="0.05" d="M37.5 22.5L10.5 38.0885L10.5 6.91154L37.5 22.5Z" fill="#FF4D00" />
                                        <path d="M27.4199 22.5L15.5399 29.3589L15.5399 15.6411L27.4199 22.5Z" fill="#FF4D00" />
                                        <defs>
                                            <filter id="filter0_f_2_543" x="0.756042" y="0.857056" width="41.4479" height="43.2858" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                <feGaussianBlur stdDeviation="7.392" result="effect1_foregroundBlur_2_543" />
                                            </filter>
                                        </defs>
                                    </svg>
                                </div>
                                <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H8" stroke="white" />
                                </svg>
                            </div>
                        </div>
                        <div className="gap-3 inline-flex flex-col items-start ml-24 mt-9 z-10">
                            <div className="opacity-[0.34] text-white leading-[140%]">Website design UX/UI</div>
                            <div className="w-[399px] text-white text-[2.375rem] font-semibold leading-[140%]">The name of the project released, info</div>
                            <div className="gap-2 flex items-center">
                                <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g opacity="0.3">
                                        <path d="M1.41797 6.37499C1.41797 5.03907 1.41797 4.37182 1.83305 3.95674C2.24814 3.54166 2.91539 3.54166 4.2513 3.54166H12.7513C14.0872 3.54166 14.7545 3.54166 15.1695 3.95674C15.5846 4.37182 15.5846 5.03907 15.5846 6.37499C15.5846 6.70861 15.5846 6.87578 15.4812 6.97991C15.3771 7.08332 15.2092 7.08332 14.8763 7.08332H2.1263C1.79268 7.08332 1.62551 7.08332 1.52139 6.97991C1.41797 6.87578 1.41797 6.70791 1.41797 6.37499ZM1.41797 12.75C1.41797 14.0859 1.41797 14.7532 1.83305 15.1682C2.24814 15.5833 2.91539 15.5833 4.2513 15.5833H12.7513C14.0872 15.5833 14.7545 15.5833 15.1695 15.1682C15.5846 14.7532 15.5846 14.0859 15.5846 12.75V9.20832C15.5846 8.8747 15.5846 8.70753 15.4812 8.6034C15.3771 8.49999 15.2092 8.49999 14.8763 8.49999H2.1263C1.79268 8.49999 1.62551 8.49999 1.52139 8.6034C1.41797 8.70753 1.41797 8.8754 1.41797 9.20832V12.75Z" fill="white" />
                                        <path d="M4.95898 2.125V4.25M12.0423 2.125V4.25" stroke="white" strokeWidth="1.41667" strokeLinecap="round" />
                                    </g>
                                </svg>
                                <div className="w-[5.0625rem] h-[1.1875rem] opacity-[0.3] text-white font-medium leading-[140%]">01.10.2024</div>
                            </div>
                        </div>
                        <Case />
                        <svg className='cursor-pointer absolute m-auto right-0 bottom-0 z-10 flex' width={62} height={62} viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_b_2_508)">
                                <rect width={62} height={62} rx={31} fill="black" fillOpacity="0.01" />
                                <rect x="0.47449" y="0.47449" width="61.051" height="61.051" rx="30.5255" stroke="url(#paint0_linear_2_508)" strokeOpacity="0.3" strokeWidth="0.94898" />
                                <path d="M38.664 24.714C38.6529 24.1473 38.1845 23.697 37.6179 23.7081L28.3838 23.8891C27.8172 23.9002 27.3668 24.3686 27.3779 24.9353C27.389 25.5019 27.8574 25.9523 28.424 25.9411L36.6321 25.7802L36.7931 33.9883C36.8042 34.5549 37.2725 35.0053 37.8392 34.9942C38.4058 34.9831 38.8562 34.5147 38.8451 33.948L38.664 24.714ZM25.5501 38.786L38.3777 25.4454L36.8983 24.0228L24.0707 37.3635L25.5501 38.786Z" fill="white" />
                            </g>
                            <defs>
                                <filter id="filter0_b_2_508" x="-126.796" y="-126.796" width="315.593" height="315.593" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="63.3982" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_2_508" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_2_508" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_2_508" x1="0.0592435" y1="-0.187338" x2="30.6653" y2="61.7535" gradientUnits="userSpaceOnUse">
                                    <stop stopColor="white" />
                                    <stop offset={1} stopColor="white" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                    <div className="w-full h-full flex flex-row justify-center">
                        <div className="flex lg:hidden flex-col mt-10 mb-8 ml-10">
                            <div className='flex flex-row w-full'>
                                <svg width="2" height="227" viewBox="0 0 2 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path opacity="0.8" d="M1 0L1.00002 448" stroke="white" strokeDasharray="5 5" />
                                </svg>
                                <div className='flex flex-col h-full justify-between'>
                                    <svg width="6" height="1" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H8" stroke="white" />
                                    </svg>
                                    <div className="relative">
                                        <svg width="6" height="1" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 1H8" stroke="white" />
                                        </svg>
                                        <svg className="absolute -left-12 m-auto -top-5" width={43} height={45} viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g opacity="0.5" filter="url(#filter0_f_2_543)">
                                                <path d="M27.4199 22.5L15.5399 29.3589L15.5399 15.6411L27.4199 22.5Z" fill="#FF4D00" />
                                            </g>
                                            <path opacity="0.05" d="M37.5 22.5L10.5 38.0885L10.5 6.91154L37.5 22.5Z" fill="#FF4D00" />
                                            <path d="M27.4199 22.5L15.5399 29.3589L15.5399 15.6411L27.4199 22.5Z" fill="#FF4D00" />
                                            <defs>
                                                <filter id="filter0_f_2_543" x="0.756042" y="0.857056" width="41.4479" height="43.2858" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                                                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                                    <feGaussianBlur stdDeviation="7.392" result="effect1_foregroundBlur_2_543" />
                                                </filter>
                                            </defs>
                                        </svg>
                                    </div>
                                    <svg width="6" height="1" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 1H8" stroke="white" />
                                    </svg>
                                </div>
                                <div className='w-full h-full mr-8'>
                                    <CaseMobile />
                                </div>
                            </div>
                            <div className="gap-3 inline-flex flex-col items-start mt-7 z-10">
                                <div className="opacity-[0.34] text-white text-xs leading-[140%]">Website design UX/UI</div>
                                <div className=" text-white text-[27px] font-semibold leading-[140%]">The name of the project released, info</div>
                                <div className="gap-2 flex items-center">
                                    <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g opacity="0.3">
                                            <path d="M1.41797 6.37499C1.41797 5.03907 1.41797 4.37182 1.83305 3.95674C2.24814 3.54166 2.91539 3.54166 4.2513 3.54166H12.7513C14.0872 3.54166 14.7545 3.54166 15.1695 3.95674C15.5846 4.37182 15.5846 5.03907 15.5846 6.37499C15.5846 6.70861 15.5846 6.87578 15.4812 6.97991C15.3771 7.08332 15.2092 7.08332 14.8763 7.08332H2.1263C1.79268 7.08332 1.62551 7.08332 1.52139 6.97991C1.41797 6.87578 1.41797 6.70791 1.41797 6.37499ZM1.41797 12.75C1.41797 14.0859 1.41797 14.7532 1.83305 15.1682C2.24814 15.5833 2.91539 15.5833 4.2513 15.5833H12.7513C14.0872 15.5833 14.7545 15.5833 15.1695 15.1682C15.5846 14.7532 15.5846 14.0859 15.5846 12.75V9.20832C15.5846 8.8747 15.5846 8.70753 15.4812 8.6034C15.3771 8.49999 15.2092 8.49999 14.8763 8.49999H2.1263C1.79268 8.49999 1.62551 8.49999 1.52139 8.6034C1.41797 8.70753 1.41797 8.8754 1.41797 9.20832V12.75Z" fill="white" />
                                            <path d="M4.95898 2.125V4.25M12.0423 2.125V4.25" stroke="white" strokeWidth="1.41667" strokeLinecap="round" />
                                        </g>
                                    </svg>
                                    <div className="w-[5.0625rem] h-[1.1875rem] opacity-[0.3] text-white text-xs font-medium leading-[140%]">01.10.2024</div>
                                </div>
                            </div>
                            <div className="flex flex-wrap justify-start gap-2 my-7">
                                <div className={style.button}>UX/UI Disign</div>
                                <div className={style.button}>Marketing</div>
                                <div className={style.button}>Branding</div>
                                <div className={style.button}>Illustrtions</div>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row justify-center lg:justify-start'>
                        <div className="cursor-pointer relative bg-[#DACDFF]/[.03] w-max sm:ml-24 py-4 pl-16 pr-[88px] rounded-full linerBorderGradient">
                            See more projects
                            <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.60))" }}>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative flex-col items-center justify-center pt-28 flex">
                <div className="absolute h-[300px] md:h-[413px] w-full bg-[url(/img/interface/bg-footer-form1.png)] top-0 left-0 bg-left-top bg-no-repeat bg-contain" />
                <span id="bot" className={style.textGradient + " pl-52 md:pl-56 opacity-[0.6] text-[39px] md:text-[65px] lg:text-[113px] font-semibold leading-[120%] text-center"}>Get&nbsp;In Touch with&nbsp;Us</span>
                <div className='flex flex-col md:grid md:grid-cols-5 gap-8 w-full max-w-[1000px] px-8 pt-16'>
                    <div className='col-span-2 flex flex-col items-start gap-12'>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="text-white text-sm leading-[140%] z-10">Your name*</div>
                            <InputText placeholder='Alex' />
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="text-white text-sm leading-[140%]">Your email*</div>
                            <InputText placeholder='ex. jameslaurentsdesign@gmail.com' />
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="text-white text-sm leading-[140%]">Your phone*</div>
                            <InputTel placeholder='+1 (123) 456 78 92' />
                        </div>
                        <div className='flex flex-col gap-3 w-full'>
                            <div className="text-white text-sm leading-[140%]">Approximate budget*</div>
                            <div className="flex items-start justify-between">
                                <div className="opacity-[0.4] text-white text-xs leading-[140%]">FORM $5K</div>
                                <div className="opacity-[0.4] text-white text-xs leading-[140%]">TO $100K +</div>
                            </div>
                            <RangeSlider min={5000} max={10000} />
                        </div>
                    </div>
                    <div className='col-span-3 flex flex-col gap-7'>
                        <div className='flex flex-col gap-3'>
                            <div className="text-white text-sm leading-[140%]">I need...*</div>
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
                            <div className="text-white text-sm leading-[140%]">Your message</div>
                            <InputTextArea placeholder='What are you hoping to gain from working with us?' />
                        </div>
                    </div>
                </div>
                <div className={style.bSubmit + " mt-14 mb-9 cursor-pointer relative bg-[#DACDFF]/[.03] w-full max-w-[334px] py-4 pl-16 pr-[88px] flex flex-row items-center justify-center rounded-full linerBorderGradient"}>
                    Submit
                    <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.60)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.3  0))" }}>
                        <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className='px-4 md:px-12 xl:px-20 lg:px-36 py-11 lg:py-32 flex flex-col w-full gap-14'>
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
                </nav >
                <div className="flex flex-col gap-3 md:flex-row justify-between items-center opacity-50">
                    <div className="text-white text-sm font-semibold leading-[normal]">Based in UK, working worldwide</div>
                    <div className="text-white text-sm font-semibold leading-[normal]">© 2024 No Lable Agency</div>
                </div>
            </div>
        </div>
    )
}

export default Footer
