'use client';
import React, { InputHTMLAttributes, useState } from 'react';
import './InputText.css';
import { cn } from '@/lib/utils';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

const InputText: React.FC<InputProps> = ({ placeholder, ...props }) => {
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
        'borderGradientInput',
        'relative',
        isFocused && 'focusedBorderInput',
      )}>
      <input
        {...props}
        className={`z-10 w-full bg-[#000]/[.0] text-white placeholder-[#fff]/[.3] focus-visible:outline-none`}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
    </div>
  );
};

export default InputText;
