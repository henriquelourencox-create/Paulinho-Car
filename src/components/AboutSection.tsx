import React from 'react';
import { ShieldCheck, HeartHandshake, Wrench, MapPin, Check } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import toolsImage from '../assets/images/automotive_tools_diagnostic_1791204666245.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Textual column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 font-mono">
              <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
              <span>Transparência & Dedicação</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight font-heading">
              Oficina Mecânica de Confiança na <span className="text-red-600">Zona Sul</span>
            </h2>

            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <p>
                A <strong className="text-zinc-950 font-semibold">Paulinho Car Service</strong> atende motoristas que procuram um serviço mecânico profissional, transparente e de confiança no <strong className="text-zinc-950 font-medium">Parque Santo Antônio</strong> e em toda a região da <strong className="text-zinc-950 font-medium">Zona Sul de São Paulo</strong>.
              </p>
              
              <p>
                Encontrar um <em>mecânico de confiança</em> é essencial para quem depende do carro no dia a dia. Por isso, nossa atuação é pautada na <strong className="text-zinc-950 font-medium">honestidade</strong>, na clareza sobre o que o veículo realmente necessita e no compromisso com um <strong className="text-zinc-950 font-medium">preço justo</strong>, sem diagnósticos enganosos ou trocas desnecessárias de peças.
              </p>

              <p>
                Com atendimento próximo e elevado <em>conhecimento técnico</em>, a Paulinho Car Service recebe clientes que buscam tanto cuidados preventivos quanto o diagnóstico preciso de falhas mecânicas. Se você procura uma <em>oficina mecânica perto de você</em> na Zona Sul com avaliação comprovada por clientes reais, estamos à disposição para atender seu veículo com a máxima seriedade.
              </p>
            </div>

            {/* Value bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">Honestidade e clareza no atendimento</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <Wrench className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">Conhecimento técnico automotivo</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <HeartHandshake className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">Preço justo e sem surpresas</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-zinc-200 shadow-xs">
                <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                <span className="text-xs sm:text-sm font-semibold text-zinc-800">Localização fácil no Parque Santo Antônio</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={BUSINESS_DATA.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-md transition-colors"
              >
                <span>Conversar com a oficina no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border-2 border-zinc-200 bg-white p-2 shadow-lg">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3]">
                <img
                  src={toolsImage}
                  alt="Equipamentos e ferramentas para diagnóstico automotivo e manutenção mecânica na Zona Sul de São Paulo"
                  className="w-full h-full object-cover filter contrast-105"
                  loading="lazy"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent" />
                
                {/* Overlay card */}
                <div className="absolute bottom-3 left-3 right-3 p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-zinc-200 text-xs shadow-md">
                  <div className="flex items-center justify-between text-zinc-600 mb-1">
                    <span className="font-bold text-zinc-950">Compromisso com o Cliente</span>
                    <span className="text-red-600 font-mono font-bold">São Paulo - SP</span>
                  </div>
                  <p className="text-zinc-600 text-[11px] leading-relaxed">
                    Atendimento próximo e dedicado para motoristas do Parque Santo Antônio e região sul da capital.
                  </p>
                </div>
              </div>

              {/* Informative footer */}
              <div className="mt-3 px-3 py-2 flex items-center justify-between text-xs text-zinc-600">
                <span className="flex items-center gap-1.5 text-zinc-800 font-medium">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Avaliações Reais no Google</span>
                </span>
                <span className="font-mono font-bold text-zinc-900">Nota 4,9 / 5,0</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
