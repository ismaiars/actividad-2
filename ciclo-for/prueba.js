let n = 4; // Número de términos en la secuencia de Fibonacci que queremos calcular
let fibonacci = [];

if (n > 0) {
    fibonacci.push(0); // El primer término de Fibonacci es 0
}

if (n > 1) {
    fibonacci.push(1); // El segundo término de Fibonacci es 1
}

for (let i = 2; i < n; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}

console.log(`Los primeros ${n} términos de la secuencia de Fibonacci son: ${fibonacci.join(', ')}`);
