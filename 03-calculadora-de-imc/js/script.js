const height = document.getElementById("height");
const weight = document.getElementById("weight");
const btnCalculate = document.getElementById("btn-calculate");
const btnClean = document.getElementById("btn-clean");
const imcResult = document.getElementById("imc-result");

btnCalculate.addEventListener("click", ()=>{
    const imc = weight.value / (height.value ** 2);
    imcResult.innerText = imc;
})