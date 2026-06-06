import { defineConfig } from 'vite'

export default defineConfig({
    base: '/portfolio-dono/',
    build: {
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'index.html'),
                ticketBot: path.resolve(__dirname, 'ticket-bot.html'),
                legal: path.resolve(__dirname, 'mentions-legales.html')
            }
        }
    }
})