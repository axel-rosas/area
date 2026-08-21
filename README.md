# ÁREA — guía para aprender el proyecto

Este repositorio es una SPA (Single Page Application) de arquitectura hecha con HTML, CSS y JavaScript nativo. Vite se usa como servidor de desarrollo y herramienta de compilación, pero la interfaz no depende de React, Vue ni otro framework. Eso vuelve al proyecto apropiado para estudiar primero el DOM, módulos ES, eventos, arrays y template literals.

Los comentarios dentro de `src/` explican la sintaxis cerca del código que la usa. Este documento presenta la vista general: cómo recorrer el proyecto, por qué existen sus directorios, cómo se resuelven sus imports y cómo fluye una interacción completa.

## Empieza por aquí

Para ejecutarlo:

```bash
npm install
npm run dev
```

Vite mostrará una URL local. Para generar la versión de publicación:

```bash
npm run build
npm run preview
```

- `npm install` lee `package.json` y `package-lock.json`, y crea/actualiza `node_modules/`.
- `npm run dev` inicia Vite y sirve los archivos fuente con recarga automática.
- `npm run build` procesa imports, CSS e imágenes y escribe el resultado en `docs/`.
- `npm run preview` sirve localmente la compilación de `docs/` para revisarla.

No edites manualmente `docs/assets/*`: sus nombres incluyen hashes generados y el próximo build reemplazará la carpeta.

## Árbol del proyecto y motivo de cada nombre

```text
Web/
├── index.html                  Documento HTML inicial
├── package.json                Identidad, scripts y dependencias del proyecto
├── package-lock.json           Versiones exactas resueltas por npm
├── vite.config.js              Configuración de desarrollo/compilación
├── README.md                   Esta guía de aprendizaje
├── src/                        Código fuente que sí se mantiene a mano
│   ├── main.js                 Punto de entrada: estilos + arranque
│   ├── app.js                  Router, composición y eventos del DOM
│   ├── style.css               Base, componentes compartidos y home
│   ├── pages.css               Estilos de páginas internas
│   ├── components/             Funciones que convierten datos en HTML
│   │   ├── Brand.js            Símbolo y nombre visual de la marca
│   │   ├── Header.js           Encabezado y navegación global
│   │   ├── Footer.js           Pie y navegación secundaria
│   │   ├── Hero.js             Banner principal del home
│   │   ├── HomeIntro.js        Markup de la bienvenida animada
│   │   ├── Projects.js         Proyectos destacados del home
│   │   ├── ContentSections.js  Servicios, beneficios, testimonios y contacto
│   │   └── InternalPages.js    Plantillas de las rutas internas
│   ├── data/
│   │   └── siteData.js         Contenido, relaciones e imports de imágenes
│   ├── utils/
│   │   └── icons.js            Fábrica/adaptador central de iconos
│   └── assets/
│       ├── icons/              SVG de interfaz y marca
│       └── images/
│           ├── site/           Imágenes generales y de servicios
│           └── projects/       Una carpeta por proyecto visual original
├── public/                     Assets estáticos sin procesar; hoy está vacío
├── docs/                       Resultado generado por `npm run build`
├── Mockups/                    PDFs de referencia visual por dispositivo
├── imagenes/                   Material fotográfico original/de trabajo
├── tmp/                        Archivos temporales, no código de producción
├── node_modules/               Dependencias instaladas; npm lo genera
└── .git/                       Historial interno de Git; no se edita a mano
```

### Por qué `src`

`src` abrevia *source* (fuente). Distingue los archivos que el equipo edita de `docs`, que Vite genera, y de `node_modules`, que npm instala. Cuando busques la causa de un comportamiento, comienza siempre en `src/`.

### Por qué `components`

Un componente representa una pieza visual con nombre propio. En este proyecto no es una clase ni una característica exclusiva de React: es simplemente una función que recibe datos y devuelve una cadena HTML.

Separar `Header`, `Footer` y `Brand` evita copiar el mismo markup en cada página. Separar `Projects` permite modificar esa sección sin entrar al router. `ContentSections` agrupa secciones pequeñas con el mismo patrón y evita crear demasiados archivos de unas pocas líneas.

`InternalPages.js` se mantiene unido porque sus páginas comparten los helpers privados `PageHero` y `Shell`. Si una página creciera hasta tener lógica, estado o muchas subpiezas propias, sería buen momento para moverla a un módulo independiente.

### Por qué `data`

