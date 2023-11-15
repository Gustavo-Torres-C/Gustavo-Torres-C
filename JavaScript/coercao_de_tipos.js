// > Coerção (Conversão) de tipos

// - 1. Coerção Explícita (Manual)
const numero = 10;

console.log(numero, typeof numero);

const numeroEmFormatoDeString = String(numero);
console.log(numeroEmFormatoDeString, typeof numeroEmFormatoDeString);

console.log(Number("1321314"));
console.log(parseFloat("23224.234"));
console.log(parseInt("23224.234"));
console.log(Boolean(651561));
console.log(Boolean(0));



// - 2. Coerção Implícita (Automática)

console.clear();

console.log(10 + "1");
console.log("10" - 1);
console.log(10 * "3");
console.log(10 - "asdsa");


let n = 1 + "1"

n= n - 1;

console.log(n);

console.log(2 + 3 + 4 + "5");

console.log("5" + 2 + 3 + 4);

console.log("10" - "4" - "3" - 2 + "5");
