import React from 'react';
import { Phone, MapPin, Clock, Star, ExternalLink } from 'lucide-react';
import { BUSINESS_DATA } from '../data/businessData';
import { Logo } from './Logo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs">
      {/* Upper Footer: NAP Citation & Links */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Brand & Mission with official logo */}
          <div className="space-y-4">
            <div className="p-1 inline-block">
              <Logo variant="inline" size="md" theme="dark" />
            </div>
            
            <p className="text-zinc-400 leading-relaxed text-xs">
              Oficina mecânica na Zona Sul de São Paulo, localizada no Parque Santo Antônio. Manutenção automotiva com profissionalismo, transparência e preço justo.
            </p>

            <div className="inline-flex items-center gap-2 p-2 rounded-lg bg-zinc-900 border border-zinc-800">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-xs text-zinc-200 font-semibold">4,9 / 5,0 no Google</span>
            </div>
          </div>

          {/* Local SEO NAP Citation */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              Localização & Endereço
            </h4>
            <address className="not-italic space-y-1 text-zinc-300 leading-relaxed">
              <p className="font-bold text-white">Paulinho Car Service</p>
              <p>{BUSINESS_DATA.address.street}</p>
              <p>{BUSINESS_DATA.address.neighborhood}</p>
              <p>{BUSINESS_DATA.address.city} - {BUSINESS_DATA.address.state}</p>
              <p className="text-zinc-400">CEP: {BUSINESS_DATA.address.cep}</p>
              <p className="text-[11px] font-mono text-zinc-500 pt-1">
                Plus Code: {BUSINESS_DATA.address.plusCode}
              </p>
            </address>
          </div>

          {/* Hours & Contact */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              Atendimento & Contato
            </h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-zinc-300">
                <Phone className="w-3.5 h-3.5 text-red-500 shrink-0" />
                <a href={BUSINESS_DATA.contact.telHref} className="hover:text-white transition-colors">
                  {BUSINESS_DATA.contact.phoneFormatted}
                </a>
              </div>
              <div className="flex items-center gap-2 text-zinc-300">
                <Clock className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{BUSINESS_DATA.operatingHours}</span>
              </div>
              <div className="pt-2">
                <a
                  href={BUSINESS_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-red-500 hover:text-red-400 font-bold"
                >
                  <span>Chamar no WhatsApp</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Local Area Keywords Coverage */}
          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              Cobertura Regional
            </h4>
            <ul className="space-y-1.5 text-zinc-400">
              <li>Oficina Mecânica Parque Santo Antônio</li>
              <li>Mecânico na Zona Sul de São Paulo</li>
              <li>Manutenção Automotiva Zona Sul</li>
              <li>Revisão Veicular São Paulo SP</li>
              <li>Mecânico de Confiança Parque Santo Antônio</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-900 bg-black py-6 px-4 text-center text-[11px] text-zinc-400">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>
            © {new Date().getFullYear()} Paulinho Car Service (PaulinhoCar Auto Service). Todos os direitos reservados.
          </p>
          <p className="text-zinc-400">
            Rua Mercedes Nasser Sabbag, 302 · Parque Santo Antônio · São Paulo - SP
          </p>
        </div>
      </div>
    </footer>
  );
};
