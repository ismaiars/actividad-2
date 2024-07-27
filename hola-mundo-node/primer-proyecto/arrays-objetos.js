//¿que son y como se definen?
//listas array o vectores
//ejemplo de como se definen
const datos=[1,"Hola", true, undefined, null];
const datos2= new Array (1, "Hola", true, undefined, null);
const datos3= new Array (3);
datos3[1]="Hola Mundo";
const datos4= [datos, datos2, datos3];
//ejemplo de impresion
console.log("lista 1 "+datos);
console.log("lista 2 "+datos2);
console.log("lista 3 "+datos3); 
console.log("lista 4 "+datos4); 

//objetos
//ejemlo de objetos
const alumno /* <--objeto */={ //ejemplo de atributos
nombre:"pedro",
edad:15,
isBlack:false,
amistades: ["confi1", "confi2", "confi3"],
//objeto dentro de otro objeto
const ing ={
matricula:1234567890,
carrera: "sistemas",
}
}
//imprimir el objeto 
console.log(alumno);
//imprimir mas especifico
console.log(alumno.nombre);