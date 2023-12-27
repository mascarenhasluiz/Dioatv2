function calcularNivel(vitorias, derrotas) {
  const saldoVitorias = vitorias - derrotas;
  let nivel;

  if (vitorias < 10) {
    nivel = 'Ferro';
  } else if (vitorias <= 20) {
    nivel = 'Bronze';
  } else if (vitorias <= 50) {
    nivel = 'Prata';
  } else if (vitorias <= 80) {
    nivel = 'Ouro';
  } else if (vitorias <= 90) {
    nivel = 'Diamante';
  } else if (vitorias <= 100) {
    nivel = 'Lendário';
  } else {
    nivel = 'Imortal';
  }

  return `O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`;
}

// Obter entrada do usuário
const quantidadeVitorias = parseInt(prompt('Digite a quantidade de vitórias:'));
const quantidadeDerrotas = parseInt(prompt('Digite a quantidade de derrotas:'));

// Verificar e exibir resultado
const resultado = calcularNivel(quantidadeVitorias, quantidadeDerrotas);
console.log(resultado);
