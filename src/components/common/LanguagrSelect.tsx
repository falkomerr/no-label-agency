'use client';
import { useLanguageStore } from '@/hook/useLanguageStore';
import React from 'react';

const LanguagrSelect = () => {
  const { language, setLanguage } = useLanguageStore();

  return (
    <div className="flex flex-row gap-3">
      <div
        onClick={() => {
          setLanguage('gb');
        }}
        className={
          (language == 'gb' ? '' : 'opacity-[0.4]') +
          ' cursor-pointer text-center text-sm font-medium leading-[104.781%] text-white transition-all hover:opacity-100'
        }>
        ENG
      </div>
      <div
        onClick={() => {
          setLanguage('ru');
        }}
        className={
          (language == 'ru' ? '' : 'opacity-[0.4]') +
          ' cursor-pointer text-center text-sm font-medium leading-[104.781%] text-white transition-all hover:opacity-100'
        }>
        RUS
      </div>
    </div>
  );
};

export default LanguagrSelect;
