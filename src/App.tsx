import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col antialiased selection:bg-red-600 selection:text-white pb-14 sm:pb-0">
      {/* Semantic Top Navigation */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Seção 1 — Hero */}
        <Hero />

        {/* Seção 2 — Sobre a Oficina */}
        <AboutSection />

        {/* Seção 3 — Serviços Automotivos */}
        <ServicesSection />

        {/* Seção 4 — Por Que Escolher a Paulinho Car Service */}
        <WhyChooseSection />

        {/* Seção 5 — Avaliações do Google */}
        <ReviewsSection />

        {/* Seção 6 — Localização & Mapa */}
        <LocationSection />

        {/* Seção 7 — Contato Direto */}
        <ContactSection />

        {/* Seção 8 — Perguntas Frequentes (FAQ SEO) */}
        <FAQSection />
      </main>

      {/* Semantic Footer with NAP citation */}
      <Footer />

      {/* Mobile-First Sticky Actions & Desktop Floating WhatsApp */}
      <FloatingActions />
    </div>
  );
}
