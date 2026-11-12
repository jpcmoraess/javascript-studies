// ------------------------- 1 - Tabela de conversão de temperatura -------------------------
console.log("\n------------------------- Tabela de conversão de temperatura -------------------------\n");

function tabelaConversaoTemperatura() {
    let temperaturaCelsius = 0;
    let temperaturaFahrenheit;

    for (let contador = 0; contador <= 10; contador++) {
        temperaturaFahrenheit = temperaturaCelsius * 9 / 5 + 32;
        console.log(`${temperaturaCelsius}°C = ${temperaturaFahrenheit}°F`);
        temperaturaCelsius = temperaturaCelsius + 10;
    }
}

tabelaConversaoTemperatura();


// ------------------------- 2 - Fatorial de um número -------------------------
console.log("\n------------------------- Fatorial de um número -------------------------\n");

function calcularFatorial(numero) {

    if (numero < 0){
        return console.error('Erro. Não existe fatorial de número negativo.')
    }

    let fatorialDoNumero = 1

    for (let contador = 1; contador <= numero; contador++) {
        fatorialDoNumero = fatorialDoNumero * contador
    }

    console.log(`Fatorial de ${numero}: ${fatorialDoNumero}`);
}

calcularFatorial(-1);
calcularFatorial(0);
calcularFatorial(5);

// ------------------------- 3 - Sequência de Fibonacci -------------------------
console.log("\n------------------------- Sequência de Fibonacci -------------------------\n");

function fibonacciSequence() {
    let sequencia = [0, 1];

    for (let contador = 2; contador < 15; contador++) {
        let proximo = sequencia[sequencia.length - 1] + sequencia[sequencia.length - 2];

        sequencia.push(proximo);
    }

    console.log(sequencia);
}

fibonacciSequence();

// ------------------------- 4 - Soma dos dígitos de um número -------------------------
console.log("\n------------------------- Soma dos dígitos de um número -------------------------\n");

function somaDigitos(numero) {
    const numeroArray = Array.from(String(numero), Number);
    let somaDosDigitos = 0;

    for (let contador = 0; contador < numeroArray.length; contador++) {
        somaDosDigitos += numeroArray[contador];
    }

    console.log(somaDosDigitos);
}

somaDigitos(4821);

// ------------------------- 5 - Pirâmide de asteriscos -------------------------
console.log("\n------------------------- Pirâmide de Asteriscos -------------------------\n");

function piramideAsterisco(altura) {
   let i, j;

   for (i = 0; i <= altura; i++) {
    for (j = 0; j < i; j++) {
        process.stdout.write('*');
    }
    console.log();
   }
}

piramideAsterisco(5);

// ------------------------- 6 - Contando as notas de uma caixa -------------------------
console.log("\n------------------------- Pirâmide de Asteriscos -------------------------\n");

function contarNotasCaixa(dinheiro) {
    let notas100 = Math.floor(dinheiro / 100);
    dinheiro %= 100;

    let notas50 = Math.floor(dinheiro / 50);
    dinheiro %= 50;

    let notas20 = Math.floor(dinheiro / 20);
    dinheiro %= 20;

    let notas10 = Math.floor(dinheiro / 10);
    dinheiro %= 10;

    let moedas1 = Math.floor(dinheiro / 1);
    dinheiro %= 1;


    console.log(`Notas de R$100,00: ${notas100}`);
    console.log(`Notas de R$50,00: ${notas50}`);
    console.log(`Notas de R$20,00: ${notas20}`);
    console.log(`Notas de R$10,00: ${notas10}`);
    console.log(`Sobraram ${moedas1} reais em moedas`);
}

contarNotasCaixa(287);

// ------------------------- 7 - Dois dados e a soma 7 -------------------------
 