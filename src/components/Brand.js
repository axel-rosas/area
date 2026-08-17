import logo from '../assets/icons/logo.svg'
import brandName from '../assets/icons/nombre.svg'

export function brandMark(className = '') {
  return `<img class="brand-mark ${className}" src="${brandName}" alt="ÁREA" />`
}

export function brandSymbol() {
  return `<img class="brand-symbol" src="${logo}" alt="" aria-hidden="true" />`
}
