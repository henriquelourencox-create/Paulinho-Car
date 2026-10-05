import React, { useState } from 'react';
import { Phone, MessageCircle, Clock, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { BUSINESS_DATA, SERVICE_CATEGORIES } from '../data/businessData';

export const ContactSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState('Manutenção Preventiva');
  const [vehicleModel, setVehicleModel] = useState('');
  const [customNotes, setCustomNotes] = useState('');

  const generateWhatsAppMessage = () => {
    let msg = `Olá! Gostaria de um orçamento/atendimento na Paulinho Car Service.\n`;
    if (selectedService) {
      msg += `• Serviço de interesse: ${selectedService}\n`;
    }
    if (vehicleModel.trim()) {
      msg += `• Veículo / Modelo: ${vehicleModel.trim()}\n`;
    }
    if (customNotes.trim()) {
      msg += `• Observações: ${customNotes.trim()}\n`;
    }
    return `https://wa.me/5511991097907?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contato" className="py-20 sm:py-28 bg-white border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 font-mono mb-3">
            <span>Atendimento Rápido</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4 font-heading">
            Fale com a <span className="text-red-600">Paulinho Car Service</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Tire suas dúvidas, solicite avaliação e combine a manutenção do seu veículo diretamente com o mecânico.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Quick Direct Buttons Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-7 rounded-2xl bg-zinc-50 border border-zinc-200 space-y-6 shadow-sm">
              <div>
                <span className="text-xs uppercase font-mono text-zinc-500 font-bold block mb-1">Contato Direto</span>
                <p className="text-2xl sm:text-3xl font-black text-zinc-950 font-heading">{BUSINESS_DATA.contact.phoneFormatted}</p>
                <span className="text-xs text-zinc-600">Atendimento telefônico e mensagens no WhatsApp</span>
              </div>

              {/* Status indicator */}
              <div className="p-3.5 rounded-xl bg-white border border-zinc-200 flex items-center justify-between text-xs shadow-xs">
                <span className="flex items-center gap-2 text-zinc-700 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>Status da Oficina:</span>
                </span>
                <span className="font-bold text-emerald-700">{BUSINESS_DATA.operatingHours}</span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <a
                  href={BUSINESS_DATA.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 text-base font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-md shadow-red-600/20 transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chamar no WhatsApp</span>
                </a>

                <a
                  href={BUSINESS_DATA.contact.telHref}
                  className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-zinc-900 bg-zinc-200 hover:bg-zinc-300 border border-zinc-300 rounded-xl transition-all"
                >
                  <Phone className="w-4 h-4 text-red-600" />
                  <span>Ligar agora: (11) 99109-7907</span>
                </a>
              </div>

              {/* Reassurance points */}
              <div className="space-y-2 pt-2 border-t border-zinc-200 text-xs text-zinc-600">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Resposta rápida sem burocracia</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Atendimento transparente e focado na solução</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-medium">Preço justo avaliado presencialmente</span>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Message Composer for Fast Conversion */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-zinc-50 border border-zinc-200 shadow-sm">
              <div className="mb-6">
                <h3 className="text-lg font-bold text-zinc-950 font-heading mb-1">
                  Preparar Mensagem para o WhatsApp
                </h3>
                <p className="text-xs text-zinc-600">
                  Preencha os campos abaixo para adiantar as informações do seu veículo ao iniciar a conversa:
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="service-select" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Serviço Desejado
                  </label>
                  <select
                    id="service-select"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 font-medium"
                  >
                    {SERVICE_CATEGORIES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Outro serviço / Avaliação geral">Outro serviço / Avaliação geral</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="vehicle-model" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    Modelo e Ano do Carro (Opcional)
                  </label>
                  <input
                    id="vehicle-model"
                    type="text"
                    placeholder="Ex: Fiat Uno 2018, Gol 1.6, Onix, etc."
                    value={vehicleModel}
                    onChange={(e) => setVehicleModel(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div>
                  <label htmlFor="custom-notes" className="block text-xs font-bold text-zinc-700 uppercase tracking-wider mb-2">
                    O que está acontecendo com o carro? (Opcional)
                  </label>
                  <textarea
                    id="custom-notes"
                    rows={3}
                    placeholder="Ex: Barulho na suspensão, luz acesa no painel, pedal estranho, revisão de rotina..."
                    value={customNotes}
                    onChange={(e) => setCustomNotes(e.target.value)}
                    className="w-full px-4 py-3 bg-white border border-zinc-300 rounded-xl text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                </div>

                <div className="pt-2">
                  <a
                    href={generateWhatsAppMessage()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-red-600 hover:bg-red-700 active:bg-red-800 rounded-xl shadow-md transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem pelo WhatsApp</span>
                  </a>
                  <p className="text-[11px] text-zinc-500 text-center mt-2 font-medium">
                    Abre diretamente no aplicativo do WhatsApp com a sua mensagem pronta.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
