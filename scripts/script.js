
let cript = document.querySelector('.cript')
let descript = document.querySelector('.decript')
let copiar = document.querySelector('.btn-copiar')

let divResultadoImg = document.querySelector('.container__resultado__conteudo')
let divResultado = document.querySelector('.decrip-encrip')

// apenas letras minusculas
document.querySelector('.input-texto').addEventListener('keyup', () => {
    let text = document.querySelector('.input-texto').value

    text = text.toLowerCase()
    document.querySelector('.input-texto').value = text

})


cript.addEventListener('click', () => {
    let text = document.querySelector('.input-texto').value

    if(text) {
        mostrarResultado()
    } else {
        divResultadoImg.style.display = 'flex'
        divResultado.style.display = 'none'
    }
})

descript.addEventListener('click', () => {
    descriptografar()
})

copiar.addEventListener('click', () => {
    copy()
})

function mostrarResultado() {
    divResultadoImg.style.display = 'none'
    divResultado.style.display = 'flex'
    criptografar()
}

function criptografar() {
    let text = document.querySelector('.input-texto').value

    text = text.replace(/e/g, "enter");
    text = text.replace(/i/g, "imes");
    text = text.replace(/a/g, "ai");
    text = text.replace(/o/g, "ober");
    text = text.replace(/u/g, "ufat");

    document.querySelector('#resultado-decrip').value = text;
}

function descriptografar() {
    let text = document.querySelector('#resultado-decrip').value

    text = text.replace(/ufat/g, "u");
    text = text.replace(/ober/g, "o");
    text = text.replace(/ai/g, "a");
    text = text.replace(/imes/g, "i");
    text = text.replace(/enter/g, "e");

    document.querySelector('#resultado-decrip').value = text;
}

function copy() {
    let copyText = document.querySelector("#resultado-decrip");
    copyText.select();
    document.execCommand("copy");
  }


