// Instruções sobre o Script do Projeto.

//A letra "e" é convertida para "enter"
//A letra "i" é convertida para "imes"
//A letra "a" é convertida para "ai"
//A letra "o" é convertida para "ober"
//A letra "u" é convertida para "ufat"

//---------------------------------------------------------------------------
// Validando a Entrada de Texto (Não permitir Acentos ou Letras Maiúsculas)
function validandoTexto() {
    let texto = document.getElementById("entrada__texto").value;
    if (/[A-ZÀ-Ú]/.test(texto)) {
        alert("Não é Permitido Letras MAIÚSCULAS !!!");
        return false;
    }
    if (/[À-Úà-ú]/.test(texto)) {
        alert("Não é Permitido Palavras com ACENTOS !!!");
        return false;
    }

    return true;
}

//---------------------------------------------------------------------------
// Alterando Letras
function trocarLetras(texto) {
    return texto.replace(/e/g, 'enter')
                .replace(/i/g, 'imes')
                .replace(/a/g, 'ai')
                .replace(/o/g, 'ober')
                .replace(/u/g, 'ufat');
}

//---------------------------------------------------------------------------
// Alterando Letras (Inverso)
function inverterLetras(texto) {
    return texto.replace(/ufat/g, 'u')
                .replace(/ober/g, 'o')
                .replace(/ai/g, 'a')
                .replace(/imes/g, 'i')
                .replace(/enter/g, 'e');
}

//---------------------------------------------------------------------------
// Função para Criptografar o Texto de entrada.
function criptografarTexto() {
    let textoOriginal = document.getElementById("entrada__texto").value;
    let textoCriptografado = trocarLetras(textoOriginal);
    document.getElementById("resultado").value = textoCriptografado;
    document.getElementById('resultado').classList.add('new');
    document.getElementById('resultado').classList.remove('text-center');
}

//---------------------------------------------------------------------------
// Função para Descriptografar o Texto de entrada.
function descriptografarTexto() {
    let textoCriptografado = document.getElementById("entrada__texto").value;
    let textoOriginal = inverterLetras(textoCriptografado);
    document.getElementById("resultado").value = textoOriginal;
    document.getElementById('resultado').classList.add('new');
    document.getElementById('resultado').classList.remove('text-center');
}

//---------------------------------------------------------------------------
// Copiar o Resultado do Texto.
function copiarTexto() {
    let resultado = document.getElementById('resultado');
    let textarea = document.createElement('textarea');
    textarea.value = resultado.value;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('A Mensagem foi Copiada.');
}

//---------------------------------------------------------------------------
// Limpando Caixa de Entrada e Resultado.
function limparTexto() {
    document.getElementById('resultado').value = '';
    document.getElementById('entrada__texto').value = '';
}