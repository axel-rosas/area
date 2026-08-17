import homeHero from '../assets/images/site/home-hero.jpg'
import aboutHero from '../assets/images/site/about-hero.jpg'
import aboutStudio from '../assets/images/site/about-studio.jpg'
import architectureImage from '../assets/images/site/service-architecture.jpg'
import executiveImage from '../assets/images/site/service-executive-projects.jpg'
import interiorImage from '../assets/images/site/service-interior-design.jpg'
import remodelingImage from '../assets/images/site/service-remodeling.jpg'
import constructionImage from '../assets/images/site/service-construction.jpg'
import supervisionImage from '../assets/images/site/service-supervision.jpg'
import contactMap from '../assets/images/site/contact-map.png'

import casaUmbralCover from '../assets/images/projects/casa-umbral/cover.jpg'
import casaUmbral01 from '../assets/images/projects/casa-umbral/detail-01.jpg'
import casaUmbral02 from '../assets/images/projects/casa-umbral/detail-02.jpg'
import patioLuzCover from '../assets/images/projects/patio-luz/cover.jpg'
import patioLuz01 from '../assets/images/projects/patio-luz/detail-01.jpg'
import patioLuz02 from '../assets/images/projects/patio-luz/detail-02.jpg'
import residenciaEncinoCover from '../assets/images/projects/residencia-encino/cover.jpg'
import residenciaEncino01 from '../assets/images/projects/residencia-encino/detail-01.jpg'
import residenciaEncino02 from '../assets/images/projects/residencia-encino/detail-02.jpg'
import casaNorteCover from '../assets/images/projects/casa-norte/cover.jpg'
import casaNorte01 from '../assets/images/projects/casa-norte/detail-01.jpg'
import casaNorte02 from '../assets/images/projects/casa-norte/detail-02.jpg'
import cocinaLineaCover from '../assets/images/projects/cocina-linea/cover.jpg'
import cocinaLinea01 from '../assets/images/projects/cocina-linea/detail-01.jpg'
import cocinaLinea02 from '../assets/images/projects/cocina-linea/detail-02.jpg'
import casaClaraCover from '../assets/images/projects/casa-clara/cover.jpg'
import casaClara01 from '../assets/images/projects/casa-clara/detail-01.jpg'
import casaClara02 from '../assets/images/projects/casa-clara/detail-02.jpg'
import oficinasPrismaCover from '../assets/images/projects/oficinas-prisma/cover.jpg'
import oficinasPrisma01 from '../assets/images/projects/oficinas-prisma/detail-01.jpg'
import oficinasPrisma02 from '../assets/images/projects/oficinas-prisma/detail-02.jpg'
import casaMarCover from '../assets/images/projects/casa-mar/cover.jpg'
import casaMar01 from '../assets/images/projects/casa-mar/detail-01.jpg'
import casaMar02 from '../assets/images/projects/casa-mar/detail-02.jpg'
import pabellonUnoCover from '../assets/images/projects/pabellon-uno/cover.jpg'
import pabellonUno01 from '../assets/images/projects/pabellon-uno/detail-01.jpg'
import pabellonUno02 from '../assets/images/projects/pabellon-uno/detail-02.jpg'

