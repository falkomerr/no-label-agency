import Navbar from '@/containers/Navbar';
import React from 'react';

const NotFount = () => {
  return (
    <div className="relative flex w-full flex-row justify-center bg-black bg-cover bg-center bg-no-repeat md:bg-auto md:bg-right">
      <div className="absolute bottom-0 right-auto top-0 h-full overflow-x-hidden md:right-0 md:h-max md:w-max">
        <video
          poster="/img/interface/bg-main.webp"
          autoPlay
          playsInline
          muted
          preload="none"
          loop
          height={'803'}
          className="hidden h-screen overflow-x-hidden md:block">
          <source src={'/img/interface/bg-main-video.webm'} type="video/webm" />
          <source src={'/img/interface/bg-main-video.mp4'} type="video/mp4" />
        </video>
        <video
          poster="/img/interface/bg-main.mobile.webp"
          autoPlay
          playsInline
          muted
          preload="none"
          loop
          height={'803'}
          className="block max-h-full w-full max-w-full overflow-x-hidden md:hidden md:max-h-[803px]"
          style={{ objectFit: 'cover' }}>
          <source
            src={'/img/interface/bg-main-video.mobile.webm'}
            type="video/webm"
          />
          <source
            src={'/img/interface/bg-main-video.mobile.mp4'}
            type="video/mp4"
          />
        </video>
      </div>
      <div className="z-[5] flex h-[803px] w-full max-w-[1440px] flex-col items-center justify-center px-4 text-[6rem] font-extrabold text-gray-400 md:px-12 md:text-[9rem] xl:px-20">
        Soon
      </div>
    </div>
  );
};

export default NotFount;
