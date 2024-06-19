let palavra = prompt('Informe uma palavra:');

function Palindromo(palavra) {
    
    palavra = palavra.replace(/\s+/g, '').toLowerCase();
    
    let palavraInvertida = palavra.split('').reverse().join('');
    
    return palavra === palavraInvertida;
}

if (Palindromo(palavra)) {
    console.log(`${palavra} é um palíndromo.`);
} else {
    console.log(`${palavra} não é um palíndromo.`);
}