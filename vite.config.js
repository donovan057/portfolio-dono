import { defineConfig } from 'vite'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

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