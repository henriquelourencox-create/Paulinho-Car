import React from 'react';
import { Star, MessageSquare, UserCheck, BadgePercent, Shield, MapPin } from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/businessData';

export const WhyChooseSection: React.FC = () => {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case 'Star':
        return <Star className="w-6 h-6 text-amber-500 fill-amber-400" />;
      case 'MessageSquare':
        return <MessageSquare className="w-6 h-6 text-red-600" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-red-600" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-red-600" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-red-600" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-red-600" />;
      default:
        return <Shield className="w-6 h-6 text-red-600" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-red-600 font-mono mb-3">
            <span>Diferenciais Comprovados</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight mb-4 font-heading">
            Por Que Escolher a <span className="text-red-600">Paulinho Car Service</span>
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 max-w-xl mx-auto leading-relaxed">
            Razões concretas e atestadas pelos próprios motoristas para confiar a manutenção do seu veículo à nossa oficina.
          </p>
        </div>

        {/* 6 Minimalist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-zinc-200 hover:border-red-400 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-zinc-50 border border-zinc-200 flex items-center justify-center">
                    {renderIcon(item.icon)}
                  </div>
                  <div className="text-right">
                    <span className="font-heading text-2xl font-black text-zinc-950 tracking-tight">
                      {item.metric}
                    </span>
                    <span className="block text-[11px] text-zinc-500 font-bold uppercase tracking-wider">
                      {item.unit}
                    </span>
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-zinc-950 mb-2 font-heading">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-zinc-100 flex items-center gap-2 text-[11px] text-zinc-500 font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
                <span>Dados verificados do Google</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
