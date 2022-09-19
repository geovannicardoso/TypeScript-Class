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
console.log('Classe Cliente');
console.log("Qual o nome do cliente: ".concat(nomeClient, "\n"));
console.log("Qual a idade do cliente: ".concat(idadeClient, "\n"));
console.log("Qual o peso do cliente: ".concat(pesoCliente, "\n"));
console.log("Qual \u00E1 altura do cliente: ".concat(alturaCliente, "\n"));
var Aviao = /** @class */ (function () {
    function Aviao() {
    }
    return Aviao;
}());
var aviao = new Aviao();
var pasNome = aviao.nome = 'Geovanni';
var pasAssento = aviao.assento = '42';
var pasIdade = aviao.idade = '25';
var pasSexo = aviao.sexo = 'Masculino';
var pasMenorIdade = aviao.menorIdade = false;
console.log('Classe Avião');
console.log("Qual o nome do passageiro: ".concat(pasNome, "\n"));
console.log("Qual a idade do passageiro: ".concat(pasIdade, "\n"));
console.log("Qual o sexo do passageiro: ".concat(pasSexo, "\n"));
console.log("Qual o assento do passageiro: ".concat(pasAssento, "\n"));
console.log("Passageiro e menor de idade: ".concat(pasMenorIdade, "\n"));
var Eletronico = /** @class */ (function () {
    function Eletronico() {
    }
    return Eletronico;
}());
var eletronico = new Eletronico();
var elNome = eletronico.nome = 'Celular';
var elValor = eletronico.valor = 1200.0;
var elGarantia = eletronico.garantia = '1 ano';
var elCor = eletronico.cor = 'Preto';
console.log('Classe Eletronico\n');
console.log("Nome do eletronico:".concat(elNome, "\n"));
console.log("Valor do Eletronico: ".concat(elValor, "\n"));
console.log("Garantia:".concat(elGarantia, "\n"));
console.log("Cor:".concat(elCor, "\n"));
var Funcionario = /** @class */ (function () {
    function Funcionario() {
    }
    return Funcionario;
}());
var funcionario = new Funcionario();
var fuNome = funcionario.nome = 'Geovanni';
var fuIdade = funcionario.idade = 25.0;
var fuFunção = funcionario.função = 'operario';
var fuSexo = funcionario.sexo = 'Masculino';
console.log('Classe funcionario\n');
console.log("Nome do funcionario: ".concat(fuNome, "\n"));
console.log("Idade do funcionario: ".concat(fuIdade, "\n"));
console.log("Fun\u00E7\u00E3o: ".concat(fuFunção, "\n"));
console.log("Sexo: ".concat(fuSexo, "\n"));
