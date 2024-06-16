"use client"
import React, { InputHTMLAttributes, useState } from 'react'
import style from './InputText.module.css'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    placeholder: string;
}

const InputText: React.FC<InputProps> = ({placeholder}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`${style.borderGradient} relative ${isFocused ? style.focusedBorder : ""}`}>
            <input className={`focus-visible:outline-none z-10 bg-[#000]/[.0] w-full placeholder-[#fff]/[.3]`}
                onFocus={handleFocus}
                onBlur={handleBlur} 
                placeholder={placeholder}/>
        </div>
    )
}

export default InputText
