import { Header } from './Header.js'
import { Footer } from './Footer.js'
import { Contact } from './ContentSections.js'
import { brandMark, brandSymbol } from './Brand.js'
import { icon } from '../utils/icons.js'
import { siteData } from '../data/siteData.js'

function PageHero({ title, image, eyebrow, subtitle }) {
  return `
    <section class="page-hero" style="--page-hero-image: url('${image}')">
      <div class="page-hero-overlay"></div>
      <div class="page-container page-hero-content">
        ${eyebrow ? `<p class="page-eyebrow">${eyebrow}</p>` : ''}
        <h1>${title}</h1>
        ${subtitle ? `<p class="page-hero-subtitle">${subtitle}</p>` : ''}
      </div>
    </section>
  `
}

function Shell(content, pageClass = '') {
  return `
    <div class="internal-site ${pageClass}">
      ${Header(true)}
      <main>${content}</main>
      ${Footer(siteData.services)}
    </div>
  `
}

export function AboutPage() {
  const { company } = siteData
  const values = company.values.map((value) => `
    <article class="about-value-card">
      <h3>${value.title}</h3>
      <p>${value.text}</p>
    </article>
  `).join('')

  const philosophy = company.philosophy.map((item) => `<li>${item}</li>`).join('')
  const history = company.history.map((paragraph) => `<p>${paragraph}</p>`).join('')
  const promise = company.promise.map((item) => `<p>${item}</p>`).join('')
  const services = company.whatWeDo.services.map((service, index) => `
    <li><a href="#/servicio/${siteData.services[index].id}">${service}</a></li>
  `).join('')

  return Shell(`
    ${PageHero({ title: `${brandMark('about-title-logo')}<span class="about-title-tagline">Arquitectura &amp; Diseño</span>`, image: company.heroImage })}
    <section class="page-container about-section about-story">
      <div class="about-heading"><h2>Nuestra <span>historia</span></h2></div>
      <div class="about-rich-text">${history}</div>
    </section>
    <section class="page-container about-section">
      <div class="about-heading"><h2>Nuestra <span>filosofía</span></h2></div>
      <div class="about-philosophy-layout">
        <figure class="about-image"><img src="${company.studioImage}" alt="Detalle de un interior diseñado por ÁREA" /></figure>
        <ul class="about-bullet-list">${philosophy}</ul>
      </div>
    </section>
    <section class="page-container about-section about-pair">
      <article class="about-panel">
        <div class="about-heading"><h2>Nuestra <span>misión</span></h2></div>
        <p>${company.mission}</p>
      </article>
      <article class="about-panel">
        <div class="about-heading"><h2>Nuestra <span>visión</span></h2></div>
        <p>${company.vision}</p>
      </article>
    </section>
    <section class="page-container about-section">
      <div class="about-heading"><h2>Nuestros <span>valores</span></h2></div>
      <div class="about-values-grid">${values}</div>
    </section>
    <section class="page-container about-section">
      <div class="about-heading"><h2>Nuestra <span>promesa</span></h2></div>
      <div class="about-promise-layout">
        <div class="about-promise-lines">${promise}</div>
        <div class="about-promise-brand" aria-hidden="true">
          ${brandSymbol()}
          ${brandMark('about-promise-name')}
        </div>
      </div>
    </section>
    <section class="page-container about-section">
      <div class="about-heading"><h2>¿Qué <span>hacemos?</span></h2></div>
      <p class="about-introduction">${company.whatWeDo.introduction}</p>
      <p class="about-services-label">Nuestros servicios incluyen:</p>
      <ul class="about-services-list">${services}</ul>
    </section>
    <section class="page-container about-section about-manifesto">
      <div class="about-heading"><h2>Nuestro <span>manifiesto</span></h2></div>
      <p>${company.manifesto}</p>
    </section>
  `, 'about-page')
}

export function ServicePage(service) {
  const stages = service.stages.map((stage, index) => `
    <article class="stage-card"><span>0${index + 1}</span><h3>${stage}</h3></article>
  `).join('')

  const relatedProjects = [...siteData.projects]
    .sort((a, b) => Number(b.serviceId === service.id) - Number(a.serviceId === service.id))
    .slice(0, 6)

  const gallery = relatedProjects.map((project) => `
    <a class="service-gallery-item" href="#/proyecto/${project.slug}">
      <img src="${project.cover}" alt="${project.name}" />
      <span><b>${project.name}</b>${icon('arrow')}</span>
    </a>
  `).join('')

  return Shell(`
    ${PageHero({ title: service.name, image: service.image, subtitle: service.description })}
    <section class="page-container service-intro page-section">
      <div class="internal-section-heading"><h2>Diseño y precisión <span>en cada etapa</span></h2></div>
      <p class="service-intro-copy">${service.introduction}</p>
    </section>
    <section class="page-container page-section">
      <div class="internal-section-heading"><h2>Un proceso <span>claro</span>, de principio a fin</h2></div>
      <div class="stages-grid">${stages}</div>
    </section>
    <section class="page-container page-section">
      <div class="internal-section-heading internal-section-heading--split"><h2>Proyectos <span>relacionados</span></h2><a href="#/portafolio?servicio=${service.id}">Ver portafolio</a></div>
      <div class="service-gallery">${gallery}</div>
    </section>
    ${Contact(siteData)}
  `, 'service-page')
}

