🚀 TS Newsletter

Aplicação de inscrição em newsletter desenvolvida com React 19 + TypeScript, com foco em validação robusta de formulários, tipagem segura e boas práticas de engenharia de software.

O projeto demonstra organização de código, separação de responsabilidades e uma base sólida para aplicações front-end escaláveis.

🧠 Objetivo do Projeto

Este projeto foi criado para praticar:

Manipulação de formulários com React
Validação de dados desacoplada da UI
Tipagem forte com TypeScript
Organização de código seguindo princípios como SRP (Single Responsibility Principle)
🛠️ Tecnologias Utilizadas
React 19 – Hooks modernos e manipulação de eventos
TypeScript – Tipagem estática e segurança de dados
Tailwind CSS – Estilização rápida e responsiva
Vite – Build tool moderna e performática
⚙️ Funcionalidades
✅ Validação de Formulário
Validação customizada separada da interface
Retorno de erros específicos por campo
Código reutilizável (utils/validate.ts)
⚠️ Tratamento de Erros
Exibição dinâmica de mensagens abaixo dos inputs
Tipagem segura para evitar erros em runtime
🔄 Gerenciamento de Estado
Uso de useState para controle de inputs
Atualização em tempo real dos dados
💾 Persistência Temporária
Dados capturados durante o preenchimento
Reset automático após envio bem-sucedido
🔐 Segurança de Tipos
Interface única (User) compartilhada entre:
Componentes
Validação
Lógica da aplicação
🧱 Estrutura do Projeto
src/
├── components/
│   └── Form.tsx        # Interface e controle do formulário
├── types/
│   └── User.ts         # Contrato de dados
├── utils/
│   └── validate.ts     # Regras de validação
🚀 Como Executar

Clone o repositório:

git clone https://github.com/joaoaquino-dev/ts-newsletter.git

Acesse a pasta:

cd ts-newsletter

Instale as dependências:

npm install

Execute o projeto:

npm run dev
💡 Diferenciais do Projeto
Código limpo e organizado
Separação clara entre lógica e interface
Aplicação de boas práticas reais de mercado
Uso consistente de TypeScript
📈 Possíveis Melhorias Futuras
Integração com API (ex: envio real de newsletter)
Toasts de feedback (sucesso/erro)
Testes unitários (Jest ou Vitest)
Acessibilidade (ARIA)
Máscaras de input
👨‍💻 Autor

João Aquino
🔗 https://github.com/joaoaquino-dev