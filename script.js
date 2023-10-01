function calcularIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var imc = peso / (altura * altura);
    var imcInput = document.getElementById("imc");
    var classificacao = document.getElementById("classificacao");

    imcInput.value = imc.toFixed(2);

    if (imc < 18.5) {
        imcInput.className = "baixo";
        classificacao.innerHTML = "Abaixo do peso";
    } 
    
    else if (imc >= 18.5 && imc < 24.9) {
        imcInput.className = "normal";
        classificacao.innerHTML = "Peso normal";
    } 
    
    else if (imc >= 24.9 && imc < 29.9) {
        imcInput.className = "alto";
        classificacao.innerHTML = "Sobrepeso";
    } 
    
    else {
        imcInput.className = "muito-alto";
        classificacao.innerHTML = "Obesidade";
    }
}

function limparFormulario() {
    document.getElementById("peso").value = "";
    document.getElementById("altura").value = "";
    var imcInput = document.getElementById("imc");
    imcInput.value = "";
    imcInput.className = ""; 
    var classificacao = document.getElementById("classificacao");
    classificacao.innerHTML = ""; 
}
