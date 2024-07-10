function verifyNumber(number, criterion) {
    return criterion(number);
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;
    
    if (number % 2 === 0 || number % 3 === 0) return false;
    
    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    
    return true;
}

//Teste:
let number = 29;
console.log('O número', number, 'é ímpar?', verifyNumber(number, isOdd));
console.log('O número', number, 'é primo?', verifyNumber(number, isPrime));

number = 30;
console.log('O número', number, 'é ímpar?', verifyNumber(number, isOdd));
console.log('O número', number, 'é primo?', verifyNumber(number, isPrime));