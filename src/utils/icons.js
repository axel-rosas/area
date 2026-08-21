/**
 * ADAPTADOR DE ICONOS
 *
 * Centraliza dos fuentes de iconos: archivos SVG y trazos SVG escritos en código.
 * Los componentes sólo piden `icon('menu')`; no necesitan conocer el archivo,
 * markup o atributos de accesibilidad. Esto evita duplicación y permite cambiar
 * un icono en un único lugar.
 */

// Todas las rutas suben de `src/utils/` a `src/` y entran en `assets/icons/`.
// Cada import default se convierte, gracias a Vite, en la URL final del recurso.
import eyeIcon from "../assets/icons/eye.svg";
import instagramIcon from "../assets/icons/instagram.svg";
import facebookIcon from "../assets/icons/facebook.svg";
import whatsappIcon from "../assets/icons/whatsapp.svg";
import mailIcon from "../assets/icons/mail.svg";
import mapIcon from "../assets/icons/map.svg";
import clockIcon from "../assets/icons/clock.svg";
import functionalDesignIcon from "../assets/icons/diseno-funcional.svg";
import continuousSupportIcon from "../assets/icons/acompanamiento-continuo.svg";
import customSolutionsIcon from "../assets/icons/soluciones-personalizadas.svg";
import qualityIcon from "../assets/icons/calidad-ejecucion.svg";

// Diccionario: asocia el nombre corto usado por componentes con una URL importada.
const assetIcons = {
  eye: eyeIcon,
  instagram: instagramIcon,
  facebook: facebookIcon,
  whatsapp: whatsappIcon,
  mail: mailIcon,
  pin: mapIcon,
  clock: clockIcon,
  palette: functionalDesignIcon,
  people: continuousSupportIcon,
  tools: customSolutionsIcon,
  medal: qualityIcon,
};

// Diccionario alternativo para formas sencillas que heredan color mediante `currentColor`.
// Se guarda sólo el contenido interno; `icon()` aporta el elemento `<svg>` común.
const vectorPaths = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
};

/**
 * Devuelve el HTML de un icono por nombre.
 * @param {string} name - Clave existente en `assetIcons` o `vectorPaths`.
 * @param {string} className - Clase CSS adicional opcional.
 * @returns {string} `<img>` para assets o `<svg>` para vectores inline.
 */
export function icon(name, className = "") {
  // Si la clave existe en el primer diccionario, usa una imagen externa.
  if (assetIcons[name]) {
    // Los iconos son decorativos: alt vacío y aria-hidden evitan ruido accesible.
    return `<img class="icon icon--asset ${className}" src="${assetIcons[name]}" alt="" aria-hidden="true" />`;
  }

  // Si no era un asset, interpola el path dentro de un SVG de 24 × 24.
  // Los atributos de stroke unifican grosor, extremos y uniones de todos los trazos.
  return `<svg class="icon ${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${vectorPaths[name]}</svg>`;
}
