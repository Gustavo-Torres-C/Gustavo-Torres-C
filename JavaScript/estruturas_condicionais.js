//  > Estruturas condicionais

const idade = 18;

if (idade >= 18){
    console.log("Você é maior de idade");
    } else{
        console.log("Você é menor de idade")
}

// Se media >= 7, aprovado
// Se media < 7, e media >= 5, Recuperação
// Se media < 5, Reprovado

console.clear();

let media= 4.9;

if(media >=7){
    console.log("Aprovado(a)");
} else if(media >=5){
    console.log("Recuperação");
} else{
    console.log("Reprovado(a)");
}