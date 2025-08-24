# Portfólio Fullstack

Este projeto é um portfólio profissional desenvolvido com Next.js, React, TailwindCSS, Swiper, Framer Motion e integração com MongoDB Atlas. Ele apresenta projetos, estatísticas, currículo para download e formulário de contato.

## Estrutura do Projeto

- **app/**: Páginas principais do site (home, projetos, contato, serviços, currículo)
- **components/**: Componentes reutilizáveis (Header, Nav, Stats, Foto, botões, UI, etc)
- **lib/**: Utilitários e integração com MongoDB
- **public/assets/**: Imagens e arquivos estáticos

## Principais Funcionalidades

- Exibição de projetos com imagens, descrição, tecnologias e links
- Navegação entre projetos via Swiper e botões customizados
- Estatísticas animadas (CountUp)
- Layout responsivo e moderno com TailwindCSS
- Download do currículo em PDF
- Formulário de contato integrado
- Integração com MongoDB Atlas para dados dinâmicos
- Tooltips para melhor UX

## Manutenção

### 1. Atualização de Conteúdo
- Para adicionar ou editar projetos, altere o array `projects` em `app/projects/page.jsx`.
- Para atualizar estatísticas, edite o array `stats` em `components/Stats.jsx`.
- Imagens devem ser adicionadas em `public/assets/`.
- Para atualizar o currículo, substitua o PDF em `public/assets/`.

### 2. Dependências
- Instale dependências com `npm install`.
- Principais pacotes: `next`, `react`, `tailwindcss`, `swiper`, `framer-motion`, `mongodb`, `react-countup`.

### 3. Deploy
- O deploy é feito automaticamente pelo Vercel ao dar push no branch principal.
- Verifique logs do Vercel para erros de build ou ESLint.

### 4. Performance
- Imagens otimizadas com largura/altura fixa para evitar layout shift (CLS).
- Use formatos modernos (WebP) e compressão para novas imagens.
- Monitore Web Vitals (LCP, CLS, TBT) via Vercel Analytics ou Lighthouse.

### 5. Boas Práticas
- Sempre defina `alt` nas imagens para acessibilidade.
- Use componentes reutilizáveis para manter o código limpo.
- Remova dependências não utilizadas.
- Prefira hooks de memoização para componentes pesados.

### 6. Contato e Suporte
- Para dúvidas ou manutenção, consulte o código-fonte e este README.
- Para integração com novos serviços (ex: EmailJS, outros bancos), siga os padrões dos arquivos em `lib/` e `app/api/`.

### 7. Formulário de Contato
O formulário permite que visitantes enviem mensagens diretamente pelo site.
Os campos incluem nome, sobrenome, e-mail, telefone, serviço desejado e mensagem.
A validação é feita para garantir que todos os campos estejam preenchidos corretamente.
O envio é realizado via integração com o EmailJS, sem necessidade de backend próprio.
Para configurar o EmailJS, edite as credenciais e IDs no início do arquivo page.jsx.
Mensagens são enviadas para o e-mail cadastrado no EmailJS.

## Como rodar localmente
```bash
npm install
npm run dev
```
Acesse `http://localhost:3000` no navegador.

---

Mantenha o projeto atualizado e siga as recomendações acima para garantir performance, segurança e facilidade de manutenção.
📄 Bem-vindo ao meu portfólio de desenvolvedor web! Este projeto foi criado para destacar minhas experiências profissionais, habilidades técnicas e formação acadêmica. Sinta-se à vontade para explorar e entrar em contato comigo para colaborações ou oportunidades de trabalho.



🚀 Tecnologias Utilizadas     


<img alt="React" src="https://img.shields.io/badge/React-20232A?style=for-the-badge&amp;logo=react&amp;logoColor=61DAFB">Biblioteca JavaScript para construção de interfaces de usuário.

<img alt="Next.js" src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&amp;logo=nextdotjs&amp;logoColor=white">Framework React para renderização do lado do servidor e geração de sites estáticos.

<img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&amp;logo=tailwind-css&amp;logoColor=white">Framework CSS para estilização rápida e responsiva.
Framer Motion: Biblioteca para animações suaves e interativas.


<img alt="Framer Motion" src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&amp;logo=framer&amp;logoColor=white">Conjunto de ícones para React. 




📋 Pré-requisitos
Antes de começar, certifique-se de ter o Node.js e npm (ou yarn) instalados em sua máquina.

Node.js
npm ou yarn

🔧 1.Instalação
Clone o repositório:
git clone https://github.com/seu-usuario/seu-repositorio.git

2. Navegue até o diretório do projeto.
3.Instale as dependências.
4. 🚀 Executando o Projeto
Para iniciar o servidor de desenvolvimento, execute: npm run dev
5. Abra o navegador e acesse http://localhost:3000 para ver o projeto em execução..


