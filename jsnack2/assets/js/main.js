// Snack 2
// Si scriva una funzione che accetti tre argomenti,
// un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori
// che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

$(document).ready(function() {
  const numeri = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  console.log(`L'array è: ${newNumeri}.`);
  let newNumeri = myFunction(numeri, 3, 9);
  console.log(`Il nuovo array è: ${newNumeri}.`);
});


// Funzioni
const myFunction = (array, a, b) => {
  const newArray = array.slice(a, b + 1)
  return newArray;
};
