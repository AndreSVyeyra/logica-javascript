alert('Seja bem vindo ao meu programa!');
let nome = prompt('Qual é o seu nome ?');
let anos = Number(prompt('Quantos anos você tem?'));
const cidade = prompt('Qual a sua cidade de origem?');
let linguagemProgramacao = prompt('Qual a linguagem de programação você está estudando? ');

console.log('Olá ' + nome + ' você tem ' + anos + ' anos mora em '+ cidade +' e já está aprendendo ' + linguagemProgramacao + ' !');


let analiseLinguagemEscolhida = Number(prompt('Você gosta de estudar ' + linguagemProgramacao + ' ? \n (1) para SIM \n (2) para Não'));

if (analiseLinguagemEscolhida === 1){
    console.log('Muito bom! Continue estudando e você terá muito sucesso.');
}else if (analiseLinguagemEscolhida === 2){
    console.log('Ahh que pena... Já tentou aprender outras linguagens? ');
}else{
    alert('Digite a opção correta! \n Por favor recarregar a página!')
}