document.addEventListener('DOMContentLoaded', function () {

    emailjs.init('5Ab4I5uTYBE3nBaqW');

    const contactForm = document.querySelector('.contact-form.reveal');

    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      // 2. CAPTURA DOS DADOS DO FORMULÁRIO
      // Pega os valores dos campos do formulário pelos seus IDs
      const nome = document.getElementById('nome').value;
      const empresa = document.getElementById('empresa').value;
      const whatsapp = document.getElementById('whatsapp').value;
      const email = document.getElementById('email').value;
      const mensagem = document.getElementById('mensagem').value; 
  
      if (!nome || !empresa || !whatsapp || !email || !mensagem) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }
  

      const templateParams = {
        nome: nome,
        empresa: empresa,
        whatsapp: whatsapp,
        email: email,
        mensagem: mensagem,
        data: new Date().toLocaleString("pt-BR")
      };
  
      const submitButton = contactForm.querySelector('.btn.btn-primary.btn-large.full');
      submitButton.disabled = true; 
      submitButton.textContent = 'Enviando...';

      emailjs.send('service_20obt8c', 'template_e00usba', templateParams)
        .then(function (response) {
          console.log('SUCESSO!', response.status, response.text);
          alert('Mensagem enviada com sucesso!');
          contactForm.reset(); 
          submitButton.disabled = false; 
          submitButton.textContent = 'Enviar Mensagem'; 
        })
        .catch(function (error) {
          console.log('ERRO...', error);
          alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
          submitButton.disabled = false; 
          submitButton.textContent = 'Enviar Mensagem'; 
        });
    });
  });