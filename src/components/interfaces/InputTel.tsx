'use client';
import React, { useState } from 'react';
import './InputText.css';
import { InputProps } from './InputText';
import { cn } from '@/lib/utils';

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
      className={cn(
        'borderGradientInput relative',
        isFocused && 'focusedBorder',
      )}>
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
