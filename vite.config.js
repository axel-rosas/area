// `defineConfig` viene del paquete externo `vite`, instalado en `node_modules`.
// No lleva `./` ni `../` porque no es un archivo local. La función mejora el
// autocompletado y la validación de esta configuración en el editor.
import { defineConfig } from 'vite'

// `export default` entrega a Vite un único objeto de configuración principal.
export default defineConfig({
  // El sitio publicado vive bajo `dominio/area/`; Vite antepone esta base a los
  // assets generados. En desarrollo Vite sigue resolviendo las rutas locales.
  base: '/area/',
  // `build` reúne las opciones utilizadas por el comando `npm run build`.
  build: {
    // Coloca la versión compilada en `docs/`, carpeta que GitHub Pages puede servir.
    outDir: 'docs',
    // Vacía `docs/` antes de compilar para no conservar archivos obsoletos.
    emptyOutDir: true,
  },
})
