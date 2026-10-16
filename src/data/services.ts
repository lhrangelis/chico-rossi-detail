export interface Stage {
  stage: string;
  name: string;
  tags: string[];
  description: string;
  highlight?: string;
}

export const stages: Stage[] = [
  {
    stage: 'Stage 01',
    name: 'Soft99 Glass Coat',
    tags: ['Dureza 7H', '36 meses'],
    description: 'Coat vitrificador japonês Soft99, a porta de entrada para a proteção de longa duração.',
  },
  {
    stage: 'Stage 02',
    name: 'G’zox Real Glass Coat M',
    tags: ['Dureza 7H', '36 meses'],
    description: 'Para quem busca o máximo nível de brilho e reflexo na pintura.',
  },
  {
    stage: 'Stage 03',
    name: 'G’zox Real Glass Coat H',
    tags: ['Dureza 7H', '36 meses'],
    description: 'Repelência hidrofílica: a água escorre em cortina, deixando a secagem mais rápida e sem marcas.',
  },
  {
    stage: 'Stage 04',
    name: 'Prospec Ceramic Coat',
    tags: ['Dureza 9H', '36 meses'],
    description: 'Coat cerâmico japonês com alto nível de dureza e resistência a marcas e intempéries.',
    highlight: 'Maior dureza',
  },
];

export const includedInAllStages = [
  'Pré-lavagem e lavagem técnica',
  'Descontaminação química e física',
  'Limpeza técnica de detalhes e acabamentos',
  'Mapeamento e mascaramento',
  'Correção de pintura completa com compostos importados',
  'Limpeza interna com pH balanceado e aspiração',
  'Condicionamento de pneus',
  'Coat de para-brisa Prospec Japan',
];

export interface ServiceItem {
  name: string;
  description?: string;
  tags?: string[];
  /** Assunto usado na mensagem do WhatsApp ("orçamento de …"). */
  subject: string;
  /** Texto do botão, quando diferente de "Pedir orçamento". */
  cta?: string;
  /** Mensagem completa do WhatsApp, quando não segue o padrão. */
  message?: string;
}

export interface ServiceCategory {
  id: string;
  /** Rótulo curto usado no menu de categorias. */
  chip: string;
  title: string;
  /** HTML permitido (links internos). */
  intro: string;
  items: ServiceItem[];
}

export const categories: ServiceCategory[] = [
  {
    id: 'cat-lavagem',
    chip: 'Lavagem',
    title: 'Lavagem',
    intro: 'Três níveis, do cuidado do dia a dia à lavagem com descontaminação e selante.',
    items: [
      {
        name: 'Lavagem Nível 01',
        description:
          'Pré-lavagem, shampoo neutro com snow foam, limpeza de cantos e emblemas com pincel, aspiração, limpeza de painel, portas e soleiras com microfibra, vidros e condicionamento de pneus.',
        subject: 'Lavagem Nível 01',
      },
      {
        name: 'Lavagem Nível 02',
        description:
          'Pré-lavagem com descontaminação química, cera Soft99 de carnaúba pura, limpeza interna com APC, aspiração de carpetes e condicionamento de pneus e caixas de roda.',
        subject: 'Lavagem Nível 02',
      },
      {
        name: 'Lavagem Nível 03 Protect',
        description:
          'Descontaminação ferrosa das rodas e da pintura com clay bar, condicionamento de plásticos, limpeza interna com espuma melamina, vidros detalhados e cristalização do para-brisa.',
        tags: ['Selante Fusso Coat Soft99', 'Até 12 meses'],
        subject: 'Lavagem Nível 03 Protect',
      },
    ],
  },
  {
    id: 'cat-polimento',
    chip: 'Polimento',
    title: 'Polimento',
    intro:
      'Correção de pintura para devolver brilho e profundidade à cor. Para proteção de longa duração, veja a <a href="#vitrificacao" class="inline-link">vitrificação</a>.',
    items: [
      {
        name: 'Polimento Comercial',
        description:
          'Lavagem técnica, descontaminação química e física, mapeamento e mascaramento, correção de pintura básica com máquinas e compostos de alta tecnologia, limpeza interna e coat no para-brisa.',
        tags: ['Proteção japonesa de 90 dias'],
        subject: 'Polimento Comercial',
      },
      {
        name: 'Polimento Técnico',
        description:
          'Descontaminação com clay bar e polimento que preserva ao máximo a camada de verniz, com boinas especiais e compostos de alta tecnologia para um acabamento impecável.',
        tags: ['Fusso Coat Soft99', 'Até 12 meses'],
        subject: 'Polimento Técnico',
      },
    ],
  },
  {
    id: 'cat-protecao',
    chip: 'Proteção e PPF',
    title: 'Proteção e PPF',
    intro: 'Vitrificação G’zox para rodas, faróis e plásticos, e película de proteção de pintura.',
    items: [
      {
        name: 'Vitrificação de rodas e metais',
        description:
          'Descontaminação, polimento preservando o brilho e proteção G’zox Wheel & Chrome Coat, com coat no para-brisa.',
        tags: ['G’zox', '24 meses'],
        subject: 'vitrificação de rodas e metais',
      },
      {
        name: 'Vitrificação de faróis e policarbonatos',
        description:
          'Polimento com compostos importados e proteção G’zox Light Coat para faróis e lanternas mais transparentes por mais tempo.',
        tags: ['G’zox', '24 meses'],
        subject: 'vitrificação de faróis',
      },
      {
        name: 'Vitrificação de plásticos',
        description: 'Revitalização dos plásticos externos e proteção G’zox Nano Plastic Coat, com coat no para-brisa.',
        tags: ['G’zox', '24 meses'],
        subject: 'vitrificação de plásticos',
      },
      {
        name: 'PPF — Kit Segurança',
        description:
          'Película de proteção de pintura em TPU importado aplicada nos cantos das portas e nas conchas das maçanetas, com revisão de garantia inclusa.',
        tags: ['100% TPU', '10 anos'],
        subject: 'PPF',
      },
    ],
  },
  {
    id: 'cat-vidros',
    chip: 'Vidros',
    title: 'Vidros',
    intro: 'Visão mais nítida e segura, de dia ou à noite, em todos os vidros ou só no para-brisa.',
    items: [
      {
        name: 'Cristalização dos vidros',
        description:
          'Limpeza detalhada, remoção das manchas possíveis e aplicação de repelente japonês para a água escorrer com facilidade.',
        subject: 'cristalização dos vidros',
      },
      {
        name: 'Polimento de vidros — marcas leves',
        description:
          'Limpeza técnica, descontaminação química e física e polimento para remover marcas, manchas e riscos extremamente leves, com coat japonês.',
        subject: 'polimento de vidros',
      },
      {
        name: 'Polimento de vidros — riscos médios',
        description:
          'Lixamento e refinamento em várias etapas para remover marcas, manchas e riscos leves e médios, finalizado com coat japonês.',
        subject: 'polimento de vidros com riscos',
      },
    ],
  },
  {
    id: 'cat-interior',
    chip: 'Interior e higienização',
    title: 'Interior e higienização',
    intro: 'Bancos, teto, carpetes e ar-condicionado limpos e higienizados com produtos balanceados.',
    items: [
      {
        name: 'Higienização de bancos de tecido',
        description:
          'Limpeza com produto balanceado e aplicação de antibacteriano. Em casos de muita sujeira, os bancos são desmontados.',
        tags: ['Oxi-sanitização opcional'],
        subject: 'higienização de bancos de tecido',
      },
      {
        name: 'Limpeza e hidratação de bancos de couro',
        description: 'Limpeza com produto específico e aplicação de condicionador ou coat para couro.',
        tags: ['Oxi-sanitização opcional', 'Coat Prospec opcional'],
        subject: 'hidratação de bancos de couro',
      },
      {
        name: 'Limpeza do teto',
        description: 'Limpeza do forro com produto balanceado e flanelas, sem encharcar o tecido.',
        subject: 'limpeza do teto',
      },
      {
        name: 'Higienização de carpetes',
        description:
          'Remoção de detritos acumulados com pincéis, ar comprimido, tornador e máquina extratora. Em casos extremos, o carpete é removido do veículo.',
        subject: 'higienização de carpetes',
      },
      {
        name: 'Higienização do ar-condicionado',
        description: 'Troca do filtro e higienização com ozônio para eliminar odores e melhorar o ar dentro do carro.',
        subject: 'higienização do ar-condicionado',
      },
    ],
  },
  {
    id: 'cat-revitalizacao',
    chip: 'Revitalização',
    title: 'Revitalização',
    intro: 'Faróis amarelados e plásticos ressecados de volta à aparência original.',
    items: [
      {
        name: 'Revitalização de faróis',
        description: 'Lixamento, polimento e aplicação de proteção para recuperar a transparência dos faróis.',
        tags: ['Proteção até 1 ano'],
        subject: 'revitalização de faróis',
      },
      {
        name: 'Revitalização de plásticos',
        description:
          'Limpeza técnica, descontaminação e proteção dos plásticos, com lavagem técnica simples e coat no para-brisa.',
        tags: ['Proteção até 1 ano'],
        subject: 'revitalização de plásticos',
      },
    ],
  },
  {
    id: 'cat-tecnica',
    chip: 'Limpeza técnica',
    title: 'Limpeza técnica',
    intro: 'Onde ninguém olha, mas faz toda a diferença na conservação do carro.',
    items: [
      {
        name: 'Limpeza técnica do motor',
        description:
          'Remoção de detritos do cofre do motor com produto próprio, que não danifica nem mancha os componentes, renovando plásticos e borrachas.',
        subject: 'limpeza técnica do motor',
      },
      {
        name: 'Limpeza técnica do chassi',
        description:
          'Limpeza peça por peça de chassi, assoalho, suspensão e escapamento. Remover terra, areia e minério de ferro ajuda a prevenir oxidação e ferrugem.',
        subject: 'limpeza técnica do chassi',
      },
    ],
  },
  {
    id: 'cat-tapecaria',
    chip: 'Tapeçaria',
    title: 'Tapeçaria',
    intro: 'Reparo e renovação do acabamento interno.',
    items: [
      {
        name: 'Serviços de tapeçaria',
        tags: [
          'Revestimento de bancos em couro',
          'Reparo de bancos em couro',
          'Revestimento de bancos em tecido',
          'Reparo de bancos em tecido',
          'Troca do forro de teto',
          'Troca de carpete',
          'Revestimento de proteção em carpete',
          'Revestimento de volante',
          'Troca de volante',
        ],
        subject: 'tapeçaria',
      },
    ],
  },
  {
    id: 'cat-martelinho',
    chip: 'Martelinho de ouro',
    title: 'Martelinho de ouro',
    intro: 'Remoção de amassados preservando a pintura original.',
    items: [
      {
        name: 'Martelinho de ouro',
        description:
          'Cada amassado é diferente, por isso o orçamento é feito presencialmente, com o carro na loja.',
        tags: ['Orçamento presencial'],
        subject: 'martelinho de ouro',
        cta: 'Agendar avaliação',
        message: 'Olá! Gostaria de agendar um orçamento de martelinho de ouro.',
      },
    ],
  },
];

export interface Film {
  name: string;
  description: string;
  subject: string;
}

export const films: Film[] = [
  {
    name: 'Cerâmica',
    description: 'Alta rejeição de calor com visibilidade preservada, sem interferir no sinal de celular, GPS e rádio.',
    subject: 'insulfilm cerâmica',
  },
  {
    name: 'Carbono',
    description:
      'Tom neutro e estável, que não desbota com o tempo, com bom equilíbrio entre conforto térmico e privacidade.',
    subject: 'insulfilm carbono',
  },
  {
    name: 'Profissional',
    description: 'Ótimo custo-benefício para privacidade e redução da luminosidade no dia a dia.',
    subject: 'insulfilm profissional',
  },
];

export const steps = [
  { title: 'Contato', text: 'Chame no WhatsApp e conte o que o seu carro precisa.' },
  { title: 'Avaliação', text: 'Analisamos pintura, vidros e interior para indicar o serviço certo e passar o orçamento.' },
  { title: 'Execução', text: 'O trabalho é feito com calma, etapa por etapa, com produtos certificados.' },
  { title: 'Entrega', text: 'Você retira o carro e confere cada detalhe com a gente.' },
];
