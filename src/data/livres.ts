// Sélection « Conseils de lecture », organisée par thématique.
// Couvertures et liens récupérés depuis Books'nJoy (booksnjoy.com) — ne pas
// inventer de livres, toute nouvelle entrée doit être validée par Audrey.

import apeirogon from '../assets/livres/apeirogon.jpg';
import bernardMalamudKiev from '../assets/influences/bernard-malamud.jpg';
import artDePerdre from '../assets/livres/art-de-perdre.jpg';
import chansonLafon from '../assets/livres/chanson-lafon.jpg';
import corpsEtAme from '../assets/livres/corps-et-ame.jpeg';
import cygnesSauvages from '../assets/livres/cygnes-sauvages.jpg';
import devantMoiLeMonde from '../assets/livres/devant-moi-le-monde.jpeg';
import educationEuropeenne from '../assets/livres/education-europeenne.jpg';
import enfantDeSalaud from '../assets/livres/enfant-de-salaud.jpg';
import enfantsOppermann from '../assets/livres/enfants-oppermann.jpg';
import estEden from '../assets/livres/est-eden.jpg';
import etreSansDestin from '../assets/livres/etre-sans-destin.jpg';
import familleKarnovski from '../assets/livres/famille-karnovski.jpg';
import familleMoskat from '../assets/livres/famille-moskat.jpeg';
import familleRosenthal from '../assets/livres/famille-rosenthal.jpg';
import femmeFuyantAnnonce from '../assets/livres/femme-fuyant-annonce.jpg';
import finHommeRouge from '../assets/livres/fin-homme-rouge.jpg';
import freresAshkenazi from '../assets/livres/freres-ashkenazi.jpg';
import freresK from '../assets/livres/freres-k.jpg';
import freresLehman from '../assets/livres/freres-lehman.jpg';
import gangDesReves from '../assets/livres/gang-des-reves.jpeg';
import gensHeureux from '../assets/livres/gens-heureux.jpg';
import grandesFamilles from '../assets/livres/grandes-familles.jpg';
import hamnet from '../assets/livres/hamnet.jpg';
import histoireAllemand from '../assets/livres/histoire-allemand.jpg';
import huitiemeVie from '../assets/livres/huitieme-vie.jpg';
import juifErrant from '../assets/livres/juif-errant.jpg';
import leCommis from '../assets/livres/le-commis.webp';
import lelu from '../assets/livres/lelu.jpg';
import lesDisparus from '../assets/livres/les-disparus.jpeg';
import lesEffinger from '../assets/livres/les-effinger.jpg';
import lesSemeuses from '../assets/livres/les-semeuses.jpg';
import lilasRouge from '../assets/livres/lilas-rouge.jpg';
import mainsDuMiracle from '../assets/livres/mains-du-miracle.jpg';
import martinEden from '../assets/livres/martin-eden.jpeg';
import melnitz from '../assets/livres/melnitz.jpeg';
import mereCommeLesAutres from '../assets/livres/mere-comme-les-autres.jpg';
import milena from '../assets/livres/milena.jpeg';
import mortDunPere from '../assets/livres/mort-dun-pere.jpg';
import ombreDuVent from '../assets/livres/ombre-du-vent.jpeg';
import ombresHudson from '../assets/livres/ombres-hudson.jpg';
import ordreDuJour from '../assets/livres/ordre-du-jour.jpg';
import ouestRienNouveau from '../assets/livres/ouest-rien-nouveau.jpg';
import portraitMariage from '../assets/livres/portrait-mariage.jpg';
import poussiereVent from '../assets/livres/poussiere-vent.jpg';
import princeDesMarees from '../assets/livres/prince-des-marees.jpeg';
import raisinsColere from '../assets/livres/raisins-colere.jpg';
import retourLemberg from '../assets/livres/retour-lemberg.jpg';
import sacDeBilles from '../assets/livres/sac-de-billes.jpg';
import seulDansBerlin from '../assets/livres/seul-dans-berlin.jpg';
import tanguy from '../assets/livres/tanguy.webp';
import tenebres from '../assets/livres/tenebres.jpeg';
import terrePromise from '../assets/livres/terre-promise.jpg';
import uneEducation from '../assets/livres/une-education.jpeg';
import uneOdyssee from '../assets/livres/une-odyssee.jpg';
import vieBouleversee from '../assets/livres/vie-bouleversee.jpeg';

