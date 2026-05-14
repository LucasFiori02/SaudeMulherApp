export type Symptom = {
  id: string;
  title: string;
  icon: string;
  brief: string;
  description: string;
  attentionSigns: string[];
  homeCare: string[];
};

export type EducationalContent = {
  id: string;
  category: string;
  title: string;
  icon: string;
  readTime: string;
  excerpt: string;
  body: string[];
};

export type Reminder = {
  id: string;
  title: string;
  date: string;
  time: string;
  type: string;
  icon: string;
};

export type SupportContact = {
  id: string;
  name: string;
  description: string;
  action: string;
  icon: string;
};

export const cycleSummary = {
  greetingName: 'Ana',
  nextPeriod: '24 de maio',
  daysUntilNextPeriod: 11,
  registeredCycles: 8,
  averageCycle: '28 dias',
  status: 'Regular',
  lastPeriod: '26 de abril de 2026',
  averagePeriod: '5 dias',
  shortestCycle: '26 dias',
  longestCycle: '31 dias',
  lastCyclesAverage: '28,4 dias'
};

export const cycleCalendar = {
  month: 'Maio 2026',
  firstWeekdayOffset: 5,
  daysInMonth: 31,
  currentDay: 13,
  periodDays: [24, 25, 26, 27, 28],
  previousPeriodDays: [1, 2, 3],
  fertileDays: [8, 9, 10, 11, 12, 13]
};

export const healthTip = {
  title: 'Dica de saúde do dia',
  text: 'Observe sinais do seu corpo ao longo do ciclo. Pequenas anotações ajudam a perceber padrões e facilitam a conversa na UBS.'
};

export const featuredContent = {
  id: 'colo-utero',
  title: 'Quando fazer o preventivo?',
  category: 'Prevenção do câncer de colo do útero',
  description: 'Entenda por que o exame preventivo é importante e quando procurar a UBS.'
};

export const symptoms: Symptom[] = [
  {
    id: 'colica',
    title: 'Cólica',
    icon: 'pulse-outline',
    brief: 'Dor na parte inferior da barriga durante ou perto da menstruação.',
    description: 'A cólica pode acontecer pela contração do útero durante o período menstrual. Ela é comum, mas deve ser observada quando fica intensa ou muda de padrão.',
    attentionSigns: ['Dor muito forte ou incapacitante', 'Febre', 'Sangramento intenso', 'Suspeita de gravidez', 'Dor forte ao tocar a barriga'],
    homeCare: ['Compressa morna na região inferior da barriga', 'Hidratação e descanso', 'Alongamentos leves se houver conforto', 'Evitar automedicação sem orientação']
  },
  {
    id: 'corrimento',
    title: 'Corrimento vaginal',
    icon: 'water-outline',
    brief: 'Mudanças no muco vaginal, com ou sem odor, coceira ou ardor.',
    description: 'O muco vaginal varia ao longo do ciclo e pode ser normal. Mudanças importantes de odor, cor ou sintomas associados merecem avaliação.',
    attentionSigns: ['Odor forte', 'Cor amarelada, esverdeada ou acinzentada', 'Coceira ou ardor', 'Dor pélvica', 'Sangramento após relação sexual'],
    homeCare: ['Usar roupas leves e evitar abafamento', 'Evitar duchas vaginais', 'Observar cor, odor e duração', 'Procurar atendimento se houver sinais de alerta']
  },
  {
    id: 'atraso',
    title: 'Atraso menstrual',
    icon: 'calendar-number-outline',
    brief: 'Menstruação atrasada em relação ao padrão habitual.',
    description: 'Atrasos podem acontecer por estresse, alterações hormonais, mudanças de rotina ou gravidez. A observação do padrão ajuda na orientação.',
    attentionSigns: ['Atraso maior que 15 dias', 'Suspeita de gravidez', 'Dor forte', 'Sangramento anormal', 'Tontura ou mal-estar importante'],
    homeCare: ['Anotar a data da última menstruação', 'Fazer teste de gravidez se houver possibilidade', 'Evitar chás ou remédios para “descer” a menstruação', 'Buscar confirmação na UBS']
  },
  {
    id: 'sangramento',
    title: 'Sangramento fora do período',
    icon: 'alert-circle-outline',
    brief: 'Sangramento em dias inesperados do ciclo menstrual.',
    description: 'Pequenos escapes podem ocorrer, mas sangramentos persistentes, intensos ou acompanhados de dor precisam ser avaliados.',
    attentionSigns: ['Sangramento intenso', 'Dor pélvica', 'Sangramento após relação sexual', 'Tontura ou fraqueza', 'Uso recente ou troca de método contraceptivo com piora dos sintomas'],
    homeCare: ['Registrar quantidade e duração', 'Observar se há dor ou febre', 'Evitar automedicação', 'Levar as anotações para atendimento']
  },
  {
    id: 'urinar',
    title: 'Dor ou ardor ao urinar',
    icon: 'flame-outline',
    brief: 'Desconforto, ardência ou urgência para urinar.',
    description: 'Dor ou ardor ao urinar pode estar relacionado a infecções urinárias ou outras alterações. A avaliação ajuda a confirmar a causa.',
    attentionSigns: ['Febre', 'Dor nas costas', 'Sangue na urina', 'Gravidez', 'Sintomas persistentes por mais de 24 horas'],
    homeCare: ['Aumentar ingestão de água se não houver restrição médica', 'Não segurar a urina por muito tempo', 'Evitar automedicação com antibióticos', 'Procurar a UBS para avaliação']
  },
  {
    id: 'tpm',
    title: 'Alterações emocionais / TPM',
    icon: 'happy-outline',
    brief: 'Oscilações de humor, irritabilidade, tristeza ou ansiedade perto da menstruação.',
    description: 'Alterações emocionais podem ocorrer na fase pré-menstrual. Quando prejudicam a rotina ou causam sofrimento intenso, merecem acolhimento e cuidado.',
    attentionSigns: ['Tristeza intensa', 'Crises de ansiedade frequentes', 'Pensamentos de autoagressão', 'Impacto importante na rotina', 'Sintomas que pioram a cada ciclo'],
    homeCare: ['Registrar humor ao longo do ciclo', 'Priorizar sono e alimentação regular', 'Praticar atividade leve quando possível', 'Conversar com a equipe de saúde se houver sofrimento']
  },
  {
    id: 'menopausa',
    title: 'Sintomas de menopausa',
    icon: 'sunny-outline',
    brief: 'Ondas de calor, sono irregular, ressecamento vaginal e mudanças no ciclo.',
    description: 'O climatério é uma fase de transição natural. Os sintomas variam e podem ser cuidados com orientação adequada.',
    attentionSigns: ['Sangramento após menopausa', 'Ondas de calor muito intensas', 'Insônia persistente', 'Dor ou ressecamento com impacto na vida sexual', 'Mudanças emocionais importantes'],
    homeCare: ['Anotar sintomas e frequência', 'Manter hidratação e rotina de sono', 'Conversar sobre opções de cuidado na UBS', 'Evitar tratamentos hormonais sem avaliação']
  }
];

