import { defineConfig } from 'vite'

export default defineConfig({
    base: '/portfolio-dono/',
    build: {
        rollupOptions: {
            input: {
                main: resolveConfig(__dirname, 'index.html'),
                ticketBot: (__dirname, 'ticket-bot.html'),
                legal: (__dirname, 'mentions-legales.html')
            }
        }
    }
})