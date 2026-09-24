// Catégories de la page « Vos histoires » — reprises telles quelles du brief (section 13).
// Ne pas reformuler sans validation d'Audrey.

export interface Category {
  title: string;
  description?: string;
}

export const categories: Category[] = [
  {
    title: 'Biographies familiales',
    description: 'Histoires familiales, mémoire intergénérationnelle, transmission.',
  },
  {
    title: 'Biographies personnelles',
    description: 'Parcours, trajectoires, choix, moments fondateurs.',
  },
  {
    title: 'Récits de vie et mémoires',
    description: 'Témoignages, souvenirs, expériences et événements qui ont marqué une existence.',
  },
  {
    title: "Parcours d'immigration et mémoires en diaspora",
    description: "Histoires de déplacement, d'exil, d'installation, de transmission culturelle et familiale.",
  },
  {
    title: 'Récits de voyage',
    description: "Lorsqu'un voyage constitue une véritable histoire personnelle ou un récit à transmettre.",
  },
  {
    title: "Histoires d'associations, d'écoles, de mouvements ou d'institutions",
  },
  {
    title: 'Récits sur mesure',
    description: "Tout projet qui ne rentre pas parfaitement dans une catégorie prédéfinie.",
  },
];
