"use client"
import React, { useState } from 'react'
import { InputProps } from './InputText';
import style from './InputTextArea.module.css'

const InputTextArea: React.FC<InputProps> = ({placeholder}) => {
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setIsFocused(false);
    };

    return (
        <div className={`${style.borderGradient} relative max-h-72 h-full ${isFocused ? style.focusedBorder : ""}`}>
            <textarea className={`focus-visible:outline-none z-10 bg-[#000]/[.0] w-full h-full placeholder-[#fff]/[.3] resize-none`}
                onFocus={handleFocus}
                onBlur={handleBlur}
                placeholder={placeholder} />
        </div>
    )
}

export default InputTextArea
