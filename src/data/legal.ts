// Informations légales affichées dans « Mentions légales » et « Politique de
// confidentialité ». Les valeurs qui commencent par « [À COMPLÉTER » sont
// surlignées en jaune sur le site (voir LegalValue.astro) : elles doivent
// être renseignées par Audrey avant toute mise en ligne.
// Textes à faire relire : ils ne constituent pas un avis juridique.

export const A_COMPLETER = '[À COMPLÉTER';

export const legal = {
  // Nom et prénom (entreprise individuelle) ou raison sociale (société).
  editeur: 'Audrey Klein',
  // Ex. « Entrepreneur individuel (micro-entreprise), nom commercial
  // Klein Éditions » ou « SAS au capital de … € ».
  statut: '[À COMPLÉTER : statut juridique, ex. « Entrepreneur individuel (micro-entreprise) »]',
  siret: '[À COMPLÉTER : numéro SIRET]',
  // Adresse de l'établissement (ou de domiciliation).
  adresse: '[À COMPLÉTER : adresse postale]',
  // Numéro de TVA intracommunautaire, ou mention de franchise en base.
  tva: '[À COMPLÉTER : n° de TVA, ou « TVA non applicable, art. 293 B du CGI »]',
  directionPublication: 'Audrey Klein',
  // Médiateur de la consommation : obligatoire pour une prestation vendue
  // à des particuliers (art. L.612-1 du Code de la consommation).
  mediateur: '[À COMPLÉTER : nom et site du médiateur de la consommation]',
  hebergeur: {
    nom: 'Vercel Inc.',
    adresse: '440 N Barranca Ave #4133, Covina, CA 91723, États-Unis',
    site: 'https://vercel.com',
    telephone: '[À COMPLÉTER : téléphone de l’hébergeur, à vérifier auprès de Vercel]',
  },
  // Date affichée en tête de la politique de confidentialité.
  miseAJour: '2 octobre 2026',
};