export interface Livre {
  titre: string;
  auteur: string;
  presentation: string;
  couverture?: ImageMetadata;
  lien?: string;
}

export interface ThematiqueLecture {
  titre: string;
  slug: string;
  livres: Livre[];
}

export const thematiques: ThematiqueLecture[] = [
  {
    titre: "Sagas familiales",
    slug: "sagas-familiales",
    livres: [
      {
        titre: "Les Effinger",
        auteur: "Gabriele Tergit",
        presentation: "Une famille berlinoise sur plusieurs générations, de la Belle Époque à l'ombre montante du nazisme — une fresque retrouvée après des décennies d'oubli.",
        couverture: lesEffinger,
      },
      {
        titre: "Les semeuses",
        auteur: "Diane Wilson",
        presentation: "Cinq générations de femmes dakotas, une terre volée et une mémoire à reconquérir, fil après fil.",
        couverture: lesSemeuses,
      },
      {
        titre: "La huitième vie",
        auteur: "Nino Haratischwili",
        presentation: "Un siècle d'histoire russe et géorgienne traversé par huit générations d'une même famille, une fresque vertigineuse sur ce qui se transmet malgré soi.",
        couverture: huitiemeVie,
        lien: "https://www.booksnjoy.com/huitieme-vie-nino-haratiscwili-saga-familiale-georgie/",
      },
      {
        titre: "La famille Karnovski",
        auteur: "Israël Joshua Singer",
        presentation: "Trois générations d'une famille juive berlinoise emportées par la montée du nazisme, un roman sur l'identité qui se brise et se recompose.",
        couverture: familleKarnovski,
        lien: "https://www.booksnjoy.com/famille-karnovski-israel-joshua-singer/",
      },
      {
        titre: "La famille Moskat",
        auteur: "Isaac Bashevis Singer",
        presentation: "Une saga familiale addictive au cœur du Yiddishland polonais, entre tradition et modernité, à la veille de sa disparition.",
        couverture: familleMoskat,
        lien: "https://www.booksnjoy.com/famille-moskat-isaac-bashevis-singer-saga-familiale-yiddish-prix-nobel-litterature-1978/",
      },
      {
        titre: "Melnitz",
        auteur: "Charles Lewinsky",
        presentation: "Quatre générations d'une famille juive suisse, de 1871 à 1945 : une leçon magistrale sur ce que l'Histoire fait aux familles.",
        couverture: melnitz,
        lien: "https://www.booksnjoy.com/melnitz-charles-lewinsky-saga-familiale-judaisme-suisse/",
      },
      {
        titre: "Ton absence n'est que ténèbres",
        auteur: "Jón Kalman Stefánsson",
        presentation: "Une généalogie islandaise sublime, où chaque génération porte en elle la mélancolie et les silences de la précédente.",
        couverture: tenebres,
        lien: "https://www.booksnjoy.com/ton-absence-nest-que-tenebres-jon-kalman-stefansson-saga-islandaise/",
      },
      {
        titre: "Lilas rouge",
        auteur: "Reinhard Kaiser-Mühlecker",
        presentation: "Une fresque familiale autrichienne qui explore, avec une lucidité rare, l'héritage nazi tapi dans l'arbre généalogique.",
        couverture: lilasRouge,
        lien: "https://www.booksnjoy.com/lilas-rouge-reinhard-kaiser-muhlecker-saga-familiale/",
      },
      {
        titre: "À l'est d'Éden",
        auteur: "John Steinbeck",
        presentation: "La lutte entre le bien et le mal rejouée sur deux générations : un chef-d'œuvre sur ce qu'on hérite malgré soi de ses parents.",
        couverture: estEden,
        lien: "https://www.booksnjoy.com/a-lest-eden-john-steinbeck/",
      },
      {
        titre: "L'ombre du vent",
        auteur: "Carlos Ruiz Zafón",
        presentation: "Un roman labyrinthe où un livre retrouvé ouvre sur le secret d'une vie entière — la mémoire comme enquête.",
        couverture: ombreDuVent,
        lien: "https://www.booksnjoy.com/livres-a-lire-au-moins-une-fois-dans-sa-vie-lombre-du-vent-carlos-ruiz-zafon-livre-culte/",
      },
      {
        titre: "Les frères Lehman",
        auteur: "Stefano Massini",
        presentation: "L'épopée d'une dynastie familiale de banquiers, de l'arrivée en Amérique à la chute : la famille comme empire, et comme fragilité.",
        couverture: freresLehman,
        lien: "https://www.booksnjoy.com/freres-lehman-stefano-massini/",
      },
      {
        titre: "Le Prince des marées",
        auteur: "Pat Conroy",
        presentation: "Une fratrie, un lourd secret de famille enfoui depuis l'enfance, et la nécessité de le raconter pour s'en libérer.",
        couverture: princeDesMarees,
        lien: "https://www.booksnjoy.com/le-prince-des-marees-pat-conroy-saga-familiale-chef-doeuvre-americain/",
      },
      {
        titre: "L'art de perdre",
        auteur: "Alice Zeniter",
        presentation: "Trois générations entre Algérie et France, pour comprendre comment une histoire familiale tue finit par resurgir.",
        couverture: artDePerdre,
        lien: "https://www.booksnjoy.com/lart-de-perdre-alice-zeniter/",
      },
      {
        titre: "Les cygnes sauvages",
        auteur: "Jung Chang",
        presentation: "Trois générations de femmes chinoises prises dans les tourments du XXe siècle : une autobiographie familiale monumentale.",
        couverture: cygnesSauvages,
        lien: "https://www.booksnjoy.com/cygnes-sauvages-jung-chang-la-autobiographie-romancee-chine-maoiste-saga-familiale/",
      },
      {
        titre: "Les Grandes Familles",
        auteur: "Maurice Druon",
        presentation: "Les coulisses d'une dynastie bourgeoise française, et ce que le pouvoir fait aux liens du sang.",
        couverture: grandesFamilles,
        lien: "https://www.booksnjoy.com/grandes-familles-maurice-druon-goncourt-1948/",
      },
    ],
  },
  {
    titre: "Récits de filiation",
    slug: "recits-de-filiation",
    livres: [
      {
        titre: "Retour à Lemberg",
        auteur: "Philippe Sands",
        presentation: "Une enquête juridique et familiale entremêlée, sur les traces de deux hommes qui ont inventé le droit international face aux mêmes crimes.",
        couverture: retourLemberg,
      },
      {
        titre: "Les Disparus",
        auteur: "Daniel Mendelsohn",
        presentation: "Une enquête familiale minutieuse pour redonner un visage à six proches engloutis par la Shoah — l'art de la biographie comme acte de justice.",
        couverture: lesDisparus,
        lien: "https://www.booksnjoy.com/les-disparus-daniel-mendelsohn-shoah/",
      },
      {
        titre: "Une odyssée. Un père, un fils, une épopée",
        auteur: "Daniel Mendelsohn",
        presentation: "Un père et son fils relisent ensemble l'Odyssée d'Homère : une méditation bouleversante sur ce qu'on comprend, trop tard, de ceux qui nous ont précédés.",
        couverture: uneOdyssee,
        lien: "https://www.booksnjoy.com/une-odyssee-un-pere-un-fils-une-epopee-daniel-mendelsohn-mythologie-ulysse-homere/",
      },
      {
        titre: "Une femme fuyant l'annonce",
        auteur: "David Grossman",
        presentation: "Une mère qui part marcher pour fuir une mauvaise nouvelle, et convoque en chemin toute l'histoire de son fils — la filiation comme refuge et comme blessure.",
        couverture: femmeFuyantAnnonce,
        lien: "https://www.booksnjoy.com/une-femme-fuyant-lannonce-david-grossman-israel/",
      },
      {
        titre: "Tu n'es pas une mère comme les autres",
        auteur: "Angelika Schrobsdorff",
        presentation: "Le récit d'une émancipation féminine talonnée par le cours de l'Histoire — comment on devient soi en dépit, ou à cause, de sa mère.",
        couverture: mereCommeLesAutres,
        lien: "https://www.booksnjoy.com/tu-nes-pas-une-mere-comme-les-autres-angelika-schrobsdorff/",
      },
    ],
  },
  {
    titre: "Parcours de vie inspirants et destins individuels",
    slug: "parcours-de-vie",
    livres: [
      {
        titre: "L'Homme de Kiev",
        auteur: "Bernard Malamud",
        presentation: "Un innocent broyé par un procès fabriqué de toutes pièces dans la Russie tsariste — la résistance d'un homme seul face à l'arbitraire.",
        couverture: bernardMalamudKiev,
        lien: "https://www.booksnjoy.com/homme-kiev-bernard-malamud-prix-pulitzer-1967/",
      },
      {
        titre: "Une éducation",
        auteur: "Tara Westover",
        presentation: "S'arracher à sa famille pour exister par soi-même, puis revenir l'écrire : un témoignage puissant sur la part qu'on garde, malgré tout, de son enfance.",
        couverture: uneEducation,
        lien: "https://www.booksnjoy.com/une-education-tara-westover-recit-emancipation-femme/",
      },
      {
        titre: "Une vie bouleversée",
        auteur: "Etty Hillesum",
        presentation: "Le journal d'une jeune femme qui choisit de rester pleinement vivante jusqu'au bout — un texte fondateur sur ce que l'écriture peut sauver.",
        couverture: vieBouleversee,
        lien: "https://www.booksnjoy.com/une-vie-bouleversee-etty-hillesum-mon-livre-favori-chefdoeuvre/",
      },
      {
        titre: "Les mains du miracle",
        auteur: "Joseph Kessel",
        presentation: "Le portrait d'un homme hors norme par l'un des plus grands conteurs français : la preuve qu'une vie, bien racontée, devient légende.",
        couverture: mainsDuMiracle,
        lien: "https://www.booksnjoy.com/les-mains-du-miracle-joseph-kessel/",
      },
      {
        titre: "Tanguy",
        auteur: "Michel del Castillo",
        presentation: "Un enfant ballotté par la guerre et l'exil, qui ne doit sa survie qu'à la force de continuer à espérer.",
        couverture: tanguy,
        lien: "https://www.booksnjoy.com/tanguy-michel-del-castillo/",
      },
      {
        titre: "Corps et âme",
        auteur: "Frank Conroy",
        presentation: "Un enfant prodige de la musique, et la question de ce qu'un don précoce fait à une vie entière.",
        couverture: corpsEtAme,
        lien: "https://www.booksnjoy.com/corps-et-ame-frank-conroy-lenfant-prodige-musique-don/",
      },
      {
        titre: "Le gang des rêves",
        auteur: "Luca Di Fulvio",
        presentation: "L'Amérique des immigrants du début du siècle, et la force d'un rêve transmis contre vents et marées.",
        couverture: gangDesReves,
        lien: "https://www.booksnjoy.com/le-gang-des-reves-luca-di-fulvio-gangs-of-new-york/",
      },
      {
        titre: "Et devant moi, le monde",
        auteur: "Joyce Maynard",
        presentation: "Un récit de réappropriation par l'écriture, quand raconter sa propre histoire devient le seul moyen de se la réapproprier.",
        couverture: devantMoiLeMonde,
        lien: "https://www.booksnjoy.com/et-devant-moi-le-monde-joyce-maynard-une-histoire-de-predation-par-une-icone-des-lettres-americaines-et-de-reappropriation-par-lecriture/",
      },
      {
        titre: "Milena",
        auteur: "Margarete Buber-Neumann",
        presentation: "Le portrait bouleversant d'une amitié née en camp de concentration — la mémoire comme dernier hommage possible.",
        couverture: milena,
        lien: "https://www.booksnjoy.com/booksnjoy-milena-margarete-buber-neumann-holocaust-shoah-seconde-guerre-mondiale/",
      },
      {
        titre: "Hamnet",
        auteur: "Maggie O'Farrell",
        presentation: "Le fils oublié de Shakespeare, enfin rendu à l'Histoire : une biographie romancée qui redonne voix à ceux que l'on a tus.",
        couverture: hamnet,
        lien: "https://www.booksnjoy.com/hamnet-maggie-ofarrell-shakespeare-hamlet/",
      },
      {
        titre: "L'élu",
        auteur: "Chaïm Potok",
        presentation: "Une amitié dans le monde hassidique new-yorkais, entre fidélité à sa famille et désir de tracer sa propre voie.",
        couverture: lelu,
        lien: "https://www.booksnjoy.com/lelu-chaim-potok-histoire-amitie-juifs-hassidiques-new-york/",
      },
      {
        titre: "Martin Eden",
        auteur: "Jack London",
        presentation: "Le destin tragique, aux accents autobiographiques, d'un homme qui s'invente lui-même par les mots.",
        couverture: martinEden,
        lien: "https://www.booksnjoy.com/martin-eden-jack-london-classique/",
      },
      {
        titre: "Être sans destin",
        auteur: "Imre Kertész",
        presentation: "L'expérience fragile de l'individu confrontée à l'arbitraire de l'Histoire — un texte essentiel sur la survie et le récit de soi.",
        couverture: etreSansDestin,
        lien: "https://www.booksnjoy.com/etre-sans-destin-imre-kertesz-prix-nobel-litterature-hongrie-2002/",
      },
      {
        titre: "Le Portrait de mariage",
        auteur: "Maggie O'Farrell",
        presentation: "La biographie romancée d'une duchesse indomptée : quand la fiction permet de rendre justice à une vie étouffée par l'Histoire officielle.",
        couverture: portraitMariage,
        lien: "https://www.booksnjoy.com/le-portrait-de-mariage-maggie-ofarrell/",
      },
      {
        titre: "Apeirogon",
        auteur: "Colum McCann",
        presentation: "Deux pères, israélien et palestinien, unis par un deuil commun : une biographie à deux voix qui transforme la douleur en combat pour la paix.",
        couverture: apeirogon,
        lien: "https://www.booksnjoy.com/apeirogon-colum-mccann-israel-palestine/",
      },
    ],
  },
  {
    titre: "Exils et racines",
    slug: "exils-et-racines",
    livres: [
      {
        titre: "Le Juif errant est arrivé",
        auteur: "Albert Londres",
        presentation: "Un grand reportage sur le retour du peuple juif en exil vers la Terre promise — le voyage comme matière à récit.",
        couverture: juifErrant,
        lien: "https://www.booksnjoy.com/juif-errant-est-arrive-albert-londres-judaisme-journalisme-reportage/",
      },
      {
        titre: "Quand tu écouteras cette chanson",
        auteur: "Lola Lafon",
        presentation: "La Shoah, Anne Frank et le pouvoir des lieux de mémoire : comment un lieu peut ranimer une histoire qu'on croyait figée.",
        couverture: chansonLafon,
        lien: "https://www.booksnjoy.com/quand-tu-ecouteras-cette-chanson-lola-lafon-anne-frank-shoah/",
      },
      {
        titre: "Poussière dans le vent",
        auteur: "Leonardo Padura",
        presentation: "La diaspora cubaine racontée à travers une génération d'amis dispersés par l'exil.",
        couverture: poussiereVent,
        lien: "https://www.booksnjoy.com/poussiere-dans-vent-leonardo-padura-diaspora-cubaine-exil-amis/",
      },
      {
        titre: "Cette terre promise",
        auteur: "Erich Maria Remarque",
        presentation: "Chassés d'Allemagne, étrangers partout ailleurs : le vertige de ceux qui n'ont plus de pays à eux.",
        couverture: terrePromise,
        lien: "https://www.booksnjoy.com/cette-terre-promise-erich-maria-remarque/",
      },
      {
        titre: "Ombres sur l'Hudson",
        auteur: "Isaac Bashevis Singer",
        presentation: "Une communauté de rescapés juifs tentant de se reconstruire une identité à New York, loin de tout ce qu'ils ont perdu.",
        couverture: ombresHudson,
        lien: "https://www.booksnjoy.com/ombres-sur-hudson-isaac-bashevis-singerprix-nobel-litterature-yiddish-1978/",
      },
      {
        titre: "L'art de perdre",
        auteur: "Alice Zeniter",
        presentation: "Trois générations entre Algérie et France, pour comprendre comment une histoire familiale tue finit par resurgir.",
        couverture: artDePerdre,
        lien: "https://www.booksnjoy.com/lart-de-perdre-alice-zeniter/",
      },
      {
        titre: "Le commis",
        auteur: "Bernard Malamud",
        presentation: "Un épicier juif immigré et le Brooklyn des années 50 : la quête de rédemption de celui qui n'a plus de racines.",
        couverture: leCommis,
        lien: "https://www.booksnjoy.com/le-commis-bernard-malamud/",
      },
    ],
  },
  {
    titre: "La grande Histoire",
    slug: "la-grande-histoire",
    livres: [
      {
        titre: "Histoire d'un allemand",
        auteur: "Sebastian Haffner",
        presentation: "Le récit, de l'intérieur, de la bascule d'un pays vers le nazisme — comment une société ordinaire en vient à basculer, jour après jour.",
        couverture: histoireAllemand,
      },
      {
        titre: "Les Disparus",
        auteur: "Daniel Mendelsohn",
        presentation: "Une enquête familiale minutieuse pour redonner un visage à six proches engloutis par la Shoah — l'art de la biographie comme acte de justice.",
        couverture: lesDisparus,
        lien: "https://www.booksnjoy.com/les-disparus-daniel-mendelsohn-shoah/",
      },
      {
        titre: "Les enfants Oppermann",
        auteur: "Lion Feuchtwanger",
        presentation: "Une famille juive allemande qui refuse de voir venir le pire — un roman prémonitoire sur l'aveuglement face à l'Histoire en marche.",
        couverture: enfantsOppermann,
        lien: "https://www.booksnjoy.com/enfants-oppermann-lion-feuchtwanger-allemagne-nazisme-seconde-guerre-mondiale/",
      },
      {
        titre: "Les cygnes sauvages",
        auteur: "Jung Chang",
        presentation: "Trois générations de femmes chinoises prises dans les tourments du XXe siècle : une autobiographie familiale monumentale.",
        couverture: cygnesSauvages,
        lien: "https://www.booksnjoy.com/cygnes-sauvages-jung-chang-la-autobiographie-romancee-chine-maoiste-saga-familiale/",
      },
      {
        titre: "La huitième vie",
        auteur: "Nino Haratischwili",
        presentation: "Un siècle d'histoire russe et géorgienne traversé par huit générations d'une même famille, une fresque vertigineuse sur ce qui se transmet malgré soi.",
        couverture: huitiemeVie,
        lien: "https://www.booksnjoy.com/huitieme-vie-nino-haratiscwili-saga-familiale-georgie/",
      },
      {
        titre: "Les raisins de la colère",
        auteur: "John Steinbeck",
        presentation: "Une famille sur les routes de l'exode intérieur américain : la grande Histoire vue depuis l'intime d'un foyer déraciné.",
        couverture: raisinsColere,
        lien: "https://www.booksnjoy.com/raisins-colere-john-steinbeck-pulitzer-nobel/",
      },
      {
        titre: "L'art de perdre",
        auteur: "Alice Zeniter",
        presentation: "Trois générations entre Algérie et France, pour comprendre comment une histoire familiale tue finit par resurgir.",
        couverture: artDePerdre,
        lien: "https://www.booksnjoy.com/lart-de-perdre-alice-zeniter/",
      },
      {
        titre: "Un sac de billes",
        auteur: "Joseph Joffo",
        presentation: "Deux enfants juifs livrés à eux-mêmes sous l'Occupation — l'enfance comme témoin direct de la grande Histoire.",
        couverture: sacDeBilles,
        lien: "https://www.booksnjoy.com/un-sac-de-billes-joseph-joffo/",
      },
      {
        titre: "Éducation européenne",
        auteur: "Romain Gary",
        presentation: "Le premier roman de Romain Gary, déjà habité par la question de ce que la guerre fait aux êtres et à leur humanité.",
        couverture: educationEuropeenne,
        lien: "https://www.booksnjoy.com/education-europeenne-romain-gary-premier-roman/",
      },
      {
        titre: "À l'Ouest rien de nouveau",
        auteur: "Erich Maria Remarque",
        presentation: "Le témoignage fondateur d'une génération sacrifiée — comment raconter l'indicible de la guerre vécue de l'intérieur.",
        couverture: ouestRienNouveau,
        lien: "https://www.booksnjoy.com/a-louest-rien-de-nouveau-erich-maria-remarque-un-manifeste-pacifiste-denoncant-labsurdite-de-lideologie-guerriere-devenu-un-chef-doeuvre-intemporel/",
      },
      {
        titre: "La Fin de l'homme rouge",
        auteur: "Svetlana Alexievitch",
        presentation: "Des centaines de voix recueillies pour raconter la fin d'un monde — l'art du témoignage polyphonique porté à son sommet.",
        couverture: finHommeRouge,
        lien: "https://www.booksnjoy.com/la-fin-de-lhomme-rouge-svetlana-alexievitch-prix-nobel-litterature/",
      },
      {
        titre: "Melnitz",
        auteur: "Charles Lewinsky",
        presentation: "Quatre générations d'une famille juive suisse, de 1871 à 1945 : une leçon magistrale sur ce que l'Histoire fait aux familles.",
        couverture: melnitz,
        lien: "https://www.booksnjoy.com/melnitz-charles-lewinsky-saga-familiale-judaisme-suisse/",
      },
      {
        titre: "Enfant de salaud",
        auteur: "Sorj Chalandon",
        presentation: "Un fils qui enquête sur le passé trouble de son père pendant la guerre — la biographie familiale comme règlement de comptes nécessaire.",
        couverture: enfantDeSalaud,
        lien: "https://www.booksnjoy.com/enfant-de-salaud-sorj-chalandon-rentree-litteraire/",
      },
      {
        titre: "Une femme fuyant l'annonce",
        auteur: "David Grossman",
        presentation: "Une mère qui part marcher pour fuir une mauvaise nouvelle, et convoque en chemin toute l'histoire de son fils — la filiation comme refuge et comme blessure.",
        couverture: femmeFuyantAnnonce,
        lien: "https://www.booksnjoy.com/une-femme-fuyant-lannonce-david-grossman-israel/",
      },
      {
        titre: "Seul dans Berlin",
        auteur: "Hans Fallada",
        presentation: "Un couple ordinaire qui choisit, seul, de résister — le courage anonyme comme matière à grande Histoire.",
        couverture: seulDansBerlin,
        lien: "https://www.booksnjoy.com/seul-dans-berlin-hans-fallada-grand-roman-resistance-allemande-chef-doeuvre/",
      },
      {
        titre: "Tanguy",
        auteur: "Michel del Castillo",
        presentation: "Un enfant ballotté par la guerre et l'exil, qui ne doit sa survie qu'à la force de continuer à espérer.",
        couverture: tanguy,
        lien: "https://www.booksnjoy.com/tanguy-michel-del-castillo/",
      },
      {
        titre: "L'ordre du jour",
        auteur: "Éric Vuillard",
        presentation: "Les coulisses méconnues d'un moment charnière de l'Histoire, racontées avec la précision d'une enquête et le souffle d'un roman.",
        couverture: ordreDuJour,
        lien: "https://www.booksnjoy.com/ordre-jour-eric-vuillard-goncourt/",
      },
    ],
  },
  {
    titre: "La famille dans tous ses états",
    slug: "famille-tous-etats",
    livres: [
      {
        titre: "La famille Rosenthal",
        auteur: "Toby Lloyd",
        presentation: "Trois générations d'une même famille, racontées avec un humour noir féroce — ce qui se répète, ce qui se transforme, ce qui finit par exploser.",
        couverture: familleRosenthal,
      },
      {
        titre: "Où vivaient les gens heureux",
        auteur: "Joyce Maynard",
        presentation: "La tentative maladroite et émouvante d'une mère de reconstruire le foyer aimant qu'elle n'a jamais connu.",
        couverture: gensHeureux,
        lien: "https://www.booksnjoy.com/ou-vivaient-les-gens-heureux-joyce-maynard-saga-familiale-americaine-femme-maternite/",
      },
      {
        titre: "Les frères K",
        auteur: "David James Duncan",
        presentation: "Une fratrie américaine et l'envers du rêve familial — quand chaque frère porte, à sa façon, le poids de l'histoire commune.",
        couverture: freresK,
        lien: "https://www.booksnjoy.com/les-freres-k-david-james-duncan-lenvers-du-reve-americain-saga-familiale/",
      },
      {
        titre: "Une éducation",
        auteur: "Tara Westover",
        presentation: "S'arracher à sa famille pour exister par soi-même, puis revenir l'écrire : un témoignage puissant sur la part qu'on garde, malgré tout, de son enfance.",
        couverture: uneEducation,
        lien: "https://www.booksnjoy.com/une-education-tara-westover-recit-emancipation-femme/",
      },
      {
        titre: "La famille Moskat",
        auteur: "Isaac Bashevis Singer",
        presentation: "Une saga familiale addictive au cœur du Yiddishland polonais, entre tradition et modernité, à la veille de sa disparition.",
        couverture: familleMoskat,
        lien: "https://www.booksnjoy.com/famille-moskat-isaac-bashevis-singer-saga-familiale-yiddish-prix-nobel-litterature-1978/",
      },
      {
        titre: "La famille Karnovski",
        auteur: "Israël Joshua Singer",
        presentation: "Trois générations d'une famille juive berlinoise emportées par la montée du nazisme, un roman sur l'identité qui se brise et se recompose.",
        couverture: familleKarnovski,
        lien: "https://www.booksnjoy.com/famille-karnovski-israel-joshua-singer/",
      },
      {
        titre: "Les frères Ashkenazi",
        auteur: "Israël Joshua Singer",
        presentation: "Deux frères jumeaux, deux destins opposés, une même famille déchirée par l'Histoire polonaise.",
        couverture: freresAshkenazi,
        lien: "https://www.booksnjoy.com/freres-ashkenazi-israel-joshua-singer/",
      },
      {
        titre: "La huitième vie",
        auteur: "Nino Haratischwili",
        presentation: "Un siècle d'histoire russe et géorgienne traversé par huit générations d'une même famille, une fresque vertigineuse sur ce qui se transmet malgré soi.",
        couverture: huitiemeVie,
        lien: "https://www.booksnjoy.com/huitieme-vie-nino-haratiscwili-saga-familiale-georgie/",
      },
      {
        titre: "Les Grandes Familles",
        auteur: "Maurice Druon",
        presentation: "Les coulisses d'une dynastie bourgeoise française, et ce que le pouvoir fait aux liens du sang.",
        couverture: grandesFamilles,
        lien: "https://www.booksnjoy.com/grandes-familles-maurice-druon-goncourt-1948/",
      },
      {
        titre: "La mort d'un père",
        auteur: "Karl Ove Knausgaard",
        presentation: "Le premier tome d'une entreprise autobiographique monumentale : tuer le père par les mots, pour mieux continuer à vivre.",
        couverture: mortDunPere,
        lien: "https://www.booksnjoy.com/mort-pere-karl-ove-knausgaard-autobiographie-scandinave-norvege/",
      },
      {
        titre: "Le Prince des marées",
        auteur: "Pat Conroy",
        presentation: "Une fratrie, un lourd secret de famille enfoui depuis l'enfance, et la nécessité de le raconter pour s'en libérer.",
        couverture: princeDesMarees,
        lien: "https://www.booksnjoy.com/le-prince-des-marees-pat-conroy-saga-familiale-chef-doeuvre-americain/",
      },
    ],
  },
];
