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
  const onlyIcon = variant === 'icon' || !showText;

  if (onlyIcon) {
    return (
      <div className={`relative overflow-hidden select-none bg-white rounded-lg ${className}`} style={{ aspectRatio: '1/1' }}>
        <img
          src="logo.png"
          alt="شعار شركة رؤية الريادة"
          className="absolute inset-0 w-full h-full object-contain"
          style={{
            transform: 'scale(1.35)',
            transformOrigin: '50% 12%'
          }}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center select-none ${className}`}>
      <img
        src="logo.png"
        alt="شركة رؤية الريادة للمقاولات والتطوير العقاري"
        className={`w-full h-full object-contain`}
      />
    </div>
  );
};
