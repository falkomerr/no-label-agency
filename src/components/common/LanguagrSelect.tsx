'use client';
import { useLanguageStore } from '@/hook/useLanguageStore';
import React, { useState } from 'react';

const LanguagrSelect = () => {
  const { language, setLanguage } = useLanguageStore();
  const [value, setValue] = useState('gb');

  return (
    <div className="flex flex-row gap-3">
      <div
        onClick={() => {
          setValue('gb');
          setLanguage('gb');
        }}
        className={
          (value == 'gb' ? '' : 'opacity-[0.4]') +
          ' cursor-pointer text-center text-sm font-medium leading-[104.781%] text-white transition-all hover:opacity-100'
        }>
        ENG
      </div>
      <div
        onClick={() => {
          setValue('ru');
          setLanguage('ru');
        }}
        className={
          (value == 'ru' ? '' : 'opacity-[0.4]') +
          ' cursor-pointer text-center text-sm font-medium leading-[104.781%] text-white transition-all hover:opacity-100'
        }>
        RUS
      </div>
    </div>
  );
};

export default LanguagrSelect;
