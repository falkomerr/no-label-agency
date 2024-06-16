"use client"
import React, { useState } from 'react'
import style from './InputText.module.css'
import { InputProps } from './InputText';

const InputTel: React.FC<InputProps> = ({placeholder}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    // TODO: Добавить список кодов стран

    return (
        <div className={`${style.borderGradient} relative ${isFocused ? style.focusedBorder : ""}`}>
            <input className={`focus-visible:outline-none z-10 bg-[#000]/[.0] w-full placeholder-[#fff]/[.3]`}
                onFocus={handleFocus}
                onBlur={handleBlur} 
                placeholder={placeholder}
                type="tel"/>
        </div>
    )
}

export default InputTel