export const educationalContents: EducationalContent[] = [
  {
    id: 'tentando-engravidar',
    category: 'Tentando engravidar',
    title: 'Entendendo o período fértil',
    icon: 'flower-outline',
    readTime: '4 min',
    excerpt: 'Saiba como reconhecer sinais do corpo e acompanhar os dias mais férteis do ciclo.',
    body: [
      'O período fértil costuma acontecer perto da ovulação, geralmente no meio do ciclo. Em ciclos regulares, acompanhar datas ajuda a estimar esse momento.',
      'Alguns sinais podem aparecer, como aumento da lubrificação vaginal e secreção mais transparente e elástica, semelhante à clara de ovo.',
      'O acompanhamento no app é apenas uma estimativa. Em caso de dúvidas, dificuldade para engravidar ou ciclos muito irregulares, procure a UBS.'
    ]
  },
  {
    id: 'ciclo-menstrual',
    category: 'Ciclo menstrual',
    title: 'Fases do ciclo menstrual',
    icon: 'refresh-circle-outline',
    readTime: '5 min',
    excerpt: 'Conheça as fases do ciclo e por que humor, energia e sintomas podem variar.',
    body: [
      'O ciclo menstrual é dividido em fases. A menstruação marca o início de um novo ciclo, seguida pela fase folicular, ovulação e fase lútea.',
      'Cada fase pode influenciar sintomas como cólica, sensibilidade nas mamas, alterações de humor e mudanças no corrimento.',
      'Registrar datas e sintomas ajuda a perceber o que é habitual para você.'
    ]
  },
  {
    id: 'colo-utero',
    category: 'Prevenção do câncer de colo do útero',
    title: 'Exame preventivo: por que fazer?',
    icon: 'medkit-outline',
    readTime: '4 min',
    excerpt: 'O preventivo ajuda a identificar alterações antes que evoluam para problemas maiores.',
    body: [
      'O exame preventivo, conhecido como Papanicolau, pode identificar alterações no colo do útero antes que elas evoluam.',
      'Procure a UBS se você nunca fez o exame, está há muito tempo sem fazer ou tem sinais como sangramento fora do período, corrimento persistente ou dor pélvica frequente.',
      'A equipe de saúde pode orientar a periodicidade adequada para sua idade e histórico.'
    ]
  },
  {
    id: 'mama',
    category: 'Prevenção do câncer de mama',
    title: 'Atenção aos sinais das mamas',
    icon: 'heart-outline',
    readTime: '3 min',
    excerpt: 'Observar o próprio corpo ajuda a reconhecer mudanças que merecem avaliação.',
    body: [
      'Conhecer o próprio corpo ajuda a perceber mudanças nas mamas, como caroço, secreção pelo mamilo, vermelhidão, retração da pele ou alteração no formato.',
      'A observação não substitui exames de rotina. A UBS pode orientar quando realizar avaliação clínica, mamografia ou outros exames.',
      'Procure atendimento se notar qualquer mudança persistente.'
    ]
  },
  {
    id: 'climaterio',
    category: 'Climatério e menopausa',
    title: 'Climatério com mais conforto',
    icon: 'sunny-outline',
    readTime: '5 min',
    excerpt: 'Entenda sintomas comuns e caminhos de cuidado nessa fase.',
    body: [
      'O climatério é a transição para a menopausa. Pode envolver ondas de calor, suores noturnos, alteração no sono, irritabilidade e irregularidade menstrual.',
      'Esses sintomas têm cuidado. A equipe da UBS pode orientar hábitos, avaliação clínica e tratamentos quando necessário.',
      'Sangramento após a menopausa deve ser avaliado.'
    ]
  },
  {
    id: 'autocuidado',
    category: 'Autocuidado',
    title: 'Rotina simples de autocuidado',
    icon: 'leaf-outline',
    readTime: '3 min',
    excerpt: 'Pequenas escolhas diárias também fazem parte da saúde feminina.',
    body: [
      'Autocuidado não precisa ser complicado. Sono, alimentação, movimento, hidratação e pausas para respirar fazem diferença.',
      'Também é autocuidado procurar atendimento quando algo muda, realizar exames de rotina e conversar sobre dúvidas sem vergonha.',
      'O app pode ajudar a organizar lembretes e registros para tornar esse cuidado mais constante.'
    ]
  },
  {
    id: 'violencia',
    category: 'Violência contra a mulher',
    title: 'Quando buscar ajuda',
    icon: 'shield-checkmark-outline',
    readTime: '4 min',
    excerpt: 'Violência pode ser física, psicológica, sexual, patrimonial ou moral.',
    body: [
      'Busque ajuda se você sente medo, sofre ameaças, agressões, controle da rotina, humilhações, violência sexual ou impedimento de procurar familiares e amigos.',
      'O Ligue 180 é um canal gratuito e sigiloso de orientação. A rede local também pode incluir Delegacia da Mulher, CRAS, CREAS e UBS.',
      'Se houver risco imediato, procure um local seguro e acione serviços de emergência.'
    ]
  }
];