`siteData.js` responde “qué contenido existe”; los componentes responden “cómo se representa”. Gracias a esta separación, el menú, las tarjetas y el footer leen la misma lista de servicios. Cambiar el nombre en una fuente central evita inconsistencias.

### Por qué `utils`

Una utilidad no representa una sección visible completa. `icons.js` traduce nombres lógicos como `menu` o `mail` a su HTML. Esta capa permite que los componentes ignoren si un icono viene de un archivo SVG o de un `<path>` inline.

### Por qué dos archivos CSS

`style.css` se carga primero y contiene tokens, reset, piezas globales y el home. `pages.css` se carga después y contiene páginas internas. La separación reduce el costo de buscar reglas y hace explícita la cascada: ante selectores con la misma especificidad, una declaración posterior puede reemplazar una anterior.

## El flujo completo de arranque

```text
El navegador solicita index.html
        ↓
encuentra <div id="app"> y carga /src/main.js
        ↓
main.js importa ambos CSS y createApp
        ↓
createApp(#app) lee window.location.hash
        ↓
getRoute() crea { page, id, query }
        ↓
renderRoute() selecciona una función de página
        ↓
componentes + siteData producen una cadena HTML
        ↓
root.innerHTML reemplaza el contenido de #app
        ↓
setup...() busca el DOM nuevo y conecta eventos
```

La distinción entre “renderizar” y “conectar” es esencial:

1. `Header()`, `PortfolioPage()` o `Contact()` sólo devuelven texto HTML. En ese momento todavía no existen botones reales.
2. `root.innerHTML = ...` hace que el navegador analice el texto y cree nodos del DOM.
3. `setupNavigation()`, `setupPortfolio()` y las otras funciones encuentran esos nodos y registran sus eventos.

Cada cambio de hash vuelve a reemplazar el DOM. Por eso los listeners de los elementos deben conectarse después de cada render.

## Cómo funciona el router sin framework

Los enlaces internos tienen formatos como:

```text
#/                         → { page: "home" }
#/nosotros                 → { page: "nosotros" }
#/servicio/arquitectura    → { page: "servicio", id: "arquitectura" }
#/proyecto/casa-umbral     → { page: "proyecto", id: "casa-umbral" }
#/portafolio?servicio=arquitectura
                            → page + URLSearchParams
```

Todo después de `#` es el *fragmento*. Cambiarlo no solicita un nuevo `index.html`; dispara `hashchange`. `getRoute()` elimina `#/`, separa el query string y divide el camino por `/`. `renderRoute()` decide qué componente ejecutar.

Esta estrategia también facilita hospedaje estático: el servidor sólo necesita entregar un documento real. La desventaja frente a rutas de servidor es que la URL lleva `#` y el SEO tiene más limitaciones.

## Mapa de imports y rutas exactas

En imports locales:

- `./` significa “desde la carpeta del archivo actual”.
- `../` significa “sube una carpeta”.
- Una ruta sin punto, como `'vite'`, busca un paquete externo en `node_modules`.
- Se escribe la extensión `.js` de forma explícita porque son módulos ES del navegador.

| Archivo que importa | Texto del import | Ruta resuelta |
|---|---|---|
| `src/main.js` | `./style.css` | `src/style.css` |
| `src/main.js` | `./pages.css` | `src/pages.css` |
| `src/main.js` | `./app.js` | `src/app.js` |
| `src/app.js` | `./data/siteData.js` | `src/data/siteData.js` |
| `src/app.js` | `./components/*.js` | archivos dentro de `src/components/` |
| cualquier componente | `./Brand.js` | `src/components/Brand.js` |
| cualquier componente | `../utils/icons.js` | `src/utils/icons.js` |
| cualquier componente | `../data/siteData.js` | `src/data/siteData.js` |
| `Brand.js` | `../assets/icons/*.svg` | `src/assets/icons/*.svg` |
| `Header.js` | `../assets/icons/abajo.svg` | `src/assets/icons/abajo.svg` |
| `siteData.js` | `../assets/images/site/*` | `src/assets/images/site/*` |
| `siteData.js` | `../assets/images/projects/*` | `src/assets/images/projects/*` |
| `vite.config.js` | `vite` | paquete `node_modules/vite` |

Una imagen importada no entrega sus píxeles a la variable. Vite devuelve una URL procesada. Por eso se puede escribir `src="${image}"` y, durante el build, Vite copia el recurso, agrega un hash a su nombre y actualiza la URL.

