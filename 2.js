let input = prompt('Informe a quantidade de linhas:');
const numLinhas = parseInt(input);

let board = '';
for (let i = 0; i < numLinhas; i++) {
    let linha = '';
    for (let j = 0; j < numLinhas; j++) {
        if ((i + j) % 2 === 0) {
            linha += '#';
        } else {
            linha += ' ';
        }
    }
        board += linha + '\n';
}

console.log(board);