function transformString(str, transformation) {
    return str.split('').map(transformation).join('');
}

function upperCaseVowels(char) {
    const vowels = 'aeiou';
    return vowels.includes(char.toLowerCase()) ? char.toUpperCase() : char;
}

function upperCaseConsonants(char) {
    const vowels = 'aeiou';
    return !vowels.includes(char.toLowerCase()) && /[a-zA-Z]/.test(char) ? char.toUpperCase() : char;
}

function lowerCaseVowels(char) {
    const vowels = 'AEIOU';
    return vowels.includes(char.toUpperCase()) ? char.toLowerCase() : char;
}

function lowerCaseConsonants(char) {
    const vowels = 'AEIOU';
    return !vowels.includes(char.toUpperCase()) && /[a-zA-Z]/.test(char) ? char.toLowerCase() : char;
}

//Teste:
let text = "hello, world!";

console.log('Original:', text);
console.log('Caixa alta nas vogais:', transformString(text, upperCaseVowels));
console.log('Caixa alta nas consoantes:', transformString(text, upperCaseConsonants));

let text2 = "HELLO, WORLD!";

console.log('Caixa baixa nas vogais:', transformString(text2, lowerCaseVowels));
console.log('Caixa baixa nas consoantes:', transformString(text2, lowerCaseConsonants));