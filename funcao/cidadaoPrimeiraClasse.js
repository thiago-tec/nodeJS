//criar funcao de forma literal
function fun1(){}

//armazenar funcao na variavel
const fun2 = function(){}

//armazenar funcao no array
const array = [function(a,b){return a + b},fun1,fun2]
console.log(array[0]( 2 , 3 ))

//armazenar funcao em um atributo de objeto
const obj = {}
obj.falar = function (){return 'opa'}
console.log(obj.falar())

//passar funcao como parametro para outra funcao
function run(fun){
    fun()
}
run(function(){console.log('executando')})

//uma funcao pode retornar/conter uma funcao
function soma(a,b){
   return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)
const mais = soma(2,3)
mais(4)