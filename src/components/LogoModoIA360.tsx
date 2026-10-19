import React from 'react';
import logoPng from '../assets/images/modoia360_logo_transparent.png';

interface LogoModoIA360Props {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  glow?: boolean;
  variant?: 'original' | 'dark';
}

export const LogoModoIA360: React.FC<LogoModoIA360Props> = ({
  className = '',
  size = 'md',
  glow = false,
  variant = 'original',
}) => {
  const sizeClasses = {
    sm: 'h-8 sm:h-9 w-auto',
    md: 'h-10 sm:h-12 w-auto',
    lg: 'h-16 sm:h-20 w-auto',
    xl: 'h-24 sm:h-28 w-auto',
    custom: '',
  };

  const finalClass = size === 'custom' ? className : `${sizeClasses[size]} ${className}`;

  return (
    <div className={`inline-flex items-center select-none ${glow ? 'filter drop-shadow-[0_4px_16px_rgba(0,102,255,0.25)]' : ''}`}>
      <img
        src={logoPng}
        alt="ModoIA360"
        className={`object-contain block max-w-full ${finalClass} ${
          variant === 'dark' ? 'brightness-110' : ''
        }`}
        draggable={false}
      />
    </div>
  );
};

