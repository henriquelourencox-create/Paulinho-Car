import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { FAQ_DATA, BUSINESS_DATA } from '../data/businessData';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 font-mono mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Perguntas Frequentes</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4 font-heading">
            Dúvidas Comuns sobre a Oficina na <span className="text-red-600">Zona Sul</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Respostas diretas e esclarecedoras para ajudar você a encontrar o melhor atendimento automotivo no Parque Santo Antônio.
          </p>
        </div>

        {/* FAQ Accordion list */}
        <div className="space-y-3.5">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-zinc-200 bg-white overflow-hidden transition-all shadow-xs hover:border-zinc-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-5 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-zinc-50"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-heading text-sm sm:text-base font-bold text-zinc-900 pr-2">
                    {item.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-red-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick assistance CTA under FAQ */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-white border border-zinc-200 shadow-sm">
          <p className="text-sm font-semibold text-zinc-800 mb-4">
            Ainda tem alguma dúvida específica sobre o seu automóvel?
          </p>
          <a
            href={BUSINESS_DATA.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl transition-colors shadow-md"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar agora no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
