//par nome/valor

const saudacao = 'opa' // contexto léxico 1

function exec(){
    const saudacao= 'falaaaaa' //contexto léxico 2
    return saudacao
}

//objetos são grupos aninhados de chave/valor

const Cliente = {
    nome: 'marqs',
    peso: 120,
    endereco:{
        logradouro: 'rua em algum lugar de osasco',
        numero: 123

    }
}

console.log(saudacao)
console.log(exec())
console.log(Cliente)