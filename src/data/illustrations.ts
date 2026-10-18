// Illustrations des 6 catégories « Conseils de lecture », créées et fournies
// par Audrey — une par thème, indexée par slug (voir data/livres.ts).

import sagasFamiliales from '../assets/illustrations/sagas-familiales.jpeg';
import recitsDeFiliation from '../assets/illustrations/recits-de-filiation.jpeg';
import parcoursDeVie from '../assets/illustrations/parcours-de-vie.jpeg';
import exilsEtRacines from '../assets/illustrations/exils-et-racines.jpeg';
import laGrandeHistoire from '../assets/illustrations/la-grande-histoire.jpeg';
import familleTousEtats from '../assets/illustrations/famille-tous-etats.jpeg';

export const illustrations: Record<string, ImageMetadata> = {
  'sagas-familiales': sagasFamiliales,
  'recits-de-filiation': recitsDeFiliation,
  'parcours-de-vie': parcoursDeVie,
  'exils-et-racines': exilsEtRacines,
  'la-grande-histoire': laGrandeHistoire,
  'famille-tous-etats': familleTousEtats,
};
