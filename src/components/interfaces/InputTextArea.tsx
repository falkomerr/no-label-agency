'use client';
import React, { useState } from 'react';
import { InputProps } from './InputText';
import style from './InputTextArea.module.css';

const InputTextArea: React.FC<InputProps> = ({ placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div
      className={`${style.borderGradient} relative h-full max-h-72 min-h-44 ${isFocused ? style.focusedBorder : ''}`}>
      <textarea
        className={`z-10 h-full w-full resize-none bg-[#000]/[.0] placeholder-[#fff]/[.3] focus-visible:outline-none`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputTextArea;
