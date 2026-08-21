/**
 * PUNTO DE ENTRADA DEL FRONTEND
 *
 * Este es el primer archivo JavaScript que ejecuta el navegador porque
 * `index.html` lo referencia con `<script type="module" src="/src/main.js">`.
 * Su única responsabilidad es cargar los estilos, importar la aplicación y
 * arrancarla. Mantener este archivo pequeño permite encontrar rápidamente el
 * inicio del flujo sin mezclar aquí el enrutador ni los componentes.
 */

// Ruta relativa: desde `src/main.js`, `./style.css` significa `src/style.css`.
// Vite reconoce la importación de CSS y lo añade al paquete final de la web.
import './style.css'

// Ruta relativa: `src/pages.css`. Se carga después de `style.css`, así que sus
// reglas pueden complementar o sobrescribir reglas anteriores de igual peso.
import './pages.css'

// Importación nombrada desde `src/app.js`. Las llaves indican que `createApp`
// fue exportada con `export function createApp(...)`, no con `export default`.
import { createApp } from './app.js'

// Busca en el HTML el elemento `<div id="app"></div>` que funcionará como raíz.
// Después entrega ese nodo real del DOM a `createApp` para renderizar el sitio.
createApp(document.querySelector('#app'))
