const textArea = document.querySelector(".apresentacao__conteudo__caixadetexto");
const inputText =document.querySelector ("#input-texto");
const mensagem = document.querySelector (".apresentacao__conteudoedireita__fundo__mensagem");
const imagem = document.querySelector (".apresentacao__conteudoedireita__fundo__imagem");
const textos = document.querySelector (".apresentacao__conteudoedireita__fundo__texto");

// As "chaves" de criptografia que utilizaremos são:
// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"
// [0]- coluna da vogal
// [1]- coluna da conversão

function btnEncriptar() {
    const textEncriptado = encriptar (textArea.value);
    mensagem.value = textEncriptado;
    textArea.value = "";
    ocultarInformacoes();

}

function encriptar(stringEncriptada) {
    
    let matrizCodigo = [["e" , "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function btnDesencriptar() {
    const textDesencriptado = desencriptar (textArea.value);
    mensagem.value = textDesencriptado;
    textArea.value = "";
    ocultarInformacoes();
}

function desencriptar(stringDesencriptada) {
    
    let matrizCodigo = [["e" , "enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; 
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return stringDesencriptada;
}

function copiarTexto() {
    let conteudoCopiar = mensagem
    conteudoCopiar.select()
    document.execCommand('copy')
    alert('Conteúdo Copiado!')
    alert('Use o Ctrl + V, para colar onde você desejar')
}

function ocultarInformacoes() {
    imagem.classList.add("ocultar");
    textos.classList.add("ocultar");
}
