// novo recurso do ES2015

const pessoa = {
    nome: "Ana",
    idade: 5,
    endereco:{
        Logradouro: "Rua ABC",
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)
// é possovel abreviar utilizando o metodo abaixo

const { nome: n, idade: i } = pessoa
console.log(n, i)