import React from 'react';
import { Phone, Navigation, MessageCircle } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

// 3D Glossy WhatsApp Sphere Icon matching the user's uploaded badge
export const WhatsAppIcon3D: React.FC<{ className?: string }> = ({ className = 'w-8 h-8' }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      {/* 3D Sphere Base Gradient */}
      <radialGradient
        id="waSphereGrad"
        cx="38%"
        cy="32%"
        r="65%"
        fx="32%"
        fy="26%"
      >
        <stop offset="0%" stopColor="#55FA8D" />
        <stop offset="25%" stopColor="#25D366" />
        <stop offset="65%" stopColor="#1EBE5D" />
        <stop offset="88%" stopColor="#0F9946" />
        <stop offset="100%" stopColor="#085A28" />
      </radialGradient>

      {/* Top Left Specular Highlight */}
      <radialGradient
        id="waGlossHighlight"
        cx="34%"
        cy="26%"
        r="38%"
        fx="30%"
        fy="20%"
      >
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
        <stop offset="40%" stopColor="#FFFFFF" stopOpacity="0.35" />
        <stop offset="80%" stopColor="#FFFFFF" stopOpacity="0.05" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>

      {/* Soft Bottom Shadow inside sphere */}
      <linearGradient id="waInnerShade" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.25" />
        <stop offset="60%" stopColor="#000000" stopOpacity="0" />
        <stop offset="100%" stopColor="#053316" stopOpacity="0.45" />
      </linearGradient>

      {/* Drop Shadow filter */}
      <filter id="waSphereShadow" x="-10%" y="-10%" width="125%" height="135%">
        <feDropShadow dx="0" dy="3" stdDeviation="3.5" floodColor="#064E24" floodOpacity="0.35" />
      </filter>
    </defs>

    {/* 3D Sphere Body */}
    <circle
      cx="50"
      cy="50"
      r="46"
      fill="url(#waSphereGrad)"
      filter="url(#waSphereShadow)"
    />

    {/* Inner shadow/depth overlay */}
    <circle cx="50" cy="50" r="46" fill="url(#waInnerShade)" />

    {/* Top Gloss Reflection */}
    <ellipse
      cx="40"
      cy="28"
      rx="25"
      ry="14"
      fill="url(#waGlossHighlight)"
      transform="rotate(-20 40 28)"
    />

    {/* Speech Bubble Outline */}
    <path
      d="M50 22C34.54 22 22 34.54 22 50C22 55.45 23.57 60.54 26.28 64.84L23 76.5L34.98 73.35C39.11 75.64 43.86 77 50 77C65.46 77 78 64.46 78 50C78 34.54 65.46 22 50 22ZM50 71.5C44.69 71.5 40.66 70.18 36.98 67.92L36.19 67.43L28.84 69.36L30.8 62.24L30.27 61.39C27.87 57.57 26.5 53.94 26.5 50C26.5 37.02 37.02 26.5 50 26.5C62.98 26.5 73.5 37.02 73.5 50C73.5 62.98 62.98 71.5 50 71.5Z"
      fill="#FFFFFF"
    />

    {/* Phone Handset */}
    <path
      d="M62.5 57.1C61.8 56.7 58.4 55.1 57.8 54.8C57.2 54.6 56.7 54.5 56.3 55.1C55.8 55.8 54.6 57.3 54.2 57.8C53.8 58.3 53.4 58.4 52.8 58.0C52.1 57.7 49.9 57.0 47.3 54.6C45.3 52.8 43.9 50.6 43.5 49.9C43.1 49.2 43.5 48.9 43.8 48.5C44.1 48.2 44.5 47.7 44.8 47.3C45.1 46.9 45.3 46.5 45.5 46.1C45.7 45.7 45.6 45.3 45.4 44.9C45.3 44.6 44.0 41.3 43.4 40.0C42.9 38.6 42.4 38.8 42.0 38.8C41.6 38.8 41.2 38.8 40.7 38.8C40.3 38.8 39.5 39.0 38.9 39.7C38.3 40.3 36.6 42.0 36.6 45.4C36.6 48.8 39.0 52.1 39.4 52.6C39.7 53.1 44.3 60.1 51.2 63.1C52.8 63.8 54.1 64.3 55.1 64.6C56.7 65.1 58.2 65.0 59.4 64.9C60.7 64.7 63.5 63.2 64.0 61.6C64.6 60.0 64.6 58.6 64.4 58.2C64.2 57.8 63.2 57.5 62.5 57.1Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const FloatingActions: React.FC = () => {
  return (
    <>
      {/* Desktop Floating WhatsApp Button (Bottom Right) */}
      <aside aria-label="Ações de contato rápido" className="hidden sm:block fixed bottom-6 right-6 z-50">
        <a
          href={BUSINESS_DATA.contact.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="relative group flex items-center gap-3 p-2 pr-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-500/40 animate-float-subtle"
          aria-label="Iniciar conversa com a oficina no WhatsApp"
        >
          {/* Animated radar pulse wave rings */}
          <span className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse-ring pointer-events-none" />
          <span
            className="absolute inset-0 rounded-full bg-emerald-400 opacity-25 animate-ping pointer-events-none"
            style={{ animationDuration: '3s' }}
          />

          {/* Active online status badge */}
          <span className="absolute top-0 right-0 flex h-3.5 w-3.5 z-20">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-200 border-2 border-emerald-700" />
          </span>

          {/* Swapped SVG icon: Authentic 3D WhatsApp sphere from user upload */}
          <WhatsAppIcon3D className="relative z-10 w-11 h-11 shrink-0 drop-shadow-md transform group-hover:rotate-12 transition-transform duration-300" />

          <div className="relative z-10 flex flex-col text-left">
            <span className="text-xs font-black uppercase tracking-wider text-white leading-none">
              Fale no WhatsApp
            </span>
            <span className="text-[10px] text-emerald-100 font-semibold leading-tight mt-0.5">
              Online · Resposta rápida
            </span>
          </div>
        </a>
      </aside>

      {/* Mobile Sticky Bottom Bar (Conversion First for Smartphone Users) */}
      <nav aria-label="Ações Rápidas Mobile" className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-t border-zinc-200 px-3 py-2 shadow-lg">
        <div className="grid grid-cols-3 gap-2">
          {/* 1. Direct Call */}
          <a
            href={BUSINESS_DATA.contact.telHref}
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 active:bg-zinc-200 transition-colors"
          >
            <Phone className="w-4 h-4 text-red-600 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Ligar</span>
          </a>

          {/* 2. Direct WhatsApp CTA with the 3D Sphere */}
          <a
            href={BUSINESS_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl bg-emerald-600 text-white active:bg-emerald-700 shadow-md transition-colors"
          >
            <WhatsAppIcon3D className="w-5 h-5 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">WhatsApp</span>
          </a>

          {/* 3. Direct Route / Directions */}
          <a
            href={BUSINESS_DATA.contact.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-100 border border-zinc-200 text-zinc-900 active:bg-zinc-200 transition-colors"
          >
            <Navigation className="w-4 h-4 text-red-600 mb-0.5" />
            <span className="text-[10px] font-bold uppercase tracking-wider">Como Chegar</span>
          </a>
        </div>
      </nav>
    </>
  );
};
