import React from 'react';

interface LogoProps {
  variant?: 'full-plate' | 'inline' | 'emblem-only';
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark';
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'inline',
  size = 'md',
  theme = 'light',
}) => {
  // Dimensions
  const emblemSizes = {
    sm: 'w-7 h-7 text-xs',
    md: 'w-9 h-9 text-sm',
    lg: 'w-12 h-12 text-lg',
  };

  const textSizes = {
    sm: { main: 'text-sm', sub: 'text-[9px]' },
    md: { main: 'text-lg sm:text-xl', sub: 'text-[10px] sm:text-[11px]' },
    lg: { main: 'text-2xl sm:text-3xl', sub: 'text-xs sm:text-sm' },
  };

  // The distinctive red diamond emblem with the letter "P"
  const Emblem = (
    <div className={`relative flex items-center justify-center shrink-0 ${emblemSizes[size]}`}>
      {/* Background silver accent diamond/shape */}
      <div className="absolute inset-0 bg-zinc-300 rounded-[4px] rotate-45 transform scale-95 opacity-80" />
      {/* Primary red diamond */}
      <div className="absolute inset-0.5 bg-gradient-to-br from-red-600 to-red-700 rounded-[3px] rotate-45 shadow-sm border border-red-500/50 flex items-center justify-center">
        {/* Bold white 'P' */}
        <span className="font-heading font-black text-white -rotate-0 select-none tracking-tighter" style={{ transform: 'rotate(0deg)' }}>
          P
        </span>
      </div>
    </div>
  );

  if (variant === 'emblem-only') {
    return Emblem;
  }

  // Full plate signboard version (matches the real sign uploaded by the user!)
  if (variant === 'full-plate') {
    return (
      <div className="inline-flex items-center gap-3.5 sm:gap-4 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-xl border-2 border-zinc-200 shadow-md hover:shadow-lg transition-shadow">
        {/* Left vertical divider bar like on the sign */}
        <div className="flex items-center gap-3">
          {Emblem}
          <div className="w-px h-8 bg-zinc-200" />
        </div>

        <div className="flex flex-col text-left">
          <div className="flex items-baseline font-heading font-black tracking-tight leading-none text-xl sm:text-2xl">
            <span className="text-zinc-900 tracking-tight">PAULINHO</span>
            <span className="text-red-600 ml-1">CAR</span>
          </div>
          <span className="font-heading text-[10px] sm:text-xs font-bold tracking-[0.22em] text-zinc-600 uppercase mt-0.5">
            AUTO SERVICE
          </span>
        </div>
      </div>
    );
  }

  // Inline header/footer version
  return (
    <div className="inline-flex items-center gap-2.5 sm:gap-3 text-left">
      {Emblem}
      <div className="flex flex-col">
        <div className={`flex items-baseline font-heading font-black tracking-tight leading-none ${textSizes[size].main}`}>
          <span className={theme === 'dark' ? 'text-white' : 'text-zinc-950'}>
            PAULINHO
          </span>
          <span className="text-red-600 ml-0.5">CAR</span>
        </div>
        <span
          className={`font-heading font-bold tracking-[0.2em] uppercase ${textSizes[size].sub} ${
            theme === 'dark' ? 'text-zinc-400' : 'text-zinc-600'
          }`}
        >
          AUTO SERVICE
        </span>
      </div>
    </div>
  );
};
