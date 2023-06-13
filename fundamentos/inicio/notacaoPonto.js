console.log(Math.ceil(6.7))

const obj1 = {}
console.log(typeof obj1)
obj1.nome = 'diego'
obj1['nome'] = 'renan'
console.log(obj1.nome)

function Obj(nome){
    this.nome = nome
}

//console.log( new Obj('thiago'))
const obj2 = new Obj('thiago')
const obj3 = new Obj('dudu')

console.log(obj2.nome)
console.log(obj3.nome)
