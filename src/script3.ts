class Eletronico {
    public nome : string
    public valor : number
    public garantia : string
    public cor : string
}
const eletronico = new Eletronico();

const elNome = eletronico.nome = 'Celular';
const elValor = eletronico.valor = 1200.0
const elGarantia = eletronico.garantia = '1 ano';
const elCor = eletronico.cor = 'Preto';

console.log('Classe Eletronico\n');
console.log(`Nome do eletronico:${elNome}\n`);
console.log(`Valor do Eletronico: ${elValor}\n`);
console.log(`Garantia:${elGarantia}\n`);
console.log(`Cor:${elCor}\n`);
