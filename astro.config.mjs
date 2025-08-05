import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://terryismael.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react()],
});