let n = 1; 
let f = [];
if (n > 0) {
    f.push(0); 
}
if (n > 1) {
    f.push(1); 
}
for (let i = 2; i < n; i++) {
    f[i] = f[i - 1] + f[i - 2];
}
console.log("Los primeros numeros son " +n+ " términos de la secuencia son: "+f.join(', '));
