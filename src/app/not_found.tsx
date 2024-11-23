import Navbar from '@/containers/Navbar'
import React from 'react'

const NotFount = () => {
    return (
        <div className="relative w-full bg-black flex flex-row justify-center bg-cover md:bg-auto bg-center md:bg-right bg-no-repeat">
            <div className="absolute md:w-max h-full md:h-[803px] right-auto bottom-0 top-0 md:right-0 overflow-x-hidden">
                <video poster="/img/interface/bg-main.webp" autoPlay playsInline muted preload='none' loop height={"803"} className="hidden md:block max-h-[803px] overflow-x-hidden">
                    <source src={'/img/interface/bg-main-video.webm'} type="video/webm" />
                    <source src={'/img/interface/bg-main-video.mp4'} type="video/mp4" />
                </video>
                <video poster="/img/interface/bg-main.mobile.webp" autoPlay playsInline muted preload='none' loop height={"803"} className="block md:hidden max-h-full md:max-h-[803px] overflow-x-hidden w-full max-w-full" style={{ objectFit: 'cover' }}>
                    <source src={'/img/interface/bg-main-video.mobile.webm'} type="video/webm" />
                    <source src={'/img/interface/bg-main-video.mobile.mp4'} type="video/mp4" />
                </video>
            </div>
            <div className="w-full max-w-[1440px] h-[803px] px-4 md:px-12 xl:px-20 flex flex-col justify-center items-center z-[5] text-gray-400 font-extrabold text-[6rem] md:text-[9rem]">
                Soon
            </div>
        </div>
    )
}

export default NotFount
