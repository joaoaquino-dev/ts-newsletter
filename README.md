🚀 TS Newsletter
Uma aplicação de inscrição em Newsletter desenvolvida com React 19 e TypeScript, focada em validação de formulários e manipulação de estados. O projeto aplica conceitos de Engenharia de Software como separação de responsabilidades (SRP) e tipagem rigorosa de dados.

🛠️ Tecnologias e Conceitos
React 19: Uso de Hooks (useState) e tratamento de eventos modernos (SubmitEvent).

TypeScript: Definição de interfaces (User.ts) e uso de type-only imports para otimização.

Tailwind CSS: Estilização utilitária e layout responsivo.

Vite: Ambiente de desenvolvimento de alta performance.

📋 Funcionalidades Técnicas
Validação Customizada: Lógica de validação isolada em utils/validate.ts, retornando mensagens de erro específicas para cada campo.

Gestão de Erros: Exibição condicional de mensagens de erro abaixo dos inputs com tipagem segura.

Persistência de Dados: Captura de dados em tempo real e reset de formulário após envio bem-sucedido.

Segurança de Tipos: Contrato de dados único (User) compartilhado entre componente e utilitários.

📂 Organização do Código
O projeto segue uma estrutura modular para facilitar a manutenção:

src/components/Form.tsx: Componente principal de interface e controle de estado.

src/types/User.ts: Definição do contrato de dados da aplicação.

src/utils/validate.ts: Lógica de validação desacoplada da interface.

🚀 Como Executar
Clone o repositório:

Bash
git clone https://github.com/joaoaquino-dev/ts-newsletter.git
Instale as dependências:

Bash
npm install
Rode o projeto:

Bash
npm run dev
👤 Autor
João Aquino
