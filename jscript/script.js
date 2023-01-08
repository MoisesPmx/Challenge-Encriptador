//Esta función recorre el texto y cambia las letras por su
//correspondiente encriptado
function encriptar(texto) {
    var cajaTexto = document.getElementById("text_Out");
    var elTexto = cajaTexto.value;
    var caracteres = elTexto.split("");

    for (let i = 0; i < caracteres.length; i++) {
        switch (caracteres[i]) {
            case "a":
                caracteres[i] = "ai";
                break;
            case "e":
                caracteres[i] = "enter";
                break;
            case "i":
                caracteres[i] = "imes";
                break;
            case "o":
                caracteres[i] = "ober";
                break;
            case "u":
                caracteres[i] = "ufat";
                break;
        }
    }
    var input = document.getElementById("text_Out");
    elTexto = caracteres.join("");
    input.value = elTexto;
}

//Esta función desencripta el mensaje
function desencriptar(texto) {
    var cajaTexto = document.getElementById("text_Out");
    var elTexto = cajaTexto.value;
    elTexto = elTexto.replace(/ai/gm, "a");
    elTexto = elTexto.replace(/imes/gm, "i");
    elTexto = elTexto.replace(/ufat/gm, "u");
    elTexto = elTexto.replace(/enter/gm, "e");
    elTexto = elTexto.replace(/ober/gm, "o");

    var input = document.getElementById("text_Out");
    input.value = elTexto;
}

function copiar(texto) {
    let copiartexto = document.getElementById("text_Out");
    copiartexto.select("text_Out");
    navigator.clipboard.writeText(copiartexto.value);
    //document.execCommand("copy");
}

function quitarAcentos(input) {
    const accents = {
        á: "a",
        é: "e",
        í: "i",
        ó: "o",
        ú: "u",
        Á: "a",
        É: "e",
        Í: "i",
        Ó: "o",
        Ú: "u",
    };

    let inputValue = input.value;
    inputValue = inputValue.split("");
    inputValue = inputValue.map((char) => {
        if (accents.hasOwnProperty(char)) {
            return accents[char];
        }
        return char;
    });
    inputValue = inputValue.join("");
    input.value = inputValue;
}

//botón borrar
const miCampoDeTexto = document.getElementById("text_Out");
const miBotonBorrar = document.getElementById("delText");
miCampoDeTexto.addEventListener("input", function () {
    if (this.value) {
        miBotonBorrar.style.display = "block";
    }
});
miBotonBorrar.addEventListener("click", function () {
    miCampoDeTexto.value = "";
    this.style.display = "none";
});

function quitarCarEsp() {
    var texto = document.getElementById("text_Out").value;
    texto = texto.replace(/[^\w\sñ?,.!]/gi, "");
    document.getElementById("text_Out").value = texto;
}
document.getElementById("text_Out").addEventListener("keyup", quitarCarEsp);
