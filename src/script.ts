class Client{
    public nome : string
    public idade : number
    public peso : number
    public altura : string
}
const cliente =  new Client();

const nomeClient = cliente.nome = 'Geovanni'
const idadeClient = cliente.idade = 25   
const pesoCliente = cliente.peso = 80
const alturaCliente = cliente.altura = '1.77'
 
console.log ('Classe Cliente');
console.log(`Qual o nome do cliente: ${nomeClient}\n`);
console.log(`Qual a idade do cliente: ${idadeClient}\n`);
console.log(`Qual o peso do cliente: ${pesoCliente}\n`);
console.log(`Qual á altura do cliente: ${alturaCliente}\n`);
 