## Export nombrado, export default y destructuración

Ejemplo de export nombrado:

```js
export function Header() {}
import { Header } from './components/Header.js'
```

Las llaves deben usar el mismo nombre exportado. Un módulo puede tener muchos exports nombrados.

`vite.config.js` usa un export default:

```js
export default defineConfig({})
```

Un módulo sólo puede tener un default y quien lo importa puede elegir el nombre. Los imports de imágenes también son default porque cada archivo representa un recurso principal.

Esto es destructuración de parámetro:

```js
function Hero({ heroImage }) {}
```

Equivale conceptualmente a recibir `data` y ejecutar `const heroImage = data.heroImage`.

## Datos y relaciones

`services` y `projects` son arrays de objetos. Un proyecto no copia el objeto de servicio completo: guarda `serviceId`.

```text
projects[n].serviceId ───────→ services[m].id
"arquitectura"               "arquitectura"
```

El código usa `find` para seguir esa relación. Este patrón se parece a una llave foránea de base de datos y será útil más adelante en tu roadmap fullstack.

`id` y `slug` cumplen propósitos diferentes:

- `service.id` identifica tanto relaciones como URL porque ya es textual.
- `project.id` es numérico y sirve como identidad interna/HTML.
- `project.slug` es texto legible y estable para la URL.
- Los slugs evitan espacios, mayúsculas y acentos para producir URLs seguras.

## Funciones de arrays que usa el proyecto

- `map`: transforma cada dato en otro valor, normalmente HTML.
- `filter`: conserva sólo elementos que cumplen una condición.
- `find`: devuelve la primera coincidencia o `undefined`.
- `some`: responde `true` si al menos un elemento coincide.
- `slice`: crea una porción sin modificar el array original.
- `sort`: ordena y sí modifica el array; por eso se copia antes con `[...array]`.
- `join('')`: convierte un array de strings en un string sin comas.
- `includes`: comprueba si un array o string contiene un valor.
- `forEach`: ejecuta una acción por elemento sin crear otro array.

## Template literals y HTML

Los backticks permiten strings multilínea e interpolación:

```js
const name = 'Casa Umbral'
const card = `<h2>${name}</h2>`
```

Las funciones de componentes usan esta técnica. No sanitizan contenido; es aceptable aquí porque todo proviene de `siteData.js`, controlado por el proyecto. Si los textos vinieran de usuarios o una API no confiable, insertarlos mediante `innerHTML` podría causar XSS y habría que escapar/sanitizar o construir nodos con `textContent`.

## Estado e interacción

No existe una librería de estado. Cada comportamiento guarda sólo lo necesario:

- Menú: clases `menu-is-open` y `nav-is-open`, más `aria-expanded`.
- Intro: clase `intro-is-running` y un temporizador de respaldo.
- Servicios: clase `is-open` por tarjeta.
- Portafolio: variables `activeFilter` y `currentPage` dentro de su función.
- Galería: variable `currentIndex` dentro de su función.
- Formulario: el valor vive en controles HTML; no se envía a un backend.

Estas variables quedan dentro de cierres (*closures*). Los callbacks de click pueden seguir leyéndolas después de que `setupPortfolio` o `setupGallery` terminó su ejecución inicial.

## Accesibilidad que conviene observar

- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- `alt` describe imágenes informativas; `alt=""` marca iconos decorativos.
- `aria-label` da nombres a botones cuyo contenido es sólo un icono.
- `aria-expanded` mantiene el estado accesible del menú/tarjetas.
- `aria-current="page"` identifica la página activa del paginador.
- `role="status"` anuncia la intro y mensajes del formulario.
- `:focus-visible` muestra foco para navegación por teclado.
- `prefers-reduced-motion` respeta a usuarios sensibles al movimiento.
- Las tarjetas de servicio aceptan Enter/Espacio además de click.

## Cómo leer el CSS del proyecto

La cascada decide el resultado usando, en orden simplificado, origen, importancia, especificidad y posición. Algunas convenciones del proyecto:

- `:root` guarda tokens como `--navy` y `--orange`.
- `.bloque` representa una pieza (`.site-header`).
- `.bloque-parte` representa una parte (`.portfolio-card-copy`).
- `.is-open` o `.is-active` representa estado temporal.
- `--persistent` representa una variante visual.
- `::before` y `::after` crean decoración sin añadir HTML.
- `clamp(mínimo, fluido, máximo)` crea tamaños responsive con límites.
- `min()` elige el valor menor y evita superar el viewport.
- `@media (max-width: ...)` aplica ajustes según el ancho.
- `@media (hover: hover)` reserva hover para dispositivos que realmente lo tienen.
- `@keyframes` declara etapas; `animation` las aplica.

