let btn = document.querySelector('#versenha')
let btnConfirm = document.querySelector('#verconfirmsenha')


let nome = document.querySelector('#nome')
let labelnome = document.querySelector('#labelnome')
validnome = false

let email = document.querySelector('#email')
let labelemail = document.querySelector('#labelemail')
validemail = false

let senha = document.querySelector('#senha')
let labelsenha = document.querySelector('#labelsenha')
validsenha = false

let confirmsenha = document.querySelector('#confirmsenha')
let labelconfirmsenha = document.querySelector('#labelconfirmsenha')
validconfirmsenha = false

let msgerror = document.querySelector('#msgerror')
let msgsucess = document.querySelector('#msgsucess')

nome.addEventListener('keyup', () => {
    if(nome.value.length <= 2){
        labelnome.setAttribute('style', 'color: red')
        labelnome.innerHTML = 'Nome *Insira no minimo 3 caracteres.'
        nome.setAttribute('style', 'border-color: red')
        validnome = false
    } else{
        labelnome.setAttribute('style', 'color: green')
        labelnome.innerHTML = 'Nome'
        nome.setAttribute('style', 'border-color: green')
        validnome = true
    }
})

email.addEventListener('keyup', () => {
    if(email.value.length <= 14){
        labelemail.setAttribute('style', 'color: red')
        labelemail.innerHTML = 'Email *Insira no minimo 10 caracteres.'
        email.setAttribute('style', 'border-color: red')
        validemail = false
    } else{
        labelemail.setAttribute('style', 'color: green')
        labelemail.innerHTML = 'Email'
        email.setAttribute('style', 'border-color: green')
        validemail = true
    }
})

senha.addEventListener('keyup', () => {
    if(senha.value.length <= 7){
        labelsenha.setAttribute('style', 'color: red')
        labelsenha.innerHTML = 'Insira no minimo 8 caracteres para uma senha forte.'
        senha.setAttribute('style', 'border-color: red')
        validsenha = false
    } else{
        labelsenha.setAttribute('style', 'color: green')
        labelsenha.innerHTML = 'Senha'
        senha.setAttribute('style', 'border-color: green')
        validsenha = true
    }
})

confirmsenha.addEventListener('keyup', () => {
    if(senha.value != confirmsenha.value){
        labelconfirmsenha.setAttribute('style', 'color: red')
        labelconfirmsenha.innerHTML = 'As senhas não conferem.'
        confirmsenha.setAttribute('style', 'border-color: red')
        validconfirmsenha = false
    } else{
        labelconfirmsenha.setAttribute('style', 'color: green')
        labelconfirmsenha.innerHTML = 'Confirmar senha'
        confirmsenha.setAttribute('style', 'border-color: green')
        validconfirmsenha = true
    }
})





function cadastrar (){
    if (validnome && validemail && validsenha  && validconfirmsenha){
       let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]')

        listaUser.push(
            {
                nomeCadast: nome.value,
                emailCadast: email.value,
                senhaCadast: senha.value
            }
        )

        localStorage.setItem('listaUser', JSON.stringify(listaUser))

        msgsucess.setAttribute('style', 'display: block')
        msgsucess.innerHTML = '<strong>Cadastrando usuario...</strong>'
        msgerror.innerHTML = ''
        msgerror.setAttribute('style', 'display: none')

        setTimeout(() => {
                window.location.href ='http://127.0.0.1:5500/tela%20de%20login/'
        }, 3000);


    } else {
        msgerror.setAttribute('style', 'display: block')
        msgerror.innerHTML = '<strong>ERRO! Preencha todos os campos corretamente antes de cadastrar.</strong>'
        msgsucess.innerHTML = ''
        msgsucess.setAttribute('style', 'display: none')
    }
}

    

btn.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})



btnConfirm.addEventListener('click', ()=> {
    let inputSenha = document.querySelector('#confirmsenha')

    if(inputSenha.getAttribute('type') == 'password') {
        inputSenha.setAttribute('type', 'text')
    } else {
        inputSenha.setAttribute('type', 'password')
    }
})

