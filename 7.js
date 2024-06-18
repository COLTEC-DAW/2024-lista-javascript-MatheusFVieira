function mod(num, mod) {
    if (num === mod) {
        return true;
    }
    else if (num < mod) {
        return false;
    }
    else {
        return mod(num - mod, mod);
    }
}

function verificarDivisibilidade() {
    var numInput = prompt("Digite um número (num):");
    var modInput = prompt("Digite um número para verificar se é divisor (mod):");

    var Nnum = parseInt(numInput);
    var Nmod = parseInt(modInput);

    var divisivel = mod(Nnum, Nmod);

    if (divisivel) {
        alert(Nnum + " é divisível por " + Nmod + ".");
    } else {
        alert(Nnum + " não é divisível por " + Nmod + ".");
    }
} 
verificarDivisibilidade();