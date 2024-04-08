let listaDeNumeroSorteado = []
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2})
}
function mensagemInicial (){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
function verificarChute() {
    let chute = document.querySelector('input').value;

   if(chute == numeroSecreto) {
    exibirTextoNaTela ('h1', 'acertou');
    let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativas';
    let mensagemTentativas = `você descubriu o numero com ${tentativas} ${palavraTentativas}!`
    exibirTextoNaTela ('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    
   } else {
    if ( chute > numeroSecreto){
        exibirTextoNaTela ('p' , 'o numero é menor');
    } else {
        exibirTextoNaTela ('p', 'o numero é maior');
    }
    tentativas++;
    limparCampo();
}
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadedeDeElementosNaLista = listaDeNumeroSorteado.length;

     if(quantidadedeDeElementosNaLista == numeroLimite ){
        listaDeNumeroSorteado = []
     }

    if(listaDeNumeroSorteado.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeroSorteado.push(numeroEscolhido)

        return numeroEscolhido
    }
}

function limparCampo() {
    chute = document.querySelector ('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo();
    tentativas = 1;
     mensagemInicial();
     document.getElementById ('reiniciar').setAttribute('dissabled', true)
}









