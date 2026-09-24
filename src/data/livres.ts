// Sélection « Conseils de lecture », organisée par thématique (structure
// demandée par Audrey). Chaque thématique est vide pour l'instant — en
// attente de sa première sélection de titres. Ne pas inventer de livres.
// Pour ajouter un livre : ajouter un objet au tableau `livres` de la
// thématique concernée, avec une couverture dans site/src/assets/livres/.

export interface Livre {
  titre: string;
  auteur: string;
  presentation: string;
  couverture?: string;
  lien?: string;
}

export interface ThematiqueLecture {
  titre: string;
  livres: Livre[];
}

export const thematiques: ThematiqueLecture[] = [
  { titre: 'Sagas familiales', livres: [] },
  { titre: 'Récits de filiation', livres: [] },
  { titre: 'Parcours de vie inspirants', livres: [] },
  { titre: 'Exils et racines', livres: [] },
  { titre: 'La grande Histoire', livres: [] },
  { titre: 'Témoignages', livres: [] },
  { titre: 'Deuil et transmission', livres: [] },
];
