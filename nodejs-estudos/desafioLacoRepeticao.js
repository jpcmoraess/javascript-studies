// Contar quantos números pares e ímpares há de 0 a 100

let totalNumerosPares = 0;
let totalNumerosImpares = 0;

for (let contador = 0; contador <= 100; contador++) {
    if (contador % 2 === 0) {
        console.log(`Número par: ${contador}`);
        totalNumerosPares++;
    } else {
        console.log(`Número ímpar: ${contador}`);
        totalNumerosImpares++;
    }
}

console.log(`Total de números pares: ${totalNumerosPares}`);
console.log(`Total de números ímpares: ${totalNumerosImpares}`);
