export const familias = [
  {
    id: "1",
    nome: "Família Rodrigues",
    empresa: "Rodrigues Participações",
    mentor: "Carlos Mendes",
    status: "ativo",
    programa: "Sucessão Familiar",
    fase: "Desenvolvimento",
    inicio: "2025-03-01",
    membros: [
      { id: "u1", nome: "Roberto Rodrigues", papel: "Sucedido", geracao: "G1" },
      { id: "u2", nome: "Ana Rodrigues", papel: "Sucessora", geracao: "G2" },
      { id: "u3", nome: "Pedro Rodrigues", papel: "Sucessor", geracao: "G2" },
      { id: "u4", nome: "Marcia Rodrigues", papel: "Familiar convidada", geracao: "G1" },
    ],
    radar: {
      atual: { nextGen: 2, entrepreneurship: 3, governance: 2, currentGen: 2 },
      alvo:  { nextGen: 4, entrepreneurship: 4, governance: 3, currentGen: 3 },
    },
  },
  {
    id: "2",
    nome: "Família Carvalho",
    empresa: "Carvalho Holdings",
    mentor: "Fernanda Lima",
    status: "ativo",
    programa: "Sucessão Familiar",
    fase: "Diagnóstico",
    inicio: "2025-09-15",
    membros: [
      { id: "u5", nome: "Marcos Carvalho", papel: "Sucedido", geracao: "G1" },
      { id: "u6", nome: "Julia Carvalho", papel: "Sucessora", geracao: "G2" },
    ],
    radar: {
      atual: { nextGen: 1, entrepreneurship: 2, governance: 1, currentGen: 2 },
      alvo:  { nextGen: 3, entrepreneurship: 4, governance: 3, currentGen: 3 },
    },
  },
];

export const clientes = [
  { id: "c1", nome: "Rafael Mendonça", tipo: "individual", mentor: "Carlos Mendes", status: "ativo", programa: "Programa Carreira", inicio: "2025-08-10" },
  { id: "c2", nome: "Beatriz Tavares", tipo: "individual", mentor: "Fernanda Lima", status: "onboarding", programa: "Sprint DRUM Next Move", inicio: "2025-11-01" },
  { id: "c3", nome: "Família Rodrigues", tipo: "família", mentor: "Carlos Mendes", status: "ativo", programa: "Sucessão Familiar", inicio: "2025-03-01" },
  { id: "c4", nome: "Família Carvalho", tipo: "família", mentor: "Fernanda Lima", status: "ativo", programa: "Sucessão Familiar", inicio: "2025-09-15" },
  { id: "c5", nome: "TechStart Ltda", tipo: "empresa", mentor: "Bruno Costa", status: "lead", programa: "Empreendedorismo", inicio: "" },
  { id: "c6", nome: "Sofia Almeida", tipo: "individual", mentor: "Carlos Mendes", status: "concluído", programa: "Programa Carreira", inicio: "2024-05-01" },
];

