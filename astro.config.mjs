import { defineConfig, fontProviders } from 'astro/config';
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
  // Polices téléchargées au build et servies par le site lui-même : plus de
  // feuille Google Fonts qui bloque l'affichage (≈ 2 s sur mobile), ni
  // d'appel aux serveurs de Google depuis le navigateur des visiteurs (RGPD).
  // Utilisées via --font-serif / --font-sans / --font-sans-alt (global.css).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Lora',
      cssVariable: '--font-lora',
      weights: [500, 600],
      styles: ['normal', 'italic'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Quicksand',
      cssVariable: '--font-quicksand',
      // Police du texte courant, préchargée : on attend qu'elle arrive au
      // lieu d'afficher d'abord la police de secours. Sinon, le passage de
      // l'une à l'autre décale les longs paragraphes (CLS mesuré à 0,14 sur
      // À propos, au-delà du seuil de 0,1 recommandé par Google).
      display: 'block',
      weights: [400, 500, 600, 700],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
    {
      // Seule la graisse 300 est utilisée (sous-titre de l'accueil, titre des
      // influences sur À propos).
      provider: fontProviders.google(),
      name: 'Poppins',
      cssVariable: '--font-poppins',
      weights: [300],
      styles: ['normal'],
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});
