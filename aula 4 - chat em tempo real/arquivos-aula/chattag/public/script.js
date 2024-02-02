const input = document.getElementById("texto")
const botao_enviar = document.getElementById("enviar")
const chat = document.getElementById("mensagens")

const socket = io()

function mostrarmensagens(pessoa, msg, minha){
    const mensagem = document.createElement("li")
    const nome = document.createElement('p')
    const textomen = document.createElement('p')
    nome.innerText = `${pessoa} mandou:`
    nome.style.marginBottom = 
    textomen.innerText = msg
    mensagem.appendChild(nome)
    mensagem.appendChild(textomen)
    let ul;
    if (minha){
        ul = document.createElement('ul')
        ul.classList.add("direita")
        mensagem.classList.add("mensagem-direita")
        ul.appendChild(mensagem)
    }else{
        ul = document.createElement('ul')
        ul.classList.add("esquerda")
        mensagem.classList.add("mensagem-esquerda")
        ul.appendChild(mensagem) 
    }
    chat.appendChild(ul)
}

let pessoa;


document.addEventListener("DOMContentLoaded", () => {
    socket.emit("entrou_nn", pessoa)

    fetch('http://192.168.100.54:1000/mensagens.json')
        .then((response) => response.json())
        .then((resultado) => {
            resultado.forEach(element => {
                mostrarmensagens(element.pessoa, element.mensagem, false)
            });
        })
})

let pessoamudada = false;


socket.addEventListener("entrou", (quem) => {
    if (!pessoamudada){
        pessoa = `pessoa ${quem}`
        pessoamudada = true
    }
})




function enviar() {
    let valordoinput = input.value
    if (valordoinput !== ""){
        socket.emit("nova mensagem", valordoinput, pessoa)
        input.value = ""
    }
}



botao_enviar.addEventListener("click", enviar)

input.addEventListener('keypress', (e) => {
    if (e.key == "Enter"){
        enviar()
    }
})


socket.addEventListener("nova mensagem", (msg, pessoa_mensagem) => {
    mostrarmensagens(pessoa_mensagem, msg, pessoa === pessoa_mensagem ? true : false)
})