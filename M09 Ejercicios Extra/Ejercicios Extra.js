/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   return Object.entries(objeto);
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var array = string.split("");
   var repetidos ={}
   array.forEach(element => {repetidos[element] = (repetidos[element] || 0) +1;
   });
   return repetidos;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:

var original = string.split("");
var mayusculas = string.toUpperCase();
mayusculas.split("");
var mayus = [];
var minusculas = [];
var completo = [];
for (var i = 0; i < original.length; i++){
   if(mayusculas[i] !== original[i]){
    minusculas.push(original[i]);
   }else mayus.push(original[i]);
}
completo = mayus.concat(minusculas);
return completo.join("");
   
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   partes = frase.split(" ");
   var otro = [];
   var a = [];
   var entero = [];
   for(var i = 0; i < partes.length; i++){
      otro[i] = partes[i].split("");
       a[i] = (otro[i].reverse()).join("");
       entero.push(a[i]);
   }return entero.join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
var num = numero.toString();
var array = num.split("");
var otro = [].concat(array);
otro.reverse();
var array2 = array.join("");
var otro2 = otro.join("");
if (array2 === otro2){
   return ("Es capicua");
}else{
   return ("No es capicua");
}
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var array = string.split("");
   var array2 = array.filter(element => (element !== "a") && (element !== "b") && (element !== "c"));
   return (array2.join(""));
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var entero = arrayOfStrings.sort(function(a,b){
      return a.length - b.length
   });
      return entero;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var array3 = [];
   for(var i=0; i < array2.length; i++){
      if(array1.includes(array2[i])){
            array3.push(array2[i]);
      }
   }
   return array3;
   }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
