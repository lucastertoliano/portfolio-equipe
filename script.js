// Menu Hamburguer (Apenas Mobile)

function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
} 


// Validação do Formulário de Contato

const formContato = document.getElementById('form-contato');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const mensagemInput = document.getElementById('mensagem');
const mensagemForm = document.getElementById('mensagem-form');

formContato.addEventListener('submit', function(e) {
    e.preventDefault();

    // valida se o nome tem pelo menos duas palavras e se não está vazio
    if (nomeInput.value.trim().split(" ").length < 2) {
        mensagemForm.innerHTML = "Digite seu nome completo.";
        mensagemForm.style.backgroundColor = "#f8d7da";
        mensagemForm.style.color = "#721c24";
        mensagemForm.style.border = "1px solid #f5c6cb";
        mensagemForm.style.padding = "10px";
        mensagemForm.style.borderRadius = "5px";
        return;
    }

    // valida se o email é válido atraves de regex
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim())) {
    mensagemForm.innerHTML = "Digite um email válido.";
    mensagemForm.style.backgroundColor = "#f8d7da";
    mensagemForm.style.color = "#721c24";
    mensagemForm.style.border = "1px solid #f5c6cb";
    mensagemForm.style.padding = "10px";
    mensagemForm.style.borderRadius = "5px";
    return;
    }

    // mensagem de sucesso
    mensagemForm.innerHTML = "Mensagem enviada com sucesso!";
    mensagemForm.style.backgroundColor = "#d4edda";
    mensagemForm.style.color = "#155724";
    mensagemForm.style.border = "1px solid #c3e6cb";
    mensagemForm.style.padding = "10px";
    mensagemForm.style.borderRadius = "5px";
    formContato.reset();

});

// Botão "Voltar ao Topo"

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Controla visibilidade do botão "Voltar ao Topo"
window.addEventListener('scroll', function() {
    const backToTopButton = document.getElementById('backToTop');
    const scrollPosition = window.pageYOffset;
    
    if (scrollPosition > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});