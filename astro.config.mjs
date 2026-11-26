import { defineConfig } from "astro/config";

// Site institucional da Sebra — saída 100% estática (HTML/CSS/JS) para
// hospedar na Hostinger: basta subir o conteúdo de `dist/`.
export default defineConfig({
  site: "https://sebraoficial.com",
  // Gera /solucoes/ia/index.html em vez de /solucoes/ia.html — links limpos
  // que funcionam em hospedagem estática comum (Apache/LiteSpeed da Hostinger).
  // inlineStylesheets: "never" -> todo CSS vai para arquivo externo (CSP mais rígida)
  build: { format: "directory", inlineStylesheets: "never" },
  trailingSlash: "ignore",
  compressHTML: true,
  // Endereços antigos que mudaram: geram uma página que redireciona
  // (e avisa o Google com canonical para o endereço novo).
  redirects: {
    "/segmentos/licitacoes": "/licitacoes/",
    "/solucoes/ia": "/solucoes/atendimento/",
    "/solucoes/rh": "/",
    "/segmentos/distribuidor": "/segmentos/importadoras/",
    "/segmentos/construcao": "/segmentos/servicos/",
    "/segmentos/salao": "/segmentos/servicos/",
    "/segmentos/eventos": "/segmentos/servicos/",
  },
});
