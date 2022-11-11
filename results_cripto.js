var valor;
var volatil = Math.floor(Math.random() * (6 - 1 + 1)) + 1

switch(volatil) {
    case 1: valor = 6000
    break
    case 2: valor = 4520
    break
    case 3: valor = 7510
    break
    case 4: valor = 8612
    break
    case 5: valor = 3200
    break
    case 6: valor = 5000 //valor médio ou neutro
    break
}


var totalinvestido = window.document.getElementById("totalInvestido")
var totalrecebido = window.document.getElementById("totalRecebido")
var totaljuros = window.document.getElementById("jurosTotais")
var valorCompra = window.document.getElementById("valorCompra")
var valorVenda = window.document.getElementById("valorVenda")

var totalInvestido = localStorage.getItem("total_investido")
var totalJuros = localStorage.getItem("total_juros")
var resultadoTotal = localStorage.getItem("resultado_total")
var valor_moeda = localStorage.getItem("valor_moeda")

var Botaovoltar = window.document.getElementById("btnBack")

Botaovoltar.addEventListener("click", () => {
    location.href = "cripto.html"
})

valorCompra.innerHTML = "Valor Compra" + "<br>" + valor_moeda
totalinvestido.innerHTML = "Total Investido" + "<br>" + parseFloat(totalInvestido).toFixed(2)
totalrecebido.innerHTML = "Total recebido" + "<br>" + parseFloat(resultadoTotal).toFixed(2)
totaljuros.innerHTML = "Total de juros" + "<br>" + parseFloat(totalJuros).toFixed(2)
valorVenda.innerHTML = "Valor de Venda" + "<br>" + valor