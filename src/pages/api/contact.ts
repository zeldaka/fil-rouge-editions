import type { APIRoute } from 'astro';
import { siteConfig } from '../../data/config';

// Route serveur : ne peut pas être pré-générée en page statique.
export const prerender = false;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Limite basique par IP — sérieux uniquement en mode "standalone" (un seul
// process Node) : suffisant pour dissuader un abus grossier sur un site à
// faible trafic, pas un vrai rate-limiter distribué.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const submissions = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (submissions.get(ip) ?? []).filter((t) => now - t < RATE_LIMIT_WINDOW_MS);
  timestamps.push(now);
  submissions.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

// Retire retours à la ligne / caractères de contrôle — défense en profondeur
// pour les champs réinjectés dans un sujet d'e-mail ou un reply-to.
function sanitizeLine(value: string, maxLength: number): string {
  return value.replace(/[\r\n\t]+/g, ' ').trim().slice(0, maxLength);
}

export const POST: APIRoute = async ({ request, redirect, clientAddress }) => {
  const data = await request.formData();

  // Piège à robots : champ invisible pour un visiteur humain (voir
  // contact.astro) — un bot qui remplit tous les champs le remplit aussi.
  if (data.get('site_web')) {
    return redirect('/contact/?envoye=1');
  }

  if (isRateLimited(clientAddress ?? 'inconnu')) {
    return redirect('/contact/?erreur=envoi');
  }

  const prenomNom = sanitizeLine(data.get('prenomNom')?.toString() ?? '', 200);
  const email = sanitizeLine(data.get('email')?.toString() ?? '', 200);
  const telephone = sanitizeLine(data.get('telephone')?.toString() ?? '', 60);
  const typeProjet = sanitizeLine(data.get('typeProjet')?.toString() ?? '', 200);
  const langue = sanitizeLine(data.get('langue')?.toString() ?? '', 60);
  const histoire = (data.get('histoire')?.toString() ?? '').trim().slice(0, 4000);
  const message = (data.get('message')?.toString() ?? '').trim().slice(0, 4000);

  if (!prenomNom || !email || !EMAIL_RE.test(email)) {
    return redirect('/contact/?erreur=champs');
  }

  // Nécessite un compte Resend (gratuit pour ce volume) et un domaine vérifié.
  // Voir RESEND_API_KEY dans .env — non fourni pour l'instant.
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY manquante : impossible d'envoyer le message de contact.");
    return redirect('/contact/?erreur=config');
  }

  const emailBody = {
    from: `Klein Éditions <contact@klein-editions.com>`,
    to: [siteConfig.email],
    reply_to: email,
    subject: `Nouveau message — ${prenomNom}`,
    text: [
      `Nom / prénom : ${prenomNom}`,
      `E-mail : ${email}`,
      `Téléphone : ${telephone || '—'}`,
      `Type de projet : ${typeProjet || '—'}`,
      `Langue du projet : ${langue || '—'}`,
      `Quelques mots sur l'histoire : ${histoire || '—'}`,
      '',
      'Message :',
      message || '—',
    ].join('\n'),
  };

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailBody),
    });

    if (!response.ok) {
      console.error("Échec de l'envoi via Resend :", await response.text());
      return redirect('/contact/?erreur=envoi');
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi du message de contact :", error);
    return redirect('/contact/?erreur=envoi');
  }

  return redirect('/contact/?envoye=1');
};
