# Esfera Conectada — MVP (Lightweight)

Este repositório contém um **MVP** leve para a rede social *Esfera Conectada* (frontend React + Vite).
Ele foi preparado para deploy rápido no **Vercel** e backend com **Supabase**.

## O que está incluído
- Autenticação (Supabase Auth) — registro, login, confirmação por e-mail (via Supabase)
- Estruturas de páginas: Feed, Perfil, Post, Chat (placeholders)
- Suporte para upload via Supabase Storage (configurar no Supabase)
- Tradução: placeholders (integração com APIs externas é necessária)
- Limite de áudio — deve ser aplicado no backend/storage (ex: 3MB)

## Como usar localmente
1. `git clone` este repositório
2. `cd esfera-conectada-mvp`
3. Copie `.env.example` para `.env` e preencha:
   ```
   VITE_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
   VITE_SUPABASE_ANON_KEY=YOUR_ANON_KEY
   ```
4. `npm install`
5. `npm run dev`
6. Abra `http://localhost:5173`

## Deploy (Vercel + Supabase)
- Crie projeto no Supabase (Database, Auth, Storage).
- No Vercel, conecte o repositório GitHub (push do projeto).
- Configure variáveis de ambiente no Vercel (VITE_SUPABASE_URL e VITE_SUPABASE_ANON_KEY).
- Deploy automático a cada push.

## Próximos passos a implementar (sugestões)
- Implementar CRUD real para posts (tabelas no Supabase).
- Realtime para chat e notificações (Supabase Realtime ou Edge Functions).
- Upload de arquivos e limites (áudio até 3MB) na Storage.
- Tradução automática com uma API externa (Google Translate, DeepL).
- Sistema de sons para emojis (pequena biblioteca JS + arquivos de som).
- Melhorar segurança (server-side rules, RLS no Supabase).

## Observações
- Este MVP é pensado para ser leve e servir como ponto de partida. Integrações avançadas e regras RLS do Supabase exigem configuração adicional no Supabase Studio.

Boa sorte — e se quiser, eu posso gerar a versão completa com backend, tabelas SQL e funções de reproduzir som para emojis.
