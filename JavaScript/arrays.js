// > Arrays

// - Como criar um array?
let arr = ["Gustavo", 24, 1.77, true, 15, "Walisson"]
console.log(arr);

// - Como acessar os elementos do array?

console.log("Primeiro elemento: ", arr[0]);
console.log("Segundo elemento: ", arr[1]);
console.log("Terceiro elemento: ", arr[2]);
console.log("Quarto elemento: ", arr[3]);

// - Como obter o tamanho do array?

console.log("Tamanho do array: ", arr.length);

// - Percorrendo arrays
console.clear();
for (let i = 0; i < arr.length; i++){
    console.log(arr[i]);
}
console.clear();

for (let elements of arr){
    console.log(elements);
}

console.clear();

for (let indexes in arr){
    console.log(indexes, arr[indexes]);
}
