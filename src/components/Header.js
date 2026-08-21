/** Encabezado compartido por todas las rutas del sitio. */

// Ruta hermana: ambos archivos están dentro de `src/components/`.
import { brandMark, brandSymbol } from './Brand.js'
// `..` sube a `src/` para entrar en las carpetas `utils`, `data` y `assets`.
import { icon } from '../utils/icons.js'
import { services } from '../data/siteData.js'
// Importación default: Vite devuelve la URL pública del SVG de flecha inferior.
import downIcon from '../assets/icons/abajo.svg'

/**
 * Genera el encabezado y sus enlaces de navegación.
 * @param {boolean} showName - Mantiene visible “ÁREA” en páginas internas.
 * @returns {string} Encabezado como HTML.
 */
export function Header(showName = false) {
  // `map` convierte cada servicio en enlace; `join('')` elimina las comas que
  // aparecerían al interpolar directamente un array dentro de una cadena.
  const serviceLinks = services
    .map((service) => `<a href="#/servicio/${service.id}">${service.name}</a>`)
    .join('')

  // Los href comienzan con `#/`: el hash router de `app.js` los interpreta sin
  // solicitar otro documento al servidor. ARIA describe controles e imágenes.
  return `
    <header class="site-header">
      <a class="header-symbol" href="#/" aria-label="Ir al inicio">
        ${brandSymbol()}
        ${brandMark(`header-brand-name${showName ? ' header-brand-name--persistent' : ''}`)}
      </a>
      <button class="menu-button" type="button" aria-expanded="false" aria-controls="main-navigation" aria-label="Abrir menú">
        <span class="menu-open">${icon('menu')}</span>
        <span class="menu-close">${icon('close')}</span>
      </button>
      <nav id="main-navigation" class="main-nav" aria-label="Navegación principal">
        <div class="nav-dropdown">
          <div class="nav-dropdown-trigger">
            <a class="nav-services-link" href="#/servicios">
              <span>Servicios</span>
              <img src="${downIcon}" alt="" aria-hidden="true" />
            </a>
          </div>
          <div class="services-submenu">${serviceLinks}</div>
        </div>
        <a href="#/portafolio">Portafolio</a>
        <a href="#/nosotros">Nosotros</a>
        <a href="#/contacto">Contacto</a>
      </nav>
    </header>
  `
}
