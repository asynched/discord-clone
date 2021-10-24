import * as path from 'path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@contexts': path.resolve(__dirname, 'src', 'contexts'),
      '@helpers': path.resolve(__dirname, 'src', 'helpers'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@pages': path.resolve(__dirname, 'src', 'pages'),
      '@lib': path.resolve(__dirname, 'src', 'lib'),
      '@utils': path.resolve(__dirname, 'src', 'utils'),
      '@routes': path.resolve(__dirname, 'src', 'routes'),
      '@layouts': path.resolve(__dirname, 'src', 'layouts'),
      '@events': path.resolve(__dirname, 'src', 'events'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@styles': path.resolve(__dirname, 'src', 'styles'),
    },
  },
})
