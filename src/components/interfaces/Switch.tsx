'use client';
import type React from 'react';
import './Switch.css';
import { cn } from '@/lib/utils';

export type SwitchProps = {
  name: string;
  onSelected: (name: string) => void;
  selected: boolean;
};

const Switch: React.FC<SwitchProps> = ({ name, onSelected, selected }) => {
  return (
    <div
      className={cn(
        'borderGradient max-h-[50px] w-min cursor-pointer rounded-xl transition-all',
        selected && 'focusedBorder',
      )}
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
