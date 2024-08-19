import Link from "next/link"
import { useState } from "react";

const Button = ({ className, href, children, ...props }: { className?: string, href: string, children: any }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }

    const linkStyles = {
        transition: 'transform 0.2s ease, background 0.2s ease',
        transform: isHovered ? 'scale(0.95)' : 'scale(1)',
        background: isHovered ? '#DACDFF15' : '#DACDFF03'
    }

    return (
        <Link
            {...props}
            className={"text-white cursor-pointer relative bg-[#DACDFF]/[.03] py-4 pl-16 pr-[88px] rounded-full linerBorderGradient " + (className ? className : " w-max ")}
            href={href}
            style={linkStyles}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            <div
                className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full z-20 m-auto"
                style={{ 
                    filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90))",
                    transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
                    transition: 'transform 0.4s ease' 
                }}

            >
                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                </svg>
            </div>
        </Link>
    )
}

export default Button
