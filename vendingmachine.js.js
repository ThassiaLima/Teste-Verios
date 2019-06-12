function app() {
    let moedas = [
        { valorMoeda: 1, quantidade: 10 },       //#0
        { valorMoeda: 0.5, quantidade: 10 },     //#1
        { valorMoeda: 0.25, quantidade: 10 },    //#2
        { valorMoeda: 0.10, quantidade: 10 },    //#3
        { valorMoeda: 0.05, quantidade: 10 },    //#4
        { valorMoeda: 0.01, quantidade: 10 }     //#5
    ]

    const PRODUTOS = [
        { descricao: 'Refri', valor: 3.50 },
        { descricao: 'Chocolate', valor: 4.00 },
        { descricao: 'Salgadinho', valor: 3.75 },
        { descricao: 'BigBig', valor: 2.00 },
    ]

    mostrarItem()

    selecionarItemFlag = false
    while (!selecionarItemFlag) {
        var opcao = Number(prompt("Digite 0 para refrigerante, 1 para chocolate, 2 para salgadinho e 3 para bigbig. "))

        if (opcao === 0 || opcao === 1 || opcao === 2 || opcao === 3) {
            selecionarItemFlag = true
        } else {
            alert("Por favor, digite um valor válido de 0-3")
        }
    }
    
    var idProduto = opcao;
    let produtoValor = PRODUTOS[idProduto].valor 

    efetuarPagamento(produtoValor, moedas)
}


function mostrarItem() {
    alert("Olá! bem vindo a sua maquina de vendas. Refrigerante: R$ 3.50, Chocolate: R$ 4.00, salgadinho: R$ 3.75, bigbig R$ 1.99. Clique em Ok para selecionar produto")
}

function efetuarPagamento(produtoValor, moedas) {
    let notaInserida = Number(prompt("Favor inserir uma nota para efetuar pagamento (notas válidas: 2,5,10 e 20)."))
    let notasvalidas = [2, 5, 10, 20]

    pagamentoFlag = false
    while (!pagamentoFlag) {


        if (notasvalidas.includes(notaInserida)) {
            pagamentoFlag = true
        } else {
            alert("Nota inválida, favor entrar com uma nota de 2,5,10 ou 20.")
            return efetuarPagamento(produtoValor, moedas);
        }
        if (notaInserida < produtoValor) {
            alert("Saldo insuficiente")
            return efetuarPagamento(produtoValor, moedas);

        }
        if (notaInserida == produtoValor) {
            alert("Você não possui troco para ser recebido")
            return

        }
    }

    let troco = notaInserida - produtoValor
    let qtdMoedas = [];

    for (i = 0; i < 5; i++) {
        let numeroMoedas = parseInt(troco / moedas[i].valorMoeda)
        let qtdMoedasDisponivel = moedas[i].quantidade

        if (numeroMoedas > qtdMoedasDisponivel) {
            numeroMoedas = qtdMoedasDisponivel

        }
        let valorPago = numeroMoedas * moedas[i].valorMoeda
        let sobraValor = troco -= valorPago

        let nota = ""
        switch (i) {
            case 0:
                nota = '1 real'
                break;
            case 1:
                nota = '50 centavos'
                break;
            case 2:
                nota = '25 centavos'
                break;
            case 3:
                nota = '10 centavos'
                break;
            case 4:
                nota = '5 centavos'
                break;
            default:
                nota = '1 centavo'
                break;
        }
        qtdMoedas.push(`Você recebeu ${numeroMoedas} moedas de ${nota} `)
        moedas[i].quantidade -= numeroMoedas


        if (sobraValor === 0) {
            break
        }

    }

    alert(qtdMoedas)

}
