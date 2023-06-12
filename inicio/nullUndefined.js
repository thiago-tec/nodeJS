let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(valor)

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined//zerou com undegined, melhor evitar !
console.log(!!produto.preco)

console.log(produto)

produto.preco = null//zerou com null, melhor jeito de zerar !
console.log(!!produto.preco)

console.log(produto)

