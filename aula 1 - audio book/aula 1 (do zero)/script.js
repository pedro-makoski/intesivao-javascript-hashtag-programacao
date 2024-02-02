const numero_de_capitulos = 10;
let capitulo_atual = 1

const texto_capitulo = document.getElementById('capitulo')
const audio = document.getElementById('audio')
const audio_ogg = document.getElementById('audio-ogg')
const audio_mp3 = document.getElementById('audio-mp3')

const botao_play_pause = document.getElementById('play-pause')
const botao_anterior = document.getElementById('anterior')
const botao_proximo = document.getElementById('proximo')

const var_class_play = 'bi-play-circle-fill'
const var_class_pause = 'bi-pause-circle-fill'

let tatocando = false;

function play(){
    audio.play()
    botao_play_pause.classList.remove(var_class_play)
    botao_play_pause.classList.add(var_class_pause)
    tatocando = true
}

function pause(){
    audio.pause()
    botao_play_pause.classList.remove(var_class_pause)
    botao_play_pause.classList.add(var_class_play)
    tatocando = false
}

botao_play_pause.addEventListener('click',() => {
    if (tatocando) {
        pause()
    } else {
        play()
    }
})

function proximo_capitulo(){
    if (capitulo_atual == numero_de_capitulos){
        capitulo_atual = 1
    }else{
        capitulo_atual += 1
    }
    audio_mp3.src = `./books/dom-casmurro/mp3/${capitulo_atual}.mp3`
    audio_ogg.src = `./books/dom-casmurro/ogg/${capitulo_atual}.ogg`

    audio.load()
    play()

    texto_capitulo.innerText = `Capitulo ${capitulo_atual}`
}

function voltar_capitulo(){
    if (capitulo_atual == 1){
        capitulo_atual = numero_de_capitulos
    }else{
        capitulo_atual -= 1
    }
    audio_mp3.src = `./books/dom-casmurro/mp3/${capitulo_atual}.mp3`
    audio_ogg.src = `./books/dom-casmurro/ogg/${capitulo_atual}.ogg`

    audio.load()
    play()

    texto_capitulo.innerText = `Capitulo ${capitulo_atual}`

}



botao_proximo.addEventListener('click', proximo_capitulo)
botao_anterior.addEventListener('click', voltar_capitulo)