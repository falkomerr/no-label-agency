'use client';
import React, { useEffect, useRef, useState } from 'react';
import './Footer.css';
import { useTranslation } from '@/hook/useLanguageStore';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { EffectCreative, Mousewheel } from 'swiper/modules';
import Link from 'next/link';
import 'react-creative-cursor/dist/styles.css';
import useProjectStore, { projects } from '@/hook/useProjectStore';
import { Cursor } from 'react-creative-cursor';

const CaseView = () => {
  const { setProject: setStateProject, currentProject } = useProjectStore();

  const { getTranslation } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);
  const [positionCursor, setPositionCursor] = useState(0);

  const [isComponentInView, setIsComponentInView] = useState(false);
  const componentRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsComponentInView(true);
          document.body.style.overflow = 'hidden';
        } else {
          setIsComponentInView(false);
          document.body.style.overflow = 'auto';
        }
      },
      {
        threshold: 1,
      },
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;

    if (isComponentInView) {
      if (currentIndex > currentSlide && currentIndex == projects.length - 1) {
        document.body.style.overflow = 'auto';
      } else if (currentIndex < currentSlide && currentIndex == 0) {
        document.body.style.overflow = 'auto';
      }
    }
    setCurrentSlide(currentIndex);

    setStateProject(projects[currentIndex]);
    if (scrollRef ?? scrollRef2) {
      const current =
        window.innerWidth <= 1024 ? scrollRef2.current : scrollRef.current;
      setPositionCursor(
        current
          ? (current?.offsetHeight / (projects.length - 1)) * currentIndex
          : 0,
      );
    }
  };

  return (
    <>
      <div
        ref={componentRef}
        className="relative mb-8 mt-20 hidden flex-row justify-between lg:flex">
        <Cursor
          isGelly={true}
          cursorSize={1}
          cursorBackgrounColor="#ffffff00"
          cursorInnerColor="black"
          colorAnimationDuration={1.5}
        />
        <div className="flex flex-row">
          {/* Полоса */}
          <div ref={scrollRef}>
            <svg
              width="2"
              height="485"
              viewBox="0 0 2 485"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                opacity="0.8"
                d="M1 0L1.00002 485"
                stroke="white"
                strokeDasharray="5 5"
              />
            </svg>
          </div>
          {/* Страницы */}
          <div className="flex h-full flex-col justify-between">
            {projects.map((item, index) => {
              return (
                <div key={index}>
                  <svg
                    width="8"
                    height="2"
                    viewBox="0 0 8 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1H8" stroke="white" />
                  </svg>
                </div>
              );
            })}
          </div>
          {/* Курсор */}
          <svg
            id="red"
            className="absolute -left-12 -top-5 m-auto transition-all duration-700"
            style={{ transform: `translateY(${positionCursor}px)` }}
            width={43}
            height={45}
            viewBox="0 0 43 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.5" filter="url(#filter0_f_2_543)">
              <path
                d="M27.4199 22.5L15.5399 29.3589L15.5399 15.6411L27.4199 22.5Z"
                fill="#FF4D00"
              />
            </g>
            <path
              opacity="0.05"
              d="M37.5 22.5L10.5 38.0885L10.5 6.91154L37.5 22.5Z"
              fill="#FF4D00"
            />
            <path
              d="M27.4199 22.5L15.5399 29.3589L15.5399 15.6411L27.4199 22.5Z"
              fill="#FF4D00"
            />
            <defs>
              <filter
                id="filter0_f_2_543"
                x="0.756042"
                y="0.857056"
                width="41.4479"
                height="43.2858"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB">
                <feFlood floodOpacity={0} result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feGaussianBlur
                  stdDeviation="7.392"
                  result="effect1_foregroundBlur_2_543"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="absolute z-10 inline-flex h-[280px] w-[495px] flex-col overflow-hidden">
          <div className="transition-all">
            <div className="z-10 ml-24 mt-9 inline-flex flex-col items-start gap-3">
              <div className="leading-[140%] text-white opacity-[0.34]">
                {currentProject.description}
              </div>
              <div
                className={
                  (currentSlide != 3 ? 'w-[345px]' : 'w-[300px]') +
                  ' text-[2.375rem] font-semibold leading-[140%] text-white'
                }>
                {currentProject.title}
              </div>
              <div className="flex items-center gap-2">
                <svg
                  width={17}
                  height={17}
                  viewBox="0 0 17 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <g opacity="0.3">
                    <path
                      d="M1.41797 6.37499C1.41797 5.03907 1.41797 4.37182 1.83305 3.95674C2.24814 3.54166 2.91539 3.54166 4.2513 3.54166H12.7513C14.0872 3.54166 14.7545 3.54166 15.1695 3.95674C15.5846 4.37182 15.5846 5.03907 15.5846 6.37499C15.5846 6.70861 15.5846 6.87578 15.4812 6.97991C15.3771 7.08332 15.2092 7.08332 14.8763 7.08332H2.1263C1.79268 7.08332 1.62551 7.08332 1.52139 6.97991C1.41797 6.87578 1.41797 6.70791 1.41797 6.37499ZM1.41797 12.75C1.41797 14.0859 1.41797 14.7532 1.83305 15.1682C2.24814 15.5833 2.91539 15.5833 4.2513 15.5833H12.7513C14.0872 15.5833 14.7545 15.5833 15.1695 15.1682C15.5846 14.7532 15.5846 14.0859 15.5846 12.75V9.20832C15.5846 8.8747 15.5846 8.70753 15.4812 8.6034C15.3771 8.49999 15.2092 8.49999 14.8763 8.49999H2.1263C1.79268 8.49999 1.62551 8.49999 1.52139 8.6034C1.41797 8.70753 1.41797 8.8754 1.41797 9.20832V12.75Z"
                      fill="white"
                    />
                    <path
                      d="M4.95898 2.125V4.25M12.0423 2.125V4.25"
                      stroke="white"
                      strokeWidth="1.41667"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
                <div className="h-[1.1875rem] w-[5.0625rem] font-medium leading-[140%] text-white opacity-[0.3]">
                  {currentProject.date}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Link
          data-cursor-size={80}
          data-cursor-text={getTranslation('component.case.view')}
          data-cursor-color={'#ffffff'}
          className="pointer-events-auto relative h-full w-[834px] cursor-pointer"
          href={currentProject.link}>
          <Swiper
            direction={'vertical'}
            effect={'creative'}
            scrollbar={{ draggable: true }}
            className="absolute left-0 h-full max-h-[485px] w-full"
            spaceBetween={1}
            speed={700}
            mousewheel={{
              releaseOnEdges: true,
              thresholdDelta: 4,
            }}
            modules={[Mousewheel, EffectCreative]}
            onSlideChange={handleSlideChange}
            creativeEffect={{
              prev: {
                // shadow: true,
                translate: [0, '-100%', 100],
              },
              next: {
                translate: [0, '100%', 100],
              },
            }}>
            {projects.map((project, index) => {
              return (
                <SwiperSlide key={index} className="w-full" style={{}}>
                  <div
                    className={
                      'bac relative h-full w-full bg-contain bg-no-repeat'
                    }
                    style={{ scale: '90%' }}>
                    <Image
                      quality={100}
                      src={project.img}
                      fill
                      className="object-contain"
                      alt="project"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Link>
      </div>
      <div className="relative flex h-full w-full flex-row justify-center">
        <div className="mb-8 ml-10 mt-10 flex max-w-[360px] flex-col lg:hidden">
          <div className="relative flex h-[260px] w-full flex-row">
            <Link
              href={currentProject.link}
              className="pointer-events-auto relative z-10 mr-8 h-full w-full cursor-pointer">
              <Swiper
                className="absolute left-0 h-full max-h-[260px] w-full cursor-pointer"
                direction={'vertical'}
                effect={'creative'}
                scrollbar={{ draggable: true }}
                spaceBetween={30}
                speed={700}
                mousewheel={{
                  releaseOnEdges: true,
                  thresholdDelta: 4,
                }}
                modules={[Mousewheel, EffectCreative]}
                creativeEffect={{
                  prev: {
                    // shadow: true,
                    translate: [0, '-100%', 100],
                  },
                  next: {
                    translate: [0, '100%', 100],
                  },
                }}>
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div
                        className="relative h-full w-full bg-contain bg-right bg-no-repeat"
                        style={{
                          backgroundImage: 'url(' + project.imgMobile + ')',
                        }}></div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Link>
          </div>
          <div className="z-10 mt-8 inline-flex h-[320px] flex-col overflow-hidden">
            <div className="transition-all">
              {projects.map((item, index) => {
                return (
                  <div
                    style={{
                      opacity: index != 0 ? 0 : 1,
                      transition: 'opacity 0.4s ease-in-out',
                    }}
                    className="z-10 inline-flex flex-col items-start gap-3"
                    key={index}>
                    <div className="text-xs leading-[140%] text-white opacity-[0.34]">
                      {item.description}
                    </div>
                    <div className="text-[27px] font-semibold leading-[140%] text-white">
                      {item.title}
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width={17}
                        height={17}
                        viewBox="0 0 17 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                          <path
                            d="M1.41797 6.37499C1.41797 5.03907 1.41797 4.37182 1.83305 3.95674C2.24814 3.54166 2.91539 3.54166 4.2513 3.54166H12.7513C14.0872 3.54166 14.7545 3.54166 15.1695 3.95674C15.5846 4.37182 15.5846 5.03907 15.5846 6.37499C15.5846 6.70861 15.5846 6.87578 15.4812 6.97991C15.3771 7.08332 15.2092 7.08332 14.8763 7.08332H2.1263C1.79268 7.08332 1.62551 7.08332 1.52139 6.97991C1.41797 6.87578 1.41797 6.70791 1.41797 6.37499ZM1.41797 12.75C1.41797 14.0859 1.41797 14.7532 1.83305 15.1682C2.24814 15.5833 2.91539 15.5833 4.2513 15.5833H12.7513C14.0872 15.5833 14.7545 15.5833 15.1695 15.1682C15.5846 14.7532 15.5846 14.0859 15.5846 12.75V9.20832C15.5846 8.8747 15.5846 8.70753 15.4812 8.6034C15.3771 8.49999 15.2092 8.49999 14.8763 8.49999H2.1263C1.79268 8.49999 1.62551 8.49999 1.52139 8.6034C1.41797 8.70753 1.41797 8.8754 1.41797 9.20832V12.75Z"
                            fill="white"
                          />
                          <path
                            d="M4.95898 2.125V4.25M12.0423 2.125V4.25"
                            stroke="white"
                            strokeWidth="1.41667"
                            strokeLinecap="round"
                          />
                        </g>
                      </svg>
                      <div className="h-[1.1875rem] w-[5.0625rem] text-xs font-medium leading-[140%] text-white opacity-[0.3]">
                        {item.date}
                      </div>
                    </div>
                    <div className="my-7 flex flex-wrap justify-start gap-2">
                      {item.tags.map((item, index) => {
                        return (
                          <div className="buttonFooter" key={index}>
                            {item.name}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CaseView;
