import { brandMark, brandSymbol } from './Brand.js'

export function Footer(services) {
  const serviceLinks = services.map((service) => `<li><a href="#/servicio/${service.id}">${service.name}</a></li>`).join('')

  return `
    <footer class="site-footer">
      <div class="footer-inner">
        <a href="#/" class="footer-brand" aria-label="Volver al inicio">${brandSymbol()}${brandMark('brand-mark--footer')}</a>
        <div class="footer-column"><h2>Servicios</h2><ul>${serviceLinks}</ul></div>
        <div class="footer-column"><h2>Legal</h2><ul><li><a href="#">Aviso de privacidad</a></li></ul></div>
        <div class="footer-column"><h2>Explora</h2><ul>
          <li><a href="#/servicios">Servicios</a></li><li><a href="#/portafolio">Portafolio</a></li>
          <li><a href="#/nosotros">Nosotros</a></li><li><a href="#/contacto">Contacto</a></li>
        </ul></div>
      </div>
      <p class="copyright">Copyright © 2026 ÁREA. Todos los derechos reservados.</p>
    </footer>
  `
}
