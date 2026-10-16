// Static (non-translatable) project data — images, URLs, tech stack, tags, year
export const projectsMeta = [
// leo fudaly e-shop
  {
    id: 'leofudaly-eshop',
    name: 'Leo Fudaly – E-shop',
    year: '2026',
    tags: ['Web', 'E-shop'],
    image: '/project/web/leofudaly/leofudaly-cover.webp',

    gallery: [
      '/project/web/leofudaly/leofudaly-cover.webp',
      '/project/web/leofudaly/leofudaly5.webp',
      '/project/web/leofudaly/leofudaly6.webp',
      '/project/web/leofudaly/leofudaly7.webp',
      '/project/web/leofudaly/leofudaly.webp',
      '/project/web/leofudaly/leofudaly1.webp',
      '/project/web/leofudaly/leofudaly2.webp',
      '/project/web/leofudaly/leofudaly3.webp',
      '/project/web/leofudaly/leofudaly4.webp',
    ],

    preklik: 'https://www.leofudaly.com/',

    url: 'https://www.leofudaly.com',
    client: 'Leo Fudaly',
    tech: ['React', 'TailwindCSS', 'AI + ručné doladenie', 'Platobná brána', 'Packeta API'],
    services: ['Dizajn e-shopu', 'UX/UI', 'Vývoj v Reacte', 'Platobná brána', 'Napojenie dopravy', 'Správa produktov'],

    process: 'Dizajn a vizuálny štýl (ako prvý) → Návrh UX a štruktúry → Vývoj v Reacte s pomocou AI → Ručné doladenie každého detailu → Platobná brána a doprava (Packeta) → Testovanie objednávok → Spustenie',

    results: [
      'Kompletný e-shop pre minimalistickú módnu značku – od dizajnu až po prvú objednávku',
      'Plne funkčná platobná brána – zákazník zaplatí kartou priamo na webe',
      'Napojenie na Packetu – výber výdajného miesta a automatické spracovanie zásielok',
      'Správa produktov podľa farieb – každý kúsok má farebné varianty s vlastnými fotkami',
      'Filtrovanie podľa kategórie, ceny a farby, prepínanie zobrazenia mriežky',
      'Košík, objednávky, dvojjazyčná verzia (SK / EN) a možnosť objednať oblečenie šité na mieru',
    ],

    duration: '4 týždne',
    category: 'Web / E-shop / Móda',

    desc: 'Kompletný e-shop pre minimalistickú módnu značku – vlastný dizajn, vývoj v Reacte, platobná brána, správa produktov podľa farieb a napojenie na Packetu.',

    challenge:
      'Módna značka potrebovala e-shop, ktorý bude vyzerať rovnako čisto a minimalisticky ako samotné oblečenie, no zároveň bude plne funkčný: platby kartou, doprava cez výdajné miesta, produkty vo viacerých farbách a jednoduchá správa celého sortimentu.',

    solution:
      'Najprv som vyriešil dizajn – minimalistickú galériu s veľkými produktovými fotkami na bielom pozadí a kódovým označením kúskov (HD-19, PT-28…). Potom som e-shop postavil v Reacte: základ som vytvoril s pomocou AI a všetko som ručne doladil do detailu. Napojil som kompletnú platobnú bránu, dopravu cez Packetu, riadenie produktov podľa farieb a filtre podľa kategórie, ceny a farby. Celý obchod funguje v slovenčine aj angličtine.',
  },
// cvic sam 
  {
    id: 'cvic-sam',
name: 'Cvič Sám',
year: '2025',
tags: ['Web', 'Fitness'],
image: '/project/web/cvicsam/cvicsam.webp',

gallery: [
   '/project/web/cvicsam/cvicsam.webp',
  '/project/web/cvicsam/cvicsam1.webp',
  '/project/web/cvicsam/cvicsam2.webp',
  '/project/web/cvicsam/civicsam3.webp',
  '/project/web/cvicsam/cvicsam4.webp',
  '/project/web/cvicsam/cvicsam5.webp',
  '/project/web/cvicsam/cvicsam6.webp',
  '/project/web/cvicsam/cvicsam7.webp',
  
],

preklik:'https://novy3.vercel.app/',

url: 'https://www.cvicsam.com',
client: 'Cvič Sám',
tech: ['React', 'TailwindCSS', 'Framer Motion'],
services: ['Web Design', 'Development', 'UX/UI', 'SEO'],

process: 'Analýza → Dizajn → Vývoj → Optimalizácia → Spustenie',

results: [
  'Moderná prezentácia fitness značky',
  'Jednoduchý rezervačný flow',
  'Rýchly a responzívny web',
],

duration: '3 týždne',
category: 'Web / Fitness',

desc: 'Kompletný moderný web pre súkromnú posilňovňu Cvič Sám.', 
challenge:
  'Cieľom bolo vytvoriť moderný a dynamický web, ktorý jasne vysvetlí koncept súkromnej posilňovne a zjednoduší rezervácie.',

solution:
  'Navrhol som moderný responzívny web s dôrazom na silný vizuál, jednoduchú navigáciu a rýchly rezervačný proces.',
  },
// kkfol
  {
  id: 'kkfol',

name: 'KKFOL - Reklamná agentúra',
  year: '2025',

  tags: ['Web', 'Branding'],

  image: '/project/web/kkfol/kkfol.webp',

  gallery: [
    '/project/web/kkfol/kkfol.webp',
    '/project/web/kkfol/kkf1.webp',
    '/project/web/kkfol/kkf2.webp',
    '/project/web/kkfol/kkf3.webp',
    '/project/web/kkfol/kkf4.webp',
  
  ],

  preklik: 'https://kkfol-final.vercel.app/',

url: 'https://www.kkfol.com',

  client: 'KFOL',

  tech: [
    'React',
    'TailwindCSS',
    'Framer Motion',
  ],

  services: [
    'Web Design',
    'Development',
    'Branding',
    'SEO',
  ],

  process:
    'Analýza → Wireframe → Dizajn → Vývoj → Optimalizácia → Spustenie',

  results: [
    'Prémiová prezentácia značky',
    'Moderný a dynamický vizuál',
    'Rýchly responzívny web',
  ],

  duration: '4 týždne',

  category: 'Web / Automotive',

desc:
  'Moderný web pre značku KFOL zameranú na polepy vozidiel, branding a prémiovú prezentáciu služieb.',

  challenge:
    'Cieľom bolo vytvoriť agresívny a prémiový web, ktorý odprezentuje kvalitu polepov a vizuálnu identitu značky.',

  solution:
    'Navrhol som moderný responzívny web s dôrazom na silný vizuál, animácie a jednoduchý kontakt pre zákazníkov.',
},
// nasa
{
  id: 'nasa-cafe',

  name: 'Naša - Káva & Bistro',
  year: '2026',

  tags: ['Web', 'Branding'],

  image: '/project/web/nasa/nasa.webp',

  gallery: [
   '/project/web/nasa/nasa.webp',
   '/project/web/nasa/nasa1.webp',
   '/project/web/nasa/nasa2.webp',
   '/project/web/nasa/nasa3.webp',
   '/project/web/nasa/nasa4.webp',
    
  ],

  preklik: 'https://nasa-final-navy.vercel.app/',

  url: 'https://www.nasa.com',

  client: 'Naša Káva & Bistro',

  tech: [
    'React',
    'TailwindCSS',
    'Framer Motion',
  ],

  services: [
    'Web Design',
    'Development',
    'Branding',
    'SEO',
  ],

  process:
    'Analýza → Wireframe → Dizajn → Vývoj → Optimalizácia → Spustenie',

  results: [
    'Prémiová prezentácia kaviarne',
    'Elegantný minimalistický dizajn',
    'Rýchly responzívny web',
  ],

  duration: '3 týždne',

  category: 'Web / Gastro',

  desc:
    'Moderný minimalistický web pre kaviareň a bistro v Kežmarku zameraný na prémiovú atmosféru a vizuálny zážitok.',

  challenge:
    'Cieľom bolo vytvoriť elegantný web, ktorý spojí moderný dizajn, pokojnú atmosféru a kvalitnú prezentáciu podniku.',

  solution:
    'Navrhol som čistý responzívny web s výraznou typografiou, jemnými animáciami a intuitívnou navigáciou.',
},
// lenka
{
  id: 'leni-honcarova',

  name: 'Leni Hončárová',
  year: '2026',

  tags: ['Web', 'Portfolio'],

  image: '/project/web/lenka/lenka.webp',

  gallery: [
    '/project/web/lenka/lenka.webp',
    '/project/web/lenka/lenka1.webp',
    '/project/web/lenka/lenka2.webp',
    '/project/web/lenka/lenka3.webp',
    '/project/web/lenka/lenka4.webp',
  ],

  preklik: 'https://www.lenihoncarova.com/',

  url: 'https://www.lenihoncarova.com',

  client: 'Leni Hončárová',

  tech: [
    'React',
    'TailwindCSS',
    'Framer Motion',
  ],

  services: [
    'Web Design',
    'Development',
    'Portfolio',
    'SEO',
  ],

  process:
    'Analýza → Wireframe → Dizajn → Vývoj → Optimalizácia → Spustenie',

  results: [
    'Elegantná prezentácia umenia',
    'Minimalistický a čistý vizuál',
    'Responzívne portfolio',
  ],

  duration: '2 týždne',

  category: 'Web / Art Portfolio',

  desc:
    'Minimalistické online portfolio pre umelkyňu Leni Hončárovú zamerané na elegantnú prezentáciu diel a výstav.',

  challenge:
    'Cieľom bolo vytvoriť jemný a estetický web, ktorý nechá vyniknúť umelecké diela bez rušivých prvkov.',

  solution:
    'Navrhol som čistý responzívny web s minimalistickou typografiou, jemnými animáciami a dôrazom na vizuálnu prezentáciu tvorby.',
},

// fitkokk
{
  id: 'dfitness',

  name: 'D-Fitness Kežmarok',
  year: '2026',

  tags: ['Web', 'Fitness'],

  image: '/project/web/fiktokk/fitkokezmarok.webp',

  gallery: [
    '/project/web/fiktokk/fitkokezmarok.webp',
    '/project/web/fiktokk/kkfitko1.webp',
    '/project/web/fiktokk/kkfitko2.webp',
    '/project/web/fiktokk/kkfitko3.webp',
    '/project/web/fiktokk/kkfitko4.webp',
    
  ],

  preklik: 'https://kezmarok-fitko-final.vercel.app/',

  url: 'https://www.dfitness.com',

  client: 'D-Fitness Kežmarok',

  tech: [
    'React',
    'TailwindCSS',
    'Framer Motion',
  ],

  services: [
    'Web Design',
    'Development',
    'Branding',
    'SEO',
  ],

  process:
    'Analýza → Wireframe → Dizajn → Vývoj → Optimalizácia → Spustenie',

  results: [
    'Moderná prezentácia fitness centra',
    'Dynamický športový vizuál',
    'Rýchly responzívny web',
  ],

  duration: '3 týždne',

  category: 'Web / Fitness',

  desc:
    'Moderný fitness web pre D-Fitness Kežmarok zameraný na tréningy, členstvá a profesionálnu prezentáciu gymu.',

  challenge:
    'Cieľom bolo vytvoriť energický a moderný web, ktorý odprezentuje fitness centrum a motivuje návštevníkov k registrácii.',

  solution:
    'Navrhol som responzívny web s výraznou typografiou, dynamickými farbami a intuitívnym používateľským zážitkom.',
},

// ciao casa
{
  id: 'ciaocasa',

  name: 'ciaoCASA',
  year: '2026',

  tags: ['Web', 'Interior Design'],

  image: '/project/web/ciaocasa/ciaocasa-cover.webp',

  gallery: [
    '/project/web/ciaocasa/ciaocasa-cover.webp',
    '/project/web/ciaocasa/ciaocasa1.webp',
    '/project/web/ciaocasa/ciaocasa.webp',
    '/project/web/ciaocasa/ciaocasa2.webp',
    '/project/web/ciaocasa/ciaocasa3.webp',
    '/project/web/ciaocasa/ciaocasa4.webp',
  ],

  preklik: 'https://www.ciaocasa.sk/',

  url: 'https://www.ciaocasa.sk',

  client: 'ciaoCASA',

  tech: ['React', 'TailwindCSS', 'Framer Motion'],

  services: ['Web Design', 'Development', 'UX/UI', 'SEO'],

  process: 'Analýza → Wireframe → Dizajn → Vývoj → Optimalizácia → Spustenie',

  results: [
    'Prémiová prezentácia interiérového dizajnu a výstavby',
    'Portfólio projektov s filtrami podľa typu, stavu, štýlu a využitia',
    'Prehľadné služby – rodinný dom na mieru, interiér, výstavba, katalógové projekty',
    'Tmavý luxusný vizuál s dôrazom na fotografie',
  ],

  duration: '4 týždne',

  category: 'Web / Interior Design',

  desc:
    'Prémiový web pre ciaoCASA – návrh rodinných domov na mieru, interiérový dizajn a výstavbu od prvého náčrtu až po odovzdanie kľúčov.',

  challenge:
    'Vytvoriť elegantný web, ktorý odprezentuje realizácie a vizualizácie interiérov, jasne vysvetlí jednotlivé služby a pomôže klientom rýchlo nájsť projekty, ktoré ich zaujímajú.',

  solution:
    'Navrhol a vyvinul som tmavý minimalistický web s veľkými fotografiami, karuselom projektov, rozbaľovacím menu služieb s obrázkami a pokročilým filtrom projektov (typ, stav, štýl dizajnu, typ využitia) s náhľadom výsledkov.',

  location: 'Slovensko',

  business: {
    brand: 'ciaoCASA',
    industry: 'Interiérový dizajn & výstavba',
    website: 'https://www.ciaocasa.sk/',
  },
},



// socialne sitete
// nasa
{
  

  name: 'Naša - Káva & Bistro',
  id: 'nasacaffe',

  year: '2026',

  tags: ['Sociálne siete', 'Instagram posty'],

  image: '/project/socialne/nasa/logo.webp',

  gallery: [
    '/project/socialne/nasa/a1.webp',
    '/project/socialne/nasa/a12.webp',
    '/project/socialne/nasa/a8.webp',
    '/project/socialne/nasa/a2.webp',
    '/project/socialne/nasa/a6.webp',
    '/project/socialne/nasa/a11.webp',
    '/project/socialne/nasa/a13.webp',
    '/project/socialne/nasa/a14.webp',
    '/project/socialne/nasa/a3.webp',
    '/project/socialne/nasa/a4.webp',
    '/project/socialne/nasa/a5.webp',
    '/project/socialne/nasa/a7.webp',
    '/project/socialne/nasa/a9.webp',
    '/project/socialne/nasa/a10.webp',
    '/project/socialne/nasa/a15.webp',
    '/project/socialne/nasa/a16.webp',
    '/project/socialne/nasa/a17.webp',
    '/project/socialne/nasa/a18.webp',
    '/project/socialne/nasa/a19.webp',
    '/project/socialne/nasa/a20.webp',
    '/project/socialne/nasa/a21.webp',
    '/project/socialne/nasa/a22.webp',
    '/project/socialne/nasa/a23.webp',
    '/project/socialne/nasa/a24.webp',
    '/project/socialne/nasa/a25.webp',
    '/project/socialne/nasa/a26.webp',
    '/project/socialne/nasa/a27.webp',
  ],

  url: 'https://instagram.com',

  client: 'Naša Caffé',

  tech: [
    'Figma',
    'Adobe Illustrator',
    'Photoshop',
  ],

  services: [
    'Social Media Design',
    'Instagram Post Design',
    'Content Design',
    'Brand Visuals',
    'Marketing Graphics',
  ],

  process: 'Analýza značky → Návrh vizuálov → Dizajn postov → Finalizácia',

  results: [
    'Moderný a jednotný vizuál sociálnych sietí',
    'Atraktívne Instagram posty pre kaviareň',
    'Zvýšenie vizuálnej identity značky',
    'Konzistentná komunikácia na sociálnych sieťach',
  ],

  duration: '1 týždeň',

  category: 'Social Media Design',

  desc: 'Návrh kreatívnych vizuálov a Instagram postov pre kaviareň Naša Caffé zameraných na modernú a estetickú prezentáciu produktov.',

  challenge:
    'Vytvoriť vizuálne atraktívne sociálne siete, ktoré budú pôsobiť moderne, minimalisticky a zároveň zvýraznia produkty kaviarne.',

  solution:
    'Navrhol som sériu moderných Instagram postov a vizuálov s dôrazom na jednotnú identitu značky, produktovú prezentáciu a estetický obsah pre sociálne siete.',
},
// timo

{
name: 'Timothy Smon – FormaCasa',
id: 'formacasa',

year: '2026',

tags: ['Sociálne siete', 'Instagram posty'],

image: '/project/socialne/timo/logo.webp',




gallery: [
'/project/socialne/timo/c1.webp',
  '/project/socialne/timo/c2.webp',
  '/project/socialne/timo/c3.webp',
  '/project/socialne/timo/c4.webp',
  '/project/socialne/timo/c5.webp',
  '/project/socialne/timo/c6.webp',
  '/project/socialne/timo/c7.webp',
  '/project/socialne/timo/c8.webp',
  '/project/socialne/timo/c9.webp',
  '/project/socialne/timo/c10.webp',
  '/project/socialne/timo/c11.webp',
  '/project/socialne/timo/c12.webp',
  '/project/socialne/timo/c13.webp',
  '/project/socialne/timo/c14.webp',
],
url: 'https://instagram.com/ts.dsgformacasa',

client: 'Timothy Smon – FormaCasa',

tech: [
'Figma',
'Adobe Illustrator',
'Photoshop',
],

services: [
'Social Media Design',
'Content Design',
'Brand Visuals',
'Instagram Post Design',
'Marketing Graphics',
],

process: 'Analýza značky → Návrh vizuálnej identity → Tvorba obsahu → Finalizácia',

results: [
'Luxusný a konzistentný vizuál sociálnych sietí',
'Profesionálna prezentácia interiérových projektov',
'Posilnenie vizuálnej identity značky',
'Atraktívna komunikácia služieb a realizácií',
],

duration: '2 týždne',

category: 'Social Media Design',

desc: 'Kompletný návrh sociálnych sietí a vizuálnej komunikácie pre interiérové a exteriérové dizajnové štúdio FormaCasa zamerané na prezentáciu realizácií, dizajnových konceptov a profesionálnych služieb.',

challenge:
'Vytvoriť elegantný a prémiový vizuálny štýl, ktorý bude odrážať kvalitu interiérového dizajnu a zároveň efektívne prezentovať projekty na sociálnych sieťach.',

solution:
'Navrhol som sériu moderných a luxusných vizuálov pre Instagram s dôrazom na prezentáciu realizácií, architektonických detailov, branding a budovanie dôveryhodnej značky v oblasti interiérového dizajnu.',

location: 'Slovensko',

business: {
instagram: '@ts.dsgformacasa',
followers: '29+',
industry: 'Interior & Exterior Design Studio',
phone: '+421 917 147 675',
email: '[tsdesigncompanybusiness@gmail.com](mailto:tsdesigncompanybusiness@gmail.com)',
website: 'https://left-champagne-285439.framer.app/cennik21',
},
},

// tatratea
{
  id: 'tatratea',
  name: 'Tatratea – Koktejlové vizuály',
  year: '2026',

  tags: ['Sociálne siete', 'Instagram posty'],

  image: '/project/grafika/tatratea/tatratea.webp',

  gallery: [
    '/project/grafika/tatratea/coco-loco.webp',
    '/project/grafika/tatratea/red-forest.webp',
    '/project/grafika/tatratea/blue-lagoon.webp',
    '/project/grafika/tatratea/tatra-mojito.webp',
    '/project/grafika/tatratea/tatra-mojito-menu.webp',
    '/project/grafika/tatratea/blue-lagoon-menu.webp',
    '/project/grafika/tatratea/red-forest-menu.webp',
    '/project/grafika/tatratea/coco-loco-menu.webp',
    '/project/grafika/tatratea/voucher-1.webp',
    '/project/grafika/tatratea/voucher-2.webp',
  ],

  url: 'https://www.havanaexperience.sk',
  client: 'Tatratea × Havana Experience',

  tech: ['Photoshop', 'Adobe Illustrator', 'Canva'],

  services: ['Grafický dizajn', 'Instagram posty', 'Plagáty / menu kariet', 'Voucher'],

  process: 'Brief → Koncept drinkov → Produktové vizuály → Typografia → Finalizácia',

  results: [
    'Séria 4 koktejlových vizuálov – Coco-Loco, Red-Forest, Blue-Lagoon, Tatra-Mojito',
    'Atmosférické plagáty s fľašou Tatratea aj čisté menu karty s receptami',
    'Voucher na uvítací drink na účet podniku',
    'Jednotný vizuálny štýl pripravený na sociálne siete aj tlač',
  ],

  duration: '1 týždeň',

  category: 'Social Media Design',

  desc: 'Séria koktejlových vizuálov pre Tatratea – Instagram posty, menu karty s receptami a voucher na uvítací drink pre Havana Experience.',

  challenge:
    'Vytvoriť sériu vizuálov, ktoré predstavia nové letné koktejly s Tatratea pútavo a zrozumiteľne – s receptom, náladou každého drinku a jasnou značkou.',

  solution:
    'Navrhol som dve línie vizuálov: atmosférické plagáty, kde sa Tatratea nalieva do pohára v prostredí, ktoré sedí k chuti drinku, a čisté minimalistické menu karty s receptom a popisom. Doplnil som voucher na uvítací drink v rovnakom štýle.',
},

// ladomer
{
  id: 'ladomer-detailing',
  name: 'Ladomer – Premium Auto Detailing',
  year: '2026',

  tags: ['Sociálne siete', 'Instagram posty'],

  image: '/project/socialne/ladomer/ladomer.webp',

  gallery: [
    '/project/socialne/ladomer/ciste-auto-v2.webp',
    '/project/socialne/ladomer/premiovy-detailing-v3.webp',
    '/project/socialne/ladomer/ciste-do-detailu-v2.webp',
    '/project/socialne/ladomer/ladomer-logo.webp',
  ],

  url: 'https://www.autoumyvarenladomerzh.sk',
  client: 'Autoumyváreň Ladomerská',

  tech: ['Photoshop', 'Adobe Illustrator', 'Canva'],

  services: ['Social Media Design', 'Instagram posty', 'Logo', 'Reklamné vizuály'],

  process: 'Analýza služieb → Logo → Výber fotiek → Dizajn postov → Finalizácia',

  results: [
    'Logo Ladomer – Premium Auto Detailing',
    'Séria Instagram postov k ručnému umývaniu a detailingu',
    'Jasná komunikácia cien – exteriér od 80 €, kompletný detailing od 149 €',
    'Jednotný tmavý prémiový štýl profilu @autoumyvaren_ladomerzh',
  ],

  duration: '1 týždeň',

  category: 'Social Media Design',

  desc: 'Logo a Instagram posty pre ručnú autoumyváreň Ladomerská – ručné umývanie, čistenie interiéru aj exteriéru a prémiový detailing.',

  challenge:
    'Ručná autoumyváreň potrebovala profesionálnu prezentáciu na sociálnych sieťach, ktorá jasne ukáže kvalitu práce, ponúkané služby a ceny a odlíši ju od bežných automatických umyvární.',

  solution:
    'Navrhol som logo a sériu tmavých prémiových postov s výraznou typografiou, fotkami áut a koláží detailov – od ručného umývania („Čisté auto bez starostí“) cez exteriér („Čisté do detailu“) až po kompletný interiérový a exteriérový detailing s cenami.',
},

// hotel lomnica
{
  id: 'hotel-lomnica',
  name: 'Hotel Lomnica – Videá',
  year: '2026',

  tags: ['Video', 'Reels'],

  image: '/project/video/lomnica/lomnica-cover.webp',

  gallery: [
    '/project/video/lomnica/lomnica-hotel-v3.mp4',
    '/project/video/lomnica/walkthrough.mp4',
    '/project/video/lomnica/izba-1-zvuk.mp4',
    '/project/video/lomnica/izba-2-zvuk.mp4',
  ],

  url: 'https://www.hotellomnica.sk',
  client: 'Hotel Lomnica *****',

  tech: ['AI video (image-to-video)', 'Premiere Pro', 'CapCut'],

  services: ['Video produkcia', 'Instagram Reels', 'Strih & color grading'],

  process: 'Výber izieb → Fotky / podklady → Tvorba videa → Strih → Export pre Reels',

  results: [
    'Všetky zábery vygenerované cez AI z fotografií hotela',
    'Promo video „Za úrovňou Michelinu nemusíš vycestovať do zahraničia“',
    'Krátke vertikálne videá izieb pre Instagram a TikTok (9:16)',
    'Plynulý pohyb kamery priestorom izby',
    'Prémiová prezentácia 5* hotela',
  ],

  duration: '1 týždeň',

  category: 'Video / Reels',

  desc: 'Vertikálne videá pre 5* Hotel Lomnica v Tatrách – promo video „Za úrovňou Michelinu nemusíš vycestovať do zahraničia“ a krátke videá izieb pre Instagram Reels a TikTok. Všetky zábery sú vygenerované cez AI z fotografií.',

  challenge:
    'Hotel potreboval pútavé krátke videá izieb na sociálne siete, ktoré za pár sekúnd ukážu priestor, svetlo a atmosféru izby a pritiahnu pozornosť pri scrollovaní.',

  solution:
    'Všetky zábery som vygeneroval pomocou AI z fotografií hotela (image-to-video) – z obyčajnej fotky izby či exteriéru vznikol plynulý pohyb kamery priestorom. Videá som následne zostrihal, farebne upravil a pripravil vo formáte Reels, aby pôsobili prémiovo.',
},

// hotel lomnica – socialne siete
{
  id: 'hotel-lomnica-social',
  name: 'Hotel Lomnica – Instagram posty',
  year: '2026',

  tags: ['Sociálne siete', 'Instagram posty'],

  image: '/project/socialne/lomnica/lomnica-cover.webp',

  gallery: [
    '/project/socialne/lomnica/hotel.webp',
    '/project/socialne/lomnica/restauracia-sissi.webp',
    '/project/socialne/lomnica/mapa.webp',
    '/project/socialne/lomnica/recenzia-svadba.webp',
  ],

  url: 'https://www.hotellomnica.sk',
  client: 'Hotel Lomnica *****',

  tech: ['Photoshop', 'Adobe Illustrator', 'Canva'],

  services: ['Social Media Design', 'Instagram posty', 'Content Design'],

  process: 'Analýza značky → Koncept „mapovej karty“ → Výber fotiek → Dizajn postov → Finalizácia',

  results: [
    'Séria postov v štýle kariet z mapy – hotel, reštaurácia SISSI, poloha',
    'Post s recenziou hosťa (svadba v hoteli)',
    'Jednotný vizuál vo farbách značky Hotel Lomnica',
  ],

  duration: '1 týždeň',

  category: 'Social Media Design',

  desc: 'Instagram posty pre 5* Hotel Lomnica v Tatrách – karty v štýle mapy s hodnotením, reštaurácia SISSI, poloha hotela a recenzie hostí.',

  challenge:
    'Hotel chcel moderné posty, ktoré na prvý pohľad pôsobia ako známe rozhranie z mapových aplikácií a prirodzene ukážu hodnotenie, izby, reštauráciu a polohu.',

  solution:
    'Navrhol som sériu postov s kartou v štýle mapovej aplikácie – názov, hodnotenie, tlačidlá a fotky – položenú na atmosférických záberoch hotela, doplnenú o post s mapou polohy a o post s recenziou hosťa.',
},

// ladomer – video
{
  id: 'ladomer-video',
  name: 'Ladomer – Videá',
  year: '2026',

  tags: ['Video', 'Reels'],

  image: '/project/video/ladomer/ladomer-cover.webp',

  gallery: [
    '/project/video/ladomer/promo.mp4',
    '/project/video/ladomer/mercedes.mp4',
    '/project/video/ladomer/bmw.mp4',
  ],

  url: 'https://www.autoumyvarenladomerzh.sk',
  client: 'Autoumyváreň Ladomerská',

  tech: ['Premiere Pro', 'AI video', 'CapCut'],

  services: ['Video produkcia', 'Instagram Reels', 'Strih & color grading'],

  process: 'Natáčanie / podklady → Strih → Color grading → Titulky & grafika → Export pre Reels',

  results: [
    'Vertikálne Reels videá z detailingu – Mercedes-AMG EQS a BMW X7',
    'Dynamický strih a grafika v štýle značky Ladomer',
    'Obsah pripravený na Instagram a TikTok (9:16)',
  ],

  duration: '1 týždeň',

  category: 'Video / Reels',

  desc: 'Vertikálne Reels videá pre ručnú autoumyváreň Ladomerská – detailing Mercedes-AMG EQS a ručné umývanie BMW X7 pre Instagram a TikTok.',

  challenge:
    'Autoumyváreň potrebovala krátke pútavé videá, ktoré ukážu kvalitu ručného umývania a detailingu a zaujmú pri scrollovaní na sociálnych sieťach.',

  solution:
    'Vytvoril som sériu vertikálnych videí s dynamickým strihom, farebnou úpravou a grafikou v štýle značky – od penového umývania BMW X7 až po detailing Mercedes-AMG EQS.',
},

// hrajko – video reklamy
{
  id: 'hrajko-reklamy',
  name: 'Hrajko – Video reklamy',
  year: '2026',

  tags: ['Video', 'Reklamy'],

  image: '/project/video/hrajko/hrajko-cover.webp',

  gallery: [
    '/project/video/hrajko/reklama-dlha.mp4',
    '/project/video/hrajko/reklama-basketbal.mp4',
    '/project/video/hrajko/reklama-kratka.mp4',
    '/project/video/hrajko/reklama-short.mp4',
  ],

  url: 'https://www.hrajko.sk',
  client: 'Hrajko – Svet plný zábavy',

  tech: ['Premiere Pro', 'After Effects', 'AI video'],

  services: ['Video reklamy', 'Meta Ads kreatívy', 'Motion grafika', 'Copywriting'],

  process: 'Produkt & cieľovka → Hook a scenár → Motion grafika → Strih → Export pre Instagram / Facebook',

  results: [
    'Séria video reklám pre Instagram a Facebook (Meta Ads)',
    'Dlhá aj krátka verzia reklamy – stolný boxovací vak a basketbalový kôš na dvere',
    'Výrazné hooky v prvých sekundách („Zase ťa niekto vytočil?“, „Basketbal… v obývačke?“)',
    'Vertikálny formát 9:16 pre Reels, Stories a feed',
  ],

  duration: '1 týždeň',

  category: 'Video / Reklamy',

  desc: 'Video reklamy na Instagram a Facebook pre e-shop Hrajko – hravé motion videá s výrazným hookom, v dlhej aj krátkej verzii.',

  challenge:
    'E-shop Hrajko potreboval reklamy, ktoré zastavia scrollovanie, za pár sekúnd ukážu produkt a vtipne pomenujú problém, ktorý rieši.',

  solution:
    'Vytvoril som sériu vertikálnych video reklám s motion grafikou vo farbách značky – každá začína silným hookom, ukáže produkt v akcii a končí výzvou k nákupu. Pripravil som dlhú aj krátku verziu pre testovanie v Meta Ads.',
},

// swappie – video reklama
{
  id: 'swappie-reklama',
  name: 'Swappie – Ukážka reklamy',
  year: '2026',

  tags: ['Video', 'Reklamy'],

  image: '/project/video/swappie/reklama.jpg',

  gallery: [
    '/project/video/swappie/reklama.mp4',
    '/project/video/swappie/reklama-16x9.mp4',
  ],

  url: 'https://swappie.com/sk/',
  client: 'Swappie (ukážka, nie zákazka)',

  tech: ['AI video', '3D modely', 'After Effects', 'Premiere Pro'],

  services: ['Koncept a scenár reklamy', 'AI generované scény', '3D modely a animácia', 'Motion grafika', 'Strih a zvuk'],

  process: 'Výber značky a produktu → Hook a scenár → AI generovanie scén → 3D modely iPhonov → Motion grafika a typografia → Strih, zvuk a export vo formáte 9:16 aj 16:9',

  results: [
    'Dve verzie tej istej reklamy: vertikálna 9:16 (Reels, Stories, TikTok) a širokouhlá 16:9 (YouTube, web, prezentácie)',
    '100 % bez natáčania – žiadny štáb, štúdio, svetlá ani fyzický produkt',
    'Hook „Nový iPhone?“ hneď v prvej sekunde, aby divák neodscrolloval',
    'Dôvera cez fakty – technik kontroluje batériu, displej aj fotoaparáty',
    'Silný záver so sociálnym dôkazom – počet ľudí v komunite',
  ],

  duration: '1 týždeň',

  category: 'Video / Reklamy (ukážka)',

  desc: 'Ukážková reklama pre značku Swappie, ktorá ukazuje, čo dnes zvládne AI a 3D. Vo videu nie je ani jeden reálny záber a je vo vertikálnej aj širokouhlej verzii.',

  note:
    'Túto reklamu som vytvoril z vlastnej iniciatívy ako ukážku svojej práce. Je fiktívna: nevznikla na objednávku značky Swappie a zatiaľ nebola použitá v žiadnej reálnej kampani. Vo videu nie je ani jeden natočený záber, všetky scény sú vytvorené pomocou AI a 3D modelov.',

  challenge:
    'Chcel som ukázať, že kvalitnú produktovú reklamu dnes nemusíte natáčať. Bez kamery, štúdia a fyzického produktu, a predsa tak, aby pôsobila ako kampaň veľkej značky a dala sa hneď nasadiť na sociálne siete.',

  solution:
    'Celé video som poskladal z AI generovaných scén a 3D modelov iPhonov. Doplnil som motion grafiku vo farbách značky, typografiu, hudbu a zvukové efekty. Pripravil som dve verzie, 9:16 pre sociálne siete a 16:9 pre YouTube a web. Pre firmu to znamená reklamu rýchlejšie a lacnejšie ako pri klasickom natáčaní.',
},

// subway – video reklama
{
  id: 'subway-reklama',
  name: 'Subway – Ukážka reklamy',
  year: '2026',

  tags: ['Video', 'Reklamy'],

  image: '/project/video/subway/reklama.jpg',

  gallery: [
    '/project/video/subway/reklama.mp4',
  ],

  url: 'https://www.subway.com/sk-SK',
  client: 'Subway (ukážka, nie zákazka)',

  tech: ['AI video', 'After Effects', 'Premiere Pro'],

  services: ['Koncept a scenár reklamy', 'UI animácia objednávky', 'AI generované scény', 'Motion grafika', 'Strih a zvuk'],

  process: 'Výber značky a produktu → Hook a scenár → Návrh UI objednávky → AI generovanie scén → Motion grafika a typografia → Strih, zvuk a export vo formáte 9:16',

  results: [
    'Vertikálna reklama 9:16 pre Reels, Stories a TikTok',
    'Celá objednávka v jednom videu – výber subu, prílohy, veľkosť, cookies a najbližšia prevádzka na mape',
    'Hook „Dobrý deň. Na čo máš chuť?“ hneď v prvej sekunde',
    'Akcia „Sub of the Day“ s cenou, ktorá dáva dôvod prísť ešte dnes',
    'Záver s claimom „Presne podľa teba.“',
  ],

  duration: '1 týždeň',

  category: 'Video / Reklamy (ukážka)',

  desc: 'Ukážková reklama pre značku Subway, ktorá ukazuje celú objednávku krok za krokom – od výberu subu až po najbližšiu prevádzku. Video je vo vertikálnom formáte pre sociálne siete.',

  note:
    'Túto reklamu som vytvoril z vlastnej iniciatívy ako ukážku svojej práce. Je fiktívna: nevznikla na objednávku značky Subway a zatiaľ nebola použitá v žiadnej reálnej kampani. Vo videu nie je ani jeden natočený záber, všetky scény sú vytvorené pomocou AI a motion grafiky.',

  challenge:
    'Chcel som ukázať, ako sa dá v krátkom videu predať nielen produkt, ale celý zážitok z objednávky. Tak, aby divák za pár sekúnd videl, že si sub poskladá presne podľa seba, a hneď vedel, kde je najbližší Subway.',

  solution:
    'Navrhol som jednoduché UI objednávky vo farbách značky a rozanimoval ho krok za krokom: výber subu, prílohy, veľkosť, cookies a mapa s prevádzkami. Doplnil som AI generované zábery prevádzok, typografiu, hudbu a zvukové efekty. Pre firmu to znamená reklamu bez natáčania, rýchlejšie a lacnejšie ako pri klasickej produkcii.',
},

// nosleephouse – video reklama „Diagnóza webu“
{
  id: 'nosleephouse-reklama',
  name: 'nosleephouse – Diagnóza webu',
  year: '2026',

  tags: ['Video', 'Reklamy'],

  image: '/project/video/nosleephouse/reklama.jpg',

  gallery: [
    '/project/video/nosleephouse/reklama.mp4',
    '/project/video/nosleephouse/reklama-sk.mp4',
    '/project/video/nosleephouse/reklama-sk-cierna.mp4',
  ],

  url: 'https://nosleephouse.cz',
  client: 'nosleephouse – webové štúdio (CZ)',

  tech: ['3D modely (iPhone, MacBook)', 'Kódová animácia', 'AI hlas (ElevenLabs)', 'Motion grafika'],

  services: ['Koncept a scenár reklamy', '3D animácia zariadení', 'Motion grafika a typografia', 'Český a slovenský voiceover', 'Zvuk a mix'],

  process: 'Hook a scenár → Snímky starého a nového webu → 3D scéna s iPhonom a MacBookom → Animácia skóre webu a štítkov → AI voiceover (CZ / SK) → Zvukové efekty, mix a export vo formáte 9:16 vo viacerých verziách',

  results: [
    'Tri verzie vertikálnej reklamy 9:16 pre Reels, Stories a TikTok – svetlá s českým hlasom, tmavá a čierna so slovenským hlasom',
    'Hook „Máte web, ale klienti nechodí?“ hneď v prvej sekunde',
    '„Diagnóza webu“ – skóre klesá s každým problémom: Google, AI, texty, chýbajúce tlačidlo',
    'Reálne porovnanie starého a nového webu na dvoch rôznych projektoch – napr. načítanie 5,0 s vs. 0,2 s',
    'Záver s jasnou výzvou na bezplatný strategický hovor',
  ],

  duration: '1 týždeň',

  category: 'Video / Reklamy',

  desc: 'Reklama pre webové štúdio nosleephouse, ktorá za necelých 25 sekúnd urobí „diagnózu“ webu – ukáže, prečo starý web neprináša klientov, a ako to vyrieši nový. Pripravená vo viacerých verziách – svetlej aj tmavej, s českým aj slovenským hlasom.',

  challenge:
    'Vysvetliť majiteľovi firmy za pár sekúnd, prečo mu web neprináša klientov – bez technických pojmov, tak, aby sa v tom spoznal a chcel to riešiť.',

  solution:
    'Postavil som reklamu ako „diagnózu“: skóre webu postupne klesá s každým problémom (Google, AI, texty, tlačidlo, rýchlosť) a potom vyskočí po redizajne. Všetko sa odohráva na 3D modeloch iPhonu a MacBooku s reálnymi snímkami starého a nového webu. Doplnil som AI voiceover v češtine aj slovenčine, zvukové efekty a výrazný záver s výzvou k akcii. Reklamu som pripravil vo svetlej aj tmavej verzii, aby sa dala testovať v kampaniach.',
},

// noflex – AI videá (street interview + animovaný príbeh)
{
  id: 'noflex',
  name: 'NOFLEX – AI videá',
  year: '2026',

  tags: ['Video', 'Reklamy'],

  image: '/project/video/noflex/rozhovor.jpg',

  gallery: [
    '/project/video/noflex/rozhovor.mp4',
    '/project/video/noflex/pribeh.mp4',
  ],

  client: 'NOFLEX',

  tech: ['AI video', 'AI hlas', 'Premiere Pro', 'Titulky slovo po slove'],

  services: ['Koncept a scenár', 'AI generované postavy a scény', 'Dabing a hlasy', 'Strih a zvuk', 'Titulky'],

  process: 'Námet a scenár → AI generovanie postáv a scén → Hlasy a dialógy → Strih, hudba a zvukové efekty → Titulky slovo po slove → Export vo formáte 9:16',

  results: [
    'Dve vertikálne videá 9:16 pre Reels, TikTok a Stories',
    'AI street interview – NOFLEX sa pýta Juraja, zakladateľa Different Studio, na jeho prvý popup',
    'Animovaný príbeh v štýle 3D animáku – od „Koľko ešte?“ po „Wow, ono naozaj funguje!“',
    '100 % bez natáčania – postavy, prostredie aj hlasy sú vytvorené pomocou AI',
    'Titulky slovo po slove, aby video fungovalo aj bez zvuku',
  ],

  duration: '1 týždeň',

  category: 'Video / AI videá',

  desc: 'Dve AI videá vo vertikálnom formáte – street interview v obchode s oblečením a animovaný príbeh v štýle 3D animáku. Bez kamery, bez herca, bez štábu.',

  challenge:
    'Ukázať, že formáty, ktoré na sociálnych sieťach fungujú najlepšie – rozhovor na ulici a krátky príbeh s pointou – sa dajú vyrobiť úplne bez natáčania a stále pôsobia živo a uveriteľne.',

  solution:
    'Pre NOFLEX som pripravil street interview v popup obchode, kde sa moderátor pýta zakladateľa Different Studio na jeho prvý popup. Druhé video je animovaný príbeh s jasnou pointou. Všetky postavy, scény aj hlasy sú vytvorené pomocou AI, doplnil som strih, zvuk a titulky slovo po slove.',
},

// belanske stavebniny – video reklamy
{
  id: 'belanske-stavebniny',
  name: 'Belanské stavebniny – Video reklamy',
  year: '2026',

  tags: ['Video', 'Reklamy'],

  image: '/project/video/belanske/reklama-1.jpg',

  gallery: [
    '/project/video/belanske/reklama-1.mp4',
    '/project/video/belanske/reklama-2.mp4',
    '/project/video/belanske/reklama-3.mp4',
  ],

  url: 'https://www.belanskestavebniny.sk',
  client: 'Belanské stavebniny – Spišská Belá',

  tech: ['Premiere Pro', 'After Effects', 'CapCut'],

  services: ['Video reklamy', 'Meta Ads kreatívy', 'Motion grafika', 'Copywriting'],

  process: 'Analýza predajne → Hook a scenár → Natáčanie / podklady → Motion grafika → Strih → Export pre Instagram / Facebook',

  results: [
    'Séria video reklám pre Instagram a Facebook (Meta Ads)',
    'Hooky „Staviate? Prerábate?“ a „Štyri oddelenia. Jedna adresa.“',
    'Prezentácia predajne, sortimentu a servisu pre firmy aj domácich majstrov',
    'Vertikálny formát 9:16 pre Reels, Stories a feed',
  ],

  duration: '1 týždeň',

  category: 'Video / Reklamy',

  desc: 'Video reklamy na Instagram a Facebook pre Belanské stavebniny v Spišskej Belej – štyri oddelenia, jedna adresa, servis pre firmy aj domácich majstrov.',

  challenge:
    'Stavebniny potrebovali reklamy, ktoré jasne ukážu, že všetko pre stavbu a rekonštrukciu nájdete na jednom mieste, a oslovia firmy aj domácich majstrov v regióne.',

  solution:
    'Vytvoril som sériu vertikálnych video reklám s výraznou typografiou vo farbách značky – každá začína otázkou alebo silným hookom, ukáže predajňu a sortiment a končí jasnou výzvou „Belanské stavebniny“.',
},

// leo fudaly – instagram reels
{
  id: 'leofudaly-reels',
  name: 'Leo Fudaly – Instagram Reels',
  year: '2026',

  tags: ['Video', 'Reels'],

  image: '/project/video/leofudaly/reel-1.jpg',

  gallery: [
    '/project/video/leofudaly/reel-1.mp4',
    '/project/video/leofudaly/reel-2.mp4',
    '/project/video/leofudaly/reel-3.mp4',
    '/project/video/leofudaly/reel-4.mp4',
  ],

  url: 'https://www.instagram.com/leofudaly/',
  client: 'Leo Fudaly',

  tech: ['CapCut', 'Premiere Pro', 'Telefón'],

  services: ['Instagram Reels', 'Natáčanie', 'Strih & titulky', 'Content stratégia'],

  process: 'Nápad → Scenár / hook → Natáčanie → Strih & titulky → Publikovanie',

  results: [
    'Reels pre moju značku ručne šitého oblečenia',
    'Formáty „Draw my outfit“, šitie čiapky od začiatku po výsledok a talking-head videá o móde',
    'Dynamické titulky a strih pre udržanie pozornosti',
    'Vertikálny formát 9:16 pre Instagram a TikTok',
  ],

  duration: 'Priebežne',

  category: 'Video / Reels',

  desc: 'Instagram Reels pre moju značku ručne šitého oblečenia – „Draw my outfit“, šitie čiapky krok za krokom a videá o streetwear móde.',

  challenge:
    'Ukázať ručne šité oblečenie zaujímavo a autenticky, budovať okolo značky komunitu a zaujať v prvých sekundách videa.',

  solution:
    'Natáčam a strihám krátke vertikálne videá – od procesu šitia cez trendové formáty až po talking-head videá o móde – s výraznými titulkami a rýchlym strihom.',
},

// systémy
// moj
{
  id: 'moj-booking',

  name: 'Booking App',
  year: '2026',

  tags: ['Systémy', 'Web App', 'UI/UX'],

  image:  '/project/web/moj/moj9.webp',

  gallery: [
 '/project/web/moj/moj9.webp',
    '/project/web/moj/moj2.webp',
    '/project/web/moj/moj3.webp',
    '/project/web/moj/moj4.webp',
    '/project/web/moj/moj5.webp',
    '/project/web/moj/moj6.webp',
    '/project/web/moj/moj7.webp',
    '/project/web/moj/moj8.webp',
    '/project/web/moj/moj9.webp',
    '/project/web/moj/moj10.webp',
  ],

  preklik: 'https://aplikacia-sepia.vercel.app/',

  url: 'https://www.mojbooking.com',

  client: 'MOJ Booking',

  tech: [
    'React',
    'TailwindCSS',
    'Framer Motion',
  ],

  services: [
    'UI/UX Design',
    'Web App Design',
    'Development',
    'SEO',
  ],

  process:
    'Analýza → Wireframe → UI Design → Vývoj → Optimalizácia → Spustenie',

  results: [
    'Moderný booking systém',
    'Čistý minimalistický dashboard',
    'Responzívna web aplikácia',
  ],

  duration: '5 týždňov',

  category: 'Web App / Booking Platform',

  desc:
    'Moderný dizajn webovej aplikácie inšpirovanej platformami ako Airbnb so zameraním na rezervácie, správu nehnuteľností a intuitívny používateľský zážitok.',

  challenge:
    'Cieľom bolo vytvoriť prehľadnú a modernú booking platformu s jednoduchou správou rezervácií, kalendárom a intuitívnym dashboardom.',

  solution:
    'Navrhol som minimalistickú web aplikáciu s čistým UI, modernými komponentmi a optimalizovaným používateľským flow pre rezervácie aj správu apartmánov.',
},
 




  
{
  name: 'Rezervo',
  id: 'rezervo',

  year: '2026',

  tags: ['Rezervačný systém', 'Systémy'],

  image: '/project/ai/REZERVO/raz.webp',

 gallery: [
  '/project/ai/REZERVO/raz.webp',
  '/project/ai/REZERVO/dva.webp',
  '/project/ai/REZERVO/tri.webp',
  '/project/ai/REZERVO/styri.webp',
  '/project/ai/REZERVO/pat.webp',
  '/project/ai/REZERVO/sest.webp',
  '/project/ai/REZERVO/osem.webp',
  '/project/ai/REZERVO/jeden2.webp',
  '/project/ai/REZERVO/dva2.webp',
  '/project/ai/REZERVO/tri2.webp',
  '/project/ai/REZERVO/styri2.webp',
  '/project/ai/REZERVO/pat2.webp',
],

preklik:'https://booking-system-three-rosy.vercel.app/',

url: 'https://www.Rezervo.com',

  client: 'Rezervo',

  tech: [
    'React',
    'TypeScript',
    'Admin Dashboard',
    'Database',
  ],

  services: [
    'Rezervačný systém',
    'Admin panel',
    'Webová aplikácia',
    'Automatizácia rezervácií',
    'Implementácia systému',
  ],

  process: 'Analýza potrieb → Návrh systému → Vývoj → Testovanie → Implementácia',

  results: [
    'Online rezervácie 24/7',
    'Automatická správa termínov',
    'Prehľadný administrátorský panel',
    'Možnosť prenájmu alebo odkúpenia systému',
    'Prispôsobenie podľa potrieb klienta',
  ],

  duration: '4 týždne',

  category: 'Firemné systémy',

  desc: 'Moderný online rezervačný systém pre barberov, salóny, kliniky, konzultantov a služby. Rezervo umožňuje prijímať rezervácie 24/7, spravovať klientov a automatizovať objednávky z jedného prehľadného rozhrania.',

  challenge:
    'Vytvoriť univerzálny rezervačný systém, ktorý bude jednoduchý pre zákazníkov a zároveň poskytne podnikateľom kompletnú kontrolu nad rezerváciami, službami a klientmi.',

  solution:
    'Vyvinul som Rezervo – modernú webovú aplikáciu s online rezerváciami, správou služieb, kalendárom, klientskou databázou a administračným panelom. Systém je možné prenajať ako službu, kúpiť na mieru alebo implementovať do existujúceho podnikania.',

  location: 'Slovensko',

  business: {
    industry: 'Rezervačné systémy',
    model: 'Prenájom • Kúpa • Implementácia',
    website: '#',
  },
},


{
  name: 'SkillFind',
  id: 'skillfind',

  year: '2026',
tags: ['CRM', 'Systémy'],


image: '/project/ai/SKILLFIND/dva.webp',

gallery: [
  '/project/ai/SKILLFIND/dva.webp',
  '/project/ai/SKILLFIND/styri.webp',
  '/project/ai/SKILLFIND/tri.webp',
  '/project/ai/SKILLFIND/jeden.webp',
  '/project/ai/SKILLFIND/pat.webp',
  '/project/ai/SKILLFIND/sest.webp',
  '/project/ai/SKILLFIND/sedem.webp',
],

  preklik: 'https://coldcall-tan.vercel.app/',

  // url: 'https://skillfind.vercel.app/',
  url: 'https://www.SkillFind.com',

  client: 'SkillFind',

  tech: [
    'React',
    'TypeScript',
    'Supabase',
    'CRM Dashboard',
  ],

  services: [
    'CRM systém',
    'Cold Calling systém',
    'Správa leadov',
    'Firemná databáza',
    'Webová aplikácia',
  ],

  process: 'Analýza workflow → Návrh systému → Vývoj → Testovanie → Nasadenie',

  results: [
    'Prehľadná evidencia všetkých oslovených firiem',
    'Vyhľadávanie podľa telefónneho čísla',
    'Správa leadov na jednom mieste',
    'Rýchle filtrovanie kontaktov',
    'Vyššia efektivita obchodného tímu',
  ],

  duration: '3 týždne',

  category: 'Firemné systémy',

  desc: 'SkillFind je CRM systém vytvorený pre cold calling a aktívny predaj. Umožňuje ukladať firmy, kontaktné údaje, výsledky hovorov a stav komunikácie na jednom mieste.',

  challenge:
    'Obchodníci často strácajú prehľad o tom, ktoré firmy už kontaktovali, aký bol výsledok hovoru a kedy ich majú osloviť znova. Pri väčšom množstve kontaktov vznikajú duplicity a neefektívna práca.',

  solution:
    'Vyvinul som SkillFind – jednoduchý CRM systém pre cold calling. Používateľ si po hovore uloží firmu, telefónne číslo, kontaktné údaje a výsledok komunikácie (Áno, Nie, Možno). Pri ďalšom kontakte stačí zadať telefónne číslo alebo názov firmy a systém okamžite zobrazí celú históriu komunikácie. Obchodník tak vždy vie, či bola firma kontaktovaná a aký bol výsledok predchádzajúceho hovoru.',

  location: 'Slovensko',

  business: {
    industry: 'CRM & Lead Management',
    model: 'Interný systém • SaaS • Implementácia',
    website: 'https://skillfind.vercel.app/',
  },
}

];

