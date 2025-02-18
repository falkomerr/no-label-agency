import '@/containers/Footer.css';
import UnoptimizedInputText from '@/components/interfaces/InputText';
import UnoptimizedInputTel from '@/components/interfaces/InputTel';
import RangeSlider from '@/components/interfaces/RangeSlider';
import UnoptimizedSwitch from '@/components/interfaces/Switch';
import UnoptimizedTextArea from '@/components/interfaces/InputTextArea';
import React, { FormEvent, useState } from 'react';
import { useTranslation } from '@/hook/useLanguageStore';

const InputTextArea = React.memo(UnoptimizedTextArea);
const InputText = React.memo(UnoptimizedInputText);
const Switch = React.memo(UnoptimizedSwitch);
const InputTel = React.memo(UnoptimizedInputTel);

const serviceOptions = [
  'Logo',
  'Website',
  'Branding',
  '3D',
  'Identily',
  'Booklet',
  'Brand Identity',
  'Product design',
  'More...',
];

export const Form = () => {
  const [isHovered, setIsHovered] = useState(false);

  const linkStyles = {
    transition: 'transform 0.2s ease, background 0.2s ease',
    transform: isHovered ? 'scale(0.95)' : 'scale(1)',
    background: isHovered ? '#DACDFF15' : '#DACDFF03',
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState<string[]>([]);

  const { getTranslation } = useTranslation();
  const [budget, setBudget] = useState<[number, number]>([5, 60]);

  function handleOptionSelected(name: string) {
    if (type.includes(name)) {
      setType((prev) => prev.filter((value) => value !== name));
    } else {
      setType((prev) => [...prev, name]);
    }
  }

  async function onSubmit(event: FormEvent) {
    event.preventDefault();

    await fetch('/api', {
      method: 'POST',
      body: JSON.stringify({
        email,
        phone,
        message,
        type,
        budget,
        name,
      }),
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className="relative flex flex-col items-center justify-center pt-28">
      <div className="absolute left-0 top-0 h-[300px] w-full bg-[url(/img/interface/bg-footer-form1.png)] bg-contain bg-left-top bg-no-repeat md:h-[413px]" />
      <span
        className={
          'textGradientFooter pl-52 text-center text-[39px] font-semibold leading-[120%] opacity-[0.6] md:pl-56 md:text-[65px] lg:text-[113px]'
        }>
        Get&nbsp;In Touch with&nbsp;Us
      </span>
      <div className="z-[5] flex w-full max-w-[1000px] flex-col gap-8 px-8 pt-16 md:grid md:grid-cols-5">
        <div className="col-span-2 flex flex-col items-start gap-12">
          <div className="flex w-full flex-col gap-3">
            <div className="z-10 text-sm leading-[140%] text-white">
              {getTranslation('footer.text11')}
            </div>
            <InputText
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Alex"
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <div className="z-10 text-sm leading-[140%] text-white">
              {getTranslation('footer.text12')}
            </div>
            <InputText
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="ex. jameslaurentsdesign@gmail.com"
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <div className="text-sm leading-[140%] text-white">
              {getTranslation('footer.text13')}
            </div>
            <InputTel
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+1 (123) 456 78 92"
            />
          </div>
          <div className="flex w-full flex-col gap-3">
            <div className="text-sm leading-[140%] text-white">
              {getTranslation('footer.text14')}
            </div>
            <div className="flex items-start justify-between">
              <div className="text-xs leading-[140%] text-white opacity-[0.4]">
                {getTranslation('footer.text15') + Math.floor(budget[0]) + 'K'}
              </div>
              <div className="text-xs leading-[140%] text-white opacity-[0.4]">
                {getTranslation('footer.text16') +
                  Math.floor(budget[1]) +
                  'K' +
                  (budget[1] >= 100000 ? ' +' : '')}
              </div>
            </div>
            <RangeSlider
              value={budget}
              setValue={setBudget}
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
              {serviceOptions.map((option, index) => (
                <Switch
                  selected={type.includes(option)}
                  onSelected={handleOptionSelected}
                  key={index}
                  name={option}
                />
              ))}
            </div>
          </div>
          <div className="flex h-full flex-col gap-3">
            <div className="text-sm leading-[140%] text-white">
              {getTranslation('footer.text18')}
            </div>
            <InputTextArea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={getTranslation('component.inputArea.placeholder')}
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className={
          'linerBorderGradient relative cursor-pointer rounded-full bg-[#DACDFF]/[.03] py-4 pl-16 pr-[88px] text-white ' +
          'bSubmitFooter z-[5] mb-9 mt-14 flex w-full max-w-[334px] flex-row items-center justify-center'
        }
        style={linkStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        {getTranslation('footer.text19')}

        <div
          className="absolute right-0 top-0 z-20 m-auto rounded-full bg-[#FF4D00] p-[22px]"
          style={{
            filter: 'drop-shadow(0px 0px 71.791px rgba(255, 77, 0, 0.90))',
            transform: isHovered ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.4s ease',
          }}>
          <svg
            width={14}
            height={14}
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.7452 0.981492C13.735 0.460177 13.3041 0.0458545 12.7828 0.0560763L4.2875 0.222651C3.76618 0.232872 3.35186 0.663768 3.36208 1.18508C3.3723 1.7064 3.8032 2.12072 4.32451 2.1105L11.8759 1.96243L12.024 9.51382C12.0342 10.0351 12.4651 10.4495 12.9864 10.4392C13.5077 10.429 13.922 9.99812 13.9118 9.4768L13.7452 0.981492ZM1.68054 13.9277L13.4819 1.65437L12.1208 0.345632L0.319458 12.619L1.68054 13.9277Z"
              fill="white"
            />
          </svg>
        </div>
      </button>
    </form>
  );
};
