function selecionarProduto(numero) {
    var escolhaItem = numero;

    if (escolhaItem === 0) {
        return ('refrigerante')
    }

    if (escolhaItem === 1) {
        return ("chocolate")
    }
    if (escolhaItem === 2) {
        return ("salgadinho")
    }
    if (escolhaItem === 3) {
        return ("bigbig")
    }
    else {
        return new Error("opção invalida")

    }
}

module.exports.selecionarProduto = selecionarProduto


function selecionarNota(numero) {
    var selecionar = numero;

    if (selecionar === 2) {
        return (2)
    }
    if (selecionar === 5) {
        return (5)
    }
    if (selecionar === 10) {
        return (10)
    }
    if (selecionar === 20) {
        return (20)
    }
    else {
        return new Error("opção invalida")

    }
}

module.exports.selecionarNota = selecionarNota

function validarPagamento(num1, produto) {


    if (num1 < produto) {
        return new Error("saldo insuficiente")
    }

}

module.exports.validarPagamento = validarPagamento


function devolverTroco(num1, produto){
        troco = num1 - produto
        return troco
    
}

module.exports.devolverTroco = devolverTroco