import Slider from '@mui/material/Slider';
import React, { Dispatch, SetStateAction } from 'react';

interface Props {
  value: [number, number];
  setValue: Dispatch<SetStateAction<[number, number]>>;
  min: number;
  max: number;
}

const RangeSlider: React.FC<Props> = ({ value, setValue, min, max }) => {
  const handleChange = (_: Event, newValue: number | [number, number]) => {
    setValue(newValue as [number, number]);
  };

  return (
    <Slider
      getAriaLabel={() => 'Approximate budget'}
      valueLabelDisplay="auto"
      value={value}
      min={min}
      max={max}
      onChange={handleChange as any}
      sx={{
        color: '#fff',
        '& .MuiSlider-valueLabel': {
          display: 'none',
          '&::before': {
            display: 'none',
          },
          '& *': {
            display: 'none',
          },
        },
        '& .MuiSlider-rail': { opacity: 0.2, height: '2px' },
        '& .MuiSlider-track': { background: '#CB7850', border: 0, height: 2 },
        '& .MuiSlider-thumb': {
          opacity: 0.8,
          background: '#FF4D00',
          '&:before': {
            background: 'white',
            height: '8px',
            width: '8px',
            opacity: 1,
            boxShadow:
              '0 0 23px 0 rgba(255, 77, 0, 0.6), 0 0 29px 0 rgba(255, 77, 0, 0.3)',
          },
          '&:focus, &:hover, &.Mui-active': {
            boxShadow:
              '0 0 23px 0 rgba(255, 77, 0, 0.6), 0 0 29px 0 rgba(255, 77, 0, 0.3)',
          },
        },
      }}
    />
  );
};

export default RangeSlider;
