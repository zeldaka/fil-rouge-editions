// Sélection « Conseils de lecture », organisée par thématique.
// Couvertures et liens récupérés depuis Books'nJoy (booksnjoy.com) — ne pas
// inventer de livres, toute nouvelle entrée doit être validée par Audrey.

import apeirogon from '../assets/livres/apeirogon.jpg';
import bernardMalamudKiev from '../assets/influences/bernard-malamud.jpg';
import artDePerdre from '../assets/livres/art-de-perdre.jpg';
import chansonLafon from '../assets/livres/chanson-lafon.jpg';
import corpsEtAme from '../assets/livres/corps-et-ame.jpeg';
import cygnesSauvages from '../assets/livres/cygnes-sauvages.jpg';
import devantMoiLeMonde from '../assets/livres/devant-moi-le-monde.jpg';
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
import milena from '../assets/livres/milena.jpg';
import mortDunPere from '../assets/livres/mort-dun-pere.jpg';
import ombreDuVent from '../assets/livres/ombre-du-vent.jpeg';
import ombresHudson from '../assets/livres/ombres-hudson.jpg';
import ordreDuJour from '../assets/livres/ordre-du-jour.jpg';
import ouestRienNouveau from '../assets/livres/ouest-rien-nouveau.jpg';
import portraitMariage from '../assets/livres/portrait-mariage.jpg';
import poussiereVent from '../assets/livres/poussiere-vent.jpg';
import promesseAube from '../assets/livres/promesse-aube.jpg';
import tempsNousChantions from '../assets/livres/temps-nous-chantions.jpg';
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
import undergroundRailroad from '../assets/livres/underground-railroad.jpg';
import lysDeBrooklyn from '../assets/livres/lys-de-brooklyn.jpeg';
import johnFilsDeJohn from '../assets/livres/john-fils-de-john.jpg';

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
        presentation: "Une fresque historique foisonnante qui s'étend de 1878 à 1948 en Allemagne, embrassant deux guerres mondiales et le destin d'une famille juive prise dans la tourmente. On suit leur ascension puis la chute de cette famille d'industriels parfaitement intégrés appartenant à la haute bourgeoisie.",
        couverture: lesEffinger,
      },
      {
        titre: "Les semeuses",
        auteur: "Diane Wilson",
        presentation: "Premier roman très réussi de l'autrice américaine d'origine autochtone Diane Wilson, Les semeuses s'inscrit dans la tradition des sagas familiales ; on y suit cinq générations de femmes indiennes de la tribu dakota. Il y est question de transmission, de quête identitaire et de réappropriation culturelle par le biais de mystérieuses graines sauvées du désastre et passées de main en main.",
        couverture: lesSemeuses,
      },
      {
        titre: "La huitième vie",
        auteur: "Nino Haratischwili",
        presentation: "Telle une tapisserie, l'histoire de la lignée Iachi est composée de fils étroitement tissés, de vies disparates, que le hasard a réunies pour former un assemblage hétéroclite de motifs, qui, mis bout à bout, dessinent une famille au destin chaotique. À l'intention de sa nièce Brilka, Niza entreprend la laborieuse tâche de rédiger la chronique de leur famille, et, pour cela, remonte les ramifications sur huit générations.",
        couverture: huitiemeVie,
        lien: "https://www.booksnjoy.com/huitieme-vie-nino-haratiscwili-saga-familiale-georgie/",
      },
      {
        titre: "La famille Karnovski",
        auteur: "Israël Joshua Singer",
        presentation: "Écrit en 1943, La famille Karnovski est une formidable saga familiale qui, à travers trois générations, livre une réflexion magistrale sur l'identité juive, le concept de métissage culturel et de mixité sociale avec en toile de fond la montée du nazisme. Comment, dans un pays obsédé par la pureté de la race, un adolescent juif peut-il se construire alors que se cristallisent en lui toutes les contradictions d'une nation ?",
        couverture: familleKarnovski,
        lien: "https://www.booksnjoy.com/famille-karnovski-israel-joshua-singer/",
      },
      {
        titre: "La famille Moskat",
        auteur: "Isaac Bashevis Singer",
        presentation: "Les hommes en caftan et les femmes emperruquées sortis des pages de La famille Moskat peuplent cette Varsovie multiculturelle du début du 20e siècle, où la vie s'écoule au rythme des 613 commandements de l'Ancien Testament. Des coutumes strictes qui ont traversé le temps pour assurer la pérennité d'une communauté, dont les deux tiers en Europe disparaîtront dans les camps.",
        couverture: familleMoskat,
        lien: "https://www.booksnjoy.com/famille-moskat-isaac-bashevis-singer-saga-familiale-yiddish-prix-nobel-litterature-1978/",
      },
      {
        titre: "Melnitz",
        auteur: "Charles Lewinsky",
        presentation: "Saga familiale monumentale, où les portes s'ouvrent sur des inconnus et se claquent sur des rancœurs tenaces. Melnitz retrace 75 ans de la vie d'une famille juive de 1871 à 1945 en République helvétique.",
        couverture: melnitz,
        lien: "https://www.booksnjoy.com/melnitz-charles-lewinsky-saga-familiale-judaisme-suisse/",
      },
      {
        titre: "Ton absence n'est que ténèbres",
        auteur: "Jón Kalman Stefánsson",
        presentation: "Suivant une construction à tiroirs parfaitement maîtrisée, Jón Kalman Stefánsson entrecroise les temporalités sur cinq générations, tissant ainsi une généalogie de la mélancolie. Sur 120 ans, les destins de Guðríður, Jón, Skúli, Halldór et Eiríkur se répondent sur un même thème : les regrets.",
        couverture: tenebres,
        lien: "https://www.booksnjoy.com/ton-absence-nest-que-tenebres-jon-kalman-stefansson-saga-islandaise/",
      },
      {
        titre: "Lilas rouge",
        auteur: "Reinhard Kaiser-Mühlecker",
        presentation: "Lilas rouge est traversé par des élans poétiques fulgurants, comme des éclairs venant percer un ciel noir de jais. Tels des équilibristes, Goldberger père, Ferdinand, Anna, Martha, Paul, Thomas… évoluent sur une corde raide surplombant le gouffre du temps, condamnés par une malédiction à expier les péchés commis par le patriarche de la lignée.",
        couverture: lilasRouge,
        lien: "https://www.booksnjoy.com/lilas-rouge-reinhard-kaiser-muhlecker-saga-familiale/",
      },
      {
        titre: "À l'est d'Éden",
        auteur: "John Steinbeck",
        presentation: "Réécriture moderne du mythe biblique d'Abel et Caïn, À l'est d'Éden est le chef-d'œuvre de John Steinbeck. Une grande fresque familiale, où les destins de deux générations de frères s'entrecroisent pour tisser un roman d'une beauté absolue.",
        couverture: estEden,
        lien: "https://www.booksnjoy.com/a-lest-eden-john-steinbeck/",
      },
      {
        titre: "L'ombre du vent",
        auteur: "Carlos Ruiz Zafón",
        presentation: "Écrivain espagnol le plus traduit après Cervantès, Carlos Ruiz Zafón tisse un roman initiatique fabuleux à mi-chemin entre le polar littéraire, le drame historique aux influences gothiques et fantastiques avec pour toile de fond l'Espagne franquiste. À l'image de leur ville, ses personnages sont tissés de brumes et de secrets, de mensonges et de crimes dissimulés dans les replis du temps. Distillant le suspense à la manière des feuilletonistes du 19e, Carlos Ruiz Zafón éblouit par sa maîtrise de l'art romanesque, jusqu'à l'ultime révélation. Du grand art !",
        couverture: ombreDuVent,
        lien: "https://www.booksnjoy.com/livres-a-lire-au-moins-une-fois-dans-sa-vie-lombre-du-vent-carlos-ruiz-zafon-livre-culte/",
      },
      {
        titre: "Les frères Lehman",
        auteur: "Stefano Massini",
        presentation: "Sous la forme d'un poème en vers libres — à valeur d'oraison funèbre — couronné par le prix Médicis Essai, Stefano Massini retrace le destin d'une dynastie de banquiers juifs dotés d'un sens des affaires inné. Une success story à l'américaine stoppée net dans sa course effrénée vers le succès par un krach boursier.",
        couverture: freresLehman,
        lien: "https://www.booksnjoy.com/freres-lehman-stefano-massini/",
      },
      {
        titre: "Le Prince des marées",
        auteur: "Pat Conroy",
        presentation: "« Depuis sa plus tendre enfance, Savannah avait été désignée pour porter le poids de la psychose accumulée dans notre famille. Sa sensibilité lumineuse la livrait à la violence et au ressentiment de toute la maison, et nous faisions d'elle le réservoir où s'accumulait l'amertume. »",
        couverture: princeDesMarees,
        lien: "https://www.booksnjoy.com/le-prince-des-marees-pat-conroy-saga-familiale-chef-doeuvre-americain/",
      },
      {
        titre: "L'art de perdre",
        auteur: "Alice Zeniter",
        presentation: "Alice Zeniter, elle-même petite-fille de harkis, interroge brillamment, en retraçant le destin de toute une famille kabyle contrainte à l'exil au lendemain de la guerre d'Algérie pour avoir servi les intérêts des Français, la notion d'identité et la complexité qu'elle revêt lorsque les mots viennent à manquer.",
        couverture: artDePerdre,
        lien: "https://www.booksnjoy.com/lart-de-perdre-alice-zeniter/",
      },
      {
        titre: "Les cygnes sauvages",
        auteur: "Jung Chang",
        presentation: "Témoignage douloureux d'une famille chinoise prise dans les tourments de la révolution culturelle, Les cygnes sauvages est un document d'une valeur historique exceptionnelle. La narratrice, dissidente politique exilée en Angleterre, retrace dans les mémoires de sa famille l'ascension sociale et la chute brutale de ses parents, un couple de hauts fonctionnaires dévoués corps et âme au parti avant d'être répudiés, torturés et internés en camps de rééducation.",
        couverture: cygnesSauvages,
        lien: "https://www.booksnjoy.com/cygnes-sauvages-jung-chang-la-autobiographie-romancee-chine-maoiste-saga-familiale/",
      },
      {
        titre: "Les Grandes Familles",
        auteur: "Maurice Druon",
        presentation: "Prix Goncourt 1948, Les Grandes Familles est le premier volet d'un triptyque romanesque, une fresque historique savoureuse sur plusieurs générations, s'inscrivant dans la tradition du grand roman balzacien. En unissant leurs descendants, les de La Monnerie — grande famille aristocratique — et les Schoudler — richissimes hommes d'affaires — ont assuré la pérennité de leurs lignées.",
        couverture: grandesFamilles,
        lien: "https://www.booksnjoy.com/grandes-familles-maurice-druon-goncourt-1948/",
      },
      {
        titre: "Le Temps où nous chantions",
        auteur: "Richard Powers",
        presentation: "Dans les années 50 aux États-Unis, une femme afro-américaine et un réfugié juif allemand, ayant fui le nazisme, tentent de fonder une famille. Par la force de leur amour et leur passion pour la musique, qu'ils transmettent à leurs enfants, ils vont tenter d'élever leur foyer au-dessus des fractures identitaires, avant que celles-ci ne finissent par les rattraper.",
        couverture: tempsNousChantions,
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
        presentation: "Génocide, crime contre l'humanité : que revêtent ces termes ? De quoi parle-t-on vraiment ? Philippe Sands mène l'enquête sur la genèse de ces concepts, tout en explorant l'histoire de sa famille. Tous les chemins mènent à Lemberg…",
        couverture: retourLemberg,
      },
      {
        titre: "Les Disparus",
        auteur: "Daniel Mendelsohn",
        presentation: "Petit-fils d'émigrants, descendant d'une famille de Juifs austro-hongrois ayant vécu pendant trois siècles et demi dans un shtetl polonais où 99,2% des Juifs ont péri, l'helléniste Daniel Mendelsohn a été bercé toute son enfance d'histoires épiques et de destins tragiques. Ceux dont l'histoire aurait dû être racontée : six Juifs « tués par les nazis », dont la trace se résume à une mention lapidaire au dos d'une photo.",
        couverture: lesDisparus,
        lien: "https://www.booksnjoy.com/les-disparus-daniel-mendelsohn-shoah/",
      },
      {
        titre: "Une odyssée. Un père, un fils, une épopée",
        auteur: "Daniel Mendelsohn",
        presentation: "« Cette épopée est avant tout une histoire de pères et de fils. » À l'issue du séminaire qu'il anime sur l'Odyssée, auquel son père décide de participer, et d'une croisière qu'ils entreprennent sur la Méditerranée, Daniel Mendelsohn accède à des facettes de l'identité de son père qui lui échappaient.",
        couverture: uneOdyssee,
        lien: "https://www.booksnjoy.com/une-odyssee-un-pere-un-fils-une-epopee-daniel-mendelsohn-mythologie-ulysse-homere/",
      },
      {
        titre: "Une femme fuyant l'annonce",
        auteur: "David Grossman",
        presentation: "Le 12 août 2006, le tank d'Uri Grossman, fils du grand écrivain israélien David Grossman, est touché par une roquette au Sud Liban. Deux ans plus tard, son père publie un chef-d'œuvre : Les Mille et Une Nuits d'une mère, qui, en racontant la vie de son fils, tente de le maintenir en vie.",
        couverture: femmeFuyantAnnonce,
        lien: "https://www.booksnjoy.com/une-femme-fuyant-lannonce-david-grossman-israel/",
      },
      {
        titre: "Tu n'es pas une mère comme les autres",
        auteur: "Angelika Schrobsdorff",
        presentation: "« On récolte ce qu'on a semé. » Après avoir eu trois enfants de trois hommes différents, s'être affranchie de l'éducation juive bourgeoise de ses parents, avoir aimé passionnément, mené une vie de bohème et vécu sur le fil de ses désirs, Else Kirschner est à bout de souffle.",
        couverture: mereCommeLesAutres,
        lien: "https://www.booksnjoy.com/tu-nes-pas-une-mere-comme-les-autres-angelika-schrobsdorff/",
      },
      {
        titre: "La Promesse de l'aube",
        auteur: "Romain Gary",
        presentation: "Le plus beau roman de filiation jamais écrit, le chant d'amour de Romain Gary à sa mère et une fin à pleurer.",
        couverture: promesseAube,
      },
      {
        titre: "John, fils de John",
        auteur: "Douglas Stuart",
        presentation: "Avec une économie de mots, la plume tout en retenue de Douglas Stuart, qui a pour effet d'accentuer l'extrême sensibilité des portraits, tisse un roman initiatique en huis clos poignant. Sans pour autant la justifier, Douglas Stuart explore les motifs de la violence des pères empêtrés dans leurs mensonges et tétanisés par les non-dits, tout en soulignant l'injustice qu'il y a pour les fils à subir leur tyrannie. Grand roman sur les rapports de pouvoir au sein des familles et sur l'incapacité à dire je t'aime, John, fils de John est un des plus beaux récits de filiation qui soient.",
        couverture: johnFilsDeJohn,
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
        presentation: "« C'est-à-dire que j'ai décidé d'agir en optimiste le jour où je me suis aperçu que le pessimisme m'empêchait d'agir. » À l'instar d'Albert Camus, Bernard Malamud imagine un héros révolté face à l'absurdité de la condition humaine. Résistance passive se traduisant par le simple fait d'exister. Lauréat du prix Pulitzer 1967 et du National Book Award, L'Homme de Kiev est un plaidoyer humaniste, un monument de la littérature américaine par l'un de ses maîtres.",
        couverture: bernardMalamudKiev,
        lien: "https://www.booksnjoy.com/homme-kiev-bernard-malamud-prix-pulitzer-1967/",
      },
      {
        titre: "Une éducation",
        auteur: "Tara Westover",
        presentation: "À l'écriture de ses mémoires, il y a peu de chances que Tara Westover ait mesuré la pleine portée de son geste. Sous la forme d'une quête d'émancipation féminine douloureuse, elle nous fait le cadeau précieux d'un récit d'autodétermination lumineux. Tara Westover reprend possession de son histoire et rétablit une vérité dont les siens l'ont fait douter, à savoir grandir aux confins de l'Amérique rurale dans une famille mormone délirante aux fondations mouvantes, reposant sur une conception complètement pervertie de la loyauté.",
        couverture: uneEducation,
        lien: "https://www.booksnjoy.com/une-education-tara-westover-recit-emancipation-femme/",
      },
      {
        titre: "Une vie bouleversée",
        auteur: "Etty Hillesum",
        presentation: "À seulement 27 ans, Etty Hillesum fait preuve d'une lucidité et d'une honnêteté éblouissantes vis-à-vis d'elle-même. Ses questionnements existentiels, qu'elle donne l'impression d'avoir jetés sur le papier au fil de sa pensée, sont d'une intelligence rare. Etty vit par ses écrits. Lire aujourd'hui sa quête initiatique, c'est encore la plus belle manière de reconnaître la valeur de son héritage, de lui rendre hommage en participant au devoir de mémoire. Continuer de transmettre, lire et faire lire ce document autobiographique relatant le processus de maturation d'une jeune femme de 27 ans est un acte de résistance visant à ne pas oublier ce qu'il s'est passé et à tirer des enseignements pour que l'histoire cesse de se répéter.",
        couverture: vieBouleversee,
        lien: "https://www.booksnjoy.com/une-vie-bouleversee-etty-hillesum-mon-livre-favori-chefdoeuvre/",
      },
      {
        titre: "Les mains du miracle",
        auteur: "Joseph Kessel",
        presentation: "Les mains du miracle est une mine d'or pour qui aime les destins d'exception. La vie de ce docteur finlandais, devenu médecin particulier de Himmler pendant quatre ans et demi, est une matière brute formidable pour un romancier aussi doué que Joseph Kessel, un conteur né. Tous les faits évoqués dans le roman ont été vérifiés : Joseph Kessel fait d'une histoire vraie une œuvre romanesque vertigineuse.",
        couverture: mainsDuMiracle,
        lien: "https://www.booksnjoy.com/les-mains-du-miracle-joseph-kessel/",
      },
      {
        titre: "Tanguy",
        auteur: "Michel del Castillo",
        presentation: "Tanguy est un des plus beaux livres qui soient. On est foudroyé par sa beauté, la justesse des mots employés et la simplicité avec laquelle l'horreur est racontée. Tanguy est le symbole d'une enfance sacrifiée.",
        couverture: tanguy,
        lien: "https://www.booksnjoy.com/tanguy-michel-del-castillo/",
      },
      {
        titre: "Corps et âme",
        auteur: "Frank Conroy",
        presentation: "New York, années quarante. À six ans, Claude Rawlings vit avec sa mère dans un appartement en sous-sol, où, du soupirail, il observe le ballet des passants. Le rythme de leur pas dessinant les contours d'une mélodie dans son esprit. Brassant une galerie de personnages chaleureux et mystérieux, Frank Conroy nous embarque pour une traversée des apparences, de Brooklyn à la 5e Avenue, embrassant le destin exceptionnel d'un prodige de la musique. Corps et âme est un roman d'apprentissage bouleversant dans sa retranscription douloureuse de la fin de l'enfance et du temps de l'innocence.",
        couverture: corpsEtAme,
        lien: "https://www.booksnjoy.com/corps-et-ame-frank-conroy-lenfant-prodige-musique-don/",
      },
      {
        titre: "Le gang des rêves",
        auteur: "Luca Di Fulvio",
        presentation: "« Le garçon fit un pas hésitant en avant, se détachant de la foule, alors que désormais il était trop tard et qu'ils ne pouvaient plus rien se dire. Mais leurs regards se mêlaient, et dans ces yeux voilés de larmes, il y avait plus de mots qu'ils n'auraient jamais pu prononcer, plus d'amour qu'ils n'auraient pu montrer. »",
        couverture: gangDesReves,
        lien: "https://www.booksnjoy.com/le-gang-des-reves-luca-di-fulvio-gangs-of-new-york/",
      },
      {
        titre: "Et devant moi, le monde",
        auteur: "Joyce Maynard",
        presentation: "Pendant plus de trente ans, Jerry Salinger a cherché à se protéger par la réclusion et le silence. Joyce Maynard revient dans ce récit autobiographique édifiant et déchirant sur un moment crucial de sa vie, qui l'a façonnée, mais que pendant longtemps elle a préféré contourner.",
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
        presentation: "« C'est la règle commune : tout ce qui vit doit mourir, emporté par la nature dans l'éternité. » Cette réplique tirée d'Hamlet résonne différemment à la lecture du magnifique roman que Maggie O'Farrell consacre au fils de William Shakespeare, Hamnet, mort en 1596, à seulement onze ans.",
        couverture: hamnet,
        lien: "https://www.booksnjoy.com/hamnet-maggie-ofarrell-shakespeare-hamlet/",
      },
      {
        titre: "L'élu",
        auteur: "Chaïm Potok",
        presentation: "À travers le conflit moral auquel est confronté l'héritier d'une dynastie rabbinique et les secrets d'une éducation stricte, Chaïm Potok souligne l'antagonisme entre individualisme et judaïsme sectaire, et la douloureuse construction identitaire lorsqu'on vit en autarcie dans une communauté fermée. Introduction passionnante à la mystique juive, L'élu est un magnifique roman d'amitié se déroulant dans les milieux orthodoxes new-yorkais divisés par l'événement tant attendu par le « peuple élu ».",
        couverture: lelu,
        lien: "https://www.booksnjoy.com/lelu-chaim-potok-histoire-amitie-juifs-hassidiques-new-york/",
      },
      {
        titre: "Martin Eden",
        auteur: "Jack London",
        presentation: "Chef-d'œuvre de Jack London, Martin Eden est un récit largement autobiographique dans lequel transparaît la radicalité du romancier quant à la place qu'occupe la littérature. Un bastion inaccessible à conquérir, ne tolérant aucun compromis avec la moralité bourgeoise, sa médiocrité et son conformisme étriqué.",
        couverture: martinEden,
        lien: "https://www.booksnjoy.com/martin-eden-jack-london-classique/",
      },
      {
        titre: "Être sans destin",
        auteur: "Imre Kertész",
        presentation: "L'écrivain hongrois Imre Kertész relate dans ce roman autobiographique bouleversant sa déportation en 1944 à Auschwitz, son transfert à Buchenwald, le quotidien au sein du camp, puis sa libération un an plus tard.",
        couverture: etreSansDestin,
        lien: "https://www.booksnjoy.com/etre-sans-destin-imre-kertesz-prix-nobel-litterature-hongrie-2002/",
      },
      {
        titre: "Le Portrait de mariage",
        auteur: "Maggie O'Farrell",
        presentation: "Portrait d'une jeune fille en feu, la biographie romancée consacrée par Maggie O'Farrell à Lucrèce de Médicis, mariée au duc Alfonso à l'âge de quinze ans, confirme le talent éblouissant de l'autrice irlandaise pour combler les blancs de la vie de personnages historiques oubliés.",
        couverture: portraitMariage,
        lien: "https://www.booksnjoy.com/le-portrait-de-mariage-maggie-ofarrell/",
      },
      {
        titre: "Apeirogon",
        auteur: "Colum McCann",
        presentation: "Histoire d'une amitié antinomique entre deux pères appartenant à des camps opposés — Rami Elhanan, israélien, juif, descendant d'un rescapé hongrois de la Shoah ; Bassam Aramin, palestinien, musulman, co-fondateur des Combattants de la paix — Apeirogon embrasse, sans manichéisme, toute la complexité du conflit israélo-palestinien.",
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
        presentation: "Démonstration de la nécessité vitale de l'établissement d'un foyer national juif, dix ans avant la mise en œuvre de la « Solution finale », cette série de reportages publiés en 1929 par le journaliste français Albert Londres est le fruit de son observation puis d'une retranscription réaliste du dénuement des communautés juives d'Europe centrale et orientale.",
        couverture: juifErrant,
        lien: "https://www.booksnjoy.com/juif-errant-est-arrive-albert-londres-judaisme-journalisme-reportage/",
      },
      {
        titre: "Quand tu écouteras cette chanson",
        auteur: "Lola Lafon",
        presentation: "Il aura fallu cinquante ans et une collaboration dans la collection Ma nuit au musée pour que Lola Lafon, le temps d'une nuit dans l'Annexe du Musée Anne Frank à Amsterdam, affronte les fantômes de son passé. Une histoire familiale chaotique commune aux Juifs d'Europe centrale : stigmatisation, persécution, ostracisation, déportation, extermination.",
        couverture: chansonLafon,
        lien: "https://www.booksnjoy.com/quand-tu-ecouteras-cette-chanson-lola-lafon-anne-frank-shoah/",
      },
      {
        titre: "Poussière dans le vent",
        auteur: "Leonardo Padura",
        presentation: "Suivant une boucle temporelle se refermant sur l'élucidation d'une affaire sordide à l'origine de la dispersion d'un groupe d'amis, Leonardo Padura sonde avec émotion l'ambivalence des sentiments ressentis par tout exilé ayant rêvé un jour de faire table rase du passé, et avec lui de ce qu'il a été. Peut-on couper avec ses racines si facilement ? Ou notre identité, composée de différentes strates du temps et de demi-vérités, nous échappe-t-elle inexorablement ? Une fresque politique et une quête identitaire brillamment orchestrée autour de cette interrogation : « Qu'est-ce qui nous est arrivé ? »",
        couverture: poussiereVent,
        lien: "https://www.booksnjoy.com/poussiere-dans-vent-leonardo-padura-diaspora-cubaine-exil-amis/",
      },
      {
        titre: "Cette terre promise",
        auteur: "Erich Maria Remarque",
        presentation: "Resté inachevé, le dernier roman de l'écrivain allemand Erich Maria Remarque est un joyau noir d'une beauté crépusculaire, déchirante et mélancolique, retranscrivant à travers le destin d'une communauté de réfugiés juifs allemands à New York la solitude de l'exil.",
        couverture: terrePromise,
        lien: "https://www.booksnjoy.com/cette-terre-promise-erich-maria-remarque/",
      },
      {
        titre: "Ombres sur l'Hudson",
        auteur: "Isaac Bashevis Singer",
        presentation: "Des années après l'évacuation des camps de concentration, de nombreux rescapés choisirent de se suicider. Alors qu'ils avaient survécu à l'horreur absolue, à la déshumanisation la plus totale de l'homme, leur choix avait de quoi surprendre là où on aurait pu imaginer qu'une volonté féroce de faire triompher la vie les animerait.",
        couverture: ombresHudson,
        lien: "https://www.booksnjoy.com/ombres-sur-hudson-isaac-bashevis-singerprix-nobel-litterature-yiddish-1978/",
      },
      {
        titre: "L'art de perdre",
        auteur: "Alice Zeniter",
        presentation: "Alice Zeniter, elle-même petite-fille de harkis, interroge brillamment, en retraçant le destin de toute une famille kabyle contrainte à l'exil au lendemain de la guerre d'Algérie pour avoir servi les intérêts des Français, la notion d'identité et la complexité qu'elle revêt lorsque les mots viennent à manquer.",
        couverture: artDePerdre,
        lien: "https://www.booksnjoy.com/lart-de-perdre-alice-zeniter/",
      },
      {
        titre: "Le commis",
        auteur: "Bernard Malamud",
        presentation: "Bernard Malamud, à l'instar de Philip Roth et Saul Bellow, représente une littérature juive américaine — appellation controversée qu'il serait plus juste de ranger dans la catégorie plus large d'une littérature juive de la Diaspora. Ses héros doivent lutter contre leurs penchants naturels : opportunisme et refus de s'engager.",
        couverture: leCommis,
        lien: "https://www.booksnjoy.com/le-commis-bernard-malamud/",
      },
      {
        titre: "Le Lys de Brooklyn",
        auteur: "Betty Smith",
        presentation: "Brooklyn encore et toujours. La misère, l'émigration, une femme qui ne lâche rien et force son destin, l'amour, des personnages pétulants terriblement attachants. À la fois nostalgique, pétillant et porteur d'espoir, voici un très beau roman d'apprentissage d'une fraîcheur qui fait du bien.",
        couverture: lysDeBrooklyn,
      },
    ],
  },
  {
    titre: "La grande Histoire",
    slug: "la-grande-histoire",
    livres: [
      {
        titre: "Histoire d'un Allemand",
        auteur: "Sebastian Haffner",
        presentation: "Publiée à titre posthume, cette chronique intime, écrite au cœur du IIIe Reich allemand, retrace étape par étape la montée du nazisme. Pendant 60 ans, le manuscrit resta caché dans le bureau de Sebastian Haffner. Ce trésor a entre autres mérites celui de replacer le vécu individuel au centre de l'histoire — donc de faire de l'homme un acteur de son destin — en vue de répondre à cette question qui demeure en suspens : « où sont donc passés les Allemands ? »",
        couverture: histoireAllemand,
      },
      {
        titre: "Les Disparus",
        auteur: "Daniel Mendelsohn",
        presentation: "Petit-fils d'émigrants, descendant d'une famille de Juifs austro-hongrois ayant vécu pendant trois siècles et demi dans un shtetl polonais où 99,2% des Juifs ont péri, l'helléniste Daniel Mendelsohn a été bercé toute son enfance d'histoires épiques et de destins tragiques. Ceux dont l'histoire aurait dû être racontée : six Juifs « tués par les nazis », dont la trace se résume à une mention lapidaire au dos d'une photo.",
        couverture: lesDisparus,
        lien: "https://www.booksnjoy.com/les-disparus-daniel-mendelsohn-shoah/",
      },
      {
        titre: "Les enfants Oppermann",
        auteur: "Lion Feuchtwanger",
        presentation: "« L'ensemble se compose de tous ces faits minimes, comme le corps se compose de cellules et finit par dépérir lorsque trop d'entre elles sont détruites. » En 1932 en Allemagne, à la veille de l'avènement du Troisième Reich, l'antisémitisme est galopant, et chaque regard détourné est une encoche de plus à l'intégrité des témoins.",
        couverture: enfantsOppermann,
        lien: "https://www.booksnjoy.com/enfants-oppermann-lion-feuchtwanger-allemagne-nazisme-seconde-guerre-mondiale/",
      },
      {
        titre: "Les cygnes sauvages",
        auteur: "Jung Chang",
        presentation: "Témoignage douloureux d'une famille chinoise prise dans les tourments de la révolution culturelle, Les cygnes sauvages est un document d'une valeur historique exceptionnelle. La narratrice, dissidente politique exilée en Angleterre, retrace dans les mémoires de sa famille l'ascension sociale et la chute brutale de ses parents, un couple de hauts fonctionnaires dévoués corps et âme au parti avant d'être répudiés, torturés et internés en camps de rééducation.",
        couverture: cygnesSauvages,
        lien: "https://www.booksnjoy.com/cygnes-sauvages-jung-chang-la-autobiographie-romancee-chine-maoiste-saga-familiale/",
      },
      {
        titre: "La huitième vie",
        auteur: "Nino Haratischwili",
        presentation: "Telle une tapisserie, l'histoire de la lignée Iachi est composée de fils étroitement tissés, de vies disparates, que le hasard a réunies pour former un assemblage hétéroclite de motifs, qui, mis bout à bout, dessinent une famille au destin chaotique. À l'intention de sa nièce Brilka, Niza entreprend la laborieuse tâche de rédiger la chronique de leur famille, et, pour cela, remonte les ramifications sur huit générations.",
        couverture: huitiemeVie,
        lien: "https://www.booksnjoy.com/huitieme-vie-nino-haratiscwili-saga-familiale-georgie/",
      },
      {
        titre: "Les raisins de la colère",
        auteur: "John Steinbeck",
        presentation: "Jeudi 24 octobre 1929, le marché boursier américain s'effondre. Le modèle spéculatif sur lequel l'économie américaine prospérait est à bout de souffle. La bulle éclate, le chômage explose, des millions d'Américains se retrouvent sur le carreau. Dix ans plus tard paraît Les raisins de la colère.",
        couverture: raisinsColere,
        lien: "https://www.booksnjoy.com/raisins-colere-john-steinbeck-pulitzer-nobel/",
      },
      {
        titre: "L'art de perdre",
        auteur: "Alice Zeniter",
        presentation: "Alice Zeniter, elle-même petite-fille de harkis, interroge brillamment, en retraçant le destin de toute une famille kabyle contrainte à l'exil au lendemain de la guerre d'Algérie pour avoir servi les intérêts des Français, la notion d'identité et la complexité qu'elle revêt lorsque les mots viennent à manquer.",
        couverture: artDePerdre,
        lien: "https://www.booksnjoy.com/lart-de-perdre-alice-zeniter/",
      },
      {
        titre: "Un sac de billes",
        auteur: "Joseph Joffo",
        presentation: "Publié en 1973, Un sac de billes connut à sa parution un succès retentissant, encore intact aujourd'hui. Paris, 1941 : Joseph et Maurice Joffo ont respectivement dix et douze ans le jour où leur père les convoque pour leur annoncer leur départ imminent.",
        couverture: sacDeBilles,
        lien: "https://www.booksnjoy.com/un-sac-de-billes-joseph-joffo/",
      },
      {
        titre: "Éducation européenne",
        auteur: "Romain Gary",
        presentation: "1945, l'Allemagne capitule, tandis qu'en librairie un premier roman, au titre évocateur, d'un auteur encore inconnu, juif russe ayant émigré en France à 14 ans, aviateur de la France libre, fait parler de lui. De son expérience de résistant, l'écrivain deux fois goncourisé tire le récit de survie d'un groupe de partisans polonais.",
        couverture: educationEuropeenne,
        lien: "https://www.booksnjoy.com/education-europeenne-romain-gary-premier-roman/",
      },
      {
        titre: "À l'Ouest rien de nouveau",
        auteur: "Erich Maria Remarque",
        presentation: "Blessé sur le front de l'Ouest en 1917, l'écrivain allemand Erich Maria Remarque a forgé son engagement pacifiste dans sa propre expérience de la guerre : celle des tranchées, où les hommes planqués dans des tunnels de plusieurs kilomètres de long, sous terre, grouillant de rats, servaient de chair à canon.",
        couverture: ouestRienNouveau,
        lien: "https://www.booksnjoy.com/a-louest-rien-de-nouveau-erich-maria-remarque-un-manifeste-pacifiste-denoncant-labsurdite-de-lideologie-guerriere-devenu-un-chef-doeuvre-intemporel/",
      },
      {
        titre: "La Fin de l'homme rouge",
        auteur: "Svetlana Alexievitch",
        presentation: "Dans son discours de réception du prix Nobel de littérature en 2015, la dissidente biélorusse Svetlana Alexievitch expose sa démarche créatrice : capter les voix d'anonymes, celles que l'on n'entend pas, recueillir leurs témoignages, puis retravailler ce matériau brut pour raconter la grande Histoire au regard de la petite.",
        couverture: finHommeRouge,
        lien: "https://www.booksnjoy.com/la-fin-de-lhomme-rouge-svetlana-alexievitch-prix-nobel-litterature/",
      },
      {
        titre: "Melnitz",
        auteur: "Charles Lewinsky",
        presentation: "Saga familiale monumentale, où les portes s'ouvrent sur des inconnus et se claquent sur des rancœurs tenaces. Melnitz retrace 75 ans de la vie d'une famille juive de 1871 à 1945 en République helvétique.",
        couverture: melnitz,
        lien: "https://www.booksnjoy.com/melnitz-charles-lewinsky-saga-familiale-judaisme-suisse/",
      },
      {
        titre: "Enfant de salaud",
        auteur: "Sorj Chalandon",
        presentation: "« C'est un enfant de salaud, et il faut qu'il le sache. » Soldat français, collabo, soldat allemand, agent double au service de la Gestapo, résistant… le père de Sorj Chalandon aura endossé, pendant la Seconde Guerre mondiale, autant de costumes que son imagination a tissé de réalités.",
        couverture: enfantDeSalaud,
        lien: "https://www.booksnjoy.com/enfant-de-salaud-sorj-chalandon-rentree-litteraire/",
      },
      {
        titre: "Une femme fuyant l'annonce",
        auteur: "David Grossman",
        presentation: "Le 12 août 2006, le tank d'Uri Grossman, fils du grand écrivain israélien David Grossman, est touché par une roquette au Sud Liban. Deux ans plus tard, son père publie un chef-d'œuvre : Les Mille et Une Nuits d'une mère, qui, en racontant la vie de son fils, tente de le maintenir en vie.",
        couverture: femmeFuyantAnnonce,
        lien: "https://www.booksnjoy.com/une-femme-fuyant-lannonce-david-grossman-israel/",
      },
      {
        titre: "Seul dans Berlin",
        auteur: "Hans Fallada",
        presentation: "Inspiré de l'histoire vraie d'un couple d'ouvriers arrêté et exécuté par la Gestapo pour haute trahison, Seul dans Berlin est un monument de la littérature : le grand roman de la résistance allemande, à la fois romanesque, tout en nuances, sombre, et drôle par moments.",
        couverture: seulDansBerlin,
        lien: "https://www.booksnjoy.com/seul-dans-berlin-hans-fallada-grand-roman-resistance-allemande-chef-doeuvre/",
      },
      {
        titre: "Tanguy",
        auteur: "Michel del Castillo",
        presentation: "Tanguy est un des plus beaux livres qui soient. On est foudroyé par sa beauté, la justesse des mots employés et la simplicité avec laquelle l'horreur est racontée. Tanguy est le symbole d'une enfance sacrifiée.",
        couverture: tanguy,
        lien: "https://www.booksnjoy.com/tanguy-michel-del-castillo/",
      },
      {
        titre: "L'ordre du jour",
        auteur: "Éric Vuillard",
        presentation: "Éric Vuillard se saisit d'un moment de l'Histoire qu'il décortique, démystifie à l'aide d'une plume incisive comme un scalpel. L'ordre du jour fait référence aux années 30, celles qui ont précédé la Seconde Guerre mondiale, période pendant laquelle la machine infernale allemande se met en branle en se nourrissant de la faiblesse humaine.",
        couverture: ordreDuJour,
        lien: "https://www.booksnjoy.com/ordre-jour-eric-vuillard-goncourt/",
      },
      {
        titre: "Underground Railroad",
        auteur: "Colson Whitehead",
        presentation: "Prix Pulitzer 2017 mérité ! Cora, 16 ans, esclave dans une plantation de coton en Géorgie, s'échappe en montant dans un train souterrain fantôme qui traverse les États-Unis du Sud esclavagiste au Nord libre. Une course-poursuite haletante, portée par une femme déterminée à reconquérir sa liberté.",
        couverture: undergroundRailroad,
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
        presentation: "Entrée magistrale en littérature pour Toby Lloyd, qui signe avec La famille Rosenthal un premier roman à suspense brillant, mêlant mysticisme juif, magie noire, traumatismes intergénérationnels liés à la Shoah et névroses familiales.",
        couverture: familleRosenthal,
        lien: "https://www.instagram.com/p/DZmGhQfMJtM/",
      },
      {
        titre: "Où vivaient les gens heureux",
        auteur: "Joyce Maynard",
        presentation: "Orpheline, après une enfance passée à l'ombre du couple fusionnel formé par des parents alcooliques emportés trop tôt par un accident, Eleanor investit ses espoirs et ses droits d'auteur dans une ferme du New Hampshire — un point d'ancrage où elle rêve d'établir le foyer familial dont elle a été privée.",
        couverture: gensHeureux,
        lien: "https://www.booksnjoy.com/ou-vivaient-les-gens-heureux-joyce-maynard-saga-familiale-americaine-femme-maternite/",
      },
      {
        titre: "Les frères K",
        auteur: "David James Duncan",
        presentation: "Ce récit est celui d'un entrelacs de huit êtres humains, dont seul un était joueur de base-ball professionnel. De Camas, cité ouvrière de la côte Ouest des États-Unis, à la jungle vietnamienne ou l'effervescence des villes indiennes, Les frères K embrasse, avec humour et tendresse, le destin d'une fratrie prise dans les mailles de l'histoire de son pays.",
        couverture: freresK,
        lien: "https://www.booksnjoy.com/les-freres-k-david-james-duncan-lenvers-du-reve-americain-saga-familiale/",
      },
      {
        titre: "Une éducation",
        auteur: "Tara Westover",
        presentation: "À l'écriture de ses mémoires, il y a peu de chances que Tara Westover ait mesuré la pleine portée de son geste. Sous la forme d'une quête d'émancipation féminine douloureuse, elle nous fait le cadeau précieux d'un récit d'autodétermination lumineux. Tara Westover reprend possession de son histoire et rétablit une vérité dont les siens l'ont fait douter, à savoir grandir aux confins de l'Amérique rurale dans une famille mormone délirante aux fondations mouvantes, reposant sur une conception complètement pervertie de la loyauté.",
        couverture: uneEducation,
        lien: "https://www.booksnjoy.com/une-education-tara-westover-recit-emancipation-femme/",
      },
      {
        titre: "La famille Moskat",
        auteur: "Isaac Bashevis Singer",
        presentation: "Les hommes en caftan et les femmes emperruquées sortis des pages de La famille Moskat peuplent cette Varsovie multiculturelle du début du 20e siècle, où la vie s'écoule au rythme des 613 commandements de l'Ancien Testament. Des coutumes strictes qui ont traversé le temps pour assurer la pérennité d'une communauté, dont les deux tiers en Europe disparaîtront dans les camps.",
        couverture: familleMoskat,
        lien: "https://www.booksnjoy.com/famille-moskat-isaac-bashevis-singer-saga-familiale-yiddish-prix-nobel-litterature-1978/",
      },
      {
        titre: "La famille Karnovski",
        auteur: "Israël Joshua Singer",
        presentation: "Écrit en 1943, La famille Karnovski est une formidable saga familiale qui, à travers trois générations, livre une réflexion magistrale sur l'identité juive, le concept de métissage culturel et de mixité sociale avec en toile de fond la montée du nazisme. Comment, dans un pays obsédé par la pureté de la race, un adolescent juif peut-il se construire alors que se cristallisent en lui toutes les contradictions d'une nation ?",
        couverture: familleKarnovski,
        lien: "https://www.booksnjoy.com/famille-karnovski-israel-joshua-singer/",
      },
      {
        titre: "Les frères Ashkenazi",
        auteur: "Israël Joshua Singer",
        presentation: "« Les hommes issus de toi seront riches. » La prophétie du Rebbe de Worké à la naissance des jumeaux Ashkenazi s'est avérée exacte, mais quel fut le prix à payer pour que les deux frères se hissent en haut du panier, dans la Pologne chrétienne de la fin du 19e siècle ?",
        couverture: freresAshkenazi,
        lien: "https://www.booksnjoy.com/freres-ashkenazi-israel-joshua-singer/",
      },
      {
        titre: "La huitième vie",
        auteur: "Nino Haratischwili",
        presentation: "Telle une tapisserie, l'histoire de la lignée Iachi est composée de fils étroitement tissés, de vies disparates, que le hasard a réunies pour former un assemblage hétéroclite de motifs, qui, mis bout à bout, dessinent une famille au destin chaotique. À l'intention de sa nièce Brilka, Niza entreprend la laborieuse tâche de rédiger la chronique de leur famille, et, pour cela, remonte les ramifications sur huit générations.",
        couverture: huitiemeVie,
        lien: "https://www.booksnjoy.com/huitieme-vie-nino-haratiscwili-saga-familiale-georgie/",
      },
      {
        titre: "Les Grandes Familles",
        auteur: "Maurice Druon",
        presentation: "Prix Goncourt 1948, Les Grandes Familles est le premier volet d'un triptyque romanesque, une fresque historique savoureuse sur plusieurs générations, s'inscrivant dans la tradition du grand roman balzacien. En unissant leurs descendants, les de La Monnerie — grande famille aristocratique — et les Schoudler — richissimes hommes d'affaires — ont assuré la pérennité de leurs lignées.",
        couverture: grandesFamilles,
        lien: "https://www.booksnjoy.com/grandes-familles-maurice-druon-goncourt-1948/",
      },
      {
        titre: "La mort d'un père",
        auteur: "Karl Ove Knausgaard",
        presentation: "« Longtemps j'avais souhaité sa mort, mais dès l'instant où je compris qu'il pouvait mourir rapidement, je me mis à l'espérer. » Ce n'est pas un hasard si l'écrivain norvégien inaugure son cycle autobiographique par la mort de son père.",
        couverture: mortDunPere,
        lien: "https://www.booksnjoy.com/mort-pere-karl-ove-knausgaard-autobiographie-scandinave-norvege/",
      },
      {
        titre: "Le Prince des marées",
        auteur: "Pat Conroy",
        presentation: "« Depuis sa plus tendre enfance, Savannah avait été désignée pour porter le poids de la psychose accumulée dans notre famille. Sa sensibilité lumineuse la livrait à la violence et au ressentiment de toute la maison, et nous faisions d'elle le réservoir où s'accumulait l'amertume. »",
        couverture: princeDesMarees,
        lien: "https://www.booksnjoy.com/le-prince-des-marees-pat-conroy-saga-familiale-chef-doeuvre-americain/",
      },
    ],
  },
];
