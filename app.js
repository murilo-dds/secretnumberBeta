alert('Boas vindas ao jogo do número secreto!');
numeroMaximo = 90;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let tentativas = 1;

let guess

while(guess != numeroSecreto) {
    guess = prompt('Escolha um número entre 1 e ' + numeroMaximo);

    if (numeroSecreto == guess)   {
        break
    } else {
        if (guess > numeroSecreto) {
            alert('O número secreto é menor que ' + guess);
        } else {
            alert('O número secreto é maior que ' + guess);
        }
    }//tentativas = tentativas + 1
    tentativas++;
}

let palavratentativa = tentativas > 1? 'tentativas' : 'tentativa'
alert('Você acertou o número secreto! (' + numeroSecreto + ') em ' + tentativas + ' ' + palavratentativa)

//if (tentativas > 1) {
   // alert('Você acertou o número secreto! (' + numeroSecreto + ') em ' + tentativas + ' tentativas');
//}else{
 //   alert('Você acertou o número secreto! (' + numeroSecreto + ') em ' + tentativas + ' tentativa');
//}