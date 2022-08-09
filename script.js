const btnEncriptar = document.getElementById("btn1");
const btnDesencriptar = document.getElementById("btn1");
const mensajeEncriptar = document.getElementById("box");
const boxEncripted = document.getElementById("encripted");
const toHidden = document.getElementById("to-hidden");
const btnCopy = document.getElementById("btnCopy");

const validLowercase = /[a-z]/g;
const invalidUppercase = /[A-Z]/g;
const invalidNumber = /[\d]/g;
const invalidSpecialCaracter = /[!\"/'^£$%&*()}{@#~?><>,|=_+¬-]/g;
let valid = false;

mensajeEncriptar.addEventListener("input", (e) => {
  let value = e.target.value;
  e.target.value = value.replace(invalidSpecialCaracter, "");
});
mensajeEncriptar.addEventListener("input", (e) => {
  let value = e.target.value;
  e.target.value = value.replace(invalidNumber, "");
});

function encriptar() {
  if (mensajeEncriptar.value) {
    let mensaje = mensajeEncriptar.value;
    let mensajeSumado = "";
    let html = "";

    toHidden.classList.add("oculto");
    btnCopy.style.visibility = "visible";

    for (let i = 0; i < mensaje.length; i++) {
      const me = mensaje[i];
      const condicion =
        me !== "e" && me !== "i" && me !== "a" && me !== "o" && me !== "u";

      function rep(letra, cod) {
        mensajeSumado += me.replace(letra, cod);
      }

      if (condicion) {
        mensajeSumado += me;
      } else {
        if (me == "e") {
          rep("e", "enter");
        }
        if (me == "i") {
          rep("i", "imes");
        }
        if (me == "a") {
          rep("a", "ai");
        }
        if (me == "o") {
          rep("o", "ober");
        }
        if (me == "u") {
          rep("u", "ufat");
        }
      }
    }
    html += `${mensajeSumado}`;
    boxEncripted.innerHTML = html;
    mensajeEncriptar.value = "";

    console.log(mensajeSumado);
  } else {
    toHidden.classList.remove("oculto");
    btnCopy.style.visibility = "hidden";
    boxEncripted.innerHTML = "";
    alert("Debe ingresar una palabra para Encriptarla");
  }
}

function copy() {
  var content = document.getElementById("encripted").innerHTML;

  navigator.clipboard
    .writeText(content)
    .then(() => {
      console.log("Text copied to clipboard...");
    })
    .catch((err) => {
      console.log("Something went wrong", err);
    });
}

function desencriptar() {
  if (mensajeEncriptar.value) {
    let mensaje = mensajeEncriptar.value;

    let html = "";

    mensaje = mensaje.replace(/ufat/g, "u");
    mensaje = mensaje.replace(/ober/g, "o");
    mensaje = mensaje.replace(/ai/g, "a");
    mensaje = mensaje.replace(/imes/g, "i");
    mensaje = mensaje.replace(/enter/g, "e");
    toHidden.classList.add("oculto");
    btnCopy.style.visibility = "visible";

    html += `${mensaje}`;
    boxEncripted.innerHTML = html;
    mensajeEncriptar.value = "";

    console.log(mensaje);
  } else {
    toHidden.classList.remove("oculto");
    btnCopy.style.visibility = "hidden";
    boxEncripted.innerHTML = "";
    alert("Debe ingresar una palabra para Encriptarla");
  }
}
