
let cript = document.querySelector('button:nth-child(1)')
let descript = document.querySelector('.decript')
let copiar = document.querySelector('.btn-copiar')

let divResultadoImg = document.querySelector('.container__resultado__conteudo')
let divResultado = document.querySelector('.decrip-encrip')

// apenas letras minusculas
document.querySelector('.input-texto').addEventListener('keyup', () => {
    let text = document.querySelector('.input-texto').value

    if(text == '') {
        divResultadoImg.style.display = 'flex'
        divResultado.style.display = 'none'
        btnDesabled()
    } else {

        text = text.toLowerCase()
        document.querySelector('.input-texto').value = text
    
        // mostrarResultado()
        btnDesabled()
    }

   
})


cript.addEventListener('click', () => {
    let text = document.querySelector('.input-texto').value

    if(text) {
        mostrarResultado()
        criptografar()
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

function btnDesabled() {
    console.log('btn-disabed')
    let texto = document.querySelector('.input-texto')
    let btnCript = document.querySelector('button:nth-child(1)')
    if(texto.value == '') {
        // btnCript.classList.remove('cript')
        btnCript.classList.add('btn-desabled')
        btnCript.setAttribute('disabled', true)

    } else {
        btnCript.classList.remove('btn-desabled')
        btnCript.classList.add('cript')
        btnCript.removeAttribute('disabled')
    }
}

btnDesabled()


