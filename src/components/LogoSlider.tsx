"use client"
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image';
import style from './LogoSlider.module.css'

const LogoSlider = () => {
    return (
        <div className="relative flex overflow-hidden max-w-[1440px] group">
            <div className="absolute w-full h-full z-10" style={{ background: "radial-gradient(50.25% 162.12% at 50% 50%, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))" }} />
            <div className={"flex w-max min-w-max space-x-16 pr-16 items-center animate-loop-scroll group-hover:paused"}>
                <Image src="/img/logo/logo-examle1.png" alt="logo" width={158} height={46}/>
                <Image src="/img/logo/logo-examle2.png" alt="logo" width={193} height={41}/>
                <Image src="/img/logo/logo-examle3.png" alt="logo" width={223} height={30}/>
                <Image src="/img/logo/logo-examle4.png" alt="logo" width={228} height={43}/>
                <Image src="/img/logo/logo-examle5.png" alt="logo" width={146} height={47}/>
            </div>
            <div className={"flex w-max min-w-max space-x-16 pr-16 items-center animate-loop-scroll group-hover:paused"} aria-hidden="true">
                <Image src="/img/logo/logo-examle1.png" alt="logo" width={158} height={46}/>
                <Image src="/img/logo/logo-examle2.png" alt="logo" width={193} height={41}/>
                <Image src="/img/logo/logo-examle3.png" alt="logo" width={223} height={30}/>
                <Image src="/img/logo/logo-examle4.png" alt="logo" width={228} height={43}/>
                <Image src="/img/logo/logo-examle5.png" alt="logo" width={146} height={47}/>
            </div>
            <div className={"flex w-max min-w-max space-x-16 pr-16 items-center animate-loop-scroll group-hover:paused"} aria-hidden="true">
                <Image src="/img/logo/logo-examle1.png" alt="logo" width={158} height={46}/>
                <Image src="/img/logo/logo-examle2.png" alt="logo" width={193} height={41}/>
                <Image src="/img/logo/logo-examle3.png" alt="logo" width={223} height={30}/>
                <Image src="/img/logo/logo-examle4.png" alt="logo" width={228} height={43}/>
                <Image src="/img/logo/logo-examle5.png" alt="logo" width={146} height={47}/>
            </div>
        </div>
    )
}

export default LogoSlider
