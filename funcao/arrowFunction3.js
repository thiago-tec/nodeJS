let comparaComThis = function(param){
    console.log(this === param)
}
console.log(this === module.exports)
console.log(this === this)
console.log(this === global)
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)
 
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)