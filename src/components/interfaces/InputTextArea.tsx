'use client';
import React, { TextareaHTMLAttributes, useState } from 'react';
import './InputTextArea.css';
import { cn } from '@/lib/utils';

const InputTextArea: React.FC<TextareaHTMLAttributes<HTMLTextAreaElement>> = ({
  placeholder,
  ...props
}) => {
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
        'borderGradientInput relative h-full max-h-72 min-h-44',
        isFocused && 'focusedBorderInput',
      )}>
      <textarea
        {...props}
        className={`z-10 h-full w-full resize-none bg-[#000]/[.0] text-white placeholder-[#fff]/[.3] focus-visible:outline-none`}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputTextArea;
