import { useCallback, useEffect, useRef, useState } from 'react';

// Utility functions moved outside component scope
function hexToRgb(hex: string): { r: number; g: number; b: number } {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : { r: 0, g: 0, b: 0 };
}

function rgbToHex(r: number, g: number, b: number): string {
  return (
    '#' +
    [r, g, b]
      .map((x) => Math.max(0, Math.min(255, x)).toString(16).padStart(2, '0'))
      .join('')
  );
}

interface ColorTextProps {
  text?: string;
  startColor?: string;
  endColor?: string;
}

const ColorText = ({
  text = '',
  startColor = '#0F1322',
  endColor = '#e6efef',
}: ColorTextProps) => {
  const [textColor, setTextColor] = useState(startColor);
  const textRef = useRef<HTMLDivElement>(null);

  // Memoized calculation function
  const calculateColor = useCallback(
    (topPosition: number) => {
      const windowHeight = window.innerHeight;
      const elementHeight = textRef.current?.offsetHeight || 0;

      const centerOffset = topPosition + elementHeight / 2 - windowHeight / 2;
      const halfWindowHeight = windowHeight / 2;

      const percentage = Math.min(
        Math.abs(centerOffset / halfWindowHeight) * 100,
        100,
      );

      const startRGB = hexToRgb(startColor);
      const endRGB = hexToRgb(endColor);

      const red = Math.round(
        startRGB.r + (endRGB.r - startRGB.r) * (percentage / 100),
      );
      const green = Math.round(
        startRGB.g + (endRGB.g - startRGB.g) * (percentage / 100),
      );
      const blue = Math.round(
        startRGB.b + (endRGB.b - startRGB.b) * (percentage / 100),
      );

      return rgbToHex(red, green, blue);
    },
    [startColor, endColor],
  );

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          if (!textRef.current) return;

          const rect = textRef.current.getBoundingClientRect();
          const newColor = calculateColor(rect.top);
          setTextColor(newColor);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [calculateColor]);

  return (
    <span
      ref={textRef}
      style={{
        color: textColor,
      }}
      className="transition-all duration-300">
      {text}
    </span>
  );
};

export default ColorText;
