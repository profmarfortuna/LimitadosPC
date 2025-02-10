// Validação do campo de telefone
function validatePhone() {
    const phoneInput = document.getElementById('phone');
    const phoneValue = phoneInput.value;

    // Remover qualquer caracter não numérico
    phoneInput.value = phoneValue.replace(/\D/g, '');

    // Verificar se o número tem entre 7 e 15 dígitos
    if (phoneInput.value.length < 7 || phoneInput.value.length > 15) {
        phoneInput.setCustomValidity('O número de telefone deve ter entre 7 e 15 dígitos.');
    } else {
        phoneInput.setCustomValidity('');
    }
}

document.getElementById('budget-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const service = document.getElementById('service').value;
    const description = document.getElementById('description').value;

    // Aqui você pode adicionar o código para enviar os dados para o servidor

    const message = `Orçamento solicitado com sucesso! \nNome: ${name} \nE-mail: ${email} \nTelefone: ${phone} \nServiço: ${service} \nDescrição: ${description}`;
    
    document.getElementById('response-message').textContent = message;
    document.getElementById('response-message').classList.remove('hidden');

    // Limpar o formulário
    this.reset();
});

