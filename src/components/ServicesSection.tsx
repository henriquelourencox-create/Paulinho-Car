import React from 'react';
import { 
  ShieldCheck, 
  Activity, 
  Wrench, 
  Settings, 
  AlertCircle, 
  MessageCircle, 
  ArrowRight
} from 'lucide-react';
import { SERVICE_CATEGORIES, BUSINESS_DATA } from '../data/businessData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-red-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-red-600" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-red-600" />;
      case 'Settings':
        return <Settings className="w-5 h-5 text-red-600" />;
      case 'Cog':
        return <Settings className="w-5 h-5 text-red-600" />;
      default:
        return <Wrench className="w-5 h-5 text-red-600" />;
    }
  };

  const getWhatsAppLinkForService = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Olá! Encontrei a Paulinho Car Service no site e gostaria de consultar a disponibilidade do serviço de "${serviceTitle}" para meu veículo.`
    );
    return `https://wa.me/5511991097907?text=${text}`;
  };

  return (
    <section id="servicos" className="py-20 sm:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 font-mono mb-3">
            <span>Serviços Automotivos</span>
            <span className="text-zinc-400">·</span>
            <span>Zona Sul de São Paulo</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4 font-heading">
            Atendimento Mecânico e Serviços Automotivos
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Estrutura preparada para acolher as necessidades do seu carro com critério técnico, transparência no diagnóstico e compromisso de entrega.
          </p>

          {/* Mandatory discrete disclaimer note from prompt */}
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 font-medium">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Consulte a oficina para confirmar a disponibilidade do serviço para o seu veículo.</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200 hover:border-red-400 hover:bg-white hover:shadow-lg transition-all group"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white border border-zinc-200 flex items-center justify-center mb-4 group-hover:scale-105 group-hover:border-red-200 shadow-xs transition-transform">
                  {getIcon(service.iconName)}
                </div>

                <h3 className="text-lg font-bold text-zinc-950 mb-2 font-heading group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 mb-3 leading-relaxed">
                  {service.shortDesc}
                </p>

                <p className="text-xs text-zinc-500 border-t border-zinc-200 pt-3">
                  {service.technicalScope}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-200 flex items-center justify-between">
                <a
                  href={getWhatsAppLinkForService(service.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-red-600 hover:text-red-700 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Consultar disponibilidade</span>
                  <ArrowRight className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Consultation Banner - High-contrast charcoal block with red accents */}
        <div className="mt-14 p-8 rounded-2xl bg-zinc-900 border border-zinc-800 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-lg font-bold text-white font-heading">
              Precisa de uma avaliação para o seu carro na Zona Sul?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300">
              Descreva o sintoma ou necessidade do seu automóvel diretamente no WhatsApp da oficina.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href={BUSINESS_DATA.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl transition-colors shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar atendimento</span>
            </a>
            <a
              href={BUSINESS_DATA.contact.telHref}
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-zinc-200 bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 rounded-xl transition-colors"
            >
              <span>(11) 99109-7907</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
