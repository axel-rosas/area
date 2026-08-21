/** Pantalla de bienvenida; su comportamiento temporal vive en `app.js`. */

// Reutiliza las dos representaciones de la marca desde el módulo hermano.
import { brandMark, brandSymbol } from './Brand.js'

/** @returns {string} HTML de la introducción animada del home. */
export function HomeIntro() {
  // `role="status"` y `aria-label` proporcionan contexto mientras ocurre la animación.
  return `
    <div class="home-intro" role="status" aria-label="Bienvenido a ÁREA">
      <div class="home-intro-lockup">
        <div class="home-intro-row">
          <div class="home-intro-symbol">${brandSymbol()}</div>
          ${brandMark('home-intro-name')}
        </div>
      </div>
    </div>
  `
}
