// Les 8 étapes — reprises telles quelles du brief (section 14).
// Ne pas reformuler sans validation d'Audrey.

export interface Etape {
  numero: string;
  titre: string;
  description: string;
}

export const etapes: Etape[] = [
  { numero: '01', titre: 'Conception éditoriale', description: 'Cerner le besoin et définir ensemble le projet.' },
  { numero: '02', titre: 'Entretiens', description: 'Recueillir les souvenirs, les témoignages, les anecdotes et la matière du récit.' },
  { numero: '03', titre: 'Rédaction du manuscrit', description: 'Transformer cette matière en un récit construit.' },
  { numero: '04', titre: 'Première version', description: "Envoi d'une première version du manuscrit." },
  { numero: '05', titre: 'Relecture', description: 'Échanges, corrections et ajustements.' },
  { numero: '06', titre: 'Photographies et documents', description: 'Incorporation des photographies, archives, lettres et autres documents.' },
  { numero: '07', titre: 'Finalisation', description: 'Finalisation du manuscrit et validation.' },
  { numero: '08', titre: 'Impression', description: 'Le récit devient un livre.' },
];
