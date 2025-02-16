'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import style from './Footer.module.css';
import InputText from '@/components/interfaces/InputText';
import InputTel from '@/components/interfaces/InputTel';
import Switch from '@/components/interfaces/Switch';
import InputTextArea from '@/components/interfaces/InputTextArea';
import RangeSlider from '@/components/interfaces/RangeSlider';
import { useTranslation } from '@/hook/useLanguageStore';
import Button from '@/components/interfaces/Button';
import CaseView from './CaseView';
import useProjectStore from '@/hook/useProjectStore';
import { TCanvas } from './canvas/TCanvas';

const Footer = () => {
  const [budjet, setBudjet] = useState([5, 60]);
  const { currentProject } = useProjectStore();
  const [bg, setBg] = useState('/img/interface/bg-footer-bag.png');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // if(currentProject) console.log(currentProject.glare)

    if (currentProject && currentProject.glare) setBg(currentProject.glare);
    if (currentProject) setIndex(currentProject.id);
  }, [currentProject]);

  const pathname = usePathname();
  const { getTranslation } = useTranslation();
  return (
    <div className="relative overflow-hidden rounded-t-[45px] bg-black">
      <div className="absolute h-[800px] w-full">
        <TCanvas index={index} />
      </div>
      <div
        className="absolute -right-4 top-[800px] m-auto h-[5.75rem] w-screen flex-shrink-0 bg-black"
        style={{ boxShadow: '0px 0px 63.1px 49px #000000' }}
      />

      {/* <div style={{ backgroundImage: "url(" + bg + ")"}} className={"transition-all absolute h-[600px] w-full pointer-events-none top-0 right-0 bg-right-top bg-no-repeat bg-contain z-20"} /> */}
      <div className="pointer-events-none absolute bottom-32 right-0 m-auto h-full w-full max-w-[600px] bg-[url(/img/interface/bg-footer-form2.png)] bg-contain bg-right-bottom bg-no-repeat sm:bottom-0 lg:max-w-[800px]" />

      <div className="pointer-events-none flex w-full flex-row justify-center">
        <div
          id="cases"
          className="mx-4 mb-24 mt-24 flex w-full max-w-[1300px] flex-col md:mx-12 lg:mx-20 xl:mx-28">
          <div className="z-20 ml-4 text-xs font-medium leading-[normal] text-white opacity-[0.7] sm:text-base">
            {getTranslation('footer.text1')}
          </div>
          <CaseView />

          <div className="z-[5] flex flex-row justify-center lg:justify-start">
            {/* <div className="text-white cursor-pointer relative bg-[#DACDFF]/[.03] w-max sm:ml-24 py-4 pl-16 pr-[88px] rounded-full linerBorderGradient">
                            {getTranslation('footer.text10')}
                            <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.60))" }}>
                                <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                                </svg>
                            </div>
                        </div> */}
            <Button href={''} className="pointer-events-auto sm:ml-24">
              {getTranslation('footer.text10')}
            </Button>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col items-center justify-center pt-28">
        <div className="absolute left-0 top-0 h-[300px] w-full bg-[url(/img/interface/bg-footer-form1.png)] bg-contain bg-left-top bg-no-repeat md:h-[413px]" />
        <span
          id="bot"
          className={
            style.textGradient +
            ' pl-52 text-center text-[39px] font-semibold leading-[120%] opacity-[0.6] md:pl-56 md:text-[65px] lg:text-[113px]'
          }>
          Get&nbsp;In Touch with&nbsp;Us
        </span>
        <div className="z-[5] flex w-full max-w-[1000px] flex-col gap-8 px-8 pt-16 md:grid md:grid-cols-5">
          <div className="col-span-2 flex flex-col items-start gap-12">
            <div className="flex w-full flex-col gap-3">
              <div className="z-10 text-sm leading-[140%] text-white">
                {getTranslation('footer.text11')}
              </div>
              <InputText placeholder="Alex" />
            </div>
            <div className="flex w-full flex-col gap-3">
              <div className="z-10 text-sm leading-[140%] text-white">
                {getTranslation('footer.text12')}
              </div>
              <InputText placeholder="ex. jameslaurentsdesign@gmail.com" />
            </div>
            <div className="flex w-full flex-col gap-3">
              <div className="text-sm leading-[140%] text-white">
                {getTranslation('footer.text13')}
              </div>
              <InputTel placeholder="+1 (123) 456 78 92" />
            </div>
            <div className="flex w-full flex-col gap-3">
              <div className="text-sm leading-[140%] text-white">
                {getTranslation('footer.text14')}
              </div>
              <div className="flex items-start justify-between">
                <div className="text-xs leading-[140%] text-white opacity-[0.4]">
                  {getTranslation('footer.text15') +
                    Math.floor(budjet[0]) +
                    'K'}
                </div>
                <div className="text-xs leading-[140%] text-white opacity-[0.4]">
                  {getTranslation('footer.text16') +
                    Math.floor(budjet[1]) +
                    'K' +
                    (budjet[1] >= 100000 ? ' +' : '')}
                </div>
              </div>
              <RangeSlider
                value={budjet}
                setValue={setBudjet}
                min={1}
                max={100}
              />
            </div>
          </div>
          <div className="col-span-3 flex flex-col gap-7">
            <div className="flex flex-col gap-3">
              <div className="text-sm leading-[140%] text-white">
                {getTranslation('footer.text17')}
              </div>
              <div className="flex flex-wrap justify-start gap-2">
                <Switch name={'Logo'} />
                <Switch name={'Website'} />
                <Switch name={'Branding'} />
                <Switch name={'3D'} />
                <Switch name={'Identily'} />
                <Switch name={'Booklet'} />
                <Switch name={'Brand Identity'} />
                <Switch name={'Product design'} />
                <Switch name={'More...'} />
              </div>
            </div>
            <div className="flex h-full flex-col gap-3">
              <div className="text-sm leading-[140%] text-white">
                {getTranslation('footer.text18')}
              </div>
              <InputTextArea
                placeholder={getTranslation('component.inputArea.placeholder')}
              />
            </div>
          </div>
        </div>
        {/* TODO: Сделать блять обработку и отправку формы на сервер бл, ААААААААААА */}
        {/* <div className={style.bSubmit + " text-white mt-14 mb-9 cursor-pointer relative bg-[#DACDFF]/[.03] w-full max-w-[334px] py-4 pl-16 pr-[88px] flex flex-row items-center justify-center rounded-full linerBorderGradient"}>
                    {getTranslation('footer.text19')}
                    <div className="absolute top-0 right-0 p-[22px] bg-[#FF4D00] rounded-full" style={{ filter: "drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.60)) drop-shadow(0px 0px 92.444px rgba(255, 77, 0, 0.3  0))" }}>
                        <svg width={14} height={14} viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z" fill="white" />
                        </svg>
                    </div>
                </div> */}
        <Button
          href={''}
          className={
            style.bSubmit +
            ' z-[5] mb-9 mt-14 flex w-full max-w-[334px] flex-row items-center justify-center'
          }>
          {getTranslation('footer.text19')}
        </Button>
      </div>
      <div className="pointer-events-none absolute right-0 top-0 z-[2] h-full w-full bg-[url(/img/interface/shum.png)] opacity-35 mix-blend-soft-light" />
      <div className="flex w-full flex-row justify-center">
        <div className="flex w-full max-w-[1440px] flex-col gap-14 px-4 py-11 md:px-12 lg:px-36 lg:py-32 xl:px-20">
          <nav className="z-40 hidden flex-row items-center justify-between pt-[51px] md:flex">
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
                  (pathname == '#cases' ? '' : 'opacity-50') +
                  ' text-sm font-medium leading-[normal] text-white transition-all hover:opacity-100'
                }
                href={'#cases'}>
                {getTranslation('nav.cases')}
              </Link>
              <Link
                className={
                  (pathname == '#bot' ? '' : 'opacity-50') +
                  ' text-sm font-medium leading-[normal] text-white transition-all hover:opacity-100'
                }
                href={'#bot'}>
                {getTranslation('nav.contact')}
              </Link>
              {/* <Link className={(pathname == '/vacancy' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal] transition-all hover:opacity-100"} href={'/vacancy'}>
                                {getTranslation('nav.vacancy')}
                            </Link> */}
            </div>
            <Link
              href={'#top'}
              className="rounded-full transition-all hover:scale-95 hover:bg-[#fff]/[.1]">
              <svg
                className="cursor-pointer"
                width={51}
                height={51}
                viewBox="0 0 51 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_b_2_569)">
                  <rect
                    width={51}
                    height={51}
                    rx="25.5"
                    fill="black"
                    fillOpacity="0.23"
                  />
                  <rect
                    x="0.689341"
                    y="0.689341"
                    width="49.6213"
                    height="49.6213"
                    rx="24.8107"
                    stroke="url(#paint0_linear_2_569)"
                    strokeOpacity="0.4"
                    strokeWidth="1.37868"
                  />
                  <path
                    d="M26.1201 17.6139C25.784 17.2908 25.2496 17.3013 24.9265 17.6373L19.6608 23.1137C19.3377 23.4497 19.3481 23.9841 19.6842 24.3072C20.0202 24.6304 20.5546 24.6199 20.8778 24.2838L25.5584 19.416L30.4262 24.0966C30.7623 24.4197 31.2967 24.4092 31.6198 24.0732C31.9429 23.7371 31.9325 23.2028 31.5964 22.8796L26.1201 17.6139ZM26.6774 33.4267L26.379 18.2059L24.691 18.2389L24.9895 33.4598L26.6774 33.4267Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_2_569"
                    x={-22}
                    y={-22}
                    width={95}
                    height={95}
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity={0} result="BackgroundImageFix" />
                    <feGaussianBlur in="BackgroundImageFix" stdDeviation={11} />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_2_569"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_2_569"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_2_569"
                    x1="0.0487325"
                    y1="-0.154101"
                    x2="25.2247"
                    y2="50.7972"
                    gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset={1} stopColor="white" stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
          </nav>
          <nav className="z-50 flex flex-col items-center justify-between pt-[51px] md:hidden">
            <div className="flex w-full flex-row items-center justify-between">
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
              <Link href={'#top'}>
                <svg
                  className="cursor-pointer"
                  width={51}
                  height={51}
                  viewBox="0 0 51 51"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g filter="url(#filter0_b_2_569)">
                    <rect
                      width={51}
                      height={51}
                      rx="25.5"
                      fill="black"
                      fillOpacity="0.23"
                    />
                    <rect
                      x="0.689341"
                      y="0.689341"
                      width="49.6213"
                      height="49.6213"
                      rx="24.8107"
                      stroke="url(#paint0_linear_2_569)"
                      strokeOpacity="0.4"
                      strokeWidth="1.37868"
                    />
                    <path
                      d="M26.1201 17.6139C25.784 17.2908 25.2496 17.3013 24.9265 17.6373L19.6608 23.1137C19.3377 23.4497 19.3481 23.9841 19.6842 24.3072C20.0202 24.6304 20.5546 24.6199 20.8778 24.2838L25.5584 19.416L30.4262 24.0966C30.7623 24.4197 31.2967 24.4092 31.6198 24.0732C31.9429 23.7371 31.9325 23.2028 31.5964 22.8796L26.1201 17.6139ZM26.6774 33.4267L26.379 18.2059L24.691 18.2389L24.9895 33.4598L26.6774 33.4267Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_b_2_569"
                      x={-22}
                      y={-22}
                      width={95}
                      height={95}
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB">
                      <feFlood floodOpacity={0} result="BackgroundImageFix" />
                      <feGaussianBlur
                        in="BackgroundImageFix"
                        stdDeviation={11}
                      />
                      <feComposite
                        in2="SourceAlpha"
                        operator="in"
                        result="effect1_backgroundBlur_2_569"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_backgroundBlur_2_569"
                        result="shape"
                      />
                    </filter>
                    <linearGradient
                      id="paint0_linear_2_569"
                      x1="0.0487325"
                      y1="-0.154101"
                      x2="25.2247"
                      y2="50.7972"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="white" />
                      <stop offset={1} stopColor="white" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>
            </div>
            <div className="mt-6 flex flex-row items-center justify-around gap-6">
              <Link
                className={
                  (pathname == '/' ? '' : 'opacity-50') +
                  ' text-sm font-medium leading-[normal] text-white'
                }
                href={'/'}>
                {getTranslation('nav.about')}
              </Link>
              <Link
                className={
                  (pathname == '/#cases' ? '' : 'opacity-50') +
                  ' text-sm font-medium leading-[normal] text-white'
                }
                href={'#cases'}>
                {getTranslation('nav.cases')}
              </Link>
              <Link
                className={
                  (pathname == '/#bot' ? '' : 'opacity-50') +
                  ' text-sm font-medium leading-[normal] text-white'
                }
                href={'#bot'}>
                {getTranslation('nav.contact')}
              </Link>
              {/* <Link className={(pathname == '/vacancy' ? "" : "opacity-50") + " text-white text-sm font-medium leading-[normal]"} href={'/vacancy'}>
                                {getTranslation('nav.vacancy')}
                            </Link> */}
            </div>
          </nav>
          <div className="flex flex-col items-center justify-between gap-3 opacity-50 md:flex-row">
            <div className="text-sm leading-[normal] text-white">
              Working worldwide
            </div>
            <div className="text-sm leading-[normal] text-white">
              © 2025 No Lable Agency
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
