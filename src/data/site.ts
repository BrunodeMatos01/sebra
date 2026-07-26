// Dados globais do site. Contatos e chaves preservados do site antigo —
// NÃO alterar as chaves do EmailJS nem o ID do Google Analytics.

export const site = {
  name: "Sebra",
  domain: "sebraoficial.com",
  appUrl: "https://app.sebraoficial.com/",
  email: "atendimento.sebra@gmail.com",
  whatsappPrimary: "5547988525262",
  whatsappSecondary: "5547992311087",
  instagram: "https://www.instagram.com/sebraofc/",

  // Google Analytics — preservado do site antigo.
  gaId: "G-JTFWMLLGE3",

  // EmailJS — preservado do site antigo. O formulário de demonstração
  // depende EXATAMENTE destes valores e dos campos nome/empresa/whatsapp/email/mensagem.
  emailjs: {
    publicKey: "5Ab4I5uTYBE3nBaqW",
    serviceId: "service_20obt8c",
    templateId: "template_e00usba",
  },
};

export const waLink = (phone: string, text = "") =>
  `https://wa.me/${phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`;
