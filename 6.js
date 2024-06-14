function mod2(number) {
    if (number === 0) {
        return true;
    }
    else if (number === 1) {
        return false;
    }
    else {
        return mod2(number - 2);
    }
}

function verificarDivisibilidadePorDois() {
    
    var input = prompt("Digite um número para verificar se é divisível por 2:");
    var number = parseInt(input);

    var divisivelPorDois = mod2(number);

    if (divisivelPorDois) {
        alert(number + " é divisível por 2.");
    } else {
        alert(number + " não é divisível por 2.");
    }
} 
verificarDivisibilidadePorDois();