export const services = [
  {
    id: 'arquitectura',
    name: 'Arquitectura',
    shortName: 'Arquitectura',
    image: architectureImage,
    description: 'Diseñamos espacios que responden a su entorno y a la forma en que serán habitados. Cada propuesta equilibra funcionalidad, identidad y una visión arquitectónica duradera.',
    introduction: 'De la primera intuición al espacio construido, desarrollamos proyectos residenciales y comerciales que integran contexto, estructura y experiencia. Nuestro proceso convierte necesidades concretas en una arquitectura clara y sensible.',
    stages: ['Diagnóstico del sitio', 'Concepto y anteproyecto', 'Desarrollo arquitectónico', 'Coordinación integral'],
  },
  {
    id: 'proyectos-ejecutivos',
    name: 'Proyectos ejecutivos',
    shortName: 'Proyecto ejecutivo',
    image: executiveImage,
    description: 'Traducimos una idea en planos, especificaciones y soluciones constructivas precisas para que cada etapa de la obra avance con claridad y control.',
    introduction: 'Documentamos cada decisión necesaria para construir con certeza. Coordinamos arquitectura, instalaciones, detalles, materiales y catálogos para reducir imprevistos durante la ejecución.',
    stages: ['Levantamiento', 'Planos constructivos', 'Coordinación técnica', 'Catálogo de conceptos'],
  },
  {
    id: 'diseno-interiores',
    name: 'Diseño de interiores',
    shortName: 'Interiorismo',
    image: interiorImage,
    description: 'Creamos atmósferas coherentes mediante materiales, iluminación, mobiliario y color, siempre pensando en el uso cotidiano de cada espacio.',
    introduction: 'Entendemos el interior como una extensión de quienes lo habitan. Diseñamos recorridos, mobiliario, iluminación y paletas materiales que construyen una experiencia unificada.',
    stages: ['Concepto espacial', 'Materialidad', 'Iluminación', 'Mobiliario y detalle'],
  },
  {
    id: 'remodelaciones',
    name: 'Remodelaciones',
    shortName: 'Remodelación',
    image: remodelingImage,
    description: 'Reinterpretamos espacios existentes para mejorar su distribución, desempeño y carácter, aprovechando al máximo aquello que ya funciona.',
    introduction: 'Partimos de una lectura cuidadosa de lo existente para detectar oportunidades. Conservamos lo valioso, corregimos limitaciones y damos una nueva vida al espacio con intervenciones precisas.',
    stages: ['Evaluación del inmueble', 'Estrategia de intervención', 'Proyecto y presupuesto', 'Ejecución por etapas'],
  },
  {
    id: 'construccion',
    name: 'Construcción',
    shortName: 'Construcción',
    image: constructionImage,
    description: 'Coordinamos la ejecución integral del proyecto con procesos ordenados, comunicación constante y especial atención a cada detalle.',
    introduction: 'Convertimos el proyecto en obra mediante una planeación transparente, equipos especializados y seguimiento continuo. Cuidamos tiempo, costo y calidad con la misma atención.',
    stages: ['Planeación', 'Presupuesto y contratos', 'Ejecución', 'Entrega y cierre'],
  },
  {
    id: 'supervision-obra',
    name: 'Supervisión de obra',
    shortName: 'Supervisión',
    image: supervisionImage,
    description: 'Verificamos calidad, tiempos y apego al proyecto para anticipar decisiones y mantener el resultado final fiel a la intención de diseño.',
    introduction: 'Acompañamos la construcción con visitas, reportes y revisiones técnicas. Nuestra supervisión mantiene alineados a diseñadores, contratistas y cliente.',
    stages: ['Programa de visitas', 'Control de calidad', 'Reportes de avance', 'Validación de entrega'],
  },
]

