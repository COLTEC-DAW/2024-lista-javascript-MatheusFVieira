function createMatrix(rows, cols, matrixFunction) {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        const row = [];
        for (let j = 0; j < cols; j++) {
            row.push(matrixFunction(i, j));
        }
        matrix.push(row);
    }
    return matrix;
}

function sumIndices(i, j) {
    return i + j;
}

function productIndices(i, j) {
    return i * j;
}

function identityMatrix(i, j) {
    return i === j ? 1 : 0;
}

function ratioSquareIndex(i, j) {
    return Math.pow(i, 2) / (j + 1);
}

function compareIndices(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

//Teste:

const rows = 4;
const cols = 4;

console.log('Matriz m[i,j] = i + j:');
console.table(createMatrix(rows, cols, sumIndices));

console.log('Matriz m[i,j] = i * j:');
console.table(createMatrix(rows, cols, productIndices));

console.log('Matriz m[i,j] = i == j ? 1 : 0:');
console.table(createMatrix(rows, cols, identityMatrix));

console.log('Matriz m[i,j] = i^2 / (j+1):');
console.table(createMatrix(rows, cols, ratioSquareIndex));

console.log('Matriz m[i,j] = i > j ? 1 : (i < j ? 5 : 0):');
console.table(createMatrix(rows, cols, compareIndices));
