//funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2,3)
imprimirSoma()
imprimirSoma(2)
imprimirSoma(2,3,56,78,90,89)

//funcao com retorno
function soma(a,b = 0){
    return a+b
}

console.log(soma(2,3))
console.log(soma(1))