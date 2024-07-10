function range(min, max) {
    let array = [];

    for (let i = min; i <= max; i++) {
        array.push(i);
    }

    return array;
}

//Teste:

console.log(range(4, 10));
console.log(range(-7, 8));
console.log(range(10, 15));