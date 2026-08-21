/** Banner principal exclusivo del home. */

// Importaciones hermanas y de utilidad; consulta las rutas en `Brand.js` y `Header.js`.
import { brandMark, brandSymbol } from './Brand.js'
import { icon } from '../utils/icons.js'

/**
 * @param {{heroImage: string}} props - Objeto desestructurado; sólo se usa la imagen.
 * @returns {string} Sección hero con marca y accesos sociales.
 */
export function Hero({ heroImage }) {
  // La imagen se pasa a CSS mediante una custom property para conservar overlays
  // y responsive en la hoja de estilos en vez de construirlos con JavaScript.
  return `
    <section id="inicio" class="hero-section" style="--hero-image: url('${heroImage}')">
      <div class="hero-shade"></div>
      <div class="hero-presentation">
        <div class="hero-brand-view">
          <div class="hero-brand-symbol">${brandSymbol()}</div>
          ${brandMark('brand-mark--hero')}
          <p>Arquitectura &amp; diseño</p>
        </div>
      </div>
      <div class="social-rail" aria-label="Redes sociales">
        <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">${icon('instagram')}</a>
        <a href="https://wa.me/525500000000" target="_blank" rel="noreferrer" aria-label="WhatsApp">${icon('whatsapp')}</a>
        <a href="mailto:hola@area.mx" aria-label="Correo electrónico">${icon('mail')}</a>
      </div>
    </section>
  `
}