export const jornadas = [
  {
    id: "j1",
    nome: "Trilha de Desenvolvimento – Ana Rodrigues",
    programa: "Trilha de Desenvolvimento de Sucessores",
    cliente: "Família Rodrigues",
    mentor: "Carlos Mendes",
    status: "ativa",
    moduloAtual: "Módulo 03 – Caminhos Possíveis",
    progresso: 42,
    proximoMarco: "Devolutiva em 12/06/2026",
    modulos: [
      { ordem: 0, nome: "Kick-off", status: "concluído", entregavel: "Relato gravado" },
      { ordem: 1, nome: "Seu Dilema", status: "concluído", entregavel: "Dilema em 140 caracteres" },
      { ordem: 2, nome: "A História da Família", status: "concluído", entregavel: "3 princípios da família" },
      { ordem: 3, nome: "Caminhos Possíveis", status: "em_andamento", entregavel: "Prioridades de longo prazo" },
      { ordem: 4, nome: "Uma Direção", status: "bloqueado", entregavel: "Ponto B + next right step" },
      { ordem: 5, nome: "Prototipando", status: "bloqueado", entregavel: "Registro de conversas" },
      { ordem: 6, nome: "O Plano", status: "bloqueado", entregavel: "Plano completo" },
    ],
  },
  {
    id: "j2",
    nome: "Trilha de Transição – Roberto Rodrigues",
    programa: "Trilha de Transição do Sucedido",
    cliente: "Família Rodrigues",
    mentor: "Carlos Mendes",
    status: "ativa",
    moduloAtual: "Módulo 02 – Visão para a Sucessão",
    progresso: 28,
    proximoMarco: "Encontro em 15/06/2026",
    modulos: [
      { ordem: 1, nome: "Ciclo do Empreendedor", status: "concluído", entregavel: "Mapa do ciclo" },
      { ordem: 2, nome: "Visão para a Sucessão", status: "em_andamento", entregavel: "Documento de visão" },
      { ordem: 3, nome: "Alinhamento entre Sócios", status: "bloqueado", entregavel: "Mapa de convergências" },
      { ordem: 4, nome: "Alinhamento entre Gerações", status: "bloqueado", entregavel: "Roteiro de conversa" },
      { ordem: 5, nome: "Alinhamento com Familiares", status: "bloqueado", entregavel: "Registro de assembleia" },
      { ordem: 6, nome: "Plano de Transição", status: "bloqueado", entregavel: "Plano versionado" },
    ],
  },
  {
    id: "j3",
    nome: "Programa Carreira – Rafael Mendonça",
    programa: "Programa Carreira",
    cliente: "Rafael Mendonça",
    mentor: "Carlos Mendes",
    status: "ativa",
    moduloAtual: "Módulo 04 – Uma Direção",
    progresso: 65,
    proximoMarco: "Entregável em 20/06/2026",
    modulos: [
      { ordem: 0, nome: "Termômetro de Carreira", status: "concluído", entregavel: "Diagnóstico concluído" },
      { ordem: 1, nome: "Seu Dilema", status: "concluído", entregavel: "Dilema nomeado" },
      { ordem: 2, nome: "A História da Família", status: "concluído", entregavel: "Princípios identificados" },
      { ordem: 3, nome: "Caminhos Possíveis", status: "concluído", entregavel: "Prioridades definidas" },
      { ordem: 4, nome: "Uma Direção", status: "em_andamento", entregavel: "Ponto B em construção" },
      { ordem: 5, nome: "Prototipando", status: "bloqueado", entregavel: "Conversas planejadas" },
      { ordem: 6, nome: "O Plano", status: "bloqueado", entregavel: "Plano final" },
    ],
  },
];

export const encontros = [
  { id: "e1", data: "2026-06-12", hora: "09:00", duracao: "1h30", mentor: "Carlos Mendes", participante: "Ana Rodrigues", jornada: "Trilha de Desenvolvimento – Ana Rodrigues", modulo: "Módulo 03", status: "agendado", objetivo: "Explorar caminhos possíveis e mapear prioridades de longo prazo" },
  { id: "e2", data: "2026-06-15", hora: "14:00", duracao: "1h", mentor: "Carlos Mendes", participante: "Roberto Rodrigues", jornada: "Trilha de Transição – Roberto Rodrigues", modulo: "Módulo 02", status: "agendado", objetivo: "Construir visão de sucessão e alinhar expectativas" },
  { id: "e3", data: "2026-06-20", hora: "10:00", duracao: "1h", mentor: "Carlos Mendes", participante: "Rafael Mendonça", jornada: "Programa Carreira – Rafael", modulo: "Módulo 04", status: "agendado", objetivo: "Definir Ponto B e próximo passo concreto" },
  { id: "e4", data: "2026-06-05", hora: "09:00", duracao: "1h30", mentor: "Carlos Mendes", participante: "Ana Rodrigues", jornada: "Trilha de Desenvolvimento – Ana Rodrigues", modulo: "Módulo 02", status: "registrado", objetivo: "Mapear história da família e princípios" },
  { id: "e5", data: "2026-05-28", hora: "14:00", duracao: "1h", mentor: "Fernanda Lima", participante: "Julia Carvalho", jornada: "Trilha Carvalho", modulo: "Módulo 01", status: "registrado", objetivo: "Diagnóstico inicial e kick-off" },
];

export const tarefas = [
  { id: "t1", titulo: "Escrever dilema em 140 caracteres", responsavel: "Ana Rodrigues", prazo: "2026-06-10", status: "em_andamento", prioridade: "alta", vinculo: "Módulo 03 – Caminhos Possíveis" },
  { id: "t2", titulo: "Preparar lista de caminhos possíveis", responsavel: "Ana Rodrigues", prazo: "2026-06-11", status: "aberta", prioridade: "alta", vinculo: "Módulo 03 – Caminhos Possíveis" },
  { id: "t3", titulo: "Revisar documento de visão de sucessão", responsavel: "Carlos Mendes", prazo: "2026-06-14", status: "aberta", prioridade: "média", vinculo: "Módulo 02 – Visão para a Sucessão" },
  { id: "t4", titulo: "Enviar pré-work para encontro de 15/06", responsavel: "Carlos Mendes", prazo: "2026-06-13", status: "aberta", prioridade: "média", vinculo: "Encontro – Roberto Rodrigues" },
  { id: "t5", titulo: "Completar Termômetro de Carreira", responsavel: "Beatriz Tavares", prazo: "2026-06-08", status: "concluída", prioridade: "alta", vinculo: "Sprint DRUM Next Move" },
  { id: "t6", titulo: "Agendar encontro familiar Rodrigues", responsavel: "Carlos Mendes", prazo: "2026-06-18", status: "aberta", prioridade: "baixa", vinculo: "Família Rodrigues" },
];

