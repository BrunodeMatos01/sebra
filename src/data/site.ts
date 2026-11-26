// Dados globais do site. Tudo que é contato, rede social e chave de Google
// mora aqui: mude num lugar só e o site inteiro acompanha.

export const site = {
  name: "Sebra",
  legalName: "Sebra", // Nome mostrado no site e nos dados do Google (a razão social do CNPJ fica de fora de propósito)
  cnpj: "68.543.621/0001-55",           // Vazio = não aparece. Para B2G, mostrar o CNPJ gera MUITA confiança.
  city: "Blumenau, SC",                 // Cidade/UF que aparece no rodapé
  address: {                            // Endereço do cartão CNPJ (dados estruturados do Google e página de privacidade)
    street: "Rua Adriano Curi, 50, Sala 01",
    district: "Velha",
    city: "Blumenau",
    uf: "SC",
    cep: "89036-755",
  },
  domain: "sebraoficial.com",
  url: "https://sebraoficial.com",
  appUrl: "https://app.sebraoficial.com/",
  email: "atendimento.sebra@gmail.com",

  // WhatsApp comercial único do site. Formato internacional, só números.
  whatsapp: "5547997202716",
  whatsappDisplay: "(47) 99720-2716",

  instagram: "https://www.instagram.com/sebraofc/",
  instagramHandle: "@sebraofc",

  // Google Analytics 4 — propriedade "devsebra" (sebraoficial.com).
  gaId: "G-34KREP915N",

  // Verificação de propriedade (Google Search Console e Bing Webmaster).
  // Cole aqui só o valor do content="..." que eles fornecem. Vazio = não aparece.
  googleVerification: "y2S_FhJ5ufrF0DONAwp1a8ApRJl0rUhAnCsMrG-YiKc",
  bingVerification: "8BA73A205EE29EF82E50ABF3F9A89EB1",
  metaDomainVerification: "h0eirnz1hra1p2x5n0gwev3go0xq3n", // Meta (Facebook) → Configurações da empresa → Domínios

  // Ferramentas de medição extras. Cole o ID e rode `npm run build`: o site liga
  // a ferramenta e libera o domínio dela na política de segurança sozinho.
  // Vazio = desligada. Todas só rodam depois que a pessoa ACEITA os cookies.
  clarityId: "zjfl1j4erf",          // Microsoft Clarity (mapa de calor e gravações). Ex.: "abc123xyz9"
  metaPixelId: "1628788028327429",        // Meta Pixel (anúncios Instagram/Facebook). Ex.: "123456789012345"
  googleAdsId: "",        // Google Ads. Ex.: "AW-123456789"
  googleAdsLeadLabel: "", // Rótulo da conversão de contato no Google Ads. Ex.: "AbCdEfGhIjK"

  // EmailJS — chaves preservadas do site antigo. O formulário agora envia
  // para o WhatsApp. Ligue `emailBackup` se quiser receber TAMBÉM uma cópia
  // de cada contato no e-mail (recomendado: nenhum lead se perde se a pessoa
  // fechar o WhatsApp antes de enviar).
  emailBackup: false,
  emailjs: {
    publicKey: "5Ab4I5uTYBE3nBaqW",
    serviceId: "service_20obt8c",
    templateId: "template_e00usba",
  },
};

export const waLink = (text = "") =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

// Mensagens padrão por contexto — o time já sabe de onde a pessoa veio.
export const waMsg = {
  geral: "Olá! Vim pelo site da Sebra e quero entender como o sistema funciona para a minha empresa.",
  licitacao: "Olá! Vendo (ou quero vender) para o governo e quero ver o sistema de licitações e contratos públicos da Sebra.",
  demo: "Olá! Quero agendar uma demonstração da Sebra.",
  planos: "Olá! Vi os planos no site da Sebra e quero saber valores para a minha empresa.",
};
