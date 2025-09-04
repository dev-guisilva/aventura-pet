const alertDiv = document.getElementById('alert');
const closeBtn = document.querySelector('.close-btn');
const continueBtn = document.querySelector('.continue-button');
const passwordInput = document.querySelector('.password');

// Function to show alert
function showAlert() {
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

// Simple validation: if password is not 'correct', show alert
continueBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent form submission if any
    if (passwordInput.value !== 'correct') {
        showAlert();
    } else {
        // Proceed, maybe redirect or something
        alert('Login successful!');
    }
});