# 📅 AgendaPro

AgendaPro é um aplicativo mobile moderno para **gestão de agendamentos em negócios de estética**, como:

- Barbeiros  
- Cabeleireiros  
- Manicures  
- Designers de sobrancelha  
- Clínicas estéticas  

A proposta é oferecer uma experiência **premium, rápida e extremamente intuitiva**, permitindo que clientes encontrem serviços próximos e realizem agendamentos em poucos toques.

---

## 🚀 Visão do Produto

O AgendaPro foi pensado para ser:

- Clean  
- Profissional  
- Escalável  
- Fácil de usar  
- Visualmente consistente  

O aplicativo não é nichado para um único tipo de estabelecimento —  
ele se adapta ao negócio através da configuração feita pelo próprio dono.

👉 O sistema define a estrutura.  
👉 O estabelecimento define o conteúdo.

---

## 🧠 Filosofia de Engenharia

Este projeto segue princípios modernos de arquitetura frontend:

### 🔹 Design System First
Toda a interface é guiada por tokens centralizados:

- cores  
- tipografia  
- espaçamentos  
- bordas  
- elevação  

Nada é hardcoded.

Isso garante consistência visual e facilita evolução futura.

---

### 🔹 System Components

A UI é construída sobre componentes reutilizáveis:


Exemplos:

- AppText  
- AppButton  
- AppCard  
- AppInput  
- AppScreen  

Essa abordagem impede inconsistências e mantém o app com aparência premium conforme cresce.

---

### 🏗️ Arquitetura Escalável

## 🏗️ Estrutura do Projeto

O Velora segue uma arquitetura modular pensada para escalar com previsibilidade e baixa complexidade.
src
│
├── components
│   ├── system                # Design system do app (reutilizáveis e neutros)
│   │   ├── Button
│   │   │   ├── AppButton.tsx
│   │   │   ├── styles.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── Text
│   │   │   ├── AppText.tsx
│   │   │   └── index.ts
│   │   │
│   │   ├── Input
│   │   │   ├── AppInput.tsx
│   │   │   ├── styles.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── Card
│   │   │   ├── AppCard.tsx
│   │   │   ├── styles.ts
│   │   │   └── index.ts
│   │   │
│   │   ├── Screen
│   │   │   ├── AppScreen.tsx
│   │   │   ├── styles.ts
│   │   │   └── index.ts
│   │   │
│   │   └── index.ts
│   │
│   └── shared                # Componentes reutilizáveis com leve contexto de UI
│       ├── Header
│       ├── EmptyState
│       ├── Loader
│       └── Section
│
├── features                 # Módulos de negócio isolados
│   ├── auth
│   │   ├── screens
│   │   ├── hooks
│   │   ├── services
│   │   └── types
│   │
│   ├── business
│   │   ├── screens
│   │   ├── components
│   │   ├── hooks
│   │   ├── services
│   │   └── types
│   │
│   ├── services
│   │   ├── screens
│   │   ├── components
│   │   ├── hooks
│   │   └── types
│   │
│   ├── professionals
│   │   ├── screens
│   │   ├── components
│   │   ├── hooks
│   │   └── types
│   │
│   └── appointments
│       ├── screens
│       ├── components
│       ├── hooks
│       └── types
│
├── services                # Camada de integração externa (API, Firebase, etc.)
│   ├── api.ts
│   ├── httpClient.ts
│   └── endpoints.ts
│
├── store                   # Gerenciamento de estado global
│   ├── index.ts
│   ├── slices
│   └── selectors
│
├── styles
│   ├── tokens
│   │   └── design.tokens.ts
│   │
│   └── theme
│       └── paper.theme.ts
│
├── types                   # Contratos globais da aplicação
│   ├── appointment.types.ts
│   ├── business.types.ts
│   ├── service.types.ts
│   ├── component.types.ts
│   ├── theme.types.ts
│   └── index.ts
│
└── utils                   # Funções puras e helpers
    ├── formatCurrency.ts
    ├── formatDate.ts
    ├── generateTimeSlots.ts
    └── validation.ts


Separação clara entre:

👉 UI  
👉 regras de negócio  
👉 estado  
👉 integrações  

Preparado para crescimento sem gerar débito técnico.

---

## 🛠️ Stack

- **React Native**
- **Expo**
- **TypeScript**
- **Expo Router**
- **React Native Paper**
- **Design Tokens**

---

## 🎨 Design

O app segue uma linha visual **premium minimalista**, priorizando:

- respiro  
- legibilidade  
- hierarquia tipográfica  
- baixa poluição visual  

A intenção é transmitir confiança e profissionalismo — fatores críticos para negócios de atendimento.

📈 Status do Projeto

🚧 Em desenvolvimento.

Foco atual:

Estrutura sólida

Design system

Experiência do usuário

Performance

🔮 Roadmap (alto nível)

Cadastro de estabelecimentos

Gestão de serviços

Seleção de profissionais

Agenda inteligente

Notificações

Integração com WhatsApp

Pagamentos

Painel do estabelecimento

👨‍💻 Autor

Desenvolvido por Lucas Távora de Lima.

Projeto construído com mentalidade de produto — não apenas como exercício técnico.