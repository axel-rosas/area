/**
 * CUADRÍCULA DE PROYECTOS DESTACADOS
 *
 * Este módulo se separa de `ContentSections.js` porque combina dos colecciones
 * (proyectos y servicios), crea tarjetas más complejas y representa una sección
 * de negocio completa que puede evolucionar independientemente.
 */

/**
 * @param {Array<object>} projects - Proyectos ya limitados por `app.js`.
 * @param {Array<object>} services - Catálogo para resolver el nombre del servicio.
 * @returns {string} Sección de portafolio destacado.
 */
export function Projects(projects, services) {
  // Primero transforma los objetos de datos en tarjetas HTML.
  const cards = projects
    .map((project) => {
      // `serviceId` funciona como una llave foránea: vincula ambas colecciones.
      const service = services.find((item) => item.id === project.serviceId)

      // El id sirve para anclas/estilos; el slug crea una URL legible y estable.
      return `
        <a class="portfolio-card featured-project-card" id="proyecto-${project.id}" href="#/proyecto/${project.slug}" aria-label="Ver ${project.name}">
          <img src="${project.cover}" alt="${project.name}" loading="lazy" />
          <div class="portfolio-card-shade"></div>
          <div class="portfolio-card-copy">
            <p>${service.shortName} / ${project.year}</p>
            <h2>${project.name}</h2>
          </div>
        </a>
      `
    })
    // Une todas las tarjetas en una sola cadena apta para interpolarse abajo.
    .join('')

  // La sección agrega título, cuadrícula y llamada a ver el catálogo completo.
  return `
    <section id="portafolio" class="portfolio-section" aria-labelledby="portfolio-title">
      <div class="content-section section-heading portfolio-heading">
        <h2 id="portfolio-title">Proyectos <span>destacados</span></h2>
      </div>
      <div class="project-grid">${cards}</div>
      <div class="portfolio-callout"><a href="#/portafolio" class="outline-button">Ver portafolio</a></div>
    </section>
  `
}
