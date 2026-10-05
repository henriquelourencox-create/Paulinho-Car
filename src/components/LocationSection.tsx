import React, { useState } from 'react';
import { MapPin, Navigation, Copy, Check, Clock, Phone, ExternalLink, Compass } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(BUSINESS_DATA.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 font-mono mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Localização Estratégica</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4 font-heading">
            Oficina Mecânica no <span className="text-red-600">Parque Santo Antônio</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Localizada no Parque Santo Antônio, facilitando o acesso para condutores de toda a Zona Sul de São Paulo.
          </p>
        </div>

        {/* Location Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Address Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <h3 className="text-lg font-bold text-zinc-950 mb-4 flex items-center gap-2 font-heading">
                <MapPin className="w-5 h-5 text-red-600" />
                <span>Endereço Completo</span>
              </h3>

              {/* Semantic HTML Address for Search Engines */}
              <address className="not-italic text-sm text-zinc-700 space-y-1 mb-6 border-l-3 border-red-600 pl-4">
                <p className="font-bold text-zinc-950 text-base">Paulinho Car Service</p>
                <p>{BUSINESS_DATA.address.street}</p>
                <p>{BUSINESS_DATA.address.neighborhood}</p>
                <p>{BUSINESS_DATA.address.city} - {BUSINESS_DATA.address.state}</p>
                <p className="text-zinc-500 font-medium">CEP: {BUSINESS_DATA.address.cep}</p>
              </address>

              {/* Plus Code */}
              <div className="mb-6 p-3.5 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5 text-zinc-700">
                  <Compass className="w-4 h-4 text-zinc-500" />
                  <div>
                    <span className="text-[10px] uppercase text-zinc-500 block font-mono font-bold">Código Plus no Google</span>
                    <span className="font-mono font-bold text-zinc-900">{BUSINESS_DATA.address.plusCode}</span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="space-y-3">
                <a
                  href={BUSINESS_DATA.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-md transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar rota no Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-zinc-800 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 rounded-xl transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-600" />
                      <span className="text-emerald-700 font-bold">Endereço copiado!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-zinc-500" />
                      <span>Copiar endereço completo</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Operating Hours & Contact Quick Info */}
            <div className="p-6 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-mono text-zinc-500 font-bold">Horário de Funcionamento</h4>
                  <p className="text-sm font-bold text-zinc-900">{BUSINESS_DATA.operatingHours}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-zinc-100 flex items-start gap-3">
                <Phone className="w-5 h-5 text-red-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs uppercase font-mono text-zinc-500 font-bold">Telefone / WhatsApp</h4>
                  <a
                    href={BUSINESS_DATA.contact.telHref}
                    className="text-sm font-bold text-zinc-900 hover:text-red-600 transition-colors"
                  >
                    {BUSINESS_DATA.contact.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map Visual */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-zinc-300 bg-white shadow-lg">
              {/* Map header bar */}
              <div className="px-4 py-3 bg-white border-b border-zinc-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-zinc-800 font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span>Google Maps: PaulinhoCar Auto Service</span>
                </div>
                <a
                  href={BUSINESS_DATA.contact.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-red-600 hover:text-red-700 inline-flex items-center gap-1 font-bold"
                >
                  <span>Abrir tela cheia</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Map View Frame */}
              <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full bg-zinc-100">
                <iframe
                  title="Mapa de localização da Paulinho Car Service no Parque Santo Antônio São Paulo"
                  src="https://maps.google.com/maps?q=Rua+Mercedes+Nasser+Sabbag+302+Parque+Santo+Antonio+Sao+Paulo+SP&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />

                {/* Floating Map Pin info box */}
                <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 bg-white/95 backdrop-blur-md rounded-xl border border-zinc-200 shadow-xl pointer-events-auto">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-2 h-2 rounded-full bg-red-600" />
                    <span className="font-heading font-bold text-zinc-950 text-xs">Paulinho Car Service</span>
                  </div>
                  <p className="text-[11px] text-zinc-600 mb-2">
                    Rua Mercedes Nasser Sabbag, 302 · Parque Santo Antônio
                  </p>
                  <a
                    href={BUSINESS_DATA.contact.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold text-red-600 hover:text-red-700"
                  >
                    <Navigation className="w-3 h-3" />
                    <span>Iniciar navegação GPS</span>
                  </a>
                </div>
              </div>

              {/* Map Footer helper info */}
              <div className="p-4 bg-zinc-50 text-xs text-zinc-600 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-2">
                <span>Ponto de referência: Parque Santo Antônio, Zona Sul de São Paulo</span>
                <span className="text-zinc-500 font-medium">CEP 05851-300</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
