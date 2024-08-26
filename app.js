const encriptacionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};


const inputText = document.getElementById('contenido_entrada_texto');
const encriptarBtn = document.getElementById('encriptar');
const desencriptarBtn = document.getElementById('desencriptar');
const limpiarBtn = document.getElementById('limpiar');
const outputSection = document.querySelector('.contenido_salida');
const output2Section = document.querySelector('#contenido_salida_resultado');
const imgAction = document.getElementById('imagen_resultado');


function encriptar() {
    let texto = inputText.value.toLowerCase();
    let textoEncriptado = '';

    for (let char of texto) {
        textoEncriptado += encriptacionMap[char] || char;
    }

    mostrarResultado(textoEncriptado);

}


function desencriptar() {
    let texto = inputText.value.toLowerCase();

    for (let [key, value] of Object.entries(encriptacionMap)) {
        texto = texto.replaceAll(value, key);
    }

    mostrarResultado(texto);
}

function limpiar(){
    document.querySelector('#contenido_entrada_texto').value = '';
    imgAction.style.display = 'block';
    output2Section.innerHTML = `
                <h2>Ningún mensaje fue encontrado</h2>
                <p1>Ingresa el texto que desees encriptar o desencriptar.</p1>
        `;
}


function mostrarResultado(texto) {
    if (texto.trim() === '') {
        imgAction.style.display = 'block';
        output2Section.innerHTML = `
                <h2>Ningún mensaje fue encontrado</h2>
                <p1>Ingresa el texto que desees encriptar o desencriptar.</p1>
        `;
    } else {
        imgAction.style.display = 'none';
        output2Section.innerHTML = `
                <p>${texto}</p>
                <button class= "copiar" onclick="copiarTexto()">Copiar</button>
        `;
    }
}


function copiarTexto() {
    const textoCopiar = outputSection.querySelector('p').textContent;
    navigator.clipboard.writeText(textoCopiar)
        .then(() => alert('Texto copiado'))
        .catch(err => console.error('Error al copiar: ', err));
}


encriptarBtn.addEventListener('click', encriptar);
desencriptarBtn.addEventListener('click', desencriptar);
limpiarBtn.addEventListener('click',limpiar);


mostrarResultado('');