El CSS se escribe *mobile adaptation* desde desktop: primero está la regla general y luego los breakpoints corrigen el layout para tablet/móvil. Al depurar, busca primero el selector base y después todas sus apariciones dentro de `@media`.

## Recorrido de una interacción: filtrar portafolio

1. `PortfolioPage()` crea botones con `data-filter` y tarjetas con `data-service`/`data-name`.
2. `root.innerHTML` convierte esas strings en elementos.
3. `setupPortfolio()` guarda referencias a botones, input y tarjetas.
4. Un click cambia `activeFilter` y vuelve `currentPage` a 1.
5. `applyFilters()` usa `filter` para crear `matchingCards`.
6. Calcula páginas con `Math.ceil` y selecciona el tramo visible con `slice`.
7. Un `Set` permite marcar rápidamente cada tarjeta como visible u oculta.
8. `renderPagination()` reconstruye los botones según el nuevo total.

Nota el patrón reusable: leer estado → derivar resultados → reflejarlos en el DOM.

## Recorrido de una interacción: abrir un proyecto

1. El enlace cambia el hash a `#/proyecto/algun-slug`.
2. El navegador dispara `hashchange`.
3. `render()` obtiene `{ page: 'proyecto', id: 'algun-slug' }`.
4. `renderRoute()` busca el proyecto con `find`.
5. `ProjectPage(project)` genera su HTML, incluyendo un `<dialog>` cerrado.
6. `setupGallery()` conecta cada miniatura con `dialog.showModal()`.
7. Anterior/siguiente cambia `currentIndex` usando módulo `%` para navegación circular.

## Qué archivos no admiten comentarios

JSON no permite comentarios. Por eso `package.json` y `package-lock.json` no fueron anotados dentro del archivo: un comentario los volvería inválidos. Su contenido significa:

- `name`: nombre del paquete local.
- `version`: versión semántica actual.
- `private: true`: evita publicar por accidente en npm.
- `type: module`: hace que Node interprete `.js` como ES modules.
- `scripts`: alias de comandos ejecutables con `npm run`.
- `devDependencies`: herramientas necesarias para desarrollar/compilar, no código runtime.
- `package-lock.json`: resolución exacta y reproducible del árbol de dependencias.

Los SVG y las fotografías tampoco se llenaron de comentarios: son recursos visuales, no lógica de JavaScript. Sus nombres y carpetas documentan su función.

## Orden recomendado de estudio

1. `index.html`: documento, metadatos, raíz y módulo de entrada.
2. `src/main.js`: imports y llamada inicial.
3. `src/app.js`: `createApp`, `getRoute`, `renderRoute` y luego cada `setup...`.
4. `src/components/Brand.js`, `Hero.js` y `HomeIntro.js`: componentes pequeños.
5. `src/components/Header.js` y `Footer.js`: composición y navegación.
6. `src/components/Projects.js` y `ContentSections.js`: `map`, `find` y templates.
7. `src/data/siteData.js`: modelos, ids/slugs y relaciones.
8. `src/components/InternalPages.js`: composición de páginas completas.
9. `src/style.css`: tokens, reset, componentes y responsive del home.
10. `src/pages.css`: variantes y responsive de páginas internas.
11. `vite.config.js` y `package.json`: toolchain y build.

Para practicar, coloca un breakpoint en `render()`, cambia el hash y sigue los valores de `route`, `root.innerHTML` y los elementos seleccionados por cada `setup`. Después prueba modificar un único objeto de `siteData` y observa todos los lugares que se actualizan desde la misma fuente.

## Límites actuales del proyecto

- El formulario sólo valida y reinicia; no hay API, correo ni persistencia.
- Los datos son estáticos y se incluyen en el bundle; no hay base de datos.
- El router acepta un servicio inválido usando el primer servicio como fallback.
- Un proyecto inválido sí muestra 404.
- La página legal del footer todavía usa un enlace de marcador.
- Algunas imágenes se reutilizan en proyectos de demostración.

Estos límites no son errores ocultos: marcan las siguientes etapas naturales para un roadmap fullstack —API, validación del servidor, base de datos, autenticación si fuera necesaria, pruebas automatizadas y despliegue del backend.