export const projects = [
  {
    id: 1,
    slug: 'casa-umbral',
    name: 'Casa Umbral',
    serviceId: 'diseno-interiores',
    location: 'Ciudad de México',
    year: '2026',
    cover: casaUmbralCover,
    gallery: [casaUmbralCover, casaUmbral01, casaUmbral02, casaUmbral01, casaUmbralCover, casaUmbral02],
    description: 'Una residencia concebida como refugio urbano, donde la luz indirecta y una paleta oscura definen espacios serenos para la convivencia cotidiana.',
    problem: 'La vivienda tenía áreas desconectadas y poca continuidad visual, además de requerir soluciones de almacenamiento sin saturar los espacios.',
    solution: 'Unificamos materiales, integramos mobiliario a medida y usamos la iluminación como hilo conductor para articular las distintas áreas de la casa.',
  },
  {
    id: 2,
    slug: 'patio-luz',
    name: 'Patio Luz',
    serviceId: 'remodelaciones',
    location: 'Querétaro',
    year: '2025',
    cover: patioLuzCover,
    gallery: [patioLuzCover, patioLuz01, patioLuz02, patioLuz01, patioLuz02, patioLuzCover],
    description: 'La remodelación transforma un espacio de circulación en el centro vivo de la casa mediante vegetación, textura y luz natural.',
    problem: 'El acceso era oscuro y funcionaba únicamente como paso, sin relación con las áreas sociales ni con el jardín de la vivienda.',
    solution: 'Abrimos visuales, incorporamos un jardín interior y diseñamos una secuencia de materiales cálidos que acompaña el recorrido.',
  },
  {
    id: 3,
    slug: 'residencia-encino',
    name: 'Residencia Encino',
    serviceId: 'arquitectura',
    location: 'Valle de Bravo',
    year: '2025',
    cover: residenciaEncinoCover,
    gallery: [residenciaEncinoCover, residenciaEncino01, residenciaEncino02, residenciaEncino01, residenciaEncinoCover, residenciaEncino02],
    description: 'Una casa abierta al paisaje que combina proporciones generosas, materiales naturales y una distribución flexible para recibir a la familia.',
    problem: 'El terreno pedía aprovechar las vistas sin comprometer privacidad ni confort térmico durante las distintas estaciones del año.',
    solution: 'Orientamos los volúmenes hacia el paisaje, generamos patios protegidos y usamos aleros para controlar la entrada directa del sol.',
  },
  {
    id: 4,
    slug: 'casa-norte',
    name: 'Casa Norte',
    serviceId: 'arquitectura',
    location: 'Monterrey',
    year: '2024',
    cover: casaNorteCover,
    gallery: [casaNorteCover, casaNorte01, casaNorte02, casaNorte01, casaNorteCover, casaNorte02],
    description: 'Dos volúmenes sobrios enmarcan el acceso y protegen los interiores, construyendo una presencia contundente sobre una calle residencial.',
    problem: 'La orientación y el clima exigían reducir la ganancia térmica sin perder iluminación natural ni contacto con el exterior.',
    solution: 'Diseñamos fachadas profundas, celosías y aperturas estratégicas que equilibran sombra, ventilación y privacidad.',
  },
  {
    id: 5,
    slug: 'cocina-linea',
    name: 'Cocina Línea',
    serviceId: 'diseno-interiores',
    location: 'Ciudad de México',
    year: '2024',
    cover: cocinaLineaCover,
    gallery: [cocinaLineaCover, cocinaLinea01, cocinaLinea02, cocinaLinea01, cocinaLineaCover, cocinaLinea02],
    description: 'Una cocina precisa y luminosa donde cada elemento se integra en un plano continuo para facilitar el uso y ampliar visualmente el espacio.',
    problem: 'El espacio existente tenía circulaciones reducidas, superficies insuficientes y equipos dispersos que complicaban las tareas diarias.',
    solution: 'Concentramos servicios, liberamos el área central e incorporamos una isla de trabajo que funciona también como punto de reunión.',
  },
  {
    id: 6,
    slug: 'casa-clara',
    name: 'Casa Clara',
    serviceId: 'remodelaciones',
    location: 'Puebla',
    year: '2024',
    cover: casaClaraCover,
    gallery: [casaClaraCover, casaClara01, casaClara02, casaClara01, casaClaraCover, casaClara02],
    description: 'La intervención abre la vivienda a una nueva etapa, incorporando luz, superficies continuas y una atmósfera relajada.',
    problem: 'La distribución fragmentaba la zona social y bloqueaba la entrada de luz hacia el corazón de la casa.',
    solution: 'Retiramos divisiones innecesarias, alineamos circulaciones y trabajamos una paleta clara que amplifica la iluminación natural.',
  },
  {
    id: 7,
    slug: 'oficinas-prisma',
    name: 'Oficinas Prisma',
    serviceId: 'proyectos-ejecutivos',
    location: 'Ciudad de México',
    year: '2023',
    cover: oficinasPrismaCover,
    gallery: [oficinasPrismaCover, oficinasPrisma01, oficinasPrisma02, oficinasPrisma01, oficinasPrismaCover, oficinasPrisma02],
    description: 'Un entorno de trabajo flexible definido por transparencias, luz controlada y espacios de colaboración que se adaptan a cada jornada.',
    problem: 'El programa requería combinar concentración, reuniones y trabajo colectivo dentro de una planta profunda.',
    solution: 'Organizamos los espacios por gradientes de privacidad y coordinamos el proyecto ejecutivo para integrar instalaciones sin ruido visual.',
  },
  {
    id: 8,
    slug: 'casa-mar',
    name: 'Casa Mar',
    serviceId: 'construccion',
    location: 'Puerto Escondido',
    year: '2023',
    cover: casaMarCover,
    gallery: [casaMarCover, casaMar01, casaMar02, casaMar01, casaMarCover, casaMar02],
    description: 'Una vivienda de descanso construida alrededor de la brisa, las vistas y una materialidad sencilla que envejece con dignidad.',
    problem: 'La distancia, el clima y la logística local requerían una ejecución precisa y soluciones de bajo mantenimiento.',
    solution: 'Planeamos suministros por etapas, simplificamos sistemas constructivos y coordinamos equipos locales con supervisión constante.',
  },
  {
    id: 9,
    slug: 'pabellon-uno',
    name: 'Pabellón Uno',
    serviceId: 'supervision-obra',
    location: 'Estado de México',
    year: '2023',
    cover: pabellonUnoCover,
    gallery: [pabellonUnoCover, pabellonUno01, pabellonUno02, pabellonUno01, pabellonUnoCover, pabellonUno02],
    description: 'Un pabellón silencioso que combina geometría elemental y textura para crear una experiencia de pausa dentro del paisaje.',
    problem: 'La precisión de encuentros y acabados era fundamental para mantener la claridad formal del proyecto original.',
    solution: 'Establecimos muestras, puntos de control y revisiones semanales que permitieron corregir desviaciones antes de cada cierre de obra.',
  },
]

