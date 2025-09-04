const alertDiv = document.getElementById('alert');
const closeBtn = document.querySelector('.close-btn');
const registerBtn = document.querySelector('.continue-button');
const passwordInput = document.querySelector('.password');
const confirmPasswordInput = document.querySelector('.confirm-password');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const numberInput = document.querySelector('.number');

// Function to show alert
function showAlert(message) {
    document.querySelector('.alert-message').textContent = message;
    alertDiv.style.display = 'block';
    // Auto-hide after 3 seconds
    setTimeout(() => {
        alertDiv.style.display = 'none';
    }, 3000);
}

// Close alert on X click
closeBtn.addEventListener('click', () => {
    alertDiv.style.display = 'none';
});

// Validation
registerBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission
    if (!nameInput.value || !emailInput.value || !numberInput.value || !passwordInput.value || !confirmPasswordInput.value) {
        showAlert('Todos os campos são obrigatórios.');
    } else if (passwordInput.value !== confirmPasswordInput.value) {
        showAlert('As senhas não coincidem.');
    } else {
        // Proceed, maybe redirect or something
        alert('Cadastro realizado com sucesso!');
    }
});