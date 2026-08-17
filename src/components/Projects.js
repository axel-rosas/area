export function Projects(projects, services) {
  const cards = projects
    .map((project) => {
      const service = services.find((item) => item.id === project.serviceId)

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
    .join('')

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
