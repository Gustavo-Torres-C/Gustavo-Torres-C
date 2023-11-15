//  Operadores Booleanos

// Igualdade:           == (ou ===)
// Desigualdade:        != (ou !==)
// Maior que            >
// Maior ou igual:      >=
// Menor que:           <
// Menor ou igual       <=

const numero = 10;

console.log(numero == 10);
console.log(numero > 20);

console.log(numero == 10);
console.log(numero === "10");

console.log(10 !== "10");

//  Conjunções lógicas
console.clear()
// AND  => &&

let idade = 26;
let tenhoCNH = true;

const possoDirigir = idade >= 18 && tenhoCNH === true;

console.log("Posso dirigir?", possoDirigir);

// OR   => ||

idade = 40;

const votoFacultativo = idade >= 18 || idade <= 70;

console.log("preciso votar?", votoFacultativo);

// NOT  => !

const estouGostandoDoCurso = false;
console.log(!estouGostandoDoCurso);