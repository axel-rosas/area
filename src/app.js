import { siteData } from './data/siteData.js'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Projects } from './components/Projects.js'
import { Benefits, Contact, ServicesShowcase, Testimonials } from './components/ContentSections.js'
import { Footer } from './components/Footer.js'
import { AboutPage, NotFoundPage, PortfolioPage, ProjectPage, ServicePage } from './components/InternalPages.js'

export function createApp(root) {
  function render() {
    const route = getRoute()
    document.body.classList.remove('nav-is-open')
    root.innerHTML = renderRoute(route)

    setupNavigation()
    setupContactForm()

    if (route.page === 'home' || route.page === 'contacto' || route.page === 'servicios') {
      setupServiceShowcase()
    }
    if (route.page === 'portafolio') setupPortfolio(route.query.get('servicio'))
    if (route.page === 'proyecto') setupGallery()

    if (route.page === 'contacto') {
      window.requestAnimationFrame(() => document.querySelector('#contacto')?.scrollIntoView())
    } else if (route.page === 'servicios') {
      window.requestAnimationFrame(() => document.querySelector('#servicios')?.scrollIntoView())
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  window.addEventListener('hashchange', render)
  render()
}

function getRoute() {
  const hash = window.location.hash.replace(/^#\/?/, '')
  const [path = '', queryString = ''] = hash.split('?')
  const segments = path.split('/').filter(Boolean)

  if (!segments.length) return { page: 'home', query: new URLSearchParams(queryString) }

  return {
    page: segments[0],
    id: segments[1],
    query: new URLSearchParams(queryString),
  }
}

function renderRoute(route) {
  if (route.page === 'home' || route.page === 'contacto' || route.page === 'servicios') {
    document.title = 'ÁREA | Arquitectura & Diseño'
    return renderHome()
  }

  if (route.page === 'nosotros') {
    document.title = 'Nosotros | ÁREA'
    return AboutPage()
  }

  if (route.page === 'servicio') {
    const service = siteData.services.find((item) => item.id === route.id) ?? siteData.services[0]
    document.title = `${service.name} | ÁREA`
    return ServicePage(service)
  }

  if (route.page === 'portafolio') {
    document.title = 'Portafolio | ÁREA'
    return PortfolioPage()
  }

  if (route.page === 'proyecto') {
    const project = siteData.projects.find((item) => item.slug === route.id)
    if (project) {
      document.title = `${project.name} | ÁREA`
      return ProjectPage(project)
    }
  }

  document.title = 'Página no encontrada | ÁREA'
  return NotFoundPage()
}

function renderHome() {
  return `
    ${Header()}
    <main>
      ${Hero(siteData)}
      ${ServicesShowcase(siteData.services)}
      ${Projects(siteData.projects.slice(0, 6), siteData.services)}
      ${Benefits(siteData.benefits)}
      ${Testimonials(siteData.testimonials)}
      ${Contact(siteData)}
    </main>
    ${Footer(siteData.services)}
  `
}

function setupNavigation() {
  const header = document.querySelector('.site-header')
  const menuButton = document.querySelector('.menu-button')
  const navigation = document.querySelector('.main-nav')

  function updateHeaderBackground() {
    header.classList.toggle('is-scrolled', window.scrollY > 24)
  }

  window.onscroll = updateHeaderBackground
  updateHeaderBackground()

  menuButton.addEventListener('click', () => {
    const isOpen = header.classList.toggle('menu-is-open')
    document.body.classList.toggle('nav-is-open', isOpen)
    menuButton.setAttribute('aria-expanded', String(isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
  })

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      header.classList.remove('menu-is-open')
      document.body.classList.remove('nav-is-open')
      menuButton.setAttribute('aria-expanded', 'false')
      menuButton.setAttribute('aria-label', 'Abrir menú')
    }
  })

  document.onkeydown = (event) => {
    if (event.key !== 'Escape' || !header.classList.contains('menu-is-open')) return

    header.classList.remove('menu-is-open')
    document.body.classList.remove('nav-is-open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Abrir menú')
  }
}

function setupServiceShowcase() {
  const cards = [...document.querySelectorAll('.service-card')]

  cards.forEach((card) => {
    const actionSlot = card.querySelector('.service-card-action-slot')
    const actionTemplate = card.querySelector('.service-card-action-template')
    const usesHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    const mountAction = () => {
      if (actionSlot.firstElementChild) return

      actionSlot.replaceChildren(actionTemplate.content.cloneNode(true))
      actionSlot.querySelector('.service-card-action').onclick = (event) => {
        event.stopPropagation()
      }
    }

    if (usesHover) mountAction()

    const toggleCard = () => {
      const isOpen = card.classList.toggle('is-open')
      card.setAttribute('aria-expanded', String(isOpen))

      if (!isOpen && !usesHover) {
        actionSlot.replaceChildren()
        return
      }

      mountAction()
    }

    card.onclick = (event) => {
      if (event.target.closest('.service-card-action')) return
      toggleCard()
    }

    card.onkeydown = (event) => {
      if (event.target !== card || !['Enter', ' '].includes(event.key)) return
      event.preventDefault()
      toggleCard()
    }
  })
}

function setupPortfolio(initialFilter) {
  const filterButtons = [...document.querySelectorAll('.filter-button')]
  const searchInput = document.querySelector('.search-field input')
  const cards = [...document.querySelectorAll('.portfolio-card')]
  const emptyState = document.querySelector('.portfolio-empty')
  const pagination = document.querySelector('.portfolio-pagination')
  const projectsPerPage = 9
  let activeFilter = filterButtons.some((button) => button.dataset.filter === initialFilter) ? initialFilter : 'all'
  let currentPage = 1

  function renderPagination(pageCount) {
    pagination.hidden = pageCount <= 1

    if (pagination.hidden) {
      pagination.replaceChildren()
      return
    }

    const pageButtons = Array.from({ length: pageCount }, (_, index) => {
      const page = index + 1
      const isCurrent = page === currentPage
      return `<button type="button" class="pagination-button${isCurrent ? ' is-active' : ''}" data-page="${page}" aria-label="Ir a la página ${page}"${isCurrent ? ' aria-current="page"' : ''}>${page}</button>`
    }).join('')

    pagination.innerHTML = `
      <button type="button" class="pagination-button pagination-previous" data-page="${currentPage - 1}" aria-label="Página anterior"${currentPage === 1 ? ' disabled' : ''}>&larr;</button>
      ${pageButtons}
      <button type="button" class="pagination-button pagination-next" data-page="${currentPage + 1}" aria-label="Página siguiente"${currentPage === pageCount ? ' disabled' : ''}>&rarr;</button>
    `
  }

  function applyFilters() {
    const search = searchInput.value.trim().toLowerCase()
    const matchingCards = cards.filter((card) => {
      const matchesService = activeFilter === 'all' || card.dataset.service === activeFilter
      const matchesSearch = !search || card.dataset.name.includes(search)
      return matchesService && matchesSearch
    })
    const pageCount = Math.ceil(matchingCards.length / projectsPerPage)
    currentPage = Math.min(currentPage, Math.max(pageCount, 1))
    const firstProject = (currentPage - 1) * projectsPerPage
    const visibleCards = new Set(matchingCards.slice(firstProject, firstProject + projectsPerPage))

    cards.forEach((card) => {
      card.hidden = !visibleCards.has(card)
    })

    filterButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.filter === activeFilter))
    emptyState.hidden = matchingCards.length > 0
    renderPagination(pageCount)
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter
      currentPage = 1
      applyFilters()
    })
  })

  searchInput.addEventListener('input', () => {
    currentPage = 1
    applyFilters()
  })

  pagination.addEventListener('click', (event) => {
    const button = event.target.closest('.pagination-button')
    if (!button || button.disabled) return

    currentPage = Number(button.dataset.page)
    applyFilters()
    document.querySelector('.portfolio-page-grid').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  applyFilters()
}

function setupGallery() {
  const dialog = document.querySelector('.gallery-dialog')
  const dialogImage = dialog.querySelector('img')
  const dialogLabel = dialog.querySelector('p')
  const galleryButtons = [...document.querySelectorAll('.project-gallery-item')]
  let currentIndex = 0

  function showImage(index) {
    currentIndex = (index + galleryButtons.length) % galleryButtons.length
    const image = galleryButtons[currentIndex].querySelector('img')
    dialogImage.src = image.src
    dialogImage.alt = image.alt
    dialogLabel.textContent = `${currentIndex + 1} / ${galleryButtons.length}`
  }

  galleryButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showImage(index)
      dialog.showModal()
    })
  })

  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close())
  dialog.querySelector('.gallery-previous').addEventListener('click', () => showImage(currentIndex - 1))
  dialog.querySelector('.gallery-next').addEventListener('click', () => showImage(currentIndex + 1))
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close()
  })
}

function setupContactForm() {
  const form = document.querySelector('.contact-form')
  if (!form) return

  const status = form.querySelector('.form-status')
  form.addEventListener('submit', (event) => {
    event.preventDefault()

    if (!form.checkValidity()) {
      status.textContent = 'Completa los campos indicados.'
      form.reportValidity()
      return
    }

    status.textContent = '¡Gracias! Tu mensaje está listo para enviarse cuando conectemos el formulario.'
    form.reset()
  })
}
