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
  const greenColor = isWhite ? '#FFFFFF' : '#116B43';
  const darkColor = isWhite ? '#E5E7EB' : '#39424C';
  const accentLineColor = isWhite ? '#C9A227' : '#116B43';

  return (
    <div className={`inline-flex flex-col items-center justify-center select-none ${className}`}>
      <svg
        viewBox="0 0 500 580"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-contain"
      >
        {/* --- Top Skyscrapers (Green) --- */}
        {/* Left Skyscraper */}
        <path
          d="M148 255 L237 202 L237 415 L148 360 Z"
          fill={greenColor}
        />
        {/* Right Skyscraper (Taller) */}
        <path
          d="M277 122 L371 63 L371 405 L277 319 Z"
          fill={greenColor}
        />

        {/* --- Roof & House Frame (Dark Charcoal) --- */}
        <path
          d="M85 262 L136 230 L253 318 L370 230 L421 262 L421 332 L370 295 L253 381 L136 295 L85 332 Z"
          fill={darkColor}
        />

        {/* 4-Pane Window Grid (Dark Charcoal) */}
        <rect x="230" y="280" width="20" height="20" rx="1" fill={darkColor} />
        <rect x="256" y="280" width="20" height="20" rx="1" fill={darkColor} />
        <rect x="230" y="306" width="20" height="20" rx="1" fill={darkColor} />
        <rect x="256" y="306" width="20" height="20" rx="1" fill={darkColor} />

        {variant !== 'icon' && showText && (
          <>
            {/* --- "دبل" Main Calligraphic Typography (Green) --- */}
            {/* Custom vector representation matching the logo's distinct 'دبل' letterforms */}
            <g fill={greenColor}>
              {/* Loop of 'د' */}
              <path d="M168 346 C158 351, 158 395, 158 402 L172 411 C200 411, 235 410, 260 405 C290 398, 305 380, 305 352 L266 352 C266 370, 255 378, 230 380 C200 382, 185 380, 185 365 C185 355, 175 348, 168 346 Z" />
              {/* Vertical stem / connection for 'ب' and 'ل' */}
              <path d="M331 367 C331 345, 331 335, 331 327 L371 327 L371 405 C371 428, 355 448, 315 452 C260 458, 150 456, 100 422 L100 390 C125 412, 180 422, 240 422 C300 422, 331 410, 331 385 L331 367 Z" />
              {/* Stems for 'ل' */}
              <path d="M331 367 L425 367 C425 385, 422 415, 410 426 C390 442, 350 442, 331 442 L331 402 C345 402, 375 402, 381 396 C385 392, 385 382, 385 367 L331 367 Z" />
              {/* Dot under 'ب' (Nuqta) */}
              <rect x="264" y="454" width="25" height="25" rx="2" transform="rotate(45 276.5 466.5)" fill={greenColor} />
            </g>

            {/* --- Subtitle & Accent Lines --- */}
            {/* Left Accent Line */}
            <rect x="1" y="504" width="40" height="4" rx="2" fill={accentLineColor} />
            {/* Right Accent Line */}
            <rect x="459" y="504" width="40" height="4" rx="2" fill={accentLineColor} />

            {/* "للتجارة والمقاولات العامة" Text in Dark Charcoal / White */}
            <text
              x="250"
              y="515"
              textAnchor="middle"
              fill={darkColor}
              fontSize="23"
              fontWeight="800"
              fontFamily="'Tajawal', 'IBM Plex Sans Arabic', sans-serif"
              letterSpacing="0.5"
            >
              للتجارة والمقاولات العامة
            </text>
          </>
        )}
      </svg>
    </div>
  );
};
