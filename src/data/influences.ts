// Couvertures fournies par Audrey (dossier "Couvertures") pour la section
// « Les livres qui m'ont donné envie de raconter les histoires ».
// Auteur/titre déduits des noms de fichiers qu'elle a donnés elle-même —
// à vérifier (accents, titre exact) côté Audrey.

import israelJoshuaSinger from '../assets/influences/israel-joshua-singer.jpg';
import jonKalmanStefansson from '../assets/influences/jon-kalman-stefansson.avif';
import charlesLewinsky from '../assets/influences/charles-lewinsky.webp';
import josephKessel from '../assets/influences/joseph-kessel.jpg';
import donnaTartt from '../assets/influences/donna-tartt.jpg';
import patConroy from '../assets/influences/pat-conroy.jpg';
import philipRoth from '../assets/influences/philip-roth.jpg';
import stefanZweig from '../assets/influences/stefan-zweig.jpg';
import carlosRuizZafon from '../assets/influences/carlos-ruiz-zafon.jpg';
import josephConrad from '../assets/influences/joseph-conrad.jpg';
import romainGary from '../assets/influences/romain-gary.jpg';
import frankConroy from '../assets/influences/frank-conroy.jpg';
import isaacBashevisSinger from '../assets/influences/isaac-bashevis-singer.jpg';
import jaumeCabre from '../assets/influences/jaume-cabre.jpg';
import johnSteinbeck from '../assets/influences/john-steinbeck.jpg';
import jackLondon from '../assets/influences/jack-london.jpg';
import bernardMalamud from '../assets/influences/bernard-malamud.jpg';
import taraWestover from '../assets/influences/tara-westover.jpg';
import ettyHillesum from '../assets/influences/etty-hillesum.jpg';
import richardPowers from '../assets/influences/richard-powers.jpg';
import danielMendelsohn from '../assets/influences/daniel-mendelsohn.jpeg';
import anneBerest from '../assets/influences/anne-berest.jpg';
import umbertoEco from '../assets/influences/umberto-eco.jpg';
import lucaDiFulvio from '../assets/influences/luca-di-fulvio.jpg';

export interface Influence {
  auteur: string;
  oeuvre: string;
  image: ImageMetadata;
}

export const influences: Influence[] = [
  { auteur: 'Daniel Mendelsohn', oeuvre: 'Les Disparus', image: danielMendelsohn },
  { auteur: 'Romain Gary', oeuvre: "La Promesse de l'aube", image: romainGary },
  { auteur: 'Stefan Zweig', oeuvre: "Le Monde d'hier", image: stefanZweig },
  { auteur: 'Isaac Bashevis Singer', oeuvre: 'La Famille Moskat', image: isaacBashevisSinger },
  { auteur: 'Charles Lewinsky', oeuvre: 'Les Melnitz', image: charlesLewinsky },
  { auteur: 'Anne Berest', oeuvre: 'La Carte postale', image: anneBerest },
  { auteur: 'John Steinbeck', oeuvre: "À l'Est d'Éden", image: johnSteinbeck },
  { auteur: 'Etty Hillesum', oeuvre: 'Une vie bouleversée', image: ettyHillesum },
  { auteur: 'Tara Westover', oeuvre: 'Une éducation', image: taraWestover },
  { auteur: 'Jack London', oeuvre: 'Martin Eden', image: jackLondon },
  { auteur: 'Jón Kalman Stefánsson', oeuvre: "Ton absence n'est que ténèbres", image: jonKalmanStefansson },
  { auteur: 'Joseph Kessel', oeuvre: 'Les Mains du miracle', image: josephKessel },
  { auteur: 'Donna Tartt', oeuvre: 'Le Chardonneret', image: donnaTartt },
  { auteur: 'Pat Conroy', oeuvre: 'Le Prince des marées', image: patConroy },
  { auteur: 'Philip Roth', oeuvre: "Le Complot contre l'Amérique", image: philipRoth },
  { auteur: 'Carlos Ruiz Zafón', oeuvre: "L'Ombre du vent", image: carlosRuizZafon },
  { auteur: 'Joseph Conrad', oeuvre: 'Lord Jim', image: josephConrad },
  { auteur: 'Frank Conroy', oeuvre: 'Corps et âme', image: frankConroy },
  { auteur: 'Jaume Cabré', oeuvre: 'Confiteor', image: jaumeCabre },
  { auteur: 'Bernard Malamud', oeuvre: 'L\'Homme de Kiev', image: bernardMalamud },
  { auteur: 'Richard Powers', oeuvre: 'Le Temps où nous chantions', image: richardPowers },
  { auteur: 'Umberto Eco', oeuvre: 'Le Nom de la rose', image: umbertoEco },
  { auteur: 'Luca Di Fulvio', oeuvre: 'Le Gang des rêves', image: lucaDiFulvio },
  { auteur: 'Israël Joshua Singer', oeuvre: 'La Famille Karnovski', image: israelJoshuaSinger },
];
