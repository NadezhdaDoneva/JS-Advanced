console.log('TODO:// Implement Login functionality');

document.querySelectorAll('a').forEach(x=>x.classList.remove('active'));
document.getElementById('login-form').classList.add('active');
document.getElementById('login-form').addEventListener('submit', loginHandler)
document.getElementById("user").style.display = 'none';

function loginHandler(e){
    e.preventDefault()
    const form= e.target;
    const formData = new FormData(form);
    const {email, password} = Object.fromEntries(formData);

    onLogin(email,password);
}

async function onLogin(email, password){
    const url = 'http://localhost:3030/users/login';
    const body = {
        email,
        password
    }
    const header = getHeader('POST', body);
    const response = await fetch(url, header);
    const data = await response.json();

    sessionStorage.setItem("email", data.email);
    sessionStorage.setItem("accessTocken", data.accessToken);
    return data;
}

function getHeader(method, body) {
    return {
        method: `${method}`,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    }
}