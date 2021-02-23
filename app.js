const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click',(e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'Turkibash' && password === '12345678'){
    alert('Login Success');
    location.reload();
    } else {
        alert('Wrong username or password');
    }
})

