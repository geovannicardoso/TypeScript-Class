var Client = /** @class */ (function () {
    function Client() {
    }
    return Client;
}());
var cliente = new Client();
var nomeClient = cliente.nome = 'Geovanni';
var idadeClient = cliente.idade = 25;
var pesoCliente = cliente.peso = 80;
var alturaCliente = cliente.altura = '1.77';
console.log("Qual o nome do cliente: ".concat(nomeClient, "\n"));
console.log("Qual a idade do cliente: ".concat(idadeClient, "\n"));
console.log("Qual o peso do cliente: ".concat(pesoCliente, "\n"));
console.log("Qual \u00E1 altura do cliente: ".concat(alturaCliente, "\n"));
