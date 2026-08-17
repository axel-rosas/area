import { icon } from '../utils/icons.js'

export function Projects(projects) {
  const cards = projects
    .map((project) => `
      <article class="project-card" id="proyecto-${project.id}" style="--project-image: url('${project.cover}')">
        <div class="project-overlay"></div>
        <div class="project-title"><p>${project.name}</p></div>
        <a href="#/proyecto/${project.slug}" class="project-action">${icon('eye')}<span>Ver proyecto</span></a>
      </article>
    `)
    .join('')

  return `
    <section id="portafolio" class="portfolio-section" aria-labelledby="portfolio-title">
      <h2 id="portfolio-title" class="sr-only">Proyectos seleccionados</h2>
      <div class="project-grid">${cards}</div>
      <div class="portfolio-callout"><a href="#/portafolio" class="outline-button">Ver portafolio</a></div>
    </section>
  `
}
