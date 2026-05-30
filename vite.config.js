import { defineConfig } from 'vite'

export default defineConfig({
    /// Ceci dit à GitHub où trouver tes styles
    base: '/portfolio-dono/',
    build: {
        rollupOptions: {
            input: {
                main: 'index.html',
                legal: 'mentions-legales.html' // C'est ici qu'on dit à Vite de ne pas oublier cette page !
            }
        }
    }
})