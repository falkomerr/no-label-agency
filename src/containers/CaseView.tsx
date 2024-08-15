"use client"
import { Case, CaseMobile } from '@/components/Case'
import React, { useEffect, useRef, useState } from 'react'
import style from './Footer.module.css'
import { useTranslation } from '@/hook/useLanguageStore';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from "next/image";
import { Mousewheel, EffectCreative } from 'swiper/modules';
import Link from 'next/link';

const projects = [
    {
        id: 0,
        date: '01.10.2024',
        title: 'The name of the project released 1',
        description: 'Website design UX/UI',
        img: '/img/interface/bg-footer-case1.png',
        link: '/cases'
    },
    {
        id: 1,
        date: '01.10.2030',
        title: 'The name of the project released 2',
        description: 'App design UX/UI',
        img: '/img/interface/bg-footer-case1.png',
        link: '/cases'
    },
    {
        id: 2,
        date: '01.10.3000',
        title: 'The name of the project released 3',
        description: 'Design XD',
        img: '/img/interface/bg-footer-case1.png',
        link: '/cases'
    },
    {
        id: 2,
        date: '01.10.3000',
        title: 'The name of the project released 4',
        description: 'Design XD',
        img: '/img/interface/bg-footer-case1.png',
        link: '/cases'
    }
]

