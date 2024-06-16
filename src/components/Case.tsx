"use client"
import React, { useEffect, useRef, useState } from 'react'
import style from './Case.module.css'

const Case = () => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
    const [tooltipSize, setTooltipSize] = useState(0);
    const ref = useRef(null);

    const handleMouseMove = (event: any) => {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
    };

    useEffect(() => {
        const handleMouseOver = () => setShowTooltip(true);
        const handleMouseLeave = () => setShowTooltip(false);
        const element: any = ref.current;
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
                tooltipElement.style.transform = 'scale(0.3)';
            }
        }
    }, [showTooltip]);

    useEffect(() => {
        const tooltipElement: any = document.querySelector('.tooltip');
        if (tooltipElement) {
            if (showTooltip) {
                tooltipElement.style.top = tooltipPosition.y - 50 + 'px';
                tooltipElement.style.left = tooltipPosition.x - 50 + 'px';

            }
        }
    }, [tooltipPosition.x, tooltipPosition.y, showTooltip])

    return (

        <div>
            <div ref={ref} onMouseMove={handleMouseMove} className="absolute m-auto right-0 h-full w-[758px] bg-contain bg-no-repeat bg-right bg-[url(/img/interface/bg-footer-case1.png)] cursor-pointer">
                <div className="absolute z-20 w-full h-full cursor-pointer flex flex-row items-end gap-2">
                    <div className={style.button + " ml-9 mb-7"}>UX/UI Disign</div>
                    <div className={style.button + " mb-7"}>Marketing</div>
                    <div className={style.button + " mb-7"}>Branding</div>
                    <div className={style.button + " mb-7"}>Illustrtions</div>
                </div>
                <div
                    className={" tooltip fixed bg-white text-black rounded-full p-2 text-center flex items-center justify-center z-30"}
                    style={{
                        width: `80px`,
                        height: `80px`,

                        transition: 'top 5s ease, left 5s ease',
                        pointerEvents: 'none',
                    }}
                >
                    View
                </div>
            </div>
        </div>
    )
}

export default Case
