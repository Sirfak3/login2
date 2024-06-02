function viewPass(){
    let pass = document.getElementById('pass');
    let eye = document.getElementById('eye');

    if(pass.type == 'password'){
        pass.type = 'text';
        eye.classList.remove('fa-eye-slash');
        eye.classList.add('fa-eye');
        eye.style.color = 'lightgreen';
    }else{
        pass.type = 'password';
        eye.style.color = '#fc21c5';
        eye.classList.remove('fa-eye');
        eye.classList.add('fa-eye-slash');
    }
}

function up(){
    const container = document.querySelector('.login');
    const divNome = document.querySelector('.divNome');
    const orSign = document.querySelector('.orSign');
    const titulo = document.querySelector('.titulo');

    if(orSign.textContent === 'or Sign Up'){
        titulo.textContent = 'Sign Up';
        divNome.style.display  = 'unset';
        container.style.transform = 'rotateY(360deg)';
        orSign.textContent = 'or Sign In'
    }else{
        titulo.textContent = 'Sign In';
        divNome.style.display  = 'none';
        container.style.transform = 'rotateY(-360deg)';
        orSign.textContent = 'or Sign Up'
    }
}