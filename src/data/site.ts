// Dados globais do site. Tudo que é contato, rede social e chave de Google
// mora aqui: mude num lugar só e o site inteiro acompanha.

export const site = {
  name: "Sebra",
  legalName: "Sebra", // Razão social — troque pela razão social exata (aparece no rodapé e no Google)
  cnpj: "",           // CNPJ da Sebra (ex.: "00.000.000/0001-00"). Vazio = não aparece. Para B2G, mostrar o CNPJ gera MUITA confiança.
  city: "Santa Catarina", // Cidade/UF que aparece no rodapé e nos dados do Google
  domain: "sebraoficial.com",
  url: "https://sebraoficial.com",
  appUrl: "https://app.sebraoficial.com/",
  email: "atendimento.sebra@gmail.com",

  // WhatsApp comercial único do site. Formato internacional, só números.
  whatsapp: "5547997202716",
  whatsappDisplay: "(47) 99720-2716",

  instagram: "https://www.instagram.com/sebraofc/",
  instagramHandle: "@sebraofc",

  // Google Analytics 4 — preservado do site antigo.
  gaId: "G-JTFWMLLGE3",

  // Verificação de propriedade (Google Search Console e Bing Webmaster).
  // Cole aqui só o valor do content="..." que eles fornecem. Vazio = não aparece.
  googleVerification: "",
  bingVerification: "",

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