export const programas = [
  {
    id: "p1",
    nome: "Programa Carreira",
    descricao: "Jornada para clareza de carreira e plano de ação",
    tipo: "individual",
    jornadas_ativas: 8,
    modulos: 7,
    status: "publicado",
  },
  {
    id: "p2",
    nome: "Trilha de Desenvolvimento de Sucessores",
    descricao: "Jornada de sucessores em família empresária",
    tipo: "familia",
    jornadas_ativas: 4,
    modulos: 7,
    status: "publicado",
  },
  {
    id: "p3",
    nome: "Trilha de Transição do Sucedido",
    descricao: "Jornada da geração atual em transição",
    tipo: "familia",
    jornadas_ativas: 3,
    modulos: 6,
    status: "publicado",
  },
  {
    id: "p4",
    nome: "Empreendedorismo",
    descricao: "Jornada para estruturar ideia ou projeto",
    tipo: "individual",
    jornadas_ativas: 2,
    modulos: 5,
    status: "publicado",
  },
  {
    id: "p5",
    nome: "Sprint DRUM Next Move",
    descricao: "Produto curto para clareza e experimento de carreira",
    tipo: "individual",
    jornadas_ativas: 5,
    modulos: 4,
    status: "publicado",
  },
  {
    id: "p6",
    nome: "Programa Mentor",
    descricao: "Formação e apoio a mentores DRUM",
    tipo: "mentor",
    jornadas_ativas: 1,
    modulos: 6,
    status: "rascunho",
  },
];

export const diagnosticos = [
  { id: "d1", nome: "Termômetro de Carreira", framework: "carreira", participante: "Beatriz Tavares", data: "2026-06-05", status: "respondido" },
  { id: "d2", nome: "Framework de Transição", framework: "transicao", participante: "Família Rodrigues", data: "2026-03-10", status: "concluído" },
  { id: "d3", nome: "Life Design", framework: "life-design", participante: "Rafael Mendonça", data: "2026-08-12", status: "concluído" },
  { id: "d4", nome: "Framework de Transição", framework: "transicao", participante: "Família Carvalho", data: "2026-09-20", status: "respondido" },
];

export const conteudos = [
  { id: "co1", titulo: "O que é um dilema de carreira?", tipo: "texto", programa: "Programa Carreira", modulo: "Módulo 01", publico: "mentorado", status: "publicado", tags: ["carreira", "dilema"] },
  { id: "co2", titulo: "Entendendo o ciclo empreendedor", tipo: "vídeo", programa: "Trilha do Sucedido", modulo: "Módulo 01", publico: "sucedido", status: "publicado", tags: ["empreendedorismo", "ciclo"] },
  { id: "co3", titulo: "Template: Plano de Carreira", tipo: "template", programa: "Programa Carreira", modulo: "Módulo 06", publico: "mentorado", status: "publicado", tags: ["carreira", "plano"] },
  { id: "co4", titulo: "Governança em famílias empresárias", tipo: "texto", programa: "Sucessão Familiar", modulo: "Geral", publico: "mentor", status: "publicado", tags: ["governança", "família"] },
  { id: "co5", titulo: "Roteiro de devolutiva do Termômetro", tipo: "template", programa: "Programa Carreira", modulo: "Diagnóstico", publico: "mentor", status: "publicado", tags: ["diagnóstico", "devolutiva"] },
  { id: "co6", titulo: "Life Design: os três eixos", tipo: "texto", programa: "Geral", modulo: "Geral", publico: "mentorado", status: "publicado", tags: ["life-design", "carreira"] },
];

export const metricas = {
  jornadasAtivas: 12,
  encontrosSemana: 5,
  entregaveisPendentes: 8,
  tarefasAtrasadas: 3,
  progressoMedio: 54,
  familias_ativas: 2,
};