export const company = {
  heroImage: aboutHero,
  studioImage: aboutStudio,
  history: 'Desde 2014, ÁREA desarrolla proyectos de arquitectura, interiores y construcción desde una mirada cercana y rigurosa. Nacimos con la idea de que un buen espacio comienza escuchando: al lugar, a quienes lo habitan y a los recursos disponibles. Esa forma de trabajar nos ha permitido construir relaciones duraderas y proyectos con una identidad propia.',
  philosophy: 'Creemos en una arquitectura serena, funcional y honesta. Evitamos los gestos innecesarios y buscamos que cada decisión aporte claridad, bienestar y permanencia. Nuestro trabajo combina sensibilidad de diseño con capacidad técnica para acompañar el proyecto de principio a fin.',
  values: [
    { number: '01', title: 'Escucha', text: 'Entender antes de proponer.' },
    { number: '02', title: 'Claridad', text: 'Decisiones simples y bien fundamentadas.' },
    { number: '03', title: 'Cuidado', text: 'Atención constante a cada detalle.' },
    { number: '04', title: 'Permanencia', text: 'Espacios pensados para durar.' },
  ],
  team: [
    { initials: 'AR', name: 'Ana Robles', role: 'Dirección creativa' },
    { initials: 'JM', name: 'Javier Mena', role: 'Dirección de proyectos' },
    { initials: 'SC', name: 'Sofía Cruz', role: 'Coordinación de obra' },
  ],
  certifications: ['Colegio de Arquitectos', 'LEED', 'CMIC', 'BIM', 'PMI', 'ISO'],
  clients: ['Albor', 'Norte', 'Forma', 'Habita', 'Origen', 'Prisma'],
}

export const benefits = [
  { icon: 'palette', label: 'Diseño funcional' },
  { icon: 'people', label: 'Acompañamiento continuo' },
  { icon: 'tools', label: 'Soluciones personalizadas' },
  { icon: 'medal', label: 'Calidad en ejecución' },
]

export const testimonials = [
  { name: 'Mariana Salas', company: 'Casa Umbral', quote: 'El equipo entendió cómo queríamos vivir el espacio y lo convirtió en una propuesta clara, cálida y funcional.', projectSlug: 'casa-umbral' },
  { name: 'Carlos Ibarra', company: 'Patio Luz', quote: 'Nos acompañaron en cada decisión. El proceso fue transparente y el resultado superó lo que habíamos imaginado.', projectSlug: 'patio-luz' },
  { name: 'Fernanda Ruiz', company: 'Residencia Encino', quote: 'Lograron una casa serena y práctica sin perder personalidad. Cada material tiene una razón de estar ahí.', projectSlug: 'residencia-encino' },
  { name: 'Andrés Lozano', company: 'Casa Norte', quote: 'La coordinación de obra fue impecable. Siempre tuvimos claridad sobre avances, costos y las decisiones pendientes.', projectSlug: 'casa-norte' },
  { name: 'Lucía Ortega', company: 'Cocina Línea', quote: 'Una intervención precisa que cambió por completo nuestra rutina. Ahora el espacio funciona tan bien como se ve.', projectSlug: 'cocina-linea' },
  { name: 'Roberto Mena', company: 'Casa Clara', quote: 'Encontramos un estudio atento, ordenado y creativo. El proyecto conservó nuestra esencia y mejoró cada ambiente.', projectSlug: 'casa-clara' },
]

export const siteData = {
  heroImage: homeHero,
  contactMap,
  services,
  projects,
  benefits,
  testimonials,
  company,
}