// Stav projektu pre legendu: 'active' = zelená (aktívne / spustené), 'concept' = červená (návrh)
export const PROJECT_STATUS = {
  'leofudaly-eshop': 'active',
  'leni-honcarova': 'active',
  ciaocasa: 'active',
  nasacaffe: 'concept',
  formacasa: 'concept',
  tatratea: 'concept',
  'ladomer-detailing': 'concept',
  'hotel-lomnica': 'concept',
  'hotel-lomnica-social': 'concept',
  'ladomer-video': 'concept',
  'hrajko-reklamy': 'concept',
  'belanske-stavebniny': 'concept',
  'leofudaly-reels': 'active',

  'cvic-sam': 'concept',
  kkfol: 'concept',
  'nasa-cafe': 'concept',
  dfitness: 'concept',
  'moj-booking': 'concept',
  rezervo: 'concept',
  skillfind: 'concept',
};

// Merge static meta with translated content from i18n
export function getProjects(t) {
  const content = t.projectsContent || {};
  return projectsMeta.map(meta => ({
    status: PROJECT_STATUS[meta.id] || 'concept',
    ...meta,
    ...(content[meta.id] || {}),
  }));
}

export function getProjectById(id, t) {
  const projects = getProjects(t);
  return projects.find(p => p.id === id) || null;
}

export function getAdjacentProjects(id, t) {
  const projects = getProjects(t);
  const idx = projects.findIndex(p => p.id === id);
  return {
    prev: idx > 0 ? projects[idx - 1] : null,
    next: idx < projects.length - 1 ? projects[idx + 1] : null,
  };
}

// Legacy: plain list (no translation) for static tags/images only
export const projects = projectsMeta;