export const reminders: Reminder[] = [
  {
    id: 'preventivo',
    title: 'Exame preventivo',
    date: '18 de maio',
    time: '09:00',
    type: 'Exame',
    icon: 'clipboard-outline'
  },
  {
    id: 'anticoncepcional',
    title: 'Anticoncepcional',
    date: 'Todos os dias',
    time: '21:00',
    type: 'Medicamento',
    icon: 'medical-outline'
  },
  {
    id: 'consulta',
    title: 'Consulta ginecológica',
    date: '22 de maio',
    time: '14:30',
    type: 'Consulta',
    icon: 'person-outline'
  },
  {
    id: 'mamografia',
    title: 'Mamografia anual',
    date: '10 de junho',
    time: '08:20',
    type: 'Exame',
    icon: 'heart-outline'
  },
  {
    id: 'menstruacao',
    title: 'Próxima menstruação',
    date: '24 de maio',
    time: 'Manhã',
    type: 'Ciclo',
    icon: 'calendar-outline'
  }
];

export const supportContacts: SupportContact[] = [
  {
    id: 'ubs',
    name: 'UBS',
    description: 'Atendimento básico, preventivo, acompanhamento e orientações de saúde.',
    action: 'Buscar unidade próxima',
    icon: 'business-outline'
  },
  {
    id: 'disque-saude',
    name: 'Disque Saúde',
    description: 'Informações e orientações gerais sobre serviços de saúde.',
    action: '136',
    icon: 'call-outline'
  },
  {
    id: 'ligue-180',
    name: 'Ligue 180',
    description: 'Canal gratuito e sigiloso de orientação sobre violência contra a mulher.',
    action: '180',
    icon: 'shield-checkmark-outline'
  },
  {
    id: 'delegacia',
    name: 'Delegacia da Mulher',
    description: 'Atendimento especializado em situações de violência e registro de ocorrência.',
    action: 'Ver orientação',
    icon: 'document-text-outline'
  },
  {
    id: 'cras',
    name: 'CRAS',
    description: 'Apoio socioassistencial e orientação para famílias e mulheres em vulnerabilidade.',
    action: 'Rede municipal',
    icon: 'people-outline'
  },
  {
    id: 'creas',
    name: 'CREAS',
    description: 'Atendimento especializado para situações de violação de direitos.',
    action: 'Rede municipal',
    icon: 'hand-left-outline'
  }
];
