function min(a, b) {
    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

//Teste
console.log("O menor valor é:",min(5, 10));
console.log("O menor valor é:",min(-3, 2));
console.log("O menor valor é:",min(7, 7));

console.log("O maior valor é:",max(5, 10));
console.log("O maior valor é:",max(-3, 2));
console.log("O maior valor é:",max(7, 7));