let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

function entrar (){
    let email = document.querySelector('#email')
    let emaillabel = document.querySelector('#emaillabel')

    let senha = document.querySelector('#senha')
    let senhalabel = document.querySelector('#senhalabel')

    let msgerror = document.querySelector('#msgerror')

    let listaUser = []

    let emailvalid = {
        nome: '',
        email: '',
        senha: ''
    }

    listaUser = JSON.parse(localStorage.getItem('listaUser'))

    listaUser.forEach((item) => {
        if(email.value == item.emailCadast && senha.value == item.senhaCadast) {
            
            emailvalid = {
                nome: item.nomeCadast,
                email: item.emailCadast,
                senha: item.senhaCadast
            }
        }
    });

    if(email.value == emailvalid.email && senha.value == emailvalid.senha){
        window.location.href ='http://127.0.0.1:5500/tela%20de%20inicio/inicio.html'

        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)

        localStorage.setItem('emailLogado', JSON.stringify(emailvalid))

    }else{
        emaillabel.setAttribute('style','color:red')
        email.setAttribute('style','border-color:red')
        senhalabel.setAttribute('style','color:red')
        senha.setAttribute('style','border-color:red')
        msgerror.setAttribute('style','display:block')
        msgerror.innerHTML = ('Usuário ou senha incorretos.')
        email.focus()
    }
}