'use client';
import React, { useState } from 'react';
import style from './InputText.module.css';
import { InputProps } from './InputText';

const InputTel: React.FC<InputProps> = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  // TODO: Добавить список кодов стран

  return (
    <div
      className={`${style.borderGradient} relative ${isFocused ? style.focusedBorder : ''}`}>
      <input
        className={`z-10 w-full bg-[#000]/[.0] placeholder-[#fff]/[.3] focus-visible:outline-none`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
        type="tel"
      />
    </div>
  );
};

export default InputTel;
