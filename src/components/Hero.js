import { brandMark } from './Brand.js'
import { icon } from '../utils/icons.js'

export function Hero({ heroImage, services }) {
  const serviceButtons = services
    .map((service) => `<button class="service-button" type="button" data-service-id="${service.id}">${service.name}</button>`)
    .join('')

  return `
    <section id="inicio" class="hero-section" style="--hero-image: url('${heroImage}')">
      <div class="hero-shade"></div>
      <div class="hero-presentation" aria-live="polite">
        <div class="hero-brand-view">
          ${brandMark('brand-mark--hero')}
          <p>Arquitectura &amp; diseño</p>
        </div>
        <div class="hero-service-view" hidden>
          <p class="eyebrow hero-service-title"></p>
          <p class="hero-service-description"></p>
          <a class="outline-button hero-service-link" href="#/servicio/arquitectura">Ver más</a>
        </div>
      </div>
      <div class="social-rail" aria-label="Redes sociales">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">${icon('instagram')}</a>
        <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">${icon('whatsapp')}</a>
        <a href="mailto:hola@area.mx" aria-label="Correo electrónico">${icon('mail')}</a>
      </div>
      <div id="servicios" class="service-menu">${serviceButtons}</div>
    </section>
  `
}
