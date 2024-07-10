function bubbleSort(arr, compare) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (compare(arr[j], arr[j + 1])) {
                
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}


function ascending(a, b) {
    return a > b;
}

function descending(a, b) {
    return a < b;
}

function ascendingOdds(a, b) {
    if (a % 2 !== 0 && b % 2 !== 0) {
        return a > b;
    }
    return false;
}

function descendingEvens(a, b) {
    if (a % 2 === 0 && b % 2 === 0) {
        return a < b;
    }
    return false;
}

let arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];

console.log('Ordenação Crescente:', bubbleSort([...arr], ascending));
console.log('Ordenação Decrescente:', bubbleSort([...arr], descending));
console.log('Ordenação Crescente Ímpares:', bubbleSort([...arr], ascendingOdds));
console.log('Ordenação Decrescente Pares:', bubbleSort([...arr], descendingEvens));