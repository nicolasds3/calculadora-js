function kl() {
    
    var selecione = document.querySelector('select[name="1111"]').value;
    var primeiroN = parseFloat(document.getElementById('primeiroN').value);
    var segundoN = parseFloat(document.getElementById('segundoN').value);

    var resultado = 0;

    switch(selecione) {
        case "soma":
            resultado = primeiroN + segundoN
            break;
        case "subtracao":
            resultado = primeiroN - segundoN;
            break;
        case "multiplicacao":
            resultado = primeiroN * segundoN;
            break;
        case "divisao":
            if (segundoN === 0) {
                resultado = "operação impossível!";
                break;
            } 
            resultado = primeiroN / segundoN;
            break;
        default:
            resultado = "escolha um sinal ou operação!!!";
            break;    
    }
    console.log(resultado);
    document.getElementById('mostrarResultado').textContent = resultado;
}
