// js/data.js
// Datos base de las 26 ranas — se complementan con Firestore
// La letra "a" tiene datos completos del PDF. Las demás son esqueletos para rellenar desde admin.

const RANAS_DATA = [
  // ── Aa — COMPLETA ───────────────────────────────────────────────────────────
  {
    letra: "a",
    nombreComun: "Rana de árbol de ojos rojos",
    nombreCientifico: "Agalychnis callidryas",
    tipografia: "Apolline",
    clasificacion: "Serif Esenciales",
    subclasificacion: "Romanas, Venecianas o Humanistas",
    region: "Tierras bajas tropicales del sur de México, toda Centroamérica y norte de Sudamérica",
    habitat: "Selva tropical húmeda, principalmente en el dosel del bosque, cerca de estanques y cuerpos de agua dulce. En épocas de calor o sequía baja hacia el suelo del bosque buscando refugio bajo hojas anchas.",
    tamano: "4–7 cm. Las hembras son generalmente más grandes que los machos.",
    coloracion: "Cuerpo verde hoja brillante, ojos rojos saltones con pupila vertical, patas traseras palmeadas de color naranja, flancos con rayas simétricas azules y amarillas. Los juveniles pueden cambiar de color según la hora del día.",
    estadoIUCN: "LC",
    descripcion: "Duerme durante el día pegada al envés de las hojas con los ojos cerrados, perfectamente camuflada. Al ser perturbada, abre de golpe sus enormes ojos rojos para desconcertar al depredador — una estrategia llamada coloración de sobresalto. El destello de color puede sobreestimular la visión del depredador, dejando una imagen fantasma mientras la rana salta al escape. No es venenosa.",
    datoCurioso: "Los embriones dentro del huevo perciben el mundo exterior antes de nacer. Pueden detectar vibraciones de depredadores como serpientes y adelantar su eclosión hasta tres días. Un estudio del STRI demostró que también eclosionan en respuesta al amoníaco — señal química de que el huevo se está secando peligrosamente — logrando escapar en el 95% de los casos en menos de 30 minutos.",
    colorAccent: "#E84B2E",
    imagenUrl: "",
    videoSegmentos: [],
    imagenesReferencia: [
      { url: "https://inaturalist-open-data.s3.amazonaws.com/photos/6229148/medium.jpg", caption: "Vista dorsal — iNaturalist #6229148" }
    ],
    referencias: [
      {
        autor: "Lisondro-Arosemena, A. K., Salazar-Nicholls, M. J., & Warkentin, K. M.",
        año: 2024,
        titulo: "Elevated ammonia cues hatching in red-eyed treefrogs: A mechanism for escape from drying eggs",
        editorial: "Journal of Experimental Zoology Part B: Molecular and Developmental Evolution",
        paginas: "1–6",
        url: "https://doi.org/10.1002/jez.b.23253"
      },
      {
        autor: "Manjunath, A.",
        año: 2022,
        titulo: "Agalychnis callidryas [ficha de especie]",
        editorial: "Animal Diversity Web",
        url: "https://animaldiversity.org/accounts/Agalychnis_callidryas/"
      },
      {
        autor: "Milloway, O.",
        año: 2024,
        titulo: "La rana de ojos rojos",
        editorial: "Smithsonian Tropical Research Institute",
        url: "https://stri.si.edu/es/noticia/la-rana-de-ojos-rojos"
      },
      {
        autor: "National Geographic Society",
        año: null,
        titulo: "Red-eyed tree frog",
        editorial: "National Geographic",
        url: "https://www.nationalgeographic.com/animals/amphibians/facts/red-eyed-tree-frog"
      }
    ]
  },

  // ── Bb–Zz — ESQUELETOS (se rellenan desde el panel admin) ───────────────────
  { letra:"b", nombreComun:"Sapo de vientre amarillo",    nombreCientifico:"Bombina variegata",        tipografia:"Adobe Jenson",      clasificacion:"Serif Esenciales", subclasificacion:"Romanas, Venecianas o Humanistas", region:"Europa central y meridional", habitat:"Bosques, praderas, charcos y arroyos", tamano:"Hasta 55 mm", coloracion:"Dorso marrón-verdoso rugoso, vientre negro-azulado con manchas amarillo-anaranjadas", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#F0A500", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"c", nombreComun:"Rana de vidrio granulosa",    nombreCientifico:"Cochranella granulosa",    tipografia:"Centaur",           clasificacion:"Serif Esenciales", subclasificacion:"Romanas, Venecianas o Humanistas", region:"Honduras oriental a Panamá. Posiblemente Colombia.", habitat:"Tierras bajas húmedas y laderas premontanas, bosque primario húmedo", tamano:"22–32 mm", coloracion:"Dorso azul-verdoso oscuro con manchas. Vientre transparente con órganos visibles.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#7BC67E", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"d", nombreComun:"Rana dardo azul",             nombreCientifico:"Dendrobates tinctorius",  tipografia:"Ehrhardt",          clasificacion:"Serif Esenciales", subclasificacion:"Garaldas, Elzevirianas, Aldinas", region:"Guayana Francesa, Surinam, Guyana y norte de Brasil", habitat:"Bosque tropical húmedo, cerca de corrientes rocosas de agua fría", tamano:"2,5–5 cm", coloracion:"Múltiples morfos: manchas amarillas sobre negro, o cuerpo azul cielo con manchas negras.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#1A6FD4", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"e", nombreComun:"Rana venenosa fantasmal",     nombreCientifico:"Epipedobates tricolor",   tipografia:"Galliard",          clasificacion:"Serif Esenciales", subclasificacion:"Garaldas, Elzevirianas, Aldinas", region:"Endémica de Ecuador (Bolívar y Cotopaxi)", habitat:"Bosque piemontano y montano occidental, cerca de riachuelos", tamano:"19–23 mm", coloracion:"Fondo café oscuro a rojo con tres franjas longitudinales amarillo brillante.", estadoIUCN:"VU", descripcion:"", datoCurioso:"", colorAccent:"#C0392B", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"f", nombreComun:"Rana arrocera asiática",      nombreCientifico:"Fejervarya limnocharis",  tipografia:"Haarlemmer",        clasificacion:"Serif Esenciales", subclasificacion:"Garaldas, Elzevirianas, Aldinas", region:"Pakistán y Nepal hasta Japón, todo el Sudeste Asiático", habitat:"Arrozales, canales, arroyos, charcas, jardines y plantaciones", tamano:"Hasta 6 cm", coloracion:"Pardo-grisácea u olivácea con marcas oscuras irregulares y franja vertebral pálida.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#8B7355", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"g", nombreComun:"Rana marsupial andina",       nombreCientifico:"Gastrotheca riobambae",   tipografia:"Baskerville",       clasificacion:"Serif Esenciales", subclasificacion:"Romanas de transición", region:"Endémica de Ecuador (Carchi a Chimborazo)", habitat:"Praderas montañosas húmedas, matorral interandino, bosque montano", tamano:"34–64 mm", coloracion:"Verde uniforme, marrón o marrón rojizo. Variación individual y poblacional alta.", estadoIUCN:"EN", descripcion:"", datoCurioso:"", colorAccent:"#4CAF50", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"h", nombreComun:"Rana de cristal norteña",     nombreCientifico:"Hyalinobatrachium fleischmanni", tipografia:"Perpetua", clasificacion:"Serif Esenciales", subclasificacion:"Romanas de transición", region:"Sur de México a Colombia, Venezuela, Guyana, Surinam y Ecuador", habitat:"Vegetación cerca de corrientes de agua rápidas, tierras bajas", tamano:"19–32 mm", coloracion:"Verde pálido o verde amarillento con puntos verdes. Vientre parcialmente transparente.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#A8D5A2", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"i", nombreComun:"Sapo de bosque húmedo",       nombreCientifico:"Incilius melanochlorus",  tipografia:"Times New Roman",   clasificacion:"Serif Esenciales", subclasificacion:"Romanas de transición", region:"Nicaragua meridional, Costa Rica y oeste de Panamá", habitat:"Bosque lluvioso de tierras bajas y bosque premontano húmedo, hasta 1080 m", tamano:"65–107 mm", coloracion:"Dorso marrón o gris con manchas irregulares. Garganta y pecho negros. Iris bronce cobrizo.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#6B8E6B", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"j", nombreComun:"Rana silbadora de Johnstone", nombreCientifico:"Eleutherodactylus johnstonei", tipografia:"Bodoni",     clasificacion:"Serif Esenciales", subclasificacion:"Didonas", region:"Antillas Menores (nativa). Introducida en Trinidad, Venezuela, Colombia, Panamá y más.", habitat:"Áreas perturbadas, plantaciones, jardines rurales, zonas urbanas", tamano:"17–35 mm", coloracion:"Dorso marrón a gris-tostado con chevrones oscuros. Vientre crema.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#C8A882", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"k", nombreComun:"Rana corredora de Senegal",   nombreCientifico:"Kassina senegalensis",    tipografia:"Didot",             clasificacion:"Serif Esenciales", subclasificacion:"Didonas", region:"Toda la sabana tropical africana, de Senegal y Mauritania hasta Somalia y Sudáfrica", habitat:"Sabana seca y húmeda, pastizales, matorrales, humedales y bordes de bosque", tamano:"25–49 mm", coloracion:"Gris o beige con franja media dorsal negra y bandas dorsolaterales definidas.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#A0784A", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"l", nombreComun:"Rana arbórea verde de Australia", nombreCientifico:"Litoria caerulea",  tipografia:"Ibarra Real",        clasificacion:"Serif Esenciales", subclasificacion:"Didonas", region:"Nativa de Australia (norte y este) y sur de Nueva Guinea", habitat:"Bosques húmedos, humedales, selvas tropicales y zonas periurbanas. Tanques de agua, baños.", tamano:"7–11,5 cm", coloracion:"Verde brillante a esmeralda con manchas blancas o doradas dispersas. Vientre blanco lechoso.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#5DA85D", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"m", nombreComun:"Rana mantella dorada",        nombreCientifico:"Mantella aurantiaca",    tipografia:"Joanna",            clasificacion:"Serif Esenciales", subclasificacion:"Mecanas, Egipcias", region:"Endémica de Madagascar. Solo tres localidades: Andranomandry, Andranomena y Torotorofotsy.", habitat:"Bosque lluvioso primario y secundario, zonas húmedas pantanosas asociadas a palma de tornillo", tamano:"19–31 mm", coloracion:"Dorso uniformemente naranja-amarillo a naranja-rojizo. Marcas rojas brillantes en extremidades.", estadoIUCN:"EN", descripcion:"", datoCurioso:"", colorAccent:"#FF6600", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"n", nombreComun:"Cutín de hojarasca de Loreto", nombreCientifico:"Noblella myrmecoides", tipografia:"Memphis",           clasificacion:"Serif Esenciales", subclasificacion:"Mecanas, Egipcias", region:"Amazonia: sureste de Colombia, Ecuador, Perú, noreste de Bolivia y oeste de Brasil", habitat:"Hojarasca del suelo de bosque tropical húmedo primario (100–1200 m)", tamano:"10–15 mm. Una de las más pequeñas de Sudamérica.", coloracion:"Dorso café claro grisáceo a café rojizo. Flancos y región cantal negros. Iris naranja dorado.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#8B4513", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"o", nombreComun:"Rana dardo fresa",            nombreCientifico:"Oophaga pumilio",        tipografia:"Rockwell",          clasificacion:"Serif Esenciales", subclasificacion:"Mecanas, Egipcias", region:"Costa Caribe de Centroamérica, de Nicaragua a Panamá. Hasta 960 m.", habitat:"Sotobosque de selva tropical húmeda, también en plantaciones de cacao y banano", tamano:"17–24 mm", coloracion:"Más de 30 morfos. El más extendido: rojo brillante con patas azul-negro.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#E8192C", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"p", nombreComun:"Rana dardo dorada",           nombreCientifico:"Phyllobates terribilis", tipografia:"Akzidenz Grotesk",  clasificacion:"Sans Serif Esenciales", subclasificacion:"Grotescas", region:"Endémica de Colombia. Estribaciones occidentales, Cauca y Valle del Cauca.", habitat:"Bosque lluvioso primario, zonas de alta precipitación (5000 mm+). Entre 90 y 200 m.", tamano:"Hasta 47 mm hembras, 45 mm machos", coloracion:"Amarillo dorado intenso, verde metálico o naranja metálico según localidad. Sin manchas dorsales.", estadoIUCN:"EN", descripcion:"", datoCurioso:"", colorAccent:"#FFD700", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"q", nombreComun:"Rana espinosa gigante",       nombreCientifico:"Quasipaa spinosa",       tipografia:"Classic Grotesque", clasificacion:"Sans Serif Esenciales", subclasificacion:"Grotescas", region:"China al sur del río Yangtze, incluyendo Hong Kong.", habitat:"Corrientes rocosas en bosques perennifolios y zonas abiertas de colinas y montañas", tamano:"Hasta 128 mm hembras. La más grande de Hong Kong.", coloracion:"Marrón oscuro con moteado amarillento denso. Machos con espinas queratinizadas en el pecho.", estadoIUCN:"VU", descripcion:"", datoCurioso:"", colorAccent:"#556B2F", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"r", nombreComun:"Rana dardo de Uakari",        nombreCientifico:"Ranitomeya uakarii",     tipografia:"News Gothic",       clasificacion:"Sans Serif Esenciales", subclasificacion:"Grotescas", region:"Amazonia occidental: Perú, Colombia, Brasil y Guyana", habitat:"Bosque no inundable, principalmente primario. Suelo del bosque, ocasionalmente el dosel.", tamano:"13–17,5 mm. Una de las más pequeñas de la Amazonia.", coloracion:"Dorso negro con línea vertebral rojo-naranja. Extremidades y vientre azules con reticulado negro.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#CC2200", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"s", nombreComun:"Rana arbórea mexicana",       nombreCientifico:"Smilisca baudinii",      tipografia:"Arial",             clasificacion:"Sans Serif Esenciales", subclasificacion:"Neogrotescas", region:"Sur de Texas y México a través de toda Centroamérica hasta Costa Rica", habitat:"Tierras bajas húmedas a semiáridas. Selva baja caducifolia, bosques de encino, campos de cultivo. Hasta 1600 m.", tamano:"Hasta 90 mm hembras. La arbórea más grande nativa de EE. UU.", coloracion:"Extremadamente variable: verde, canela o marrón con manchas oscuras irregulares bordeadas de negro.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#7A9E4E", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"t", nombreComun:"Rana musgosa de Vietnam",     nombreCientifico:"Theloderma corticale",   tipografia:"Helvetica",         clasificacion:"Sans Serif Esenciales", subclasificacion:"Neogrotescas", region:"Norte de Vietnam, posiblemente sur de China y Laos", habitat:"Bosques tropicales y subtropicales húmedos. Cuevas inundadas y riberas de corrientes rocosas de montaña (700–1000 m).", tamano:"7–8 cm", coloracion:"Verde con manchas negras y tubérculos que imitan con extraordinaria fidelidad el musgo húmedo y la corteza en descomposición.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#2E7D32", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"u", nombreComun:"Rana globo jaspeada",         nombreCientifico:"Uperodon systoma",       tipografia:"Univers",           clasificacion:"Sans Serif Esenciales", subclasificacion:"Neogrotescas", region:"India (sur y este), Pakistán, Nepal y Sri Lanka", habitat:"Especie completamente fosorial. Bosques secos, llanuras, jardines y zonas agrícolas. Solo emerge durante los monzones.", tamano:"Hasta 64 mm", coloracion:"Dorso con patrón marrón oscuro simétrico sobre fondo marrón rosado. Vientre blanquecino.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#D2691E", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"v", nombreComun:"Rana de cristal de Aragua",   nombreCientifico:"Vitreorana antisthenesi",tipografia:"Avenir",            clasificacion:"Sans Serif Esenciales", subclasificacion:"Geométricas", region:"Endémica de Venezuela. Vertiente norte de la Cordillera de la Costa.", habitat:"Bosques de galería y bosques nublados de la Cordillera de la Costa, asociada a arroyos y quebradas", tamano:"Alrededor de 2–2,5 cm", coloracion:"Dorso verde translúcido. Vientre completamente transparente con órganos visibles. Esqueleto verde por biliverdina.", estadoIUCN:"VU", descripcion:"", datoCurioso:"", colorAccent:"#B2EBF2", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"w", nombreComun:"Rana saltarina de piel verrugosa", nombreCientifico:"Walkerana phrynoderma", tipografia:"DIN",         clasificacion:"Sans Serif Esenciales", subclasificacion:"Geométricas", region:"Endémica de los Ghats Occidentales del sur de India. Kerala y Tamil Nadu. Rango menor de 100 km².", habitat:"Bosque montano tropical siempreverde (shola forest). Entre 500 y 1750 m.", tamano:"9–47 mm", coloracion:"Dorso marrón a rojizo con manchas oscuras. Vientre negro con manchas blancas únicas por individuo. Cresta en W sobre el dorso.", estadoIUCN:"CR", descripcion:"", datoCurioso:"", colorAccent:"#795548", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"x", nombreComun:"Rana de garras africana",     nombreCientifico:"Xenopus laevis",         tipografia:"Futura",            clasificacion:"Sans Serif Esenciales", subclasificacion:"Geométricas", region:"África subsahariana. Introducida en EE. UU., Reino Unido, Chile, Francia, Portugal, México e Indonesia.", habitat:"Completamente acuática. Tolera casi cualquier cuerpo de agua. Solo abandona el agua en sequías extremas.", tamano:"45–147 mm", coloracion:"Dorso gris oscuro a marrón verdoso. Vientre pálido. Tres dedos internos con garras queratinizadas negras.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#607D8B", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"y", nombreComun:"Ranita de los Yungas",        nombreCientifico:"Yunganastes bisignatus", tipografia:"Gill Sans",         clasificacion:"Sans Serif Esenciales", subclasificacion:"Lineales humanistas", region:"Endémica de Bolivia. Provincia Sud Yungas, La Paz. Rango de apenas 333 km².", habitat:"Bosque nublado yungueño, exclusivamente entre 2200 y 2700 m. Solo activa con lluvia o HR ≈ 96,5%.", tamano:"1,5–2,5 cm aproximadamente", coloracion:"Dos variantes: dorso beige con barras grises, o dorso dorado a oliva con manchas marrones y línea vertebral delgada.", estadoIUCN:"EN", descripcion:"", datoCurioso:"", colorAccent:"#795548", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] },
  { letra:"z", nombreComun:"Rana arbórea verde de Schlegel", nombreCientifico:"Zhangixalus schlegelii", tipografia:"Optima",       clasificacion:"Sans Serif Esenciales", subclasificacion:"Lineales humanistas", region:"Endémica de Japón. Islas de Honshu, Shikoku y Kyushu, y archipiélago Ryukyu.", habitat:"Humedales templados y bosques desde zonas montañosas hasta tierras bajas. Principalmente arrozales.", tamano:"32–53 mm", coloracion:"Verde brillante uniforme. Piel dorsal casi completamente lisa. Pliegue supratimpánico prominente.", estadoIUCN:"LC", descripcion:"", datoCurioso:"", colorAccent:"#8BC34A", imagenUrl:"", videoSegmentos:[], imagenesReferencia:[], referencias:[] }
];

// ── Mapa tipografías → Google Fonts o carga local ────────────────────────────
const FONT_MAP = {
  "Apolline":           { googleFont: null,                                   localFile: "apolline",          cssFamily: "Apolline, 'Palatino Linotype', serif" },
  "Adobe Jenson":       { googleFont: null,                                   localFile: "adobe-jenson",      cssFamily: "'Adobe Jenson', 'EB Garamond', serif" },
  "Centaur":            { googleFont: null,                                   localFile: "centaur",           cssFamily: "Centaur, 'Cormorant Garamond', serif" },
  "Ehrhardt":           { googleFont: null,                                   localFile: "ehrhardt",          cssFamily: "Ehrhardt, 'IM Fell English', serif" },
  "Galliard":           { googleFont: null,                                   localFile: "galliard",          cssFamily: "Galliard, 'Libre Baskerville', serif" },
  "Haarlemmer":         { googleFont: null,                                   localFile: "haarlemmer",        cssFamily: "Haarlemmer, 'Playfair Display', serif" },
  "Baskerville":        { googleFont: "Libre+Baskerville:ital,wght@0,400;0,700;1,400", localFile: null,      cssFamily: "'Libre Baskerville', Baskerville, serif" },
  "Perpetua":           { googleFont: null,                                   localFile: "perpetua",          cssFamily: "Perpetua, 'Cormorant', serif" },
  "Times New Roman":    { googleFont: null,                                   localFile: null,                cssFamily: "'Times New Roman', Times, serif" },
  "Bodoni":             { googleFont: "Bodoni+Moda:ital,opsz,wght@0,6..96,400;1,6..96,400", localFile: null, cssFamily: "'Bodoni Moda', 'Bodoni MT', serif" },
  "Didot":              { googleFont: "GFS+Didot:ital,wght@0,400;1,400",      localFile: null,                cssFamily: "'GFS Didot', Didot, serif" },
  "Ibarra Real":        { googleFont: "Ibarra+Real+Nova:ital,wght@0,400;0,700;1,400", localFile: null,        cssFamily: "'Ibarra Real Nova', serif" },
  "Joanna":             { googleFont: null,                                   localFile: "joanna",            cssFamily: "Joanna, 'Spectral', serif" },
  "Memphis":            { googleFont: null,                                   localFile: "memphis",           cssFamily: "Memphis, 'Roboto Slab', serif" },
  "Rockwell":           { googleFont: "Rockwell+Nova:wght@400;700",           localFile: null,                cssFamily: "'Rockwell Nova', Rockwell, serif" },
  "Akzidenz Grotesk":   { googleFont: null,                                   localFile: "akzidenz-grotesk",  cssFamily: "'Akzidenz Grotesk', 'Helvetica Neue', sans-serif" },
  "Classic Grotesque":  { googleFont: null,                                   localFile: "classic-grotesque", cssFamily: "'Classic Grotesque', 'Helvetica Neue', sans-serif" },
  "News Gothic":        { googleFont: null,                                   localFile: "news-gothic",       cssFamily: "'News Gothic', 'Franklin Gothic Medium', sans-serif" },
  "Arial":              { googleFont: null,                                   localFile: null,                cssFamily: "Arial, sans-serif" },
  "Helvetica":          { googleFont: null,                                   localFile: null,                cssFamily: "Helvetica, 'Helvetica Neue', Arial, sans-serif" },
  "Univers":            { googleFont: null,                                   localFile: "univers",           cssFamily: "Univers, 'Gill Sans', sans-serif" },
  "Avenir":             { googleFont: null,                                   localFile: "avenir",            cssFamily: "Avenir, 'Century Gothic', sans-serif" },
  "DIN":                { googleFont: null,                                   localFile: "din",               cssFamily: "DIN, 'Barlow', sans-serif" },
  "Futura":             { googleFont: "Josefin+Sans:ital,wght@0,300;0,400;0,600;1,300", localFile: null,     cssFamily: "'Josefin Sans', Futura, sans-serif" },
  "Gill Sans":          { googleFont: "Gill+Sans+Nova",                       localFile: null,                cssFamily: "'Gill Sans Nova', 'Gill Sans', sans-serif" },
  "Optima":             { googleFont: null,                                   localFile: "optima",            cssFamily: "Optima, Candara, sans-serif" }
};

const IUCN_CONFIG = {
  "EX": { label: "Extinto",                      color: "#000000" },
  "EW": { label: "Extinto en estado silvestre",  color: "#542344" },
  "CR": { label: "En peligro crítico",           color: "#cc0000" },
  "EN": { label: "En peligro",                   color: "#cc6600" },
  "VU": { label: "Vulnerable",                   color: "#b8860b" },
  "NT": { label: "Casi amenazada",               color: "#669900" },
  "LC": { label: "Preocupación menor",           color: "#006600" },
  "DD": { label: "Datos insuficientes",          color: "#999999" },
  "NE": { label: "No evaluada",                  color: "#cccccc" }
};

export { RANAS_DATA, FONT_MAP, IUCN_CONFIG };
