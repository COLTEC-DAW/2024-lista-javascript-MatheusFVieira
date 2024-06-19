function range(min, max, i) {
    let array = [];
    for (let num = min; num <= max; num += i) {
        array.push(num);
    }
    return array;
}

//Teste:

console.log(range(11, 20, 3));
console.log(range(-15, 20, 7));
console.log(range(8, 30, 2));
