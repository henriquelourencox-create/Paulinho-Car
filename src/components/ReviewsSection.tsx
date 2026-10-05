import React from 'react';
import { Star, ExternalLink, Quote, CheckCircle2 } from 'lucide-react';
import { REVIEWS_DATA, BUSINESS_DATA } from '../data/businessData';

export const ReviewsSection: React.FC = () => {
  const recurringConcepts = [
    'Confiança Comprovada',
    'Honestidade',
    'Profissionalismo',
    'Preço Justo',
    'Conhecimento Técnico Top',
    'Super Recomendado',
  ];

  return (
    <section id="avaliacoes" className="py-20 sm:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 font-mono mb-3">
            <span>Prova Social Real</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4 font-heading">
            O Que Nossos Clientes Dizem
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Depoimentos reais publicados espontaneamente no perfil do Google por motoristas atendidos na oficina.
          </p>

          {/* Rating Summary Block */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-6 px-6 py-3.5 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-xs">
            <div className="flex items-center gap-2.5">
              <span className="font-heading text-3xl font-extrabold text-zinc-950">4,9</span>
              <div className="flex flex-col text-left">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-[11px] text-zinc-500 font-medium">Classificação no Google</span>
              </div>
            </div>

            <div className="w-px h-8 bg-zinc-200 hidden sm:block" />

            <div className="text-left">
              <span className="block font-heading text-xl font-bold text-zinc-950">29 avaliações</span>
              <span className="text-[11px] text-zinc-500 font-medium">100% opiniões verificadas</span>
            </div>
          </div>
        </div>

        {/* Recurring Concepts Badges */}
        <div className="mb-12">
          <p className="text-xs uppercase tracking-wider text-center text-zinc-500 font-bold mb-4">
            Conceitos mais citados pelos clientes:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-3xl mx-auto">
            {recurringConcepts.map((concept, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-red-600" />
                <span>{concept}</span>
              </span>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_DATA.map((rev) => (
            <div
              key={rev.id}
              className="p-6 rounded-2xl bg-zinc-50/80 border border-zinc-200 flex flex-col justify-between hover:border-red-300 hover:bg-white hover:shadow-md transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-red-500/30" />
                </div>

                <blockquote className="text-zinc-800 text-sm leading-relaxed mb-4 whitespace-pre-line italic">
                  "{rev.text}"
                </blockquote>
              </div>

              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs">
                <span className="font-bold text-zinc-900">{rev.authorLabel}</span>
                <span className="text-zinc-500">{rev.source}</span>
              </div>
            </div>
          ))}

          {/* Call to action review box */}
          <div className="p-6 rounded-2xl bg-zinc-900 text-white border border-zinc-800 flex flex-col justify-between text-center items-center shadow-lg">
            <div className="my-auto py-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center mb-3">
                <Star className="w-6 h-6 text-red-500 fill-red-500" />
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-2">
                Conheça a Reputação no Google
              </h3>
              <p className="text-xs text-zinc-300 max-w-xs mx-auto leading-relaxed">
                Transparência total. Acesse o perfil oficial da oficina no Google e confira todos os comentários dos clientes.
              </p>
            </div>

            <a
              href={BUSINESS_DATA.contact.googleMapsReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all shadow-md"
            >
              <span>Ver avaliações no Google</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom CTA for Reviews */}
        <div className="mt-12 text-center">
          <a
            href={BUSINESS_DATA.contact.googleMapsReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 text-xs sm:text-sm font-bold text-zinc-800 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 border border-zinc-300 rounded-xl transition-colors"
          >
            <span>Ver perfil completo e avaliações no Google Maps</span>
            <ExternalLink className="w-4 h-4 text-red-600" />
          </a>
        </div>

      </div>
    </section>
  );
};
