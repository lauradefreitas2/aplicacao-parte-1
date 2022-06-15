// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:

// a maior e a menor altura do grupo;
// a média de altura das mulheres;
// o número de homens.


// const pessoa = [
//     {
//         altura:1.82,
//         sexo:"M"
//     },
//     {
//         altura:1.75,
//         sexo:"F"
//     }
// ];

// console.log( pessoa[0].altura 

// var i, altura, sexo, maioralt = 0, menoralt = 0, mulh = 0, hom = 0, mediamulh = 0, contamulh = 0, contahom = 0;

// for (i = 1; i <= 15; i++) {
//     altura = parseInt(prompt("Informe sua altura[" + i + "]:"));
//     sexo = prompt("Sexo: M ou F:");


//     if (i == 1) {
//         menoralt = altura;
//     } if (altura > maioralt) {
//         maioralt = altura;
//     } if (altura < menoralt) {
//         menoralt = altura;
//     } if (sexo == 'F') {
//         mulh += altura;
//         contamulh++;
//     } else if (sexo == 'M') {
//         hom += altura;
//         contahom++;
//     }
// }
// mediamulh = mulh / contamulh;
// alert("A maior altura é: " + maioralt);
// alert("A menor altura é: " + menoralt);
// alert("A média das mulheres é: " + mediamulh);
// alert("O número de homens é: " + contahom);


const pessoa = [
    {
        altura:1.82,
        sexo:"F"
    },
    {
        altura:1.75,
        sexo:"F"
    },
    {
        altura:1.55,
        sexo:"M"
    },
    {
        altura:1.35,
        sexo:"M"
    }
];

//console.log( pessoa[0].altura );

let menorAltura = 100;
let maiorAltura = 0;

pessoa.forEach(function (p) {
    //console.log(p.altura)
    if(p.altura < menorAltura){
        menorAltura = p.altura;
    }
});
//console.log(menorAltura);

let media = 0;
let qtdm  = 0;
for (let i = 0; i < pessoa.length; i++) {
    if(pessoa[i].sexo == "F"){
        qtdm++;
        media = pessoa[i].altura + media;
    }
}
console.log(qtdm)
media = media / qtdm;
console.log(media);

