import React from 'react';
import { MessageCircle, Navigation, Star, MapPin, CheckCircle2, Shield, PhoneCall } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { Logo } from './Logo';
import heroImage from '../assets/images/automotive_workshop_hero_1791204652250.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden border-b border-zinc-200 bg-white">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src={heroImage}
          alt="Oficina mecânica na Zona Sul de São Paulo com infraestrutura profissional e equipamentos para manutenção automotiva"
          className="w-full h-full object-cover object-center opacity-10 filter grayscale contrast-125"
          loading="eager"
          fetchPriority="high"
          width="1920"
          height="1080"
        />
        <div className="absolute inset-0 bg-tech-grid-light opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/90 to-white" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 py-14 sm:py-20 text-center">
        
        {/* Prominent Real Logo Plate matching user's sign */}
        <div className="mb-6 transform hover:scale-[1.01] transition-transform duration-200">
          <Logo variant="full-plate" size="lg" />
        </div>

        {/* Trust badge with Google Rating & Local Citation */}
        <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm text-zinc-700 bg-white border border-zinc-200 px-4 py-2 rounded-xl mb-6 shadow-xs">
          <div className="flex items-center gap-1 text-amber-500">
            <span className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            <span className="font-bold text-zinc-900 ml-1">4,9</span>
            <span className="text-zinc-600">no Google</span>
          </div>
          <span className="text-zinc-300 hidden sm:inline" aria-hidden="true">·</span>
          <span className="text-zinc-700">
            <strong className="text-zinc-950 font-semibold">29 avaliações</strong> reais
          </span>
          <span className="text-zinc-300 hidden sm:inline" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1 text-zinc-700">
            <MapPin className="w-3.5 h-3.5 text-red-600" />
            <span>Parque Santo Antônio · SP</span>
          </span>
        </div>

        {/* Main H1 for Local SEO */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-zinc-950 max-w-4xl mx-auto leading-tight sm:leading-none mb-6 font-heading">
          Oficina Mecânica na <span className="text-red-600">Zona Sul</span> de São Paulo
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          Manutenção e serviços automotivos com atendimento profissional, confiança e preço justo.
        </p>

        {/* Primary Action Buttons (Conversion-first) */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto mb-12">
          <a
            href={BUSINESS_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-md shadow-red-600/20 transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <MessageCircle className="w-5 h-5 text-white" />
            <span>Falar no WhatsApp</span>
          </a>

          <a
            href={BUSINESS_DATA.contact.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm sm:text-base font-bold text-zinc-900 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 rounded-xl transition-all transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <Navigation className="w-5 h-5 text-red-600" />
            <span>Como chegar</span>
          </a>

          <a
            href={BUSINESS_DATA.contact.telHref}
            className="sm:hidden w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-zinc-800 bg-white border border-zinc-300 rounded-xl"
          >
            <PhoneCall className="w-4 h-4 text-red-600" />
            <span>Ligar: (11) 99109-7907</span>
          </a>
        </div>

        {/* Trust pillars / Core Values with logo color scheme */}
        <div className="pt-8 border-t border-zinc-200 grid grid-cols-2 md:grid-cols-4 gap-4 text-left">
          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
            <Shield className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold text-zinc-950 uppercase tracking-wider">Confiança & Ética</span>
              <span className="text-[11px] text-zinc-600">Mecânico honesto com conduta transparente</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold text-zinc-950 uppercase tracking-wider">Preço Justo</span>
              <span className="text-[11px] text-zinc-600">Cobrança transparente e coerente</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
            <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold text-zinc-950 uppercase tracking-wider">Conhecimento</span>
              <span className="text-[11px] text-zinc-600">Experiência e diagnóstico apurado</span>
            </div>
          </div>

          <div className="flex items-start gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
            <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <span className="block text-xs font-bold text-zinc-950 uppercase tracking-wider">Zona Sul SP</span>
              <span className="text-[11px] text-zinc-600">No Parque Santo Antônio</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
