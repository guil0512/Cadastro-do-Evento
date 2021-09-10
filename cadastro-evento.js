let dataAtual = '2021-09-09';
let dataEvento = '2021-09-10';
let idadeParticipante = 18;
let quantParticipante = 100;

if (dataEvento < dataAtual) {
    console.log('Data Inválida.');
} else if (idadeParticipante < 18) { 
    console.log('Cadastro não permitido menor de 18 anos.');
}else if (quantParticipante > 100) { 
    console.log('Cadastro não permitido mais de 100 participantes cadastrados.');
}else if (dataEvento > dataAtual && idadeParticipante >= 18 && quantParticipante <= 100) { 
    console.log('Permitir Cadastro.');
}else {
    console.log('Cadastro não é permitido.');