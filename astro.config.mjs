import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // Domaine principal tel que servi par Vercel (klein-editions.com redirige
  // vers www) : les URL canoniques, le sitemap et les aperçus de partage
  // doivent pointer vers l'adresse finale, jamais vers une redirection.
  site: 'https://www.klein-editions.com',
  // Une seule forme d'URL par page (/a-propos/) — l'autre redirige.
  trailingSlash: 'always',
  adapter: vercel(),
  integrations: [sitemap()],
});
