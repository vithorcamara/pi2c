# Estrutura do Projeto

```text
/
├── docs/                    ← Documentação do projeto
│   ├── backlog.md           ← Backlog, HUs e critérios de aceitação
│   ├── arquitetura.md       ← Decisões arquiteturais e stack tecnológica
│   ├── modelagem.md         ← Diagramas, casos de uso e modelagem de dados
│   ├── testes.md            ← Plano de testes e evidências
│   └── reunioes.md          ← Registros de reuniões e decisões do grupo
│
├── app/                     ← Aplicação React/VitePWA
│   │
│   ├── node_modules/        ← Dependências instaladas pelo npm
│   │
│   ├── public/              ← Arquivos públicos servidos sem processamento
│   │   ├── favicon.ico      ← Ícone da aplicação
│   │   ├── manifest.json    ← Manifesto do PWA
│   │   └── icons/           ← Ícones utilizados pelo PWA
│   │
│   ├── src/                 ← Código-fonte da aplicação
│   │   │
│   │   ├── assets/          ← Imagens, logos e recursos visuais
│   │   │
│   │   ├── components/      ← Componentes reutilizáveis
│   │   │   ├── Button/      ← Componente de botão
│   │   │   ├── Header/      ← Cabeçalho da aplicação
│   │   │   └── Card/        ← Componentes visuais diversos
│   │   │
│   │   ├── pages/           ← Páginas ou telas do sistema
│   │   │   ├── Home/        ← Página inicial
│   │   │   ├── Login/       ← Página de autenticação
│   │   │   └── Dashboard/   ← Painel principal
│   │   │
│   │   ├── hooks/          ← Lógicas reutilizáveis
│   │   │   └── useLocalStorage.jsx ← configuração de armazenamento cache
│   │   │
│   │   ├── routes/          ← Configuração de rotas
│   │   │   └── AppRoutes.jsx
│   │   │
│   │   ├── services/        ← Comunicação com APIs e banco de dados
│   │   │   ├── supabase.js
│   │   │   └── authService.js
│   │   │
│   │   ├── styles/          ← Estilos globais da aplicação
│   │   │   ├── global.css
│   │   │   └── variables.css
│   │   │
│   │   ├── utils/           ← Funções utilitárias e auxiliares
│   │   │   ├── validators.js
│   │   │   └── formatters.js
│   │   │
│   │   ├── App.jsx          ← Componente principal da aplicação
│   │   └── main.jsx         ← Ponto de entrada do React
│   │
│   ├── package.json         ← Dependências e scripts do projeto
│   ├── vite.config.js       ← Configuração do Vite e VitePWA
│   └── package-lock.json    ← Travamento das versões instaladas
│
├── .gitignore               ← Arquivos e pastas ignorados pelo Git
│
└── README.md                ← Apresentação geral do projeto