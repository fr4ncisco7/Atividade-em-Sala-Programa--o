const notas = [5.00, 7.00, 8.50];
var media = (notas[0] + notas[1] + notas[2]) / 3  ;
console.log('Primeira nota:' + notas[0]);
console.log('Segunda nota:' + notas[1]);
console.log('Terceira nota:' + notas[2]);
if (media >= 7) {
    console.log('A média foi ' + media.toFixed(2) + ': ✅APROVADO!');
}else if (media < 7){;
    console.log('A média foi ' + media.toFixed(2) + ': ❌REPROVADO!');
}
var maiorNota = notas[0];
var menorNota = notas[0];
for (let i = 0; i < notas.length; i+=1){
    if (notas[i] > maiorNota){
        maiorNota = notas[i]
    }
    if (notas[i] < menorNota){
        menorNota = notas[i]
    }
}
console.log('A maior nota foi: ' + maiorNota);
console.log('A menor nota foi: ' + menorNota);