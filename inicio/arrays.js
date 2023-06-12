const valores = [7.7 ,8.9 ,6.3,9.2]

console.log(valores[0], valores[3]) //selecionando valores no array pelo index
console.log(valores[4]) //esse valor n existe então irá resultar em 'undefined'

valores[4] = 10 //adicionando mais um valor no array

console.log(valores) //visualizando o array
console.log(valores.length) //mostra o tamanho do array com números

valores.push({id: 3}, false, null,'texto') //também add itens ao array
console.log(valores)

console.log(valores.pop())// ele tira o ultimo valor do array e mostra ele no console
console.log(valores)

delete valores[0] //ele está deletando o primeiro valor e não mostra no console
console.log(valores)

console.log(typeof valores) //ele é um objeto