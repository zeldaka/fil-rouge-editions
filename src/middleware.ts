import { defineMiddleware } from 'astro:middleware';

// En-têtes de sécurité de base, appliqués à toutes les réponses. Pas de
// Content-Security-Policy stricte ici : le site charge des polices Google
// Fonts et affichera un jour un flux Instagram — une CSP mal calée casserait
// silencieusement ces éléments. À affiner une fois le site en ligne si
// besoin d'aller plus loin.
export const onRequest = defineMiddleware(async (_context, next) => {
  const response = await next();
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  return response;
});
