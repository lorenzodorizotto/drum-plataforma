# Plataforma DRUM – Especificação Completa e Contexto Atual

> **Documento consolidado** a partir de dois briefings: *Especificação completa – Plataforma DRUM para substituir o Notion* e *Como a plataforma DRUM funciona hoje*. Destinado a times de produto e desenvolvimento para implementação via Claude Code ou Cursor.

---

## Sumário

1. [Contexto e intenção do produto](#1-contexto-e-intenção-do-produto)
2. [Como a plataforma funciona hoje](#2-como-a-plataforma-funciona-hoje)
3. [Princípios de produto](#3-princípios-de-produto)
4. [Papéis de usuário](#4-papéis-de-usuário)
5. [Mapa geral da plataforma](#5-mapa-geral-da-plataforma)
6. [Especificação de páginas](#6-especificação-de-páginas)
7. [Frameworks metodológicos](#7-frameworks-metodológicos)
8. [Fluxos principais](#8-fluxos-principais)
9. [Identidade visual e marca](#9-identidade-visual-e-marca)
10. [Componentes essenciais](#10-componentes-essenciais)
11. [Modelo de dados](#11-modelo-de-dados)
12. [Requisitos funcionais e não funcionais](#12-requisitos-funcionais-e-não-funcionais)
13. [MVP e Roadmap](#13-mvp-e-roadmap)
14. [Inventário de rotas](#14-inventário-de-rotas)
15. [Conteúdo dos programas](#15-conteúdo-dos-programas)
16. [Migração do Notion](#16-migração-do-notion)
17. [Critérios de aceite](#17-critérios-de-aceite)

---

## 1. Contexto e intenção do produto

A DRUM opera com uma metodologia rica baseada em programas de carreira, sucessão, empreendedorismo, mentoria, diagnóstico e acompanhamento de jornadas individuais e familiares. Hoje, o **Notion** funciona como a principal camada operacional: nele estão os conteúdos dos programas, roteiros de encontros, materiais de repertório, entregáveis, registros de mentorias, cronogramas, bases de clientes, diagnósticos e páginas compartilhadas com mentorados, famílias, mentores e time interno.

**Objetivo:** substituir o Notion como sistema operacional da DRUM, mantendo a flexibilidade de páginas, bases, templates e checklists, mas com uma experiência proprietária – mais bonita, mais guiada, mais segura, mais mensurável e mais conectada à metodologia DRUM.

> A plataforma não deve ser apenas um "Notion com outra interface". Ela deve ser o **ambiente proprietário da metodologia DRUM**, onde diagnósticos, trilhas, mentorias, conteúdos, tarefas, entregáveis, cronogramas, famílias, sucessores, sucedidos e mentores convivem em uma experiência única.

---

## 2. Como a plataforma funciona hoje

A plataforma atual (protótipo em `https://sucessaodrum.lovable.app`) funciona como um **protótipo digital de acompanhamento de sucessão em famílias empresárias**. O exemplo analisado apresenta a Família Rodrigues, vinculada à empresa Rodrigues Participações.

### 2.1 Estrutura de navegação atual

| Aba | Função principal | O que o usuário encontra |
|---|---|---|
| **Visão Geral** | Apresentar o sistema familiar e o estado inicial da sucessão | Família, empresa, sucessores, sucedido, mentor e radar geral |
| **Framework de Transição** | Diagnosticar a prontidão da família para a sucessão | Quatro eixos de transição, níveis atuais e níveis-alvo |
| **Framework Empreendedorismo** | Avaliar maturidade empreendedora | Eixos de problema, time, próximo passo e visão |
| **Framework Life Design** | Avaliar clareza de carreira e trajetória individual | Eixos de North Star, ambiente e alavancas |
| **Cronograma** | Mostrar a jornada ao longo do tempo | Linha do tempo de 18 meses com trilhas, módulos e entregáveis |

### 2.2 O que a plataforma já faz bem

| Força atual | Por que é relevante |
|---|---|
| Frameworks claros | Facilitam diagnóstico e conversa com clientes |
| Radar visual | Torna gaps complexos mais fáceis de entender |
| Cronograma de 18 meses | Dá tangibilidade a uma jornada longa e emocional |
| Trilhas separadas | Reconhece que sucessor e sucedido têm desafios diferentes |
| Módulos com entregáveis | Evita que o processo fique apenas reflexivo |
| Linguagem própria | Reforça diferenciação da metodologia DRUM |

### 2.3 Limitações e oportunidades

| Limitação | Possível melhoria |
|---|---|
| Diagnóstico depende de interpretação manual | Gerar narrativa automática do radar |
| Cronograma não vira plano ativo | Criar tarefas, responsáveis, prazos e status |
| Entregáveis aparecem como descrição estática | Permitir upload, registro ou preenchimento dentro da plataforma |
| Conversas familiares pouco estruturadas | Criar roteiros de conversa e registro de acordos |
| Revisões periódicas não operacionalizadas | Criar painel de revisão trimestral |

### 2.4 O fluxo atual em cinco movimentos

1. **Mapear** – identifica família, empresa, sucessores, sucedido e mentor – o sistema familiar fica visível
2. **Diagnosticar** – frameworks medem clareza, prontidão, governança, ciclo empreendedor e trajetória – a família entende onde está
3. **Comparar** – radar mostra níveis atuais e níveis-alvo – gaps ficam explícitos
4. **Desenvolver** – trilhas orientam sucessores e sucedido por módulos – pessoas avançam em clareza e repertório
5. **Planejar** – jornada consolida papéis, ações e revisões – a sucessão vira plano acompanhado

---

## 3. Princípios de produto

| Princípio | Implicação prática na plataforma |
|---|---|
| **Clareza** | Toda página deve mostrar onde a pessoa está, o que precisa fazer agora e qual é o próximo marco da jornada. |
| **Jornada** | Programas devem ser organizados em fases, módulos, encontros, conteúdos, entregáveis e revisões. |
| **Acompanhamento** | A plataforma deve registrar progresso, comentários, tarefas, status, devolutivas e histórico. |
| **Personalização** | Cada pessoa, família e programa deve poder ter trilhas, diagnósticos e planos próprios. |
| **Marca** | A interface deve usar linguagem, cores, tipografia e componentes coerentes com a DRUM. |

---

## 4. Papéis de usuário

A regra básica é simples: **cada usuário só vê aquilo que precisa para cumprir seu papel**. Notas privadas de mentor devem ter permissão separada. Registros compartilhados com mentorado ou família devem ser explicitamente marcados como compartilhados.

| Papel | Descrição | Permissões principais |
|---|---|---|
| **Admin DRUM** | Time interno com acesso total ao sistema | Gerenciar clientes, famílias, programas, conteúdos, templates, usuários, diagnósticos e configurações. |
| **Fundador / Diretor DRUM** | Liderança da DRUM | Ver visão estratégica, métricas, clientes, programas, receita potencial e qualidade da entrega. |
| **Mentor DRUM** | Pessoa que conduz mentorias e trilhas | Ver mentorados/famílias atribuídos, conduzir encontros, registrar notas, revisar entregáveis e acompanhar progresso. |
| **Mentorado** | Pessoa em programa de carreira ou sucessor em desenvolvimento | Ver sua própria jornada, conteúdos, tarefas, entregáveis, diagnósticos, devolutivas e plano. |
| **Sucedido** | Membro da geração atual em trilha de transição | Ver sua trilha, diagnósticos, conteúdos, reflexões, encontros e plano de transição. |
| **Familiar convidado** | Membro da família empresária que participa de alinhamentos | Ver páginas e formulários específicos de alinhamento, acordos e cronograma autorizado. |
| **Parceiro externo** | Consultor de governança, advogado, private banker ou outro parceiro | Ver apenas módulos, documentos ou tarefas compartilhadas explicitamente. |
| **Observador institucional** | Escola, empresa, family office ou patrocinador de programa | Ver métricas agregadas, sem acesso a notas confidenciais individuais. |

---

## 5. Mapa geral da plataforma

| Área | Função | Equivalente no Notion |
|---|---|---|
| **Dashboard** | Tela inicial com visão do que está acontecendo agora | Página home operacional, central de links e tarefas. |
| **Clientes e Famílias** | Base de famílias, empresas, mentorados e stakeholders | Databases de clientes, famílias, pessoas e empresas. |
| **Programas** | Gestão de Programas Carreira, Sucessão, Empreendedorismo e trilhas customizadas | Páginas de programas, templates e cronogramas. |
| **Jornadas** | Instâncias reais de programas em andamento | Página individual de cada cliente ou mentorado. |
| **Diagnósticos** | Termômetro de Carreira e frameworks de Life Design, Empreendedorismo e Transição | Forms, tabelas de respostas, devolutivas e assessments. |
| **Conteúdos** | Biblioteca de repertórios, leituras, vídeos, templates e exercícios | Base de materiais, repertório e referências. |
| **Encontros** | Agenda, preparação, notas e follow-up de mentorias | Páginas de reuniões, atas e registros de encontros. |
| **Entregáveis** | Trabalhos, reflexões, planos e documentos produzidos por mentorados | Tabelas de tarefas, uploads e páginas de exercícios. |
| **Tarefas e Próximos Passos** | Ações com responsável, prazo, status e vínculo a módulos | Kanban ou checklist do Notion. |
| **Acordos e Planos** | Planos de carreira, planos de sucessão, acordos familiares e revisões | Documentos finais e páginas compartilhadas. |
| **Templates** | Modelos reutilizáveis de programas, módulos, encontros e diagnósticos | Templates do Notion. |
| **Administração** | Usuários, permissões, marca, integrações e configurações | Configurações internas e páginas administrativas. |

---

## 6. Especificação de páginas

### 6.1 Dashboard geral

O Dashboard é a primeira tela após login. Substitui a página inicial do Notion, concentrando visão de operação, atalhos e alertas. Para um mentor, mostra seus mentorados, próximos encontros, entregáveis pendentes e tarefas atrasadas. Para um admin, mostra todos os programas ativos, famílias, mentores, diagnósticos pendentes e indicadores de saúde da operação.

| Bloco | Conteúdo | Comportamento |
|---|---|---|
| **Resumo da semana** | Encontros agendados, devolutivas pendentes, entregáveis aguardando revisão | Clicar abre a lista filtrada. |
| **Jornadas ativas** | Cards de mentorados, famílias ou programas em andamento | Cada card abre a página da jornada. |
| **Alertas** | Tarefas atrasadas, módulos sem preenchimento, diagnóstico incompleto | Deve priorizar urgência e responsável. |
| **Ações rápidas** | Criar cliente, criar jornada, agendar encontro, enviar diagnóstico | Botões visíveis conforme permissão. |
| **Métricas** | Progresso médio, número de encontros, entregáveis concluídos | Admin vê agregado; mentor vê apenas seus casos. |

---

### 6.2 Página de clientes e famílias

Substitui bancos de dados de clientes do Notion. Permite cadastrar famílias empresárias, clientes individuais, empresas, membros familiares, mentores responsáveis, status comercial e status da jornada.

| Campo | Tipo | Observação |
|---|---|---|
| Nome do cliente/família | Texto | Ex.: Família Rodrigues. |
| Tipo de cliente | Enum | Individual, família empresária, empresa, escola, family office. |
| Empresa vinculada | Relação | Pode haver uma ou várias empresas. |
| Mentor responsável | Relação com usuário | Mentor principal da conta. |
| Status | Enum | Lead, onboarding, ativo, pausado, concluído, arquivado. |
| Programa contratado | Relação | Carreira, Sucessão, Empreendedorismo ou customizado. |
| Data de início | Data | Início formal da jornada. |
| Data prevista de término | Data | Calculada ou manual. |
| Notas internas | Texto rico | Visível apenas para time DRUM autorizado. |

A página deve ter visualização em **tabela**, **cards** e **kanban**. O kanban deve permitir arrastar clientes por status. O clique em um cliente abre a página individual.

---

### 6.3 Página individual de família empresária

Hub do caso de sucessão. Mostra árvore familiar, empresa, pessoas, papéis, programas ativos, diagnósticos, trilhas, encontros, tarefas, acordos e documentos.

| Seção | Conteúdo | Observação |
|---|---|---|
| **Cabeçalho** | Nome da família, empresa principal, mentor, status e fase da jornada | Deve ter cor discreta e botão de editar. |
| **Mapa familiar** | Fundadores, sucessores, sucedido, familiares convidados e vínculos | Pode começar como lista hierárquica e evoluir para árvore visual. |
| **Empresas e ativos** | Empresas relacionadas, áreas, estágio e observações | Importante para sucessão e governança. |
| **Radar de Transição** | Diagnóstico atual versus alvo nos quatro eixos | Deve usar gráfico radar. |
| **Trilhas ativas** | Trilha de Desenvolvimento e Trilha de Transição | Mostra progresso por módulo. |
| **Encontros** | Próximas reuniões, notas e histórico | Cada encontro abre uma página própria. |
| **Entregáveis** | Planos, reflexões, documentos e uploads | Pode ser filtrado por pessoa ou módulo. |
| **Acordos familiares** | Decisões, pendências, responsáveis e revisões | Deve ter histórico e data de revisão. |
| **Notas privadas** | Registro interno do mentor/time | Nunca visível para família sem permissão explícita. |

---

### 6.4 Página individual de mentorado

Ambiente onde a pessoa acompanha sua jornada, acessa conteúdos, registra reflexões, envia entregáveis e visualiza progresso.

| Seção | Conteúdo | Comportamento |
|---|---|---|
| **Meu momento** | Fase atual, módulo atual, mentor e próximo encontro | Sempre visível no topo. |
| **Diagnóstico** | Termômetro de Carreira, Life Design e devolutivas | Pode mostrar radar e interpretação. |
| **Minha trilha** | Módulos concluídos, em andamento e futuros | Progress bar por módulo. |
| **Conteúdos** | Leituras, vídeos, exercícios e templates do módulo | Liberados por etapa ou manualmente. |
| **Entregáveis** | Reflexões, dilema, Ponto A, Ponto B, plano e registros | Usuário preenche diretamente na plataforma. |
| **Próximos passos** | Ações dos próximos 7 dias ou do mês | Checklist com prazo. |
| **Histórico** | Encontros, devolutivas e versões anteriores do plano | Ajuda a ver evolução. |

---

### 6.5 Página de programas

Substitui templates centrais do Notion. Um **programa é um modelo**; uma **jornada é uma execução real** desse modelo para um cliente.

| Programa | Descrição | Estrutura esperada |
|---|---|---|
| **Programa Carreira** | Jornada para clareza de carreira e plano de ação | Termômetro, devolutiva, módulos de carreira, plano final. |
| **Trilha de Desenvolvimento de Sucessores** | Jornada de sucessores em família empresária | Kick-off + 6 módulos: dilema, história familiar, caminhos, direção, protótipo e plano. |
| **Trilha de Transição do Sucedido** | Jornada da geração atual | Diagnóstico, ciclo empreendedor, visão, alinhamentos e plano. |
| **Empreendedorismo** | Jornada para estruturar ideia ou projeto | Problema, time, próximo passo, visão e experimentos. |
| **Sprint DRUM Next Move** | Produto curto para clareza e experimento de carreira | Diagnóstico curto, dilema, hipóteses, experimento de 7 dias. |
| **Programa Mentor** | Formação e apoio a mentores | Roteiros, metodologia, inteligência de sessão e padrões de qualidade. |

Cada programa deve permitir criar, editar e ordenar módulos. Cada módulo deve ter: objetivo, descrição, duração, conteúdos, exercícios, entregáveis, perguntas-guia, critérios de conclusão e sugestões de encontro.

---

### 6.6 Página de jornada

Instância de um programa para um cliente real. Ex.: *"Trilha de Desenvolvimento – Ana Rodrigues"*.

| Campo | Tipo | Exemplo |
|---|---|---|
| Nome da jornada | Texto | Trilha de Desenvolvimento – Ana Rodrigues. |
| Programa base | Relação | Programa Carreira. |
| Cliente vinculado | Relação | Família Rodrigues ou Ana Rodrigues. |
| Mentor principal | Relação | Mentor responsável. |
| Participantes | Relação | Sucessor, sucedido, familiares ou convidados. |
| Status | Enum | Não iniciada, ativa, pausada, concluída. |
| Módulo atual | Relação | Módulo 03 – Caminhos Possíveis. |
| Progresso | Cálculo | Percentual por entregáveis ou módulos concluídos. |
| Próximo marco | Data + texto | Próxima devolutiva, encontro ou entrega. |

**Abas internas da jornada:** Visão geral · Módulos · Encontros · Entregáveis · Tarefas · Diagnósticos · Documentos · Notas internas

---

### 6.7 Página de diagnósticos

Substitui forms, tabelas e devolutivas no Notion. Permite criar e aplicar assessments, armazenar respostas, calcular níveis, gerar gráficos e produzir devolutivas.

| Diagnóstico | Eixos | Saída esperada |
|---|---|---|
| **Termômetro de Carreira** | Momento profissional, clareza, energia, contexto, prontidão | Fase de carreira, trilha sugerida e pontos de atenção. |
| **Life Design** | North Star, Ambiente, Alavancas | Radar, interpretação e próximos passos. |
| **Empreendedorismo** | Problema, Time, Próximo Passo, Visão | Radar e recomendação de foco. |
| **Transição/Sucessão** | Next Generation, Entrepreneurship Cycle, Governance Structures, Current Generation | Radar atual versus alvo e leitura dos descompassos. |
| **Prontidão do Sucessor** | Clareza, repertório, interesse, capacidade de ação, relação com empresa familiar | Perfil de prontidão e recomendação de trilha. |
| **Prontidão do Sucedido** | Visão, abertura à transição, clareza pós-negócio, alinhamento com sócios, comunicação | Leitura do eixo Current Generation Trajectory. |

Cada diagnóstico deve ter três modos: **edição de template**, **resposta pelo usuário** e **devolutiva pelo mentor**. O sistema deve suportar perguntas abertas, escala de 1 a 4, múltipla escolha, seleção única, texto longo e upload.

---

### 6.8 Página de frameworks

Biblioteca metodológica da DRUM. Substitui páginas explicativas do Notion e centraliza a linguagem oficial.

| Framework | Página | Eixos | Níveis |
|---|---|---|---|
| **Framework de Transição** | `/frameworks/transicao` | Next Generation Trajectory, Entrepreneurship Cycle, Governance Structures, Current Generation Trajectory | 1 a 4 por eixo, com estado atual e alvo. |
| **Framework de Empreendedorismo** | `/frameworks/empreendedorismo` | Problema, Time, Próximo Passo, Visão | 1 a 4 por eixo, com interpretação de descompassos. |
| **Framework de Life Design** | `/frameworks/life-design` | North Star, Ambiente, Alavancas | 1 a 4 por eixo, com leitura de direção e alavancas. |
| **Currículo de Carreira** | `/frameworks/curriculo-carreira` | Dilema, História, Caminhos, Direção, Protótipo, Plano | Etapas sequenciais com entregáveis. |

Cada framework deve ter página com: definição, eixos, níveis de maturidade, perguntas de diagnóstico, exemplos de leitura e ações recomendadas por nível.

---

### 6.9 Página de conteúdos

Biblioteca que substitui a base de repertório do Notion.

| Campo | Tipo | Observação |
|---|---|---|
| Título | Texto | Nome do conteúdo. |
| Tipo | Enum | Texto, vídeo, link, PDF, exercício, template, pergunta, referência. |
| Descrição curta | Texto | Resumo para card. |
| Conteúdo | Texto rico / arquivo / URL | Deve permitir markdown ou editor rico. |
| Programa relacionado | Relação | Carreira, Sucessão, Empreendedorismo etc. |
| Módulo relacionado | Relação | Ex.: Módulo 05 – Prototipando. |
| Público | Enum | Mentor, mentorado, sucedido, familiar, interno. |
| Status | Enum | Rascunho, revisado, publicado, arquivado. |
| Tags | Multi-select | Life Design, sucessão, família, carreira, prototipagem etc. |

---

### 6.10 Página de encontros

Substitui registros de reuniões e atas do Notion.

| Seção | Conteúdo |
|---|---|
| **Dados do encontro** | Data, horário, duração, mentor, participantes, jornada e módulo. |
| **Objetivo** | O que este encontro precisa resolver ou avançar. |
| **Preparação do mentor** | Perguntas, hipóteses, pontos de atenção e histórico. |
| **Pré-work do participante** | Conteúdos ou entregáveis que devem ser feitos antes. |
| **Notas privadas** | Campo visível apenas para mentor e admin autorizado. |
| **Notas compartilhadas** | Síntese que pode ser vista pelo cliente/participante. |
| **Decisões e aprendizados** | Registro estruturado de conclusões. |
| **Próximos passos** | Tarefas geradas com responsável e prazo. |

A plataforma deve permitir criar encontros a partir de um módulo – ao abrir o Módulo 03, o mentor pode clicar em "criar encontro deste módulo" e o sistema já preenche pauta e perguntas sugeridas.

---

### 6.11 Página de entregáveis

| Entregável | Programa/módulo | Formato |
|---|---|---|
| Dilema em 140 caracteres | Módulo 01 – Seu Dilema | Campo curto com histórico de versões. |
| Ponto A | Módulo 01 | Texto estruturado. |
| Princípios da família | Módulo 02 | Lista de 3 princípios herdados e 3 escolhidos. |
| Caminhos possíveis | Módulo 03 | Cards comparáveis. |
| Ponto B | Módulo 04 | Frase de direção. |
| Next right step | Módulo 04 | Tarefa de 7 dias. |
| Registro de conversas | Módulo 05 | Formulário por conversa. |
| Plano de carreira | Módulo 06 | Documento estruturado final. |
| Visão de sucessão | Trilha do Sucedido | Documento ou reflexão guiada. |
| Mapa de alinhamento | Sucessão | Registro de convergências, tensões e acordos. |
| Plano de transição | Meses 7–18 | Documento vivo com revisões trimestrais. |

Status dos entregáveis: **Não iniciado · Em andamento · Enviado · Em revisão · Aprovado · Precisa ajuste**

---

### 6.12 Página de tarefas e próximos passos

| Campo | Tipo | Descrição |
|---|---|---|
| Título | Texto | Ação concreta. |
| Descrição | Texto | Contexto da tarefa. |
| Responsável | Relação com usuário | Quem executa. |
| Criador | Relação com usuário | Quem criou. |
| Prazo | Data | Data de vencimento. |
| Status | Enum | Aberta, em andamento, bloqueada, concluída, cancelada. |
| Prioridade | Enum | Baixa, média, alta. |
| Vínculo | Relação | Jornada, módulo, encontro, entregável ou acordo. |

---

### 6.13 Página de acordos e planos

Os planos devem ser **documentos vivos** com versionamento: cada revisão cria uma nova versão, mantendo histórico.

| Tipo de documento | Uso | Campos principais |
|---|---|---|
| **Plano de carreira** | Saída individual do Programa Carreira | Prioridades, Ponto A, Ponto B, etapas, comportamentos, indicadores. |
| **Plano de sucessão** | Organização da transição familiar | Papéis, timing, condições, governança, decisões e pendências. |
| **Acordo de conversa** | Registro de alinhamento entre gerações | O que foi dito, ouvido, combinado e deixado em aberto. |
| **Revisão trimestral** | Acompanhamento de planos | O que avançou, o que mudou, o que será ajustado. |
| **Ata de encontro familiar** | Registro formal ou semiformal | Participantes, decisões, responsáveis e próximos passos. |

---

### 6.14 Página de templates

| Tipo de template | Exemplo |
|---|---|
| Programa | Programa Carreira completo. |
| Módulo | Módulo 05 – Prototipando. |
| Encontro | Roteiro de devolutiva do Termômetro. |
| Diagnóstico | Framework Life Design. |
| Entregável | Plano de carreira final. |
| Documento | Plano de sucessão. |
| E-mail ou mensagem | Convite para diagnóstico ou lembrete de entrega. |

---

### 6.15 Página administrativa

| Seção | Função |
|---|---|
| **Usuários** | Criar, convidar, editar papéis e desativar usuários. |
| **Permissões** | Definir o que cada papel pode ver e editar. |
| **Marca** | Cores, logo, fonte e texto institucional. |
| **Integrações** | Calendário, e-mail, armazenamento, IA e autenticação. |
| **Auditoria** | Histórico de alterações em dados sensíveis. |
| **Exportação** | Exportar dados para CSV, Markdown ou PDF quando necessário. |

---

## 7. Frameworks metodológicos

### 7.1 Framework de Transição (Famílias Empresárias)

| Eixo | O que mede | Interpretação prática |
|---|---|---|
| **Next Generation Trajectory** | Clareza dos sucessores sobre vida, carreira e lugar possível na família empresária | Mostra se a próxima geração está indefinida, consciente, em exploração ou posicionada |
| **Entrepreneurship Cycle** | Vitalidade do negócio em relação ao mercado e ao ciclo empreendedor | Mostra se o negócio está estagnado, em reflexão ou em movimento estratégico |
| **Governance Structures** | Estruturas formais que organizam família, propriedade e empresa | Mostra o grau de formalização e prática da governança |
| **Current Generation Trajectory** | Como a geração atual lida com transição, propósito e vida pós-negócio | Mostra se o sucedido está no piloto automático, consciente, posicionado ou em transição ativa |

A leitura do radar é feita não apenas pelo tamanho do polígono, mas pela **forma**. Um desenho desequilibrado indica descompassos.

### 7.2 Framework de Empreendedorismo

| Eixo | O que mede | Pergunta implícita |
|---|---|---|
| **Problema** | Clareza sobre a dor, o público e a proximidade com o problema | A pessoa sabe qual dor está tentando resolver? |
| **Time** | Capacidades, pessoas e acesso necessários para avançar | Existe suporte suficiente para executar? |
| **Próximo Passo** | Clareza e disposição para agir | Há uma ação concreta definida? |
| **Visão** | Capacidade de imaginar e articular futuro do negócio | Existe uma visão que oriente o movimento? |

### 7.3 Framework de Life Design

| Eixo | O que mede | Interpretação prática |
|---|---|---|
| **North Star** | Prioridades de longo prazo, valores e direcionadores de carreira | Funciona como bússola, não como destino fixo |
| **Ambiente** | Contextos em que a pessoa performa melhor | Ajuda a entender onde há energia, fluidez e encaixe |
| **Alavancas** | Oportunidades e obstáculos que influenciam o caminho | Mostra recursos, relações, barreiras e próximos movimentos |

---

## 8. Fluxos principais

### 8.1 Fluxo de onboarding de cliente

| Etapa | Quem faz | Resultado |
|---|---|---|
| Criar cliente | Admin DRUM | Cliente/família aparece na base. |
| Adicionar participantes | Admin ou mentor | Pessoas recebem papéis e permissões. |
| Escolher programa | Admin ou mentor | Jornada é criada a partir de template. |
| Definir cronograma | Mentor | Módulos e encontros ganham datas previstas. |
| Enviar diagnóstico inicial | Mentor | Participantes recebem link de resposta. |
| Fazer devolutiva | Mentor | Diagnóstico vira interpretação e plano inicial. |

### 8.2 Fluxo do mentorado

| Momento | Experiência |
|---|---|
| Primeiro acesso | O usuário vê boas-vindas, seu programa e o diagnóstico pendente. |
| Durante a jornada | A home pessoal mostra módulo atual, tarefas e conteúdos. |
| Antes do encontro | A plataforma exibe pré-work e pergunta de reflexão. |
| Depois do encontro | O usuário vê síntese compartilhada e próximos passos. |
| No fim do módulo | O sistema pede entregável e libera próximo módulo. |
| No fim do programa | A pessoa recebe seu plano final e histórico da jornada. |

### 8.3 Fluxo do mentor

| Ação do mentor | Como a plataforma ajuda |
|---|---|
| Preparar encontro | Mostra histórico, módulo, entregáveis e perguntas sugeridas. |
| Registrar sessão | Oferece campos de notas privadas e compartilhadas. |
| Gerar próximos passos | Cria tarefas a partir das decisões. |
| Revisar entregável | Permite comentar, aprovar ou pedir ajuste. |
| Fazer devolutiva | Mostra radar, respostas e campos para interpretação. |
| Acompanhar progresso | Dashboard por mentorado ou família. |

### 8.4 Fluxo de sucessão familiar

| Fase | Plataforma |
|---|---|
| Diagnóstico | Aplica Framework de Transição, Termômetro e diagnósticos individuais. |
| Devolutiva | Mostra leituras individuais e familiares. |
| Desenvolvimento | Acompanha módulos dos sucessores. |
| Transição | Acompanha módulos do sucedido e alinhamentos. |
| Conversas familiares | Estrutura pautas, registros e acordos. |
| Plano | Consolida papéis, próximos passos e revisões trimestrais. |

---

## 9. Identidade visual e marca

A interface deve parecer **editorial, calma e precisa**. Evitar excesso de cores, sombras fortes e componentes muito corporativos. A DRUM trabalha com temas sensíveis e humanos; o visual precisa transmitir confiança, profundidade e clareza.

### 9.1 Tokens de cor

| Token | Valor | Uso |
|---|---|---|
| Fundo principal | `#F5F4F0` | Background geral da aplicação. |
| Fundo de card claro | `#FAFAF8` ou `#FFFFFF` | Cards, painéis e áreas de conteúdo. |
| Texto principal | `#1A1A1A` | Títulos e corpo principal. |
| Texto secundário | `#666666` | Descrições, labels e textos auxiliares. |
| Texto terciário | `#999999` | Metadados, placeholders e estados menos importantes. |
| Borda quente | `#E0DDD8` | Bordas de cards, inputs e separadores. |
| Borda neutra | `#CCCCCC` | Estados inativos e linhas secundárias. |
| **Cor primária DRUM** | `#D85A30` | Botões principais, links ativos, destaques e gráficos. |
| Primária clara | `#FDF5F3` | Background de tags e alertas suaves ligados à marca. |
| Primária média | `#E8C8BE` | Bordas ou preenchimentos leves de destaque. |
| Sucesso | `#1D9E75` | Concluído, positivo, evolução ou status saudável. |
| Preto | `#000000` | Uso pontual, nunca dominante. |
| Branco | `#FFFFFF` | Cards, modais e superfícies. |

### 9.2 Tipografia

| Uso | Fonte | Peso | Tamanho sugerido |
|---|---|---|---|
| H1 | DM Sans | 600 ou 700 | 32–40px |
| H2 | DM Sans | 600 | 24–28px |
| H3 | DM Sans | 600 | 18–22px |
| Corpo | DM Sans | 400 | 15–16px |
| Label | DM Sans | 500 | 13–14px |
| Texto auxiliar | DM Sans | 400 | 12–14px |
| Código/ID | DM Mono | 400 | 12–14px |

### 9.3 Diretrizes de componentes

| Componente | Diretriz |
|---|---|
| Cards | Fundo branco/off-white, borda `#E0DDD8`, raio de 12px, sombra mínima ou nenhuma. |
| Botão primário | Fundo `#D85A30`, texto branco, hover levemente mais escuro. |
| Botão secundário | Fundo transparente ou `#FAFAF8`, borda `#E0DDD8`, texto `#1A1A1A`. |
| Tags | Fundo suave, texto escuro, cores por status. |
| Inputs | Altura confortável, borda quente, foco em laranja queimado. |
| Radar | Linhas cinza quente, área atual com laranja translúcido, alvo com contorno mais forte. |
| Timeline | Linha vertical ou horizontal com marcadores por módulo e status. |
| Sidebar | Fundo `#F5F4F0` ou branco, itens com estado ativo em `#FDF5F3`. |
| Modal | Fundo branco, borda suave, foco em uma tarefa por vez. |

---

## 10. Componentes essenciais

| Componente | Função |
|---|---|
| **AppShell** | Estrutura geral com sidebar, topo e área de conteúdo. |
| **PageHeader** | Título, descrição, status e ações principais. |
| **EntityCard** | Card genérico para cliente, pessoa, jornada, programa ou conteúdo. |
| **StatusBadge** | Sinalizar ativo, atrasado, concluído, em revisão etc. |
| **ProgressBar** | Progresso de jornada, módulo ou entregável. |
| **RadarChart** | Visualizar frameworks com níveis atuais e alvo. |
| **Timeline** | Exibir cronograma de módulos e encontros. |
| **RichTextEditor** | Editar notas, conteúdos, entregáveis e documentos. |
| **FormBuilder** | Criar perguntas de diagnósticos e entregáveis. |
| **TaskList** | Listar e editar próximos passos. |
| **CommentThread** | Comentários em entregáveis e documentos. |
| **VersionHistory** | Histórico de versões de planos e entregáveis. |
| **PermissionGate** | Mostrar ou ocultar conteúdo conforme papel. |

---

## 11. Modelo de dados

O banco de dados deve ser **relacional**.

| Entidade | Campos principais | Relações |
|---|---|---|
| **User** | id, nome, email, papel, status, avatar | Pode ser mentor, mentorado, admin, familiar etc. |
| **Organization** | id, nome, tipo | Pode representar empresa, escola, family office ou cliente institucional. |
| **Family** | id, nome, descrição, status | Tem membros, empresas, jornadas e acordos. |
| **PersonProfile** | user_id, bio, papel familiar, geração, relação com empresa | Relaciona usuário a família e jornada. |
| **Company** | id, nome, setor, estágio, descrição | Vinculada a família ou organização. |
| **ProgramTemplate** | id, nome, descrição, tipo, status | Tem módulos e templates. |
| **ModuleTemplate** | id, programa_id, ordem, nome, objetivo, duração | Tem conteúdos e entregáveis. |
| **Journey** | id, programa_id, cliente_id, mentor_id, status, datas | Instância real de programa. |
| **JourneyParticipant** | journey_id, user_id, papel_na_jornada | Define participantes e permissões. |
| **Session** | id, journey_id, módulo_id, data, objetivo, notas | Encontros de mentoria. |
| **ContentItem** | id, título, tipo, corpo, url, arquivo, tags | Biblioteca de repertório. |
| **Deliverable** | id, journey_id, módulo_id, título, status, conteúdo | Entregáveis do participante. |
| **AssessmentTemplate** | id, nome, framework, perguntas | Modelo de diagnóstico. |
| **AssessmentResponse** | id, template_id, user_id, journey_id, respostas | Respostas do diagnóstico. |
| **AssessmentResult** | id, response_id, scores, interpretação | Resultado calculado e devolutiva. |
| **Task** | id, título, responsável, prazo, status, vínculo | Próximos passos. |
| **Agreement** | id, family_id, título, tipo, conteúdo, status | Acordos familiares e planos. |
| **Comment** | id, entidade_tipo, entidade_id, autor, texto | Comentários. |
| **FileAsset** | id, entidade_tipo, entidade_id, url, nome | Arquivos e anexos. |
| **AuditLog** | id, usuário, ação, entidade, timestamp | Histórico de ações sensíveis. |

---

## 12. Requisitos funcionais e não funcionais

### 12.1 Requisitos funcionais

| Código | Requisito | Prioridade |
|---|---|---|
| RF-01 | Usuários devem poder fazer login e ver páginas conforme seu papel. | Alta |
| RF-02 | Admins devem poder criar clientes, famílias, empresas e pessoas. | Alta |
| RF-03 | Admins e mentores devem poder criar jornadas a partir de programas/templates. | Alta |
| RF-04 | A plataforma deve permitir criar e editar programas, módulos e conteúdos. | Alta |
| RF-05 | Participantes devem responder diagnósticos dentro da plataforma. | Alta |
| RF-06 | Diagnósticos devem gerar resultados visuais, incluindo radar quando aplicável. | Alta |
| RF-07 | Mentores devem registrar encontros com notas privadas e notas compartilháveis. | Alta |
| RF-08 | Participantes devem preencher e enviar entregáveis. | Alta |
| RF-09 | Mentores devem poder comentar, aprovar ou pedir ajustes em entregáveis. | Alta |
| RF-10 | Tarefas devem ter responsável, prazo, status e vínculo com jornada/módulo/encontro. | Alta |
| RF-11 | Planos e acordos devem ter versionamento. | Média |
| RF-12 | Biblioteca de conteúdos deve permitir filtros por programa, módulo, tipo e público. | Alta |
| RF-13 | Plataforma deve permitir anexar arquivos. | Média |
| RF-14 | Plataforma deve exportar planos, devolutivas e acordos para PDF ou Markdown. | Média |
| RF-15 | Admin deve conseguir configurar cores, logo e textos básicos da marca. | Média |
| RF-16 | Sistema deve manter auditoria de alterações em dados sensíveis. | Alta |
| RF-17 | Mentores devem ver alertas de atrasos e pendências. | Alta |
| RF-18 | A plataforma deve permitir convidar usuários por e-mail. | Média |
| RF-19 | A plataforma deve suportar comentários em entregáveis e documentos. | Média |
| RF-20 | A plataforma deve permitir duplicar programas e módulos como templates. | Alta |

### 12.2 Requisitos não funcionais

| Categoria | Requisito |
|---|---|
| **Segurança** | Dados protegidos por autenticação, autorização por papel e regras de acesso por entidade. |
| **Privacidade** | Notas privadas de mentor nunca devem aparecer para mentorados ou familiares sem compartilhamento explícito. |
| **Performance** | Dashboards devem carregar rapidamente mesmo com muitos clientes e jornadas. |
| **Usabilidade** | A experiência deve ser mais guiada que o Notion; usuário não deve precisar "procurar" o próximo passo. |
| **Escalabilidade** | A arquitetura deve permitir múltiplos programas, clientes, famílias e mentores. |
| **Manutenibilidade** | Templates e conteúdos devem poder ser editados pelo time DRUM sem deploy. |
| **Auditabilidade** | Mudanças em diagnósticos, acordos e permissões devem ser registradas. |
| **Responsividade** | Deve funcionar bem em desktop e tablet; mobile pode ser leitura e tarefas simples no MVP. |

---

## 13. MVP e Roadmap

### 13.1 Escopo do MVP

| Área | Incluir | Não incluir ainda |
|---|---|---|
| Autenticação e papéis | Admin, mentor e mentorado | Parceiro externo avançado. |
| Clientes e famílias | Cadastro, página individual e membros | Árvore familiar visual complexa. |
| Programas e módulos | Templates editáveis | Editor avançado tipo Notion completo. |
| Jornadas | Instanciar programa para cliente real | Automação complexa de calendário. |
| Diagnósticos | Formulários simples e radar manual/calculado | IA interpretativa completa. |
| Encontros | Notas privadas, notas compartilhadas e tarefas | Transcrição automática. |
| Entregáveis | Preenchimento, status e comentários | Versionamento sofisticado. |
| Conteúdos | Biblioteca com filtros | Recomendação automática. |
| Tarefas | Lista, status, prazo e responsável | Kanban avançado. |

### 13.2 Roadmap pós-MVP

| Fase | Evolução |
|---|---|
| **Fase 2** | Exportação de devolutivas, planos e acordos em PDF/Markdown; versionamento completo; calendário integrado. |
| **Fase 3** | IA DRUM para interpretar diagnósticos, sugerir próximos passos, gerar roteiros de conversa e resumir encontros. |
| **Fase 4** | Portal de família com mapa de alinhamento, acordos, revisões trimestrais e visão de sucessão. |
| **Fase 5** | Analytics de operação, qualidade de mentoria, progresso por programa e indicadores de transformação. |
| **Fase 6** | Marketplace ou rede DRUM para conversas de prototipagem, mentores parceiros e especialistas. |

---

## 14. Inventário de rotas

| Página/rota | Usuários principais | Função | Subpáginas ou abas |
|---|---|---|---|
| `/dashboard` | Admin, mentor, mentorado | Central de trabalho do dia | Resumo, pendências, encontros, jornadas. |
| `/clientes` | Admin, mentor | Base de clientes e famílias | Lista, kanban, filtros, novo cliente. |
| `/clientes/[id]` | Admin, mentor | Página de cliente individual ou institucional | Visão geral, pessoas, jornadas, notas, arquivos. |
| `/familias` | Admin, mentor | Base de famílias empresárias | Lista, status, mentor, empresa, fase. |
| `/familias/[id]` | Admin, mentor, familiares autorizados | Hub da família empresária | Mapa familiar, empresas, radar, trilhas, encontros, acordos. |
| `/pessoas` | Admin, mentor | Cadastro de pessoas | Perfil, papel, família, empresa, jornadas. |
| `/pessoas/[id]` | Admin, mentor, usuário dono | Perfil individual | Diagnósticos, entregáveis, encontros, plano. |
| `/programas` | Admin, mentor | Modelos de programas | Carreira, sucessão, empreendedorismo, sprints. |
| `/programas/[id]` | Admin, mentor | Detalhe do programa | Módulos, conteúdos, diagnósticos, entregáveis padrão. |
| `/jornadas` | Admin, mentor | Programas em execução | Lista, status, progresso, responsável. |
| `/jornadas/[id]` | Admin, mentor, participantes | Ambiente principal da jornada | Visão, módulos, encontros, entregáveis, tarefas, diagnóstico. |
| `/diagnosticos` | Admin, mentor | Biblioteca de assessments | Templates, respostas, devolutivas. |
| `/diagnosticos/[id]/responder` | Mentorado, sucedido, familiar | Responder diagnóstico | Perguntas, progresso, envio. |
| `/diagnosticos/[id]/resultado` | Mentor, participante autorizado | Ver resultado e devolutiva | Radar, scores, interpretação, recomendações. |
| `/frameworks` | Admin, mentor | Biblioteca metodológica | Life Design, Empreendedorismo, Transição. |
| `/conteudos` | Admin, mentor, mentorado | Biblioteca de repertório | Textos, vídeos, PDFs, exercícios, templates. |
| `/encontros` | Admin, mentor | Agenda e registros | Próximos, realizados, sem nota, com pendência. |
| `/encontros/[id]` | Mentor, participantes autorizados | Registro de mentoria | Pauta, notas, decisões, tarefas. |
| `/entregaveis` | Admin, mentor, mentorado | Central de entregáveis | Pendentes, enviados, revisados, aprovados. |
| `/entregaveis/[id]` | Mentor, mentorado | Página do entregável | Conteúdo, comentários, anexos, versões. |
| `/tarefas` | Todos | Próximos passos | Minhas tarefas, por jornada, atrasadas, concluídas. |
| `/planos` | Admin, mentor, participantes autorizados | Planos e acordos | Plano de carreira, plano de sucessão, revisões. |
| `/templates` | Admin | Modelos reutilizáveis | Programas, módulos, encontros, entregáveis, mensagens. |
| `/admin` | Admin | Configurações | Usuários, permissões, marca, integrações, auditoria. |

---

## 15. Conteúdo dos programas

### 15.1 Trilha de Desenvolvimento de Sucessores (7 módulos)

| Ordem | Módulo | Pergunta central | Entregável |
|---|---|---|---|
| 00 | Kick-off | Como criar as condições para o processo funcionar? | Gravação ou registro do relato de onde está. |
| 01 | Seu Dilema | Qual é o dilema real de carreira que precisa ser nomeado? | Dilema escrito em até 140 caracteres. |
| 02 | A História da Família | O que é herança, o que é identidade própria e o que deve ser carregado adiante? | 3 princípios da família + 3 princípios que quer carregar. |
| 03 | Caminhos Possíveis | Que futuros podem ser imaginados antes de decidir? | 1 a 3 prioridades essenciais da visão de longo prazo. |
| 04 | Uma Direção | Qual direção concreta pode ser assumida agora, sem fingir certeza absoluta? | Ponto B em uma frase + next right step para 7 dias. |
| 05 | Prototipando | Como testar uma direção antes de apostar alto nela? | Registro das conversas + revisão do Ponto B. |
| 06 | O Plano | Como transformar direção em plano concreto para o próximo ano? | Plano completo com prioridades, Ponto A, Ponto B, etapas e comportamentos. |

Cada página de módulo deve ter a mesma estrutura: **objetivo · pergunta central · repertório · exercício · entregável · encontro sugerido · checklist de conclusão · comentários do mentor · histórico**.

### 15.2 Trilha de Transição do Sucedido (6 módulos)

| Ordem | Módulo | Pergunta central | Entregável sugerido |
|---|---|---|---|
| 01 | Ciclo do Empreendedor | Em que momento a empresa está e qual é a visão de futuro? | Mapa do ciclo atual e visão de futuro do negócio. |
| 02 | Visão para a Sucessão | Qual é a visão para a sucessão e o que isso implica? | Documento de visão da sucessão. |
| 03 | Alinhamento entre Sócios | Sócios estão falando a mesma língua sobre futuro, família e negócio? | Mapa de convergências, divergências e decisões pendentes. |
| 04 | Alinhamento entre Gerações | O que comunicar à próxima geração e o que ouvir dela? | Roteiro de conversa e registro do encontro intergeracional. |
| 05 | Alinhamento com Familiares | Como a família se organiza e se relaciona com o negócio? | Registro de assembleia familiar, acordos e próximos passos. |
| 06 | Plano de Transição | Como organizar tudo isso em um plano concreto para os próximos anos? | Plano de transição versionado e revisável. |

---

## 16. Migração do Notion

| No Notion hoje | Na plataforma nova | Como migrar |
|---|---|---|
| Página inicial da operação | Dashboard | Recriar manualmente com cards e métricas. |
| Database de clientes | Clientes e Famílias | Importar via CSV ou cadastrar manualmente no MVP. |
| Página de cada cliente | Página individual de cliente/família | Migrar dados principais, notas e links importantes. |
| Páginas de programa | Programas e Templates | Transformar em modelos reutilizáveis. |
| Páginas de módulos | Módulos | Cada módulo vira item estruturado com objetivo, conteúdo e entregáveis. |
| Checklists | Tarefas | Converter em tarefas com responsável, status e prazo. |
| Atas e reuniões | Encontros | Converter para páginas de encontros. |
| Exercícios | Entregáveis | Transformar em formulários ou documentos estruturados. |
| Links e referências | Conteúdos | Classificar por tipo, programa, módulo e público. |
| Documentos finais | Acordos e Planos | Migrar como documentos versionados. |

---

## 17. Critérios de aceite

A primeira versão pode ser considerada funcional quando a DRUM conseguir **operar um programa real sem voltar ao Notion para o essencial**.

| Critério | Condição de aceite |
|---|---|
| Criar cliente | Admin cadastra uma família ou mentorado individual. |
| Criar programa | Admin cria um programa com módulos e conteúdos. |
| Criar jornada | Admin instancia o programa para um cliente e atribui mentor. |
| Acessar como mentorado | Mentorado vê sua jornada, módulo atual, tarefas e entregáveis. |
| Registrar encontro | Mentor cria encontro, registra notas e gera tarefas. |
| Enviar entregável | Mentorado preenche entregável e mentor revisa. |
| Aplicar diagnóstico | Usuário responde diagnóstico e sistema mostra resultado. |
| Acompanhar progresso | Dashboard mostra jornadas, pendências e próximos encontros. |
| Controlar permissão | Notas privadas não aparecem para usuários não autorizados. |
| Manter conteúdos | Time DRUM edita repertórios e templates sem mexer no código. |

---

## Status dos objetos

| Objeto | Status |
|---|---|
| Cliente/Família | Lead · Onboarding · Ativo · Pausado · Concluído · Arquivado |
| Jornada | Não iniciada · Ativa · Pausada · Concluída · Cancelada |
| Módulo da jornada | Bloqueado · Liberado · Em andamento · Concluído · Pulado |
| Diagnóstico | Não enviado · Enviado · Respondido · Em devolutiva · Concluído |
| Entregável | Não iniciado · Em andamento · Enviado · Em revisão · Aprovado · Precisa ajuste |
| Encontro | Agendado · Realizado sem notas · Registrado · Cancelado · Remarcado |
| Tarefa | Aberta · Em andamento · Bloqueada · Concluída · Cancelada |
| Plano/Acordo | Rascunho · Em revisão · Aprovado · Vigente · Substituído · Arquivado |
| Conteúdo | Rascunho · Publicado · Arquivado |

---

*Documento gerado em maio de 2026 com base nos briefings da Manus AI e análise da plataforma DRUM – Plataforma de Sucessão.*
