const btnContar = document.getElementById("btn-contar");
const btnLimpar = document.getElementById("btn-limpar");
const texto = document.getElementById("texto");
const contador = document.getElementById("contador");

btnContar.addEventListener("click", () => {
  event.preventDefault();
  contador.innerText = texto.value.length;
});

btnLimpar.addEventListener("click", () => {
  event.preventDefault();
  texto.value = "";
  contador.innerText = "";
});