export function PortfolioPage() {
  const usedServices = siteData.services.filter((service) => siteData.projects.some((project) => project.serviceId === service.id))
  const filters = [`<button type="button" class="filter-button is-active" data-filter="all">Todos</button>`, ...usedServices.map((service) => `<button type="button" class="filter-button" data-filter="${service.id}">${service.shortName}</button>`)].join('')

  const projects = siteData.projects.map((project) => {
    const service = siteData.services.find((item) => item.id === project.serviceId)
    return `
      <a class="portfolio-card" href="#/proyecto/${project.slug}" aria-label="Ver ${project.name}" data-service="${project.serviceId}" data-name="${project.name.toLowerCase()}">
        <img src="${project.cover}" alt="${project.name}" />
        <div class="portfolio-card-shade"></div>
        <div class="portfolio-card-copy"><p>${service.shortName} / ${project.year}</p><h2>${project.name}</h2></div>
      </a>
    `
  }).join('')

  return Shell(`
    <section class="portfolio-header">
      <div class="page-container">
        <p class="page-eyebrow">Trabajo seleccionado</p>
        <h1>Portafolio</h1>
        <p>Espacios pensados desde el contexto, la función y la experiencia.</p>
      </div>
    </section>
    <section class="page-container portfolio-browser page-section">
      <div class="portfolio-controls">
        <div class="filter-bar" aria-label="Filtrar por servicio">${filters}</div>
        <label class="search-field">${icon('search')}<span class="sr-only">Buscar proyecto</span><input type="search" placeholder="Buscar proyecto" /></label>
      </div>
      <div class="portfolio-page-grid">${projects}</div>
      <p class="portfolio-empty" hidden>No encontramos proyectos con esos criterios.</p>
      <nav class="portfolio-pagination" aria-label="Páginas del portafolio" hidden></nav>
    </section>
  `, 'portfolio-page')
}

export function ProjectPage(project) {
  const service = siteData.services.find((item) => item.id === project.serviceId)
  const gallery = project.gallery.map((image, index) => `
    <button class="project-gallery-item" type="button" data-gallery-index="${index}" aria-label="Ampliar imagen ${index + 1} de ${project.name}">
      <img src="${image}" alt="${project.name}, vista ${index + 1}" />
    </button>
  `).join('')

  return Shell(`
    ${PageHero({ title: project.name, image: project.cover, eyebrow: `${service.shortName} / ${project.year}`, subtitle: project.location })}
    <section class="page-container project-overview page-section">
      <div class="internal-section-heading"><h2>Sobre el <span>proyecto</span></h2></div>
      <figure class="project-feature-image"><img src="${project.gallery[1]}" alt="Detalle principal de ${project.name}" /></figure>
      <div class="project-narrative-grid">
        <article class="project-narrative-card"><h3>El proyecto</h3><p>${project.description}</p></article>
        <article class="project-narrative-card"><h3>El reto</h3><p>${project.problem}</p></article>
        <article class="project-narrative-card"><h3>La solución</h3><p>${project.solution}</p></article>
      </div>
    </section>
    <section class="page-container page-section">
      <div class="internal-section-heading"><h2>El proyecto <span>en detalle</span></h2></div>
      <div class="project-detail-gallery">${gallery}</div>
    </section>
    ${Contact(siteData)}
    <dialog class="gallery-dialog" aria-label="Galería ampliada">
      <button class="gallery-close" type="button" aria-label="Cerrar galería">${icon('close')}</button>
      <button class="gallery-arrow gallery-previous" type="button" aria-label="Imagen anterior">←</button>
      <img src="" alt="" />
      <button class="gallery-arrow gallery-next" type="button" aria-label="Imagen siguiente">→</button>
      <p></p>
    </dialog>
  `, 'project-page')
}

export function NotFoundPage() {
  return Shell(`
    <section class="not-found page-container">
      <p class="section-index">404 / Página no encontrada</p>
      <h1>Este espacio aún no existe.</h1>
      <a class="outline-button" href="#/">Volver al inicio</a>
    </section>
  `, 'not-found-page')
}
