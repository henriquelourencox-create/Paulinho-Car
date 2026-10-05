export interface Review {
  id: string;
  authorLabel: string;
  rating: number;
  text: string;
  source: string;
  keyHighlight: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  shortDesc: string;
  technicalScope: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const BUSINESS_DATA = {
  tradeName: 'Paulinho Car Service',
  googleName: 'PaulinhoCar Auto Service',
  category: 'Oficina mecânica',
  rating: 4.9,
  reviewCount: 29,
  address: {
    street: 'Rua Mercedes Nasser Sabbag, 302',
    neighborhood: 'Parque Santo Antônio',
    city: 'São Paulo',
    state: 'SP',
    cep: '05851-300',
    full: 'Rua Mercedes Nasser Sabbag, 302 - Parque Santo Antônio, São Paulo - SP, CEP 05851-300',
    plusCode: '86PW+CF Parque Santo Antônio, São Paulo - SP',
  },
  contact: {
    phoneFormatted: '(11) 99109-7907',
    phoneRaw: '+5511991097907',
    telHref: 'tel:+5511991097907',
    whatsappUrl: 'https://wa.me/5511991097907',
    googleMapsDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Rua+Mercedes+Nasser+Sabbag+302+Parque+Santo+Antonio+Sao+Paulo+SP',
    googleMapsReviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=PaulinhoCar+Auto+Service+Rua+Mercedes+Nasser+Sabbag+302',
  },
  operatingHours: 'Aberto · Fecha às 18:00',
  coreValues: [
    'Confiança',
    'Honestidade',
    'Profissionalismo',
    'Conhecimento Técnico',
    'Preço Justo',
    'Atendimento Próximo',
  ],
};

export const REVIEWS_DATA: Review[] = [
  {
    id: 'rev-1',
    authorLabel: 'Cliente Google',
    rating: 5,
    text: 'Um dos melhores mecânico da zona sul supre profissional recomendo',
    source: 'Avaliação verificada no Google',
    keyHighlight: 'Um dos melhores mecânicos da Zona Sul',
  },
  {
    id: 'rev-2',
    authorLabel: 'Cliente Google',
    rating: 5,
    text: 'Atencioso e honesto cara super bacana e tem um conhecimento top !!',
    source: 'Avaliação verificada no Google',
    keyHighlight: 'Honesto, atencioso e conhecimento técnico top',
  },
  {
    id: 'rev-3',
    authorLabel: 'Cliente Google',
    rating: 5,
    text: 'Vale a pena conhecer o profissionalismo...',
    source: 'Avaliação verificada no Google',
    keyHighlight: 'Vale a pena conhecer o profissionalismo',
  },
  {
    id: 'rev-4',
    authorLabel: 'Cliente Google',
    rating: 5,
    text: 'Celinho Mecânico excelente, honesto de confiança e sabe trabalhar\nPreço justo\nCliente a muito tempo',
    source: 'Avaliação verificada no Google',
    keyHighlight: 'Excelente, de confiança, sabe trabalhar e preço justo',
  },
  {
    id: 'rev-5',
    authorLabel: 'Cliente Google',
    rating: 5,
    text: 'Profissionais gabaritados e de confiança... Vale a pena conhecer o profissionalismo... Super recomendado...',
    source: 'Avaliação verificada no Google',
    keyHighlight: 'Profissionais gabaritados e de confiança',
  },
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'manutencao-preventiva',
    title: 'Manutenção Preventiva',
    shortDesc: 'Acompanhamento antecipado para prevenir falhas e manter o veículo seguro.',
    technicalScope: 'Serviços programados com inspeção visual e verificação técnica recomendada.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'diagnostico-mecanico',
    title: 'Diagnóstico Mecânico',
    shortDesc: 'Identificação técnica e assertiva da origem de ruídos, falhas ou anomalias.',
    technicalScope: 'Análise minuciosa com critérios mecânicos profissionais antes de qualquer intervenção.',
    iconName: 'Activity',
  },
  {
    id: 'revisao-do-veiculo',
    title: 'Revisão do Veículo',
    shortDesc: 'Verificação periódica dos principais sistemas do carro para rodagem segura.',
    technicalScope: 'Checagem de itens essenciais de segurança, durabilidade e desempenho veicular.',
    iconName: 'Wrench',
  },
  {
    id: 'manutencao-automotiva',
    title: 'Manutenção Automotiva Geral',
    shortDesc: 'Cuidados essenciais e rotineiros para a integridade do seu automóvel.',
    technicalScope: 'Serviços gerais de conservação e manutenção mecânica conforme especificação.',
    iconName: 'Cog',
  },
  {
    id: 'reparos-automotivos',
    title: 'Reparos Automotivos',
    shortDesc: 'Correção de problemas mecânicos com transparência e peça adequada.',
    technicalScope: 'Intervenções técnicas pontuais com comunicação clara com o cliente.',
    iconName: 'Settings',
  },
  {
    id: 'manutencao-corretiva',
    title: 'Manutenção Corretiva',
    shortDesc: 'Solução para problemas já instalados, restabelecendo a operação do veículo.',
    technicalScope: 'Reparo com foco em segurança, preço justo e confiabilidade duradoura.',
    iconName: 'Tool',
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    metric: '4,9',
    unit: 'estrelas',
    title: '4,9 estrelas no Google',
    description: 'Classificação expressiva baseada na satisfação real dos motoristas atendidos na oficina.',
    icon: 'Star',
  },
  {
    metric: '29',
    unit: 'avaliações',
    title: '29 avaliações no Google',
    description: 'Reconhecimento público no perfil do Google de quem já utilizou os serviços automotivos.',
    icon: 'MessageSquare',
  },
  {
    metric: '100%',
    unit: 'compromisso',
    title: 'Atendimento Profissional',
    description: 'Atendimento próximo, direto e sem rodeios, explicando o que seu carro realmente precisa.',
    icon: 'UserCheck',
  },
  {
    metric: 'Preço',
    unit: 'justo',
    title: 'Preço Justo',
    description: 'Cobrança condizente com o trabalho executado, destacada repetidamente pelos próprios clientes.',
    icon: 'BadgePercent',
  },
  {
    metric: 'Honesto',
    unit: 'e ético',
    title: 'Mecânico de Confiança',
    description: 'Trabalho sério, transparente e focado em resolver com segurança para você e sua família.',
    icon: 'Shield',
  },
  {
    metric: 'Zona Sul',
    unit: 'SP',
    title: 'Localização na Zona Sul',
    description: 'Fácil acesso no Parque Santo Antônio, próximo às principais vias da região Sul de São Paulo.',
    icon: 'MapPin',
  },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Como encontrar uma oficina mecânica na Zona Sul de São Paulo?',
    answer:
      'Para encontrar uma oficina de confiança na Zona Sul de São Paulo, priorize estabelecimentos com avaliações públicas comprovadas e endereço transparente. A Paulinho Car Service possui nota 4,9 no Google e está situada na Rua Mercedes Nasser Sabbag, 302, no Parque Santo Antônio.',
  },
  {
    id: 'faq-2',
    question: 'Qual o endereço da Paulinho Car Service?',
    answer:
      'A Paulinho Car Service fica localizada na Rua Mercedes Nasser Sabbag, 302 - Parque Santo Antônio, São Paulo - SP, CEP 05851-300 (Código Plus: 86PW+CF Parque Santo Antônio, São Paulo - SP).',
  },
  {
    id: 'faq-3',
    question: 'A Paulinho Car Service fica no Parque Santo Antônio?',
    answer:
      'Sim. A oficina está sediada no Parque Santo Antônio, bairro tradicional da Zona Sul de São Paulo, na Rua Mercedes Nasser Sabbag, 302, facilitando o acesso para motoristas do bairro e de toda a Zona Sul.',
  },
  {
    id: 'faq-4',
    question: 'Como entrar em contato com a Paulinho Car Service?',
    answer:
      'Você pode entrar em contato direto pelo telefone ou WhatsApp (11) 99109-7907. O atendimento é ágil e permite tirar dúvidas ou combinar a avaliação do veículo.',
  },
  {
    id: 'faq-5',
    question: 'Como chegar à oficina?',
    answer:
      'Você pode utilizar o Google Maps ou aplicativo de navegação inserindo o endereço: Rua Mercedes Nasser Sabbag, 302 - Parque Santo Antônio, São Paulo - SP. O site possui botão direto de "Como chegar" e "Traçar rota" para abrir o mapa no celular.',
  },
  {
    id: 'faq-6',
    question: 'Como solicitar atendimento mecânico?',
    answer:
      'Para solicitar atendimento, basta clicar no botão de WhatsApp ou ligar para (11) 99109-7907. Você informa a necessidade do seu veículo e combina a verificação diretamente com o responsável.',
  },
];
