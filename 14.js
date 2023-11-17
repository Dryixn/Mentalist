//Número do computador
var numeroSecreto = parseInt(Math.random() * 1001) + 1;

//Quantos palpites foram dados
var chutes = 0;

//Laço de repetiçao para verificação se teve acerto ou não
while (numeroJogador != numeroSecreto) {
  
  //A cada loop, aumenta 1 da variável chutes
  chutes += 1;
  
  //Verificando se o jogador atingiu o máximo de palpite
  if (chutes == 21) {
    alert('Acabou suas tentativas! O número secreto era ' + numeroSecreto + '\nTente novamente. Reinicie o jogo');
    break;
  } 
  
  //Número que o jogador chutou
  var numeroJogador = prompt('Digite o número entre 1 e 1000');
  
  //Verificação se o jogador cancelou a ação
  if (numeroJogador == null) {
    break
  }
  
  //Verificação se o jogador acertou ou não o número do computador
  if (numeroJogador == numeroSecreto) {
    alert('Acertou! Foram dados ' + chutes + ' palpites.');
  } else if (numeroJogador > numeroSecreto) {
    alert('Errou! O número secreto é menor do que ' + numeroJogador + '.');
    alert('Você tem ainda ' + (20 - chutes) + ' palpites para dar.');
  } else if (numeroJogador < numeroSecreto) {
      alert('Errou! O número secreto é maior do que ' + numeroJogador + '.');
      alert('Você tem ainda ' + (20 - chutes) + ' palpites para dar.');
  }
  
}
