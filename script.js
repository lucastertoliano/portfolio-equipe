function showSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}

function hideSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}  
document.getElementById('form-contato').addEventListener('submit', function(e) {
    e.preventDefault();

    let nomeDigitado = document.getElementById('nome').value.trim();
    let emailDigitado = document.getElementById('email').value.trim().toLowerCase();
    let mensagemDigitado = document.getElementById('mensagem').value.trim();

    if(nomeDigitado.split(' ').length < 2){
        alert('Digite seu nome completo.');
        return;
    }
    if(mensagemDigitado === ''){
        alert('Digite sua mensagem.');
        return;
    }
    
    alert('Mensagem enviada com sucesso!');
});
