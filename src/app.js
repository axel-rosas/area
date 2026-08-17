import { siteData } from './data/siteData.js'
import { Header } from './components/Header.js'
import { Hero } from './components/Hero.js'
import { Projects } from './components/Projects.js'
import { Benefits, Contact, Testimonials } from './components/ContentSections.js'
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
      setupServices(route.query.get('servicio'))
    }
    if (route.page === 'portafolio') setupPortfolio(route.query.get('servicio'))
    if (route.page === 'proyecto') setupGallery()

    if (route.page === 'contacto') {
      window.requestAnimationFrame(() => document.querySelector('#contacto')?.scrollIntoView())
    } else if (route.page === 'servicios') {
      window.requestAnimationFrame(() => document.querySelector('.hero-section')?.scrollIntoView())
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
      ${Projects(siteData.projects.slice(0, 6))}
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
  const dropdown = document.querySelector('.nav-dropdown')
  const dropdownButton = document.querySelector('.nav-dropdown-trigger button')

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
    if (event.target.matches('a')) {
      header.classList.remove('menu-is-open')
      document.body.classList.remove('nav-is-open')
      menuButton.setAttribute('aria-expanded', 'false')
      menuButton.setAttribute('aria-label', 'Abrir menú')
    }
  })

  dropdownButton.addEventListener('click', () => {
    if (window.matchMedia('(max-width: 767px)').matches) return

    const isOpen = dropdown.classList.toggle('submenu-is-open')
    dropdownButton.setAttribute('aria-expanded', String(isOpen))
    dropdownButton.setAttribute('aria-label', isOpen ? 'Ocultar servicios' : 'Mostrar servicios')
  })

  document.onkeydown = (event) => {
    if (event.key !== 'Escape' || !header.classList.contains('menu-is-open')) return

    header.classList.remove('menu-is-open')
    document.body.classList.remove('nav-is-open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Abrir menú')
  }
}

function setupServices(initialService) {
  const hero = document.querySelector('.hero-section')
  const brandView = document.querySelector('.hero-brand-view')
  const serviceView = document.querySelector('.hero-service-view')
  const serviceTitle = document.querySelector('.hero-service-title')
  const serviceDescription = document.querySelector('.hero-service-description')
  const serviceLink = document.querySelector('.hero-service-link')
  const serviceSelect = document.querySelector('select[name="service"]')

  function showService(serviceId) {
    const service = siteData.services.find((item) => item.id === serviceId)
    if (!service) return

    hero.style.setProperty('--hero-image', `url('${service.image}')`)
    hero.classList.add('showing-service')
    brandView.hidden = true
    serviceView.hidden = false
    serviceTitle.textContent = service.name
    serviceDescription.textContent = service.description
    serviceLink.href = `#/servicio/${service.id}`
    serviceSelect.value = service.id

    document.querySelectorAll('.service-button').forEach((button) => {
      button.classList.toggle('is-active', button.dataset.serviceId === service.id)
    })
  }

  document.querySelector('.service-menu').addEventListener('click', (event) => {
    const button = event.target.closest('.service-button')
    if (button) showService(button.dataset.serviceId)
  })

  if (initialService) showService(initialService)
}

function setupPortfolio(initialFilter) {
  const filterButtons = [...document.querySelectorAll('.filter-button')]
  const searchInput = document.querySelector('.search-field input')
  const cards = [...document.querySelectorAll('.portfolio-card')]
  const emptyState = document.querySelector('.portfolio-empty')
  let activeFilter = filterButtons.some((button) => button.dataset.filter === initialFilter) ? initialFilter : 'all'

  function applyFilters() {
    const search = searchInput.value.trim().toLowerCase()
    let visibleCount = 0

    cards.forEach((card) => {
      const matchesService = activeFilter === 'all' || card.dataset.service === activeFilter
      const matchesSearch = !search || card.dataset.name.includes(search)
      card.hidden = !(matchesService && matchesSearch)
      if (!card.hidden) visibleCount += 1
    })

    filterButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.filter === activeFilter))
    emptyState.hidden = visibleCount > 0
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter
      applyFilters()
    })
  })

  searchInput.addEventListener('input', applyFilters)
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
