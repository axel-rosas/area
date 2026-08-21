/**
 * PIEZAS DE MARCA REUTILIZABLES
 *
 * Se separan porque encabezado, pie, introducción y página “Nosotros” necesitan
 * el mismo logo. Una sola función evita repetir etiquetas `<img>`, clases y
 * atributos de accesibilidad en cuatro módulos distintos.
 */

// `..` sube de `src/components/` a `src/`; luego entra en `assets/icons/`.
// Vite transforma la importación del SVG en una URL válida para `src="..."`.
import logo from '../assets/icons/logo.svg'
import brandName from '../assets/icons/nombre.svg'

/**
 * Crea la imagen con el nombre escrito “ÁREA”.
 * @param {string} className - Clase opcional para adaptar tamaño según el lugar.
 * @returns {string} Etiqueta `<img>` como texto HTML.
 */
export function brandMark(className = '') {
  // La interpolación agrega la clase recibida y la URL procesada por Vite.
  return `<img class="brand-mark ${className}" src="${brandName}" alt="ÁREA" />`
}

/** @returns {string} Símbolo gráfico decorativo de la marca. */
export function brandSymbol() {
  // `alt=""` + `aria-hidden` evita anunciar dos veces la marca junto al nombre.
  return `<img class="brand-symbol" src="${logo}" alt="" aria-hidden="true" />`
}
