const loginForm = document.getElementById('login-form');
const loginBtn = document.getElementById('login-button');

loginBtn.addEventListener('click',(e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    const redirectUrl = () => {
       return window.location.href = 'Memes.html';
    }


    if (username === '' || password === ''){
        alert('username & password must be filled');

    } else if (username === "Turki" && password === "1234"){
    
        alert('Login Success');
        redirectUrl();
    } else {
        alert('Wrong username or password');
    }
    
})