const CaseView = () => {
    const { getTranslation } = useTranslation();
    const [project, setProject] = useState(projects[0])
    const scrollRef = useRef<HTMLDivElement>(null)
    const swaperRef = useRef<HTMLAnchorElement>(null)
    const [positionCursor, setPositionCursor] = useState(-22)

    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event: any) => {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        const handleMouseOver = () => { setShowTooltip(true); }
        const handleMouseLeave = () => { setShowTooltip(false); }
        const element: any = swaperRef.current;
        element.addEventListener('mouseover', handleMouseOver);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mouseover', handleMouseOver);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    useEffect(() => {
        const tooltipElement: any = document.querySelector('.tooltip');

        if (tooltipElement) {

            if (showTooltip) {
                tooltipElement.style.opacity = '1';
                tooltipElement.style.transform = 'scale(1)';
                tooltipElement.style.transition = 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out';
            } else {
                tooltipElement.style.opacity = '0';
                tooltipElement.style.transform = 'scale(0.1)';
            }
        }
    }, [showTooltip]);

    useEffect(() => {
        const tooltipElement: any = document.querySelector('.tooltip');
        if (tooltipElement) {
            if (showTooltip) {
                tooltipElement.animate({
                    left: tooltipPosition.x - 80 + 'px',
                    top: tooltipPosition.y - 80 + 'px'
                }, { duration: 1000, fill: 'forwards' });
                // tooltipElement.style.top = tooltipPosition.y - 50 + 'px';
                // tooltipElement.style.left = tooltipPosition.x - 50 + 'px';
            }
        }
    }, [tooltipPosition.x, tooltipPosition.y, showTooltip])

    const handleSlideChange = (swiper: any) => {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex])
        if (scrollRef) {
            setPositionCursor(scrollRef.current?.offsetHeight ? (scrollRef.current?.offsetHeight / (projects.length - 1)) * currentIndex - 22 : -22);
        }
    }

    return (
        <>
            <div className="relative hidden lg:flex flex-row mt-20 mb-8">
                <div className='flex flex-row'>
                    {/* Полоса */}
                    <div ref={scrollRef}>
                        <svg width="2" height="448" viewBox="0 0 2 448" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path opacity="0.8" d="M1 0L1.00002 448" stroke="white" strokeDasharray="5 5" />
                        </svg>
                    </div>
                    {/* Страницы */}
                    <div className='flex flex-col h-full justify-between'>
                        {projects.map((item, index) => {
                            return <div key={index}>
                                <svg width="8" height="2" viewBox="0 0 8 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 1H8" stroke="white" />
                                </svg>
                            </div>
                        })}
                    </div>
                    {/* Курсор */}
                    <svg className="absolute -left-12 m-auto -top-5 transition-all" style={{ top: positionCursor }} width={43} height={45} viewBox="0 0 43 45" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <div className="gap-3 inline-flex flex-col items-start ml-24 mt-9 z-10">
                    <div className="opacity-[0.34] text-white leading-[140%]">{project.description}</div>
                    <div className="w-[399px] text-white text-[2.375rem] font-semibold leading-[140%]">{project.title}</div>
                    <div className="gap-2 flex items-center">
                        <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g opacity="0.3">
                                <path d="M1.41797 6.37499C1.41797 5.03907 1.41797 4.37182 1.83305 3.95674C2.24814 3.54166 2.91539 3.54166 4.2513 3.54166H12.7513C14.0872 3.54166 14.7545 3.54166 15.1695 3.95674C15.5846 4.37182 15.5846 5.03907 15.5846 6.37499C15.5846 6.70861 15.5846 6.87578 15.4812 6.97991C15.3771 7.08332 15.2092 7.08332 14.8763 7.08332H2.1263C1.79268 7.08332 1.62551 7.08332 1.52139 6.97991C1.41797 6.87578 1.41797 6.70791 1.41797 6.37499ZM1.41797 12.75C1.41797 14.0859 1.41797 14.7532 1.83305 15.1682C2.24814 15.5833 2.91539 15.5833 4.2513 15.5833H12.7513C14.0872 15.5833 14.7545 15.5833 15.1695 15.1682C15.5846 14.7532 15.5846 14.0859 15.5846 12.75V9.20832C15.5846 8.8747 15.5846 8.70753 15.4812 8.6034C15.3771 8.49999 15.2092 8.49999 14.8763 8.49999H2.1263C1.79268 8.49999 1.62551 8.49999 1.52139 8.6034C1.41797 8.70753 1.41797 8.8754 1.41797 9.20832V12.75Z" fill="white" />
                                <path d="M4.95898 2.125V4.25M12.0423 2.125V4.25" stroke="white" strokeWidth="1.41667" strokeLinecap="round" />
                            </g>
                        </svg>
                        <div className="w-[5.0625rem] h-[1.1875rem] opacity-[0.3] text-white font-medium leading-[140%]">{project.date}</div>
                    </div>
                </div>
                <Link
                    onMouseMove={handleMouseMove}
                    ref={swaperRef}
                    className="w-full h-full relative cursor-pointer"
                    href={project.link}
                >
                    <Swiper
                        direction={'vertical'}
                        // effect={'creative'}
                        scrollbar={{ draggable: true }}
                        className='w-full max-h-[448px] h-full absolute left-0'
                        spaceBetween={30}
                        mousewheel={{
                            forceToAxis: true,
                            releaseOnEdges: true,
                        }}
                        modules={[Mousewheel, EffectCreative]}
                        onSlideChange={handleSlideChange}
                        creativeEffect={{
                            prev: {
                                shadow: true,
                                translate: [0, 0, -400],
                            },
                            next: {
                                translate: ['100%', 0, 0],
                            },
                        }}
                    >
                        {projects.map((project, index) => {
                            return <SwiperSlide key={index} className="w-full">
                                <div className="relative w-full h-full">
                                    <Image src={project.img} fill className="object-contain" alt="project" />
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
                            </SwiperSlide>
                        })}

                    </Swiper>
                    <div
                        className={" tooltip fixed bg-white text-black rounded-full p-2 text-center flex items-center justify-center z-30"}
                        style={{
                            width: `130px`,
                            height: `130px`,
                            pointerEvents: 'none',
                        }}
                    >
                        <b>{getTranslation('component.case.view')}</b>
                    </div>
                </Link>

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
                        <div className="opacity-[0.34] text-white text-xs leading-[140%]">{getTranslation('footer.text4')}</div>
                        <div className=" text-white text-[27px] font-semibold leading-[140%]">{getTranslation('footer.text5')}</div>
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
                        <div className={style.button}>{getTranslation('footer.text6')}</div>
                        <div className={style.button}>{getTranslation('footer.text7')}</div>
                        <div className={style.button}>{getTranslation('footer.text8')}</div>
                        <div className={style.button}>{getTranslation('footer.text9')}</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CaseView
