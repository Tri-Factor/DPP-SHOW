# 🚀 Deploy da Landing Page Looma

## ✅ Arquivos de Deploy Criados

1. **`.github/workflows/deploy.yml`** - Workflow automático do GitHub Actions
2. **`DEPLOY.md`** - Documentação completa de deploy
3. **`vite.config.js`** - Já configurado com `base: '/DPP-BR/'`

## 🔧 Configuração Rápida

### 1. Habilitar GitHub Pages
```
Repositório > Settings > Pages > Source: "GitHub Actions"
```

### 2. Push para a branch main
```bash
git add .
git commit -m "feat: add GitHub Pages deploy workflow"
git push origin main
```

### 3. Acompanhar deploy
```
Repositório > Actions > "Deploy to GitHub Pages"
```

## 🌐 URL de Acesso
**https://tri-factor.github.io/DPP-BR/**

## 📋 Características do Deploy

- ✅ **Automático**: Deploy a cada push na main
- ✅ **Build otimizado**: Vite build production
- ✅ **Cache inteligente**: npm cache para builds rápidos
- ✅ **Segurança**: Permissões mínimas necessárias
- ✅ **Concorrência**: Apenas um deploy simultâneo

## 🔍 Verificação

Após o primeiro deploy, a landing page estará disponível em:
`https://tri-factor.github.io/DPP-BR/`

O workflow será executado automaticamente e você pode acompanhar o progresso na aba **Actions** do GitHub.