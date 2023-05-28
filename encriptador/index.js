var btnencriptar=document.querySelector(".encriptar");
var btndesencriptar=document.querySelector(".desencriptar");
var muneco=document.querySelector(".imgbusqueda");
var mensaje=document.querySelector(".mensaje");
var resultado=document.querySelector(".txtresultado");
const copia = document.querySelector(".copiar");
copia.style.display = "none"

//btnencriptar.onclick=validarTexto;
btndesencriptar.onclick=desencriptar;

function validarTexto() {
    var cajatexto=recuperartxt();
    var str = cajatexto;
    var regex = /[A-Z!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
  
    if (str.match(regex)) {
        alert("Solo son permitidas letras minúsculas y sin acentos");
        location.reload();
        return true;
    } else {
        ocultaradelante();
        resultado.textContent=encriptartexto(cajatexto);
        copia.style.display = "flex"
    }
  }


function desencriptar(){
    ocultaradelante();
    
    var cajatexto=recuperartxt();
    resultado.textContent=desencriptartexto(cajatexto);
    copia.style.display = "flex"
}

function recuperartxt() {
    var cajatexto = document.querySelector(".txtarea");
    return cajatexto.value;
}

function ocultaradelante(){
    muneco.classList.add("ocultar");
    mensaje.classList.add("ocultar");
}



function encriptartexto(mensaje){

    const vocales = ["a", "e", "i", "o", "u"];
    let palabraValidada = "";
    for (let i = 0; i < mensaje.length; i++) {
        if (vocales.includes(mensaje[i].toLowerCase())) {
        switch (mensaje[i].toLowerCase()) {
            case "a":
            palabraValidada += "ai";
            break;
            case "e":
            palabraValidada += "enter";
            break;
            case "i":
            palabraValidada += "imes";
            break;
            case "o":
            palabraValidada += "ober";
            break;
            case "u":
            palabraValidada += "ufat";
            break;
        }
        } else {
        palabraValidada += mensaje[i];
        }
    }
    return palabraValidada;

}

function desencriptartexto(palabra) {

    const vocales = ["a", "e", "i", "o", "u"];
    let palabraOriginal = "";
    for (let i = 0; i < palabra.length; i++) {
        if (vocales.includes(palabra[i].toLowerCase())) {
        switch (palabra[i].toLowerCase()) {
            case "i":
            if (palabra[i + 1] === "m" && palabra[i + 2] === "e" && palabra[i + 3] === "s") {
                palabraOriginal += "i";
                i += 3;
            } else {
                palabraOriginal += palabra[i];
            }
            break;
            case "a":
            if (palabra[i + 1] === "i") {
                palabraOriginal += "a";
                i += 1;
            } else {
                palabraOriginal += palabra[i];
            }
            break;
            case "e":
            if (palabra[i + 1] === "n" && palabra[i + 2] === "t" && palabra[i + 3] === "e" && palabra[i + 4] === "r") {
                palabraOriginal += "e";
                i += 4;
            } else {
                palabraOriginal += palabra[i];
            }
            break;
            case "o":
            if (palabra[i + 1] === "b" && palabra[i + 2] === "e" && palabra[i + 3] === "r") {
                palabraOriginal += "o";
                i += 3;
            } else {
                palabraOriginal += palabra[i];
            }
            break;
            case "u":
            if (palabra[i + 1] === "f" && palabra[i + 2] === "a" && palabra[i + 3] === "t") {
                palabraOriginal += "u";
                i += 3;
            } else {
                palabraOriginal += palabra[i];
            }
            break;
            default:
            palabraOriginal += palabra[i];
        }
        } else {
        palabraOriginal += palabra[i];
        }
    }
    return palabraOriginal;
    
}

/*const btncopiar = document.querySelector(".btncopiar");
btncopiar.addEventListener("click", copiar = ()=>{
    var contenido=document.querySelector(".txtresultado").textContent;
    navigator.clipboard.writeText(contenido)
    
})*/

function copiar(){
    resultado.select();
    navigator.clipboard.writeText(resultado.value)
    
    alert("Texto Copiado")
}