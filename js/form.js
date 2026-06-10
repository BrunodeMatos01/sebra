const demoForm = document.querySelector("#demo-form");
const feedback = document.querySelector("#form-feedback");

if (demoForm && feedback) {
    demoForm.addEventListener("submit", (event) => {
        event.preventDefault();
        feedback.textContent = "Recebemos suas informacoes. Em breve conectaremos este formulario ao canal oficial da Sebra.";
        demoForm.reset();
    });
}
