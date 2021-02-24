const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click',(e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const redirectUrl = () => {
       return window.location.href = 'Memes.html';
    }


    if (username === 'Turkibash' && password === '12345678'){
    alert('Login Success');
        redirectUrl();
    } else {
        alert('Wrong username or password');
    }


})

