import { brandMark, brandSymbol } from './Brand.js'
import { icon } from '../utils/icons.js'
import { services } from '../data/siteData.js'
import downIcon from '../assets/icons/abajo.svg'

export function Header(showName = false) {
  const serviceLinks = services
    .map((service) => `<a href="#/servicio/${service.id}">${service.name}</a>`)
    .join('')

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
