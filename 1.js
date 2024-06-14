let numeroLinhas = prompt("Digite a quantidade de linhas para o triângulo:");

numeroLinhas = parseInt(numeroLinhas);

for (let linha = 1; linha <= numeroLinhas; linha++) {

    let linhaTriangulo = "";

    for (let i = 0; i < linha; i++) {
        linhaTriangulo += "#";
    }

    console.log(linhaTriangulo);
}