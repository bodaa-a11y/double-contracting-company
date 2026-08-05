import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon' | 'white';
  showText?: boolean;
}

export const CompanyLogo: React.FC<LogoProps> = ({
  className = 'h-16',
  variant = 'full',
  showText = true,
}) => {
  const isWhite = variant === 'white';
  const onlyIcon = variant === 'icon' || !showText;

  if (onlyIcon) {
    return (
      <div className={`relative overflow-hidden select-none ${className}`} style={{ aspectRatio: '1/1' }}>
        {/* نقوم بقص الجزء العلوي فقط من الشعار (البرجين والسقف) وإخفاء النصوص */}
        <img
          src="/logo.png"
          alt="شعار شركة دبل"
          className={`absolute left-0 right-0 top-0 w-full h-[160%] object-cover object-top ${
            isWhite ? 'brightness-0 invert' : ''
          }`}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src="/logo.png"
        alt="شركة دبل للمقاولات والتجارة العامة"
        className={`w-full h-full object-contain ${isWhite ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
};
