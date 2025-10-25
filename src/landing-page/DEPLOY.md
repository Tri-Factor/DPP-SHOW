# Deploy para GitHub Pages

Este arquivo configura o deploy automático da landing page Looma para GitHub Pages.

## Como funciona

1. **Trigger**: O deploy é executado automaticamente a cada push na branch `main`
2. **Build**: O projeto é compilado usando `npm run build` 
3. **Deploy**: Os arquivos da pasta `dist` são publicados no GitHub Pages

## Configuração necessária

### 1. Habilitar GitHub Pages no repositório
1. Vá em **Settings** > **Pages**
2. Em **Source**, selecione **GitHub Actions**
3. Salve as configurações

### 2. Verificar configurações do Vite
O arquivo `vite.config.js` já está configurado com:
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/DPP-BR/',  // Nome do repositório
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
```

## URLs de acesso

- **Produção**: `https://tri-factor.github.io/DPP-BR/`
- **Branch**: A partir da branch `main`

## Comandos úteis

```bash
# Build local para teste
npm run build

# Preview do build local
npm run preview

# Deploy manual (via Actions)
# Vá em Actions > Deploy to GitHub Pages > Run workflow
```

## Estrutura do workflow

- **Build Job**: Instala dependências e compila o projeto
- **Deploy Job**: Publica os arquivos no GitHub Pages
- **Permissões**: Configuradas para permitir escrita no Pages
- **Cache**: Utiliza cache do npm para builds mais rápidos

## Troubleshooting

### Se o deploy falhar:
1. Verifique se o GitHub Pages está habilitado
2. Confira se a source está em "GitHub Actions"
3. Verifique os logs na aba **Actions**
4. Certifique-se que o `base` no vite.config.js está correto

### Se os assets não carregarem:
1. Verifique se o `base: '/DPP-BR/'` está correto
2. Confirme que todos os caminhos são relativos
3. Teste o build local com `npm run preview`