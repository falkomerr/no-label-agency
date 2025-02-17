'use client';
import React, { useState } from 'react';
import style from './InputText.module.css';
import { InputProps } from './InputText';

const InputTel: React.FC<InputProps> = ({ placeholder, ...props }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };


  return (
    <div
      className={`${style.borderGradient} relative ${isFocused ? style.focusedBorder : ''}`}>
      <input
        {...props}

        className={`z-10 w-full bg-[#000]/[.0] text-white placeholder-[#fff]/[.3] focus-visible:outline-none`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        type="tel"
      />
    </div>
  );
};

export default InputTel;
