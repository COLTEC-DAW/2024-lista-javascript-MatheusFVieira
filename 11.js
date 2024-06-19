function reverseArray(array) {
    let ArrayReverso = [];
    for (let i = array.length - 1; i >= 0; i--) {
        ArrayReverso.push(array[i]);
    }
    return ArrayReverso;
}

//Teste:

console.log(reverseArray([1, 2, 3, 4, 5]));
console.log(reverseArray([-1, -10, -15, -20]));