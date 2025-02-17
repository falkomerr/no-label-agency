'use client';
import { useState } from 'react';
import type React from 'react';
import style from './Switch.module.css';

export type SwitchProps = {
  name: string;
  onSelected: (name: string) => void;
  selected: boolean;
};

const Switch: React.FC<SwitchProps> = ({ name, onSelected, selected }) => {

  return (
    <div
      className={`${style.borderGradient} max-h-[50px] w-min cursor-pointer transition-all ${selected ? style.focusedBorder : ''}`}
      onClick={() => onSelected(name)}>
      <div
        className={
          (selected ? 'text-[#FF8D5D]' : 'text-white/50') +
          ' whitespace-nowrap text-sm font-medium leading-[normal] transition-all'
        }>
        {name}
      </div>
    </div>
  );
};

export default Switch;
