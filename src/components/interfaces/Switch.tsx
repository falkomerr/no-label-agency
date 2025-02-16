'use client';
import { useState } from 'react';
import type React from 'react';
import style from './Switch.module.css';

export type SwitchProps = {
  name: string;
};

const Switch: React.FC<SwitchProps> = ({ name }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`${style.borderGradient} max-h-[50px] w-min cursor-pointer transition-all ${active ? style.focusedBorder : ''}`}
      onClick={() => setActive(!active)}>
      <div
        className={
          (active ? 'text-[#FF8D5D]' : 'text-white/50') +
          ' whitespace-nowrap text-sm font-medium leading-[normal] transition-all'
        }>
        {name}
      </div>
    </div>
  );
};

export default Switch;
