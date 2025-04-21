document.querySelector('.toggle-password').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
    this.style.animation = 'pulse 0.5s ease';
    setTimeout(() => this.style.animation = '', 500);
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const submitBtn = this.querySelector('button[type="submit"]');
    const form = this;

    form.style.transition = 'all 0.4s ease';
    form.style.transform = 'scale(0.95)';
    form.style.opacity = '0.8';
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Logging In...';
    submitBtn.disabled = true;

    setTimeout(() => {
        alert(`Welcome back, ${email}!`);
        form.style.transform = 'scale(1)';
        form.style.opacity = '1';
        submitBtn.innerHTML = 'Log In';
        submitBtn.disabled = false;
        form.reset();
        document.querySelectorAll('input').forEach(input => {
            input.style.animation = 'fadeIn 1s ease-out';
            setTimeout(() => input.style.animation = '', 1000);
        });
    }, 1500);
});