
let nomeCadastro = document.getElementById("inputUser")
let senhaCadastro = document.getElementById("inputPass")

let logadoSenha = document.getElementById("senhaLogado")
let logadoNome = document.getElementById("logNome")

let telefone = document.getElementById("inputPhone")

let nomeLogin = document.getElementById("loginNome")
let senhaLogin = document.getElementById("loginSenha")
let userLogado

let vetorUsers = []



const images = ["./img sa sky/img2.png","./img sa sky/img3.jpg","./img sa sky/img4.jfif","./img sa sky/img5.png","./img sa sky/img6.png","./img sa sky/img7.jpg","./img sa sky/img1.jfif"];

  let carrousel = document.getElementById("imgs");

  let i = 0;
  let interval = setInterval(function () {
    if (i <=  images.length - 1) {
      carrousel.src = images[i];
      i++;
    } else {
      i = 0;
    }
  }, 1500);


function trocaDiv(){
let login = document.getElementById("login")
let cadastro = document.getElementById("cadastro")

    if(login.style.display == "none"){
        login.style.display = "flex"
        cadastro.style.display = "none"
    }else{
        cadastro.style.display = "flex"
        login.style.display = "none"
    }


}





function Cadastrar(){


    let usuario = {

        username: '',
        password: '',
        phones: []
    
    }

    usuario.username = nomeCadastro.value
    usuario.password = senhaCadastro.value
  

    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

    if(vetorUsers == null){

        vetorUsers = []

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        alert("Cadastro realizado!")

    }
    
    else if(nomeCadastro.value==vetorUsers[i].username){
        alert("Nome de usuário já cadastrado")

    }
    
    
    
    else{

        vetorUsers.push(usuario)
        localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
        alert("Cadastro realizado!")

    }

  
    
}
function Logar(){
    event.preventDefault()
    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))
    for(i=0; i < vetorUsers.length; i++){
        if(nomeLogin.value == vetorUsers[i].username && senhaLogin.value == vetorUsers[i].password){
            userLogado = nomeLogin.value
            localStorage.setItem('userLogado',JSON.stringify(userLogado))
            alert("Login realizado!")
            window.location.pathname="/perfil.html"
            

        }

    }

}
function CarregaUser(){

    userLogado = JSON.parse(localStorage.getItem('userLogado'))
    document.getElementById("Ola").innerHTML = `ola, ${userLogado}`
    
    logadoNome.value = userLogado
}


function LimpaInputs(){

    nomeCadastro.value = ''
    senhaCadastro.value = ''
    

}
function CadastraTel(){
    vetorUsers = JSON.parse(localStorage.getItem('usuarioSalvo'))

        for(i=0; i < vetorUsers.length; i++){
    
            if (logadoSenha.value == vetorUsers[i].password){

                if(userLogado == vetorUsers[i].username){
                    
                    vetorUsers[i].phones.push(telefone.value)
                    localStorage.setItem('usuarioSalvo', JSON.stringify(vetorUsers))
                    alert("cadastro realizado")

                }
            }
        else {
        alert("senha incorreta!")
        }

        }
    }

