let emailLogado = JSON.parse(localStorage.getItem('emailLogado')) 

let logado = document.querySelector('#logado')

logado.innerHTML = 'Olá, ' + emailLogado.nome


if(localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para iniciar esta página.')
    window.location.href = 'http://127.0.0.1:5500/tela%20de%20login/'
}


function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('emailLogado')
    window.location.href = 'http://127.0.0.1:5500/tela%20de%20login/'
}