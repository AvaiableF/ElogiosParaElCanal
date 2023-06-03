var matrizCampoMinado = [
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0]
];

function descobrirCasas() {
    var maiorNumeroCasas = 0;

    for (var i = 0; i < Math.pow(2, 25); i++) {
        var binario = (i >>> 0).toString(2).padStart(25, '0');

        var matrizJogada = binario.split('').map(Number);
        var numeroCasas = contarCasasSemBombas(matrizJogada);

        if (numeroCasas > maiorNumeroCasas) {
            maiorNumeroCasas = numeroCasas;
            matrizCampoMinado = matrizJogada;
        }
    }

    exibirMatrizCampoMinado();
}

function contarCasasSemBombas(matrizJogada) {
    var numeroCasas = 0;

    for (var i = 0; i < matrizJogada.length; i++) {
        if (matrizJogada[i] === 0) {
            numeroCasas++;
        }
    }

    return numeroCasas;
}

function exibirMatrizCampoMinado() {
    var matrixDiv = document.getElementById("matrix");
    matrixDiv.innerHTML = "";

    for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 5; j++) {
            var div = document.createElement("div");
            div.className = "cell";
            div.textContent = matrizCampoMinado[i * 5 + j] === 0 ? " " : "*";
            matrixDiv.appendChild(div);
        }
    }
}
