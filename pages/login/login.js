        // Input validation
        // function validateEmail(email) {
        //     if (!email.trim()) {
        //         return 'Este campo é obrigatório';
        //     }
    
        //     // validar se o digitado é um email com @ e etc
        //     if (email.includes('@') && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        //         return 'Digite um email válido';
        //     }
        //     return '';
        // }

        // function validatePassword(password) {
        //     if (!password.trim()) {
        //         return 'Este campo é obrigatório';
        //     }
        //     if (password.length < 6) {
        //         return 'A senha deve ter pelo menos 6 caracteres';
        //     }
        //     return '';
        // }


let container = document.querySelector("#erro")
let mensagem = "<p style='color: white;'>Login ou senha incorretos!</p>"

function loginForm() {

    const usuario = document.getElementById("email").value;
    const senha = document.getElementById("password").value;

    const usuarioCorreto = "admin@kontroli.com";
    const senhaCorreta = "123456";

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        // alert("Login realizado com sucesso!");
        window.location.href = "/pages/admin/admin.html"
    } else {
        container.innerHTML = mensagem
    }
}



// function teste(e) {
//     e.preventDefault()
//     window.location.href = "admfinal.html"
// }



// __________________________________________


// Elements
        // const loginForm = document.getElementById('loginForm');
        // const emailInput = document.getElementById('email');
        // const passwordInput = document.getElementById('password');
        // const loginButton = document.getElementById('loginButton');
        // const passwordToggle = document.getElementById('passwordToggle');
        // const eyeIcon = document.getElementById('eyeIcon');
        // const successMessage = document.getElementById('successMessage');
        // const forgotPasswordLink = document.getElementById('forgotPasswordLink');
        // const registerLink = document.getElementById('registerLink');

        // // Error elements
        // const emailError = document.getElementById('emailError');
        // const passwordError = document.getElementById('passwordError');

        // // Password visibility toggle
        // passwordToggle.addEventListener('click', function() {
        //     const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        //     passwordInput.setAttribute('type', type);
            
        //     // Change icon
        //     if (type === 'text') {
        //         eyeIcon.innerHTML = `
        //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"></path>
        //         `;
        //     } else {
        //         eyeIcon.innerHTML = `
        //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
        //             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
        //         `;
        //     }
        // });

        // // Input validation
        // function validateEmail(email) {
        //     if (!email.trim()) {
        //         return 'Este campo é obrigatório';
        //     }
            
        //     // Basic email validation if it looks like an email
        //     if (email.includes('@') && !email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        //         return 'Digite um email válido';
        //     }
            
        //     return '';
        // }

        // function validatePassword(password) {
        //     if (!password.trim()) {
        //         return 'Este campo é obrigatório';
        //     }
        //     if (password.length < 6) {
        //         return 'A senha deve ter pelo menos 6 caracteres';
        //     }
        //     return '';
        // }

        // function showError(input, errorElement, message) {
        //     input.classList.add('error');
        //     errorElement.textContent = message;
        //     errorElement.classList.add('show');
        // }

        // function hideError(input, errorElement) {
        //     input.classList.remove('error');
        //     errorElement.classList.remove('show');
        // }

        // // Real-time validation
        // emailInput.addEventListener('blur', function() {
        //     const error = validateEmail(this.value);
        //     if (error) {
        //         showError(emailInput, emailError, error);
        //     } else {
        //         hideError(emailInput, emailError);
        //     }
        // });

        // emailInput.addEventListener('input', function() {
        //     if (emailInput.classList.contains('error')) {
        //         const error = validateEmail(this.value);
        //         if (!error) {
        //             hideError(emailInput, emailError);
        //         }
        //     }
        // });

        // passwordInput.addEventListener('blur', function() {
        //     const error = validatePassword(this.value);
        //     if (error) {
        //         showError(passwordInput, passwordError, error);
        //     } else {
        //         hideError(passwordInput, passwordError);
        //     }
        // });

        // passwordInput.addEventListener('input', function() {
        //     if (passwordInput.classList.contains('error')) {
        //         const error = validatePassword(this.value);
        //         if (!error) {
        //             hideError(passwordInput, passwordError);
        //         }
        //     }
        // });

        // // Form submission
        // loginForm.addEventListener('submit', function(e) {
        //     e.preventDefault();
            
        //     // Validate all fields
        //     const emailValue = emailInput.value;
        //     const passwordValue = passwordInput.value;
            
        //     const emailErrorMsg = validateEmail(emailValue);
        //     const passwordErrorMsg = validatePassword(passwordValue);
            
        //     let hasErrors = false;
            
        //     if (emailErrorMsg) {
        //         showError(emailInput, emailError, emailErrorMsg);
        //         hasErrors = true;
        //     } else {
        //         hideError(emailInput, emailError);
        //     }
            
        //     if (passwordErrorMsg) {
        //         showError(passwordInput, passwordError, passwordErrorMsg);
        //         hasErrors = true;
        //     } else {
        //         hideError(passwordInput, passwordError);
        //     }
            
        //     if (hasErrors) {
        //         return;
        //     }
            
        //     // Simulate login process
        //     loginButton.classList.add('loading');
        //     loginButton.disabled = true;
            
        //     // Simulate API call
        //     setTimeout(function() {
        //         // Reset button
        //         loginButton.classList.remove('loading');
        //         loginButton.disabled = false;
                
        //         // Show success message
        //         successMessage.classList.add('show');
                
        //         // Simulate redirect after success
        //         setTimeout(function() {
        //             // In a real app, you would redirect to the dashboard
        //             console.log('Redirecting to dashboard...');
        //             // window.location.href = '/dashboard';
        //             alert('Login simulado com sucesso! Em uma aplicação real, você seria redirecionado para o dashboard.');
        //         }, 2000);
                
        //     }, 2000);
        // });

        // // Forgot password link
        // forgotPasswordLink.addEventListener('click', function(e) {
        //     e.preventDefault();
        //     alert('Em uma aplicação real, você seria redirecionado para a página de recuperação de senha.');
        // });

        // // Register link
        // registerLink.addEventListener('click', function(e) {
        //     e.preventDefault();
        //     alert('Em uma aplicação real, você seria redirecionado para a página de cadastro.');
        // });

        // // Enter key support
        // document.addEventListener('keydown', function(e) {
        //     if (e.key === 'Enter' && (emailInput === document.activeElement || passwordInput === document.activeElement)) {
        //         loginForm.dispatchEvent(new Event('submit'));
        //     }
        // });

        // // Focus first input on page load
        // window.addEventListener('load', function() {
        //     emailInput.focus();
        // });

        // // Demo credentials info
        // console.log('Demo: Use qualquer email/usuário e senha com pelo menos 6 caracteres para testar o login.');