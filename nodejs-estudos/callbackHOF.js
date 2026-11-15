// HOF (Higher-Order Functions) -> Funções que recebem outras funções como parâmetros

function calcular (numero1, numero2, operacao) {

    return operacao(numero1, numero2);
}

function soma (num1, num2) {
    return num1 + num2;
}

function divisao (num1, num2) {
    if (num2 != 0) return num1 / num2;
    else return num2 / num1;
}

const resultadoSoma = calcular(3, 5, soma);
console.log(`Resultado da soma: ${resultadoSoma}`)

const resultadoDivisao = calcular (3, 5, divisao);
console.log(`Resultado da divisão: ${resultadoDivisao}`);