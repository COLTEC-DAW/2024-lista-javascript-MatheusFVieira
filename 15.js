function encrypt(text, cipher) {
    return text.split('').map(cipher).join('');
}

function caesarCipher(char, shift = 3) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    if (alphabet.includes(char)) {
        let index = (alphabet.indexOf(char) + shift) % 26;
        return alphabet[index];
    } else if (upperAlphabet.includes(char)) {
        let index = (upperAlphabet.indexOf(char) + shift) % 26;
        return upperAlphabet[index];
    } else {
        return char;
    }
}

let text = "Hello, World!";
let encryptedText = encrypt(text, char => caesarCipher(char, 3));
console.log('Texto original:', text);
console.log('Texto criptografado:', encryptedText);


function caesarDecipher(char, shift = 3) {
    return caesarCipher(char, 26 - shift);
}

//Teste:
let decryptedText = encrypt(encryptedText, char => caesarDecipher(char, 3));
console.log('Texto descriptografado:', decryptedText);
