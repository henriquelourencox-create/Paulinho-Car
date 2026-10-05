import React, { useState } from 'react';
import { Phone, MessageCircle, MapPin, Clock, Menu, X } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Avaliações', href: '#avaliacoes' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-zinc-200 transition-colors shadow-xs">
      {/* Top micro bar - Local & Hours citation */}
      <div className="hidden sm:block bg-zinc-900 py-1.5 px-4 text-xs text-zinc-300">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-zinc-200">
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>Parque Santo Antônio, Zona Sul de São Paulo</span>
            </span>
            <span className="text-zinc-600">|</span>
            <span className="inline-flex items-center gap-2 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span>{BUSINESS_DATA.operatingHours}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-zinc-300">
              Google: <strong className="text-amber-400 font-semibold">★ 4,9</strong> (29 avaliações)
            </span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between">
        {/* Brand identity matching the logo */}
        <a href="#" className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded p-1">
          <Logo variant="inline" size="md" theme="light" />
        </a>

        {/* Desktop links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-zinc-700" aria-label="Navegação Principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-red-600 transition-colors relative py-1 focus:outline-none focus-visible:text-red-600"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Quick action triggers */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={BUSINESS_DATA.contact.telHref}
            className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-zinc-800 bg-zinc-100 hover:bg-zinc-200 border border-zinc-200 rounded-lg transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            title="Ligar para a oficina"
          >
            <Phone className="w-3.5 h-3.5 text-zinc-600" />
            <span>(11) 99109-7907</span>
          </a>

          <a
            href={BUSINESS_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-lg shadow-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-red-400"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-zinc-200 px-4 pt-2 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-lg">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-zinc-100 text-xs text-zinc-600">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
              <span>Parque Santo Antônio</span>
            </span>
            <span className="flex items-center gap-1.5 text-emerald-600 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
              </span>
              <span>Aberto · Fecha às 18:00</span>
            </span>
          </div>

          <nav className="flex flex-col space-y-1" aria-label="Navegação Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 hover:text-red-600 rounded-md transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="pt-2 grid grid-cols-2 gap-2">
            <a
              href={BUSINESS_DATA.contact.telHref}
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-zinc-800 bg-zinc-100 border border-zinc-200 rounded-lg"
            >
              <Phone className="w-3.5 h-3.5 text-red-600" />
              <span>Ligar agora</span>
            </a>
            <a
              href={BUSINESS_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-3 text-xs font-bold text-white bg-red-600 rounded-lg"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
