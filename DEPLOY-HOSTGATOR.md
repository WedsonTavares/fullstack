# Deploy no Hostgator - Instruções

## Arquivos Gerados para Deploy

Este projeto foi configurado para deploy no Hostgator com as seguintes otimizações:

### Configurações Principais:
- **next.config.mjs**: Configurado para output standalone e otimizações para hospedagem compartilhada
- **server.js**: Servidor customizado para o Hostgator
- **.htaccess**: Configurações do Apache para cache e redirecionamentos
- **app.json**: Configurações de versão do Node.js

### Como fazer o Deploy:

1. **Preparar arquivos:**
   - Faça upload de todos os arquivos do projeto para o diretório `public_html` ou subdiretório desejado
   - Certifique-se de que o arquivo `.htaccess` está no diretório raiz
   - Configure as variáveis de ambiente no painel do Hostgator

2. **Configurar Node.js no Hostgator:**
   - Acesse o cPanel do Hostgator
   - Vá em "Node.js" ou "Node.js Selector"
   - Crie uma nova aplicação Node.js
   - Defina a versão do Node.js (recomendado: 18.x ou superior)
   - Configure o arquivo de entrada como `server.js`

3. **Instalar dependências:**
   ```bash
   npm install --production
   ```

4. **Configurar variáveis de ambiente:**
   No painel do Node.js do Hostgator, adicione as seguintes variáveis:
   - `NODE_ENV=production`
   - `PORT=3000` (ou a porta fornecida pelo Hostgator)
   - Todas as outras variáveis do arquivo `.env.local`

5. **Iniciar a aplicação:**
   A aplicação será iniciada automaticamente pelo Hostgator quando configurada corretamente.

### Arquivos de Build:
- Pasta `.next/`: Contém o build de produção
- Pasta `.next/standalone/`: Versão standalone da aplicação
- Pasta `public/`: Arquivos estáticos

### Troubleshooting:
- Verifique os logs de erro no painel do Hostgator
- Certifique-se de que todas as dependências estão instaladas
- Verifique se as variáveis de ambiente estão configuradas corretamente
- Teste a conexão com o MongoDB

### Variáveis de Ambiente Configuradas:
- SENDGRID_API_KEY
- NEXT_PUBLIC_EMAILJS_USER_ID
- NEXT_PUBLIC_EMAILJS_SERVICE_ID
- NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
- NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
- NEXT_PUBLIC_EMAILJS_PRIVATE_KEY
- CRON_SECRET
- MONGODB_URI
- EMAIL_USER
- EMAIL_PASS
