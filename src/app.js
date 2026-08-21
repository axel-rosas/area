/**
 * ORQUESTADOR DE LA APLICACIÓN
 *
 * Este módulo conecta las tres capas principales del proyecto:
 * 1. Lee la URL y decide qué página corresponde (enrutamiento).
 * 2. Pide HTML a los componentes y lo inserta en el DOM (renderizado).
 * 3. Conecta los eventos interactivos después de insertar ese HTML.
 *
 * Se mantiene separado de `main.js` para que el punto de entrada sólo arranque
 * la aplicación, y separado de `components/` para que los componentes se
 * concentren en producir HTML sin administrar estado global ni navegación.
 */

// `./data/` parte desde `src/`: carga el objeto central con contenido y assets.
import { siteData } from './data/siteData.js'
// Cada ruta `./components/...` sube desde `app.js` a un componente de interfaz.
import { Header } from './components/Header.js'
import { HomeIntro } from './components/HomeIntro.js'
import { Hero } from './components/Hero.js'
import { Projects } from './components/Projects.js'
// Un solo módulo agrupa secciones pequeñas que sólo se usan para componer páginas.
import { Benefits, Contact, ServicesShowcase, Testimonials } from './components/ContentSections.js'
import { Footer } from './components/Footer.js'
// Las páginas internas comparten una misma envoltura y por eso viven juntas.
import { AboutPage, NotFoundPage, PortfolioPage, ProjectPage, ServicePage } from './components/InternalPages.js'

/**
 * Inicia la SPA (Single Page Application) dentro de un elemento del DOM.
 * @param {HTMLElement} root - Nodo raíz; `main.js` entrega el `<div id="app">`.
 * @returns {void} Esta función configura eventos y renderiza, no devuelve HTML.
 */
export function createApp(root) {
  /** Renderiza desde cero la interfaz correspondiente a la URL actual. */
  function render() {
    // Convierte `window.location.hash` en un objeto fácil de consultar.
    const route = getRoute()
    // Limpia estados visuales de la página anterior antes de reemplazar el DOM.
    document.body.classList.remove('nav-is-open')
    document.body.classList.remove('intro-is-running')
    // `innerHTML` reemplaza el contenido anterior por la plantilla de la ruta.
    root.innerHTML = renderRoute(route)

    // Los nodos anteriores dejaron de existir; por eso los eventos se conectan
    // DESPUÉS de cada renderizado sobre los elementos recién creados.
    setupNavigation()
    setupContactForm()

    // La introducción animada sólo pertenece al inicio, no a páginas internas.
    if (route.page === 'home') setupHomeIntro()

    // Estas tres URL reutilizan `renderHome`, que sí contiene tarjetas de servicio.
    if (route.page === 'home' || route.page === 'contacto' || route.page === 'servicios') {
      setupServiceShowcase()
    }
    // Cada interacción especializada se activa únicamente si su DOM está presente.
    if (route.page === 'portafolio') setupPortfolio(route.query.get('servicio'))
    if (route.page === 'proyecto') setupGallery()

    // `/contacto` y `/servicios` son accesos directos a secciones del mismo home.
    if (route.page === 'contacto') {
      // `requestAnimationFrame` espera al siguiente repintado, cuando el nuevo DOM
      // ya tiene dimensiones y puede desplazarse correctamente hasta la sección.
      window.requestAnimationFrame(() => document.querySelector('#contacto')?.scrollIntoView())
    } else if (route.page === 'servicios') {
      window.requestAnimationFrame(() => document.querySelector('#servicios')?.scrollIntoView())
    } else {
      // Las demás páginas comienzan arriba; `auto` evita animar desde la ruta previa.
      window.scrollTo({ top: 0, behavior: 'auto' })
    }
  }

  // Una SPA con hash no recarga el documento: escucha cambios como `#/nosotros`.
  window.addEventListener('hashchange', render)
  // Ejecuta el primer render inmediatamente; no hace falta esperar otro evento.
  render()
}

/**
 * Interpreta el fragmento de la URL usado como ruta.
 * Ejemplo: `#/proyecto/casa-umbral?vista=grande` produce
 * `{ page: 'proyecto', id: 'casa-umbral', query: URLSearchParams(...) }`.
 * @returns {{page: string, id?: string, query: URLSearchParams}}
 */
function getRoute() {
  // Quita `#`, con o sin `/`, únicamente al inicio mediante una expresión regular.
  const hash = window.location.hash.replace(/^#\/?/, '')
  // Desestructuración: separa camino y query; usa cadenas vacías como valores seguros.
  const [path = '', queryString = ''] = hash.split('?')
  // Convierte `proyecto/casa-umbral` en `['proyecto', 'casa-umbral']`.
  const segments = path.split('/').filter(Boolean)

  // Sin segmentos se considera la página principal.
  if (!segments.length) return { page: 'home', query: new URLSearchParams(queryString) }

  // El primer segmento identifica la página y el segundo, el recurso concreto.
  return {
    page: segments[0],
    id: segments[1],
    // URLSearchParams permite leer después `query.get('servicio')`.
    query: new URLSearchParams(queryString),
  }
}

/**
 * Selecciona la plantilla que corresponde a una ruta y actualiza la pestaña.
 * @param {{page: string, id?: string, query: URLSearchParams}} route
 * @returns {string} Cadena HTML que se insertará en `#app`.
 */
function renderRoute(route) {
  // Inicio, contacto y servicios comparten una sola página larga.
  if (route.page === 'home' || route.page === 'contacto' || route.page === 'servicios') {
    document.title = 'ÁREA | Arquitectura & Diseño'
    // Sólo la ruta raíz muestra la animación inicial.
    return renderHome(route.page === 'home')
  }

  // Cada bloque termina con `return`, por lo que no hace falta encadenar `else if`.
  if (route.page === 'nosotros') {
    document.title = 'Nosotros | ÁREA'
    return AboutPage()
  }

  if (route.page === 'servicio') {
    // `find` busca por id. `??` elige el primer servicio sólo si no hubo coincidencia.
    const service = siteData.services.find((item) => item.id === route.id) ?? siteData.services[0]
    // Los backticks permiten interpolar `${service.name}` dentro de la cadena.
    document.title = `${service.name} | ÁREA`
    return ServicePage(service)
  }

  if (route.page === 'portafolio') {
    document.title = 'Portafolio | ÁREA'
    return PortfolioPage()
  }

  if (route.page === 'proyecto') {
    // A diferencia del servicio, un proyecto desconocido cae en la página 404.
    const project = siteData.projects.find((item) => item.slug === route.id)
    if (project) {
      document.title = `${project.name} | ÁREA`
      return ProjectPage(project)
    }
  }

  // Ruta final de respaldo para cualquier URL que no coincidió arriba.
  document.title = 'Página no encontrada | ÁREA'
  return NotFoundPage()
}

/**
 * Compone la página larga de inicio a partir de componentes independientes.
 * @param {boolean} showIntro - Indica si incluye la pantalla de bienvenida.
 * @returns {string} Documento interno completo como template literal.
 */
function renderHome(showIntro = false) {
  // Cada `${...}` ejecuta una función y coloca su cadena HTML en este orden.
  return `
    ${showIntro ? HomeIntro() : ''}
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

/** Conecta y finaliza la animación de bienvenida del inicio. */
function setupHomeIntro() {
  // `querySelector` devuelve el primer elemento coincidente o `null`.
  const intro = document.querySelector('.home-intro')
  // Guardia: si el componente no fue renderizado, se abandona la función.
  if (!intro) return

  // Respeta la preferencia de accesibilidad del sistema operativo.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    intro.remove()
    return
  }

  // Esta clase bloquea el scroll durante la animación (véase `style.css`).
  document.body.classList.add('intro-is-running')
  // Se declara sin valor; guardará el identificador numérico de `setTimeout`.
  let fallbackTimer

  // Función interna reutilizada por el evento de CSS y por el temporizador de respaldo.
  const finishIntro = () => {
    window.clearTimeout(fallbackTimer)
    document.body.classList.remove('intro-is-running')
    // Elimina el nodo, no sólo lo oculta, para que deje de interceptar interacción.
    intro.remove()
  }

  intro.addEventListener('animationend', (event) => {
    // `animationend` burbujea desde hijos; se acepta sólo la animación del contenedor.
    if (event.target === intro && event.animationName === 'home-intro-exit') finishIntro()
  })

  // Si por alguna razón el evento CSS no llega, la interfaz se libera tras 3.3 s.
  fallbackTimer = window.setTimeout(finishIntro, 3300)
}

/** Conecta el encabezado fijo, el menú móvil y sus estados de accesibilidad. */
function setupNavigation() {
  // Estas referencias existen en todas las páginas porque cada una incluye `Header()`.
  const header = document.querySelector('.site-header')
  const menuButton = document.querySelector('.menu-button')
  const navigation = document.querySelector('.main-nav')

  /** Sincroniza el fondo del encabezado con la posición vertical de la ventana. */
  function updateHeaderBackground() {
    // `toggle(clase, condición)` agrega la clase si la condición es verdadera.
    header.classList.toggle('is-scrolled', window.scrollY > 24)
  }

  // Asigna la función al evento de scroll de la ventana.
  window.onscroll = updateHeaderBackground
  // La llama una vez para cubrir páginas que ya cargaron con desplazamiento.
  updateHeaderBackground()

  menuButton.addEventListener('click', () => {
    // `classList.toggle` sin segundo argumento invierte y devuelve el nuevo estado.
    const isOpen = header.classList.toggle('menu-is-open')
    // El body usa otra clase para impedir scroll mientras el menú cubre la pantalla.
    document.body.classList.toggle('nav-is-open', isOpen)
    // ARIA comunica el mismo estado visual a tecnologías de asistencia.
    menuButton.setAttribute('aria-expanded', String(isOpen))
    menuButton.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú')
  })

  navigation.addEventListener('click', (event) => {
    // Delegación de eventos: escucha el `nav` y detecta cualquier enlace descendiente.
    if (event.target.closest('a')) {
      header.classList.remove('menu-is-open')
      document.body.classList.remove('nav-is-open')
      menuButton.setAttribute('aria-expanded', 'false')
      menuButton.setAttribute('aria-label', 'Abrir menú')
    }
  })

  // La propiedad global se reasigna en cada render; no acumula listeners antiguos.
  document.onkeydown = (event) => {
    // Sale salvo que se pulse Escape mientras el menú esté abierto.
    if (event.key !== 'Escape' || !header.classList.contains('menu-is-open')) return

    // Restaura en conjunto las clases visuales y atributos accesibles.
    header.classList.remove('menu-is-open')
    document.body.classList.remove('nav-is-open')
    menuButton.setAttribute('aria-expanded', 'false')
    menuButton.setAttribute('aria-label', 'Abrir menú')
  }
}

/** Añade interacción con ratón, toque y teclado a las tarjetas de servicios. */
function setupServiceShowcase() {
  // `querySelectorAll` devuelve NodeList; `[...lista]` lo convierte en Array.
  const cards = [...document.querySelectorAll('.service-card')]

  // Configura cada tarjeta de manera independiente.
  cards.forEach((card) => {
    // Slot = lugar visible; template = contenido inerte que todavía no se renderiza.
    const actionSlot = card.querySelector('.service-card-action-slot')
    const actionTemplate = card.querySelector('.service-card-action-template')
    // Distingue un ratón preciso de una pantalla táctil, donde no existe hover real.
    const usesHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches

    /** Clona el enlace de “Ver más” en el slot sólo una vez. */
    const mountAction = () => {
      // Evita duplicar el enlace si ya fue montado.
      if (actionSlot.firstElementChild) return

      // El contenido de `<template>` se clona porque un nodo no puede estar en dos sitios.
      actionSlot.replaceChildren(actionTemplate.content.cloneNode(true))
      actionSlot.querySelector('.service-card-action').onclick = (event) => {
        // Impide que el click del enlace también active el click de la tarjeta padre.
        event.stopPropagation()
      }
    }

    // En escritorio el enlace debe estar listo para aparecer mediante CSS `:hover`.
    if (usesHover) mountAction()

    /** Alterna el estado desplegado de una tarjeta. */
    const toggleCard = () => {
      const isOpen = card.classList.toggle('is-open')
      card.setAttribute('aria-expanded', String(isOpen))

      // En táctil se desmonta al cerrar para recuperar el estado inicial.
      if (!isOpen && !usesHover) {
        actionSlot.replaceChildren()
        return
      }

      // Al abrir garantiza que exista la acción.
      mountAction()
    }

    card.onclick = (event) => {
      // El propio enlace navega; no debe cerrar/abrir también la tarjeta.
      if (event.target.closest('.service-card-action')) return
      toggleCard()
    }

    card.onkeydown = (event) => {
      // Sólo la tarjeta enfocada responde a Enter o Espacio, como un botón nativo.
      if (event.target !== card || !['Enter', ' '].includes(event.key)) return
      // Evita que Espacio desplace la página antes de activar la tarjeta.
      event.preventDefault()
      toggleCard()
    }
  })
}

/**
 * Conecta búsqueda, filtros y paginación del portafolio.
 * @param {string|null} initialFilter - Id recibido de `?servicio=...` o `null`.
 */
function setupPortfolio(initialFilter) {
  // Se guardan las referencias porque se consultarán muchas veces al filtrar.
  const filterButtons = [...document.querySelectorAll('.filter-button')]
  const searchInput = document.querySelector('.search-field input')
  const cards = [...document.querySelectorAll('.portfolio-card')]
  const emptyState = document.querySelector('.portfolio-empty')
  const pagination = document.querySelector('.portfolio-pagination')
  // `const` porque esta regla de negocio no cambia durante la sesión.
  const projectsPerPage = 9
  // Usa el filtro de la URL sólo si corresponde a un botón que sí existe.
  let activeFilter = filterButtons.some((button) => button.dataset.filter === initialFilter) ? initialFilter : 'all'
  // `let` porque tanto filtros como clicks de paginación cambian esta página.
  let currentPage = 1

  /** Regenera los botones según el total de páginas resultante. */
  function renderPagination(pageCount) {
    // La propiedad HTML `hidden` oculta el navegador si una página basta.
    pagination.hidden = pageCount <= 1

    if (pagination.hidden) {
      // Limpia botones que pudieron existir antes de aplicar un filtro más reducido.
      pagination.replaceChildren()
      return
    }

    // Crea un array del tamaño requerido: índices 0..n se convierten en páginas 1..n.
    const pageButtons = Array.from({ length: pageCount }, (_, index) => {
      const page = index + 1
      const isCurrent = page === currentPage
      // Clases y ARIA condicionales representan visual y semánticamente la página actual.
      return `<button type="button" class="pagination-button${isCurrent ? ' is-active' : ''}" data-page="${page}" aria-label="Ir a la página ${page}"${isCurrent ? ' aria-current="page"' : ''}>${page}</button>`
    }).join('')

    // Flechas y números se reemplazan juntos para mantener atributos actualizados.
    pagination.innerHTML = `
      <button type="button" class="pagination-button pagination-previous" data-page="${currentPage - 1}" aria-label="Página anterior"${currentPage === 1 ? ' disabled' : ''}>&larr;</button>
      ${pageButtons}
      <button type="button" class="pagination-button pagination-next" data-page="${currentPage + 1}" aria-label="Página siguiente"${currentPage === pageCount ? ' disabled' : ''}>&rarr;</button>
    `
  }

  /** Calcula coincidencias y actualiza qué tarjetas están visibles. */
  function applyFilters() {
    // Normaliza espacios y mayúsculas para hacer la búsqueda más tolerante.
    const search = searchInput.value.trim().toLowerCase()
    const matchingCards = cards.filter((card) => {
      // `dataset.service` lee el atributo HTML `data-service`.
      const matchesService = activeFilter === 'all' || card.dataset.service === activeFilter
      // Una búsqueda vacía coincide con todo; si hay texto usa `includes`.
      const matchesSearch = !search || card.dataset.name.includes(search)
      return matchesService && matchesSearch
    })
    // `ceil` cuenta también una última página que no esté llena.
    const pageCount = Math.ceil(matchingCards.length / projectsPerPage)
    // Si el nuevo filtro tiene menos páginas, ajusta la página actual al límite válido.
    currentPage = Math.min(currentPage, Math.max(pageCount, 1))
    // Traduce la página basada en 1 a un índice de array basado en 0.
    const firstProject = (currentPage - 1) * projectsPerPage
    // `Set` permite preguntar rápidamente si una tarjeta pertenece a esta página.
    const visibleCards = new Set(matchingCards.slice(firstProject, firstProject + projectsPerPage))

    cards.forEach((card) => {
      card.hidden = !visibleCards.has(card)
    })

    // Mantiene sincronizados controles, mensaje vacío y paginación.
    filterButtons.forEach((button) => button.classList.toggle('is-active', button.dataset.filter === activeFilter))
    emptyState.hidden = matchingCards.length > 0
    renderPagination(pageCount)
  }

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter
      // Un criterio nuevo siempre comienza desde su primera página.
      currentPage = 1
      applyFilters()
    })
  })

  searchInput.addEventListener('input', () => {
    // `input` se dispara con cada cambio, incluso pegar o borrar texto.
    currentPage = 1
    applyFilters()
  })

  // Delegación: los botones se recrean, pero el `<nav>` padre permanece.
  pagination.addEventListener('click', (event) => {
    const button = event.target.closest('.pagination-button')
    // Ignora clicks fuera de un botón o sobre flechas deshabilitadas.
    if (!button || button.disabled) return

    // `dataset` entrega texto; `Number` lo convierte para los cálculos.
    currentPage = Number(button.dataset.page)
    applyFilters()
    // Devuelve la vista al inicio de la cuadrícula después de cambiar página.
    document.querySelector('.portfolio-page-grid').scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  // Aplica al cargar el posible filtro inicial recibido por URL.
  applyFilters()
}

/** Conecta la cuadrícula de imágenes con el diálogo nativo de galería. */
function setupGallery() {
  // El componente `ProjectPage` garantiza que estos elementos existen en esta ruta.
  const dialog = document.querySelector('.gallery-dialog')
  const dialogImage = dialog.querySelector('img')
  const dialogLabel = dialog.querySelector('p')
  // Cada botón conserva una miniatura desde la cual copiar `src` y `alt`.
  const galleryButtons = [...document.querySelectorAll('.project-gallery-item')]
  // Estado mínimo de la galería: posición de la imagen actualmente ampliada.
  let currentIndex = 0

  /**
   * Muestra una imagen por índice, permitiendo avanzar circularmente.
   * @param {number} index - Puede ser negativo o superar el último índice.
   */
  function showImage(index) {
    // Sumar la longitud antes de `%` evita un resultado negativo al retroceder.
    currentIndex = (index + galleryButtons.length) % galleryButtons.length
    const image = galleryButtons[currentIndex].querySelector('img')
    // Copia la URL ya resuelta por el navegador y conserva el texto alternativo.
    dialogImage.src = image.src
    dialogImage.alt = image.alt
    // Presenta números humanos desde 1, no índices de array desde 0.
    dialogLabel.textContent = `${currentIndex + 1} / ${galleryButtons.length}`
  }

  galleryButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      showImage(index)
      // `showModal` abre el elemento nativo `<dialog>` con fondo modal.
      dialog.showModal()
    })
  })

  // Funciones flecha cortas conectan los tres controles del diálogo.
  dialog.querySelector('.gallery-close').addEventListener('click', () => dialog.close())
  dialog.querySelector('.gallery-previous').addEventListener('click', () => showImage(currentIndex - 1))
  dialog.querySelector('.gallery-next').addEventListener('click', () => showImage(currentIndex + 1))
  dialog.addEventListener('click', (event) => {
    // Sólo cierra al pulsar el fondo; un click sobre la imagen tiene otro `target`.
    if (event.target === dialog) dialog.close()
  })
}

/** Conecta la validación de demostración del formulario si la ruta lo incluye. */
function setupContactForm() {
  const form = document.querySelector('.contact-form')
  // No todas las páginas incluyen Contact; esta guarda hace la función reutilizable.
  if (!form) return

  // `role="status"` en este elemento hace que lectores de pantalla anuncien cambios.
  const status = form.querySelector('.form-status')
  form.addEventListener('submit', (event) => {
    // Evita el envío HTTP y la recarga porque todavía no existe un backend conectado.
    event.preventDefault()

    // Usa las restricciones nativas `required` y `type="email"` del HTML.
    if (!form.checkValidity()) {
      status.textContent = 'Completa los campos indicados.'
      // Pide al navegador mostrar sus mensajes junto al primer campo inválido.
      form.reportValidity()
      return
    }

    // Mensaje honesto: los datos no se envían ni se almacenan en este prototipo.
    status.textContent = '¡Gracias! Tu mensaje está listo para enviarse cuando conectemos el formulario.'
    // Devuelve todos los controles a sus valores iniciales.
    form.reset()
  })
}
