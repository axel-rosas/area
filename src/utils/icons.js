import eyeIcon from '../assets/icons/eye.svg'
import instagramIcon from '../assets/icons/instagram.svg'
import whatsappIcon from '../assets/icons/whatsapp.svg'
import mailIcon from '../assets/icons/mail.svg'
import mapIcon from '../assets/icons/map.svg'
import clockIcon from '../assets/icons/clock.svg'
import functionalDesignIcon from '../assets/icons/diseno-funcional.svg'
import continuousSupportIcon from '../assets/icons/acompanamiento-continuo.svg'
import customSolutionsIcon from '../assets/icons/soluciones-personalizadas.svg'
import qualityIcon from '../assets/icons/calidad-ejecucion.svg'

const assetIcons = {
  eye: eyeIcon,
  instagram: instagramIcon,
  whatsapp: whatsappIcon,
  mail: mailIcon,
  pin: mapIcon,
  clock: clockIcon,
  palette: functionalDesignIcon,
  people: continuousSupportIcon,
  tools: customSolutionsIcon,
  medal: qualityIcon,
}

const vectorPaths = {
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/>',
  filter: '<path d="M3 5h18l-7 8v6l-4 2v-8Z"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
}

export function icon(name, className = '') {
  if (assetIcons[name]) {
    return `<img class="icon icon--asset ${className}" src="${assetIcons[name]}" alt="" aria-hidden="true" />`
  }

  return `<svg class="icon ${className}" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${vectorPaths[name]}</svg>`
}
