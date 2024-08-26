/*
 Index del proyecto "Encriptador de texto"

 Creador: Paulina Alva

 Fecha de creacion: 15/07/2024
 Fecha de ultima actualizacion: 26/08/2024

*/
function eliminarAcentos(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-zA-Z0-9 ]/g, "");
}
function encriptarTexto() {
  let texto = document.getElementById("recibe-texto-input").value;
  // Eliminar acentos y caracteres especiales
  texto = eliminarAcentos(texto);

  let textoFinal = "";

  texto = texto.toLowerCase();

  // Busqueda y reemplazo

  for (let i = 0; i < texto.length; i++) {
    if (texto.charAt(i) === "a") {
      textoFinal += "ai";
    } else if (texto.charAt(i) === "e") {
      textoFinal += "enter";
    } else if (texto.charAt(i) === "i") {
      textoFinal += "imes";
    } else if (texto.charAt(i) === "o") {
      textoFinal += "ober";
    } else if (texto.charAt(i) === "u") {
      textoFinal += "ufat";
    } else {
      textoFinal += texto.charAt(i);
    }
  }
  // Mostrar contenido
  console.log(textoFinal);

  document.getElementById("mostrar-texto-h2").innerHTML = textoFinal;

  // Ocultar la imagen
  var image = document.getElementById("imagen-muneco");
  var textP = document.getElementById("mostrar-texto-p");
  image.style.display = "none"; // Oculta la imagen
  textP.style.display = "none";
}

// Desencriptador de texto

function desencriptarTexto() {
  let texto = document.getElementById("recibe-texto-input").value;
  let textoFinal = texto.toLowerCase();

  // Busqueda y reemplazo
  for (let i = 0; i < texto.length; i++) {
    textoFinal = textoFinal.replace("ai", "a");
    textoFinal = textoFinal.replace("enter", "e");
    textoFinal = textoFinal.replace("imes", "i");
    textoFinal = textoFinal.replace("ober", "o");
    textoFinal = textoFinal.replace("ufat", "u");
  }

  // Mostrar contenido
  console.log(textoFinal);
  document.getElementById("mostrar-texto-h2").innerHTML = textoFinal;

  var image = document.getElementById("imagen-muneco");
  var textP = document.getElementById("mostrar-texto-p");
  image.style.display = "none"; // Oculta la imagen
  textP.style.display = "none";
}

function copiarTexto() {
  let copia = document.querySelector("#mostrar-texto-h2").innerText;

  const copiartexto = async () => {
    try {
      await navigator.clipboard.writeText(copia);
      console.log("Texto copiado al portapapeles");
    } catch (error) {
      console.log("Error al copiar el texto: ", error);
    }
  };

  copiartexto();
}

// Agregar el event listener al botón después de cargar el DOM
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("boton-encriptar")
    .addEventListener("click", encriptarTexto);
});

// Agregar el event listener al botón después de cargar el DOM
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("boton-desencriptar")
    .addEventListener("click", desencriptarTexto);
});
