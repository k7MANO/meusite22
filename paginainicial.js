
var botao = window.document.getElementById("btnCalc")
var res = window.document.getElementById("res")

botao.addEventListener("click", resposta)

function resposta() {
var acrescimo = window.document.getElementById("acrescimo").value //acrescimo ao mes
var taxa = 1.13/100//taxa em mes
var tempo =  window.document.getElementById("tempo").value //tempo em mes
var capital = window.document.getElementById("capital").value

var continha = capital*[(1 + taxa)**tempo]
var resultado = acrescimo*[(1+taxa)**tempo - 1]/taxa + continha

var totalinvestido = parseFloat(capital) + acrescimo*tempo
var totalJuros = resultado - totalinvestido

localStorage.setItem("total_investido", totalinvestido)
localStorage.setItem("total_juros", totalJuros)
localStorage.setItem("resultado_total", resultado)

location.href = "resultado.html"

}
