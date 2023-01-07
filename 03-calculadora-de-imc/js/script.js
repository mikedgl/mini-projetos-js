const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btnCalculate = document.getElementById("btn-calculate");
const btnClean = document.getElementById("btn-clean");
const imcResult = document.getElementById("imc-result");

btnCalculate.addEventListener("click", () => {
  const imc = (
    weight.value.replace(",", ".") /
    height.value.replace(",", ".") ** 2
  ).toFixed(2);
  imcResult.innerText = `${imc} (${classificacaoImc(imc)})`;
});

btnClean.addEventListener("click", () => {
  height.value = "";
  weight.value = "";
  imcResult.innerText = "";
});

height.addEventListener("keypress", (event) => {
  if (height.value.length === 4) event.preventDefault();
});

weight.addEventListener("keypress", (event) => {
  if (weight.value.length === 6) event.preventDefault();
});

function addPontuacao(campo, posicao) {
  if (campo.value.length === --posicao) {
    campo.value += ",";
  }
}

function classificacaoImc(imc) {
  if (imc < 18.5) return "Magreza";
  if (imc <= 24.9) return "Normal";
  if (imc <= 29.9) return "Sobrepreso";
  if (imc <= 39.9) return "Obesidade";
  return "Obesidade grave";
}
