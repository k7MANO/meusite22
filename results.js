var totalinvestido = window.document.getElementById("totalInvestido")
var totalrecebido = window.document.getElementById("totalRecebido")
var totaljuros = window.document.getElementById("jurosTotais")
var totalInvestido = localStorage.getItem("total_investido")
var totalJuros = localStorage.getItem("total_juros")
var resultadoTotal = localStorage.getItem("resultado_total")

var Botaovoltar = window.document.getElementById("btnBack")

Botaovoltar.addEventListener("click", () => {
    location.href = "simulação.html"
})

totalinvestido.innerHTML = "Total Investido" + "<br>" + parseFloat(totalInvestido).toFixed(2)
totalrecebido.innerHTML = "Total recebido" + "<br>" + parseFloat(resultadoTotal).toFixed(2)
totaljuros.innerHTML = "Total de juros" + "<br>" + parseFloat(totalJuros).toFixed(2)