let expect = require("chai").expect;

let vmachine = require("../src/vmachine");

describe("Deve retornar o produto desejado", ()=>{
    it("Se usuário digitar 0 deve retornar refrigerante", ()=>{
        expect(vmachine.selecionarProduto(0)).to.be.equal("refrigerante")
    })
    it("Se usuário digitar 1 deve retornar chocolate", ()=>{
        expect(vmachine.selecionarProduto(1)).to.be.equal("chocolate")
    })
    it("Se usuário digitar 2 deve retornar salgadinho", ()=>{
        expect(vmachine.selecionarProduto(2)).to.be.equal("salgadinho")
    })
    it("Se usuário digitar 2 deve retornar salgadinho", ()=>{
        expect(vmachine.selecionarProduto(3)).to.be.equal("bigbig")
    })
    it("Se usuário digitar qualquer opção que não seja 0,1,2 ou 3 deve retornar erro", ()=>{
        expect(vmachine.selecionarProduto(9)).to.be.an("error");
    })
    it("Se usuário digitar qualquer opção que não seja 0,1,2 ou 3", ()=>{
        expect(vmachine.selecionarProduto("n")).to.be.an("error");
    })
}) 

describe("Deve retornar nota escolhida", ()=>{
    it("Se usuário digitar 2 deve retornar 2", ()=>{
        expect(vmachine.selecionarNota(2)).to.be.equal(2)
    })
    it("Se usuário digitar 5 deve retornar 5", ()=>{
        expect(vmachine.selecionarNota(5)).to.be.equal(5)
    })
    it("Se usuário digitar 10 deve retornar 10", ()=>{
        expect(vmachine.selecionarNota(10)).to.be.equal(10)
    })
    it("Se usuário digitar 20 deve retornar 20", ()=>{
        expect(vmachine.selecionarNota(20)).to.be.equal(20)
    })
    it("Se usuário digitar qualquer opção que não seja 2,5,10 ou 20", ()=>{
        expect(vmachine.selecionarNota(3)).to.be.an("error");
    })
    it("Se usuário digitar qualquer opção que não seja 2,5,10 ou 20", ()=>{
        expect(vmachine.selecionarNota("m")).to.be.an("error");
    })
}) 

describe("Deve retornar erro quando nota for menor do que o valor do produto escolhido", ()=>{
    it("Se escolher nota de 2 reais e selecionar chocolate deve retornar erro ", ()=>{
        expect(vmachine.validarPagamento(2,4)).to.be.a("error")
    })
})

describe("Deve retornar troco", ()=>{
    it("Se escolher nota de 10 reais e selecionar chocolate deve retornar R$ 6,00 de troco ", ()=>{
        expect(vmachine.devolverTroco(10,4)).to.be.equal(6)
    })
})
