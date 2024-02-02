const AzulInverno = {
    nome: 'Azul inverno',
    pasta: 'imagens-azul-inverno'
}
const Estelar = {
    nome: 'Estelar',
    pasta: 'imagens-estelar'
}
const MeiaNoite = {
    nome: 'Meia noite',
    pasta: 'imagens-meia-noite'
}
const RosaClaro = {
    nome: 'Rosa claro',
    pasta: 'imagens-rosa-claro'
}
const VerdeCipreste = {
    nome: 'Verde cipreste',
    pasta: 'imagens-verde-cipreste'
}

const cores = [VerdeCipreste, AzulInverno, MeiaNoite, Estelar, RosaClaro]
const tamanhos = ['41 mm', '45 mm']

let coratual = 1;
let Imagematual = 1;
let tamanhoatual = 1;

const Imagem_principal = document.getElementById('imagem-visualizacao')
const MiniaturasImagens = document.getElementById('selecionar-imagem')
const valor_de_tamanho_paragrafo = document.getElementById('valor_de_tamanho_paragrafo')
const valor_de_cor = document.getElementById('valor_de_cor')
const Imagem0min = document.getElementById('0-imagem-miniatura')
const Imagem1min = document.getElementById('1-imagem-miniatura')
const Imagem2min = document.getElementById('2-imagem-miniatura')


function aoTrocarDeFormaDeImagem(){
    const qualminiaturacliquei = document.querySelector('[name="opcao-imagem"]:checked').id
    Imagematual = qualminiaturacliquei.charAt(0)
    Imagem_principal.src = `./imagens/opcoes-cores/${cores[coratual].pasta}/imagem-${Imagematual}.jpeg`
}

function Aotrocardetamanho() {
    const qualtamanhocliquei = document.querySelector('[name="opcao-tamanho"]:checked').id
    tamanhoatual = qualtamanhocliquei.charAt(0)
    if (tamanhos[tamanhoatual] === '41 mm'){
        Imagem_principal.classList.add('caixa-pequena')
    }else {
        Imagem_principal.classList.remove('caixa-pequena')
    }
    valor_de_tamanho_paragrafo.innerText = tamanhos[tamanhoatual]
}

function AoMudarCor() {
    const qualcorcliquei = document.querySelector('[name="opcao-cor"]:checked').id
    coratual = qualcorcliquei.charAt(0)
    Imagem_principal.src = `./imagens/opcoes-cores/${cores[coratual].pasta}/imagem-${Imagematual}.jpeg`
    Imagem0min.src = `./imagens/opcoes-cores/${cores[coratual].pasta}/imagem-0.jpeg`
    Imagem1min.src = `./imagens/opcoes-cores/${cores[coratual].pasta}/imagem-1.jpeg`
    Imagem2min.src = `./imagens/opcoes-cores/${cores[coratual].pasta}/imagem-2.jpeg`
    valor_de_cor.innerText = cores[coratual].nome
}