// > Arrays - parte 2 - Métodos de arrays 

let arr1 = [30, 12, 45, 34, 29]
let arr2 = []

// Fatiamento: slice

console.log(arr1.slice(0, 2));
console.log(arr1.slice(2));
console.clear();
// Adicionando elementos: push | unshift 

console.log("Antes de adicionar: ", arr2);

arr2.push(10, 25, "Gustavo", 58)
arr2.unshift(40)

console.log("Após adicionar: ", arr2);

console.clear();
// Removendo elementos: pop | shift

console.log("Antes de remover com o pop", arr2);


arr2.pop()
arr2.shift()

console.log("Após remover com o pop e o shift", arr2);

console.clear();
// Concatenando arrays: concat

console.log("arr1", arr1);
console.log("arr2", arr2);

console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

console.clear();
// Buscando elementos: indexOf | lastIndexOf

console.log(arr1);

let indiceDoElemento34 = arr1.indexOf(34)

console.log(indiceDoElemento34);

let arr3 = [1, 2, 3, 3, 5, 3]

console.log(arr3.lastIndexOf(3));


console.clear();
// Descobrindo a existência de um elemento: includes

console.log(arr1);

console.log(arr1.includes(45));

console.clear();
// Invertendo arrays: reverse

console.log("arr1 normal: ", arr1);

const arr1Invertido = arr1.reverse()

console.log("arr1 invertido", arr1Invertido);


