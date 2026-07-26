import { defineConfig } from "astro/config";

// Site institucional da Sebra — saída 100% estática (HTML/CSS/JS) para
// hospedar na Hostinger: basta subir o conteúdo de `dist/`.
export default defineConfig({
  site: "https://sebraoficial.com",
  // Gera /solucoes/ia/index.html em vez de /solucoes/ia.html — links limpos
  // que funcionam em hospedagem estática comum (Apache/LiteSpeed da Hostinger).
  build: { format: "directory" },
  compressHTML: true,
});
