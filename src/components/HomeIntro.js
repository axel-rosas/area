import { brandMark, brandSymbol } from './Brand.js'

export function HomeIntro() {
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
