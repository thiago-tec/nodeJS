//armazenando uma funcao em variavel
const imprimirSoma = function(a ,b){
    console.log(a+b)
}

imprimirSoma(2,5)

//armazenando funcao arrow em uma variavel
const soma = (a,b) => {
    return a+b
}

console.log(soma(2,10))

//retorno implícito
const subtracao = (a,b) => a - b

console.log(subtracao(3,2))

const imprimir = a => console.log(a)

imprimir('teste')