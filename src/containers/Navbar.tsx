'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import './Navbar.css';
import LanguagrSelect from '@/components/common/LanguagrSelect';
import { useTranslation } from '@/hook/useLanguageStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const { getTranslation } = useTranslation();
  return (
    <div>
      <nav
        className="absolute z-50 hidden w-screen flex-row items-center justify-center px-4 pt-[51px] md:flex md:px-12 xl:px-20"
        style={{
          background:
            'linear-gradient(180deg, rgba(0, 0, 0, 0.87), rgba(0, 0, 0, 0))',
        }}>
        <div className="flex w-full max-w-[1440px] flex-row items-center justify-between">
          <Link className="logo flex items-center gap-[15px]" href={'/'}>
            <svg
              width={35}
              height={36}
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.6474 12.6194V0.5H13.3526V12.6194L2.73121 8.85821L0 16.903L10.9249 20.8731L4.04624 30.4851L10.7225 35.5L17.5 26.097L24.2775 35.5L30.9538 30.4851L24.0751 20.8731L35 16.903L32.2688 8.85821L21.6474 12.6194Z"
                fill="white"
              />
            </svg>
            <svg
              width={2}
              height={26}
              viewBox="0 0 2 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path opacity="0.6" d="M1 0.5L1 25.5" stroke="white" />
            </svg>
            <div className="font-medium leading-[normal] text-white">
              NL Agency
            </div>
          </Link>
          <div className="flex flex-row items-center gap-6">
            <Link
              className={
                (pathname == '/' ? '' : 'opacity-50') +
                ' text-sm font-medium leading-[normal] text-white transition-all hover:opacity-100'
              }
              href={'/'}>
              {getTranslation('nav.about')}
            </Link>
            <Link
              className={
                (pathname == '/#cases' ? '' : 'opacity-50') +
                ' text-sm font-medium leading-[normal] text-white transition-all hover:opacity-100'
              }
              href={'#cases'}>
              {getTranslation('nav.cases')}
            </Link>
            {/* <Link className={(pathname == '/contact' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal] hover:opacity-100 transition-all"} href={'/contact'}>
                            {getTranslation('nav.contact')}
                        </Link> */}
            <Link
              className={
                (pathname == '/#bot' ? '' : 'opacity-50') +
                ' text-sm font-medium leading-[normal] text-white transition-all hover:opacity-100'
              }
              href={'#bot'}>
              {getTranslation('nav.contact')}
            </Link>
          </div>
          <div className="flex flex-row items-center gap-5">
            <LanguagrSelect />
            <Link
              href={'#bot'}
              className={
                'buttonBorderNavbar flex items-center justify-center rounded-full px-8 py-4 text-center text-sm text-white transition-all hover:scale-95 hover:bg-[#fff]/[.15]'
              }>
              {getTranslation('nav.explore')}
            </Link>
          </div>
        </div>
      </nav>
      <nav
        className={
          (isOpen ? '' : 'invisible') +
          ' fixed z-40 flex w-screen flex-row items-center justify-between bg-[#0A0D1D]/[0.1] px-4 py-4 backdrop-blur-3xl md:hidden'
        }>
        <Link className="logo flex items-center gap-[15px]" href={'/'}>
          <svg
            width={35}
            height={36}
            viewBox="0 0 35 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.6474 12.6194V0.5H13.3526V12.6194L2.73121 8.85821L0 16.903L10.9249 20.8731L4.04624 30.4851L10.7225 35.5L17.5 26.097L24.2775 35.5L30.9538 30.4851L24.0751 20.8731L35 16.903L32.2688 8.85821L21.6474 12.6194Z"
              fill="white"
            />
          </svg>
        </Link>
        <div className="flex flex-row items-center gap-5">
          <LanguagrSelect />
          <div
            className="flex w-[1.375rem] flex-shrink-0 cursor-pointer flex-col items-end justify-center gap-1.5"
            onClick={() => setIsOpen(!isOpen)}>
            <svg
              width={24}
              height={3}
              viewBox="0 0 24 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 0.134766C1.24061 0.134766 0.625 0.750374 0.625 1.50977C0.625 2.26916 1.24061 2.88477 2 2.88477V0.134766ZM2 2.88477H24V0.134766H2V2.88477Z"
                fill="white"
              />
            </svg>
            <svg
              width={18}
              height={3}
              viewBox="0 0 18 3"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.04401 0.115234C1.28461 0.115234 0.669006 0.730843 0.669006 1.49023C0.669006 2.24963 1.28461 2.86523 2.04401 2.86523L2.04401 0.115234ZM2.04401 2.86523L18.0001 2.86523L18.0001 0.115233L2.04401 0.115234L2.04401 2.86523Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
      </nav>
      <nav
        className={
          isOpen
            ? 'hidden'
            : 'flex' +
              ' fixed left-0 top-0 z-40 h-screen w-screen flex-col justify-between bg-[#0A0A0A]/[.50] px-4 py-4 backdrop-blur-sm'
        }>
        <div className="flex flex-row items-center justify-between">
          <Link className="logo flex items-center gap-[15px]" href={'/'}>
            <svg
              width={35}
              height={36}
              viewBox="0 0 35 36"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21.6474 12.6194V0.5H13.3526V12.6194L2.73121 8.85821L0 16.903L10.9249 20.8731L4.04624 30.4851L10.7225 35.5L17.5 26.097L24.2775 35.5L30.9538 30.4851L24.0751 20.8731L35 16.903L32.2688 8.85821L21.6474 12.6194Z"
                fill="white"
              />
            </svg>
          </Link>
          <div className="flex flex-row items-center gap-5">
            <LanguagrSelect />
            <div
              className="flex w-[1.375rem] flex-shrink-0 cursor-pointer flex-col items-end justify-center gap-1.5"
              onClick={() => setIsOpen(!isOpen)}>
              <svg
                width={22}
                height={20}
                viewBox="0 0 22 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.22192 17.7783L18.7783 2.22197"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
                <path
                  d="M3.22192 2.22168L18.7783 17.778"
                  stroke="white"
                  strokeWidth="2.75"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="my-5 flex flex-col items-center justify-center gap-5">
          <Link
            className={
              (pathname == '/' ? '' : 'opacity-50') +
              ' text-xl font-medium leading-[normal] text-white'
            }
            href={'/'}>
            {getTranslation('nav.about')}
          </Link>
          <Link
            className={
              (pathname == '/cases' ? '' : 'opacity-50') +
              ' text-xl font-medium leading-[normal] text-white'
            }
            href={'/cases'}>
            {getTranslation('nav.cases')}
          </Link>
          <Link
            className={
              (pathname == '/contact' ? '' : 'opacity-50') +
              ' text-xl font-medium leading-[normal] text-white'
            }
            href={'/contact'}>
            {getTranslation('nav.contact')}
          </Link>
          <Link
            className={
              (pathname == '/vacancy' ? '' : 'opacity-50') +
              ' text-xl font-medium leading-[normal] text-white'
            }
            href={'/vacancy'}>
            {getTranslation('nav.vacancy')}
          </Link>
        </div>
        <div className="mb-32 flex w-full flex-row justify-center">
          <Link
            href={'#bot'}
            className={
              'buttonBorderNavbar flex w-full max-w-60 items-center justify-center rounded-full px-8 py-4 text-center text-xl text-white'
            }>
            {getTranslation('nav.explore')}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
