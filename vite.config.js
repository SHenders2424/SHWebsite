import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: "/SHWeb/", // Change "my-static-site" to your GitHub repo name
});