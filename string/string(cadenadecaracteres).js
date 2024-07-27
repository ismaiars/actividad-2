let srt_1 = "Hola soy un texto con comillas";
let srt_2 = 'Hola soy un texto con comillas simples';
let srt_3 = "Comillas dentro de comillas \"Ejemplo\"";
let srt_4 = 'Comillas dentro de comillas \"Ejemplo\"';
console.log(srt_1);
console.log(srt_2);
console.log(srt_3);
console.log(srt_4);
//comillas invertidas
let srt_6 = `Comillas invertidas`
console.log(srt_6);
let nombre = "ismael";
let welcome = `Hola, ${nombre}, esto es una variable dentro de otra variable`;
console.log(welcome);
//plantilla html
let plantilla =`
<html>
<h3>Pagina Web de ${nombre}</h3>
<p>Un parrafo</p>
</html>
`
console.log(plantilla);