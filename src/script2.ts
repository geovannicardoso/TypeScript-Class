class Aviao{
    public nome : string
    public assento : string
    public idade : string
    public sexo : string
    public menorIdade : boolean
}
const aviao = new Aviao();
const pasNome = aviao.nome = 'Geovanni'
const pasAssento = aviao.assento = '42'
const pasIdade = aviao.idade = '25'
const pasSexo = aviao.sexo = 'Masculino'
const pasMenorIdade = aviao.menorIdade = false

console.log(`Qual o nome do passageiro: ${pasNome }\n`);
console.log(`Qual a idade do passageiro: ${ pasIdade}\n`);
console.log(`Qual o sexo do passageiro: ${pasSexo}\n`);
console.log(`Qual o assento do passageiro: ${pasAssento}\n`);
console.log(`Passageiro e menor de idade: ${pasMenorIdade}\n`);