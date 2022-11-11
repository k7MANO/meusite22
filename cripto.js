var botao = window.document.getElementById("btnCalc")
var res = window.document.getElementById("res")
var valor_html = window.document.getElementById("criptoValor")

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

valor_html.innerHTML = '<img src="https://cdn-icons-png.flaticon.com/512/2391/2391255.png"alt="criptomoeda" id="imagemcripto"></img>' + "$" + valor

botao.addEventListener("click", resposta)

function resposta() {
var acrescimo = window.document.getElementById("acrescimo").value //acrescimo ao mes
var taxa =  5/100//taxa em mes
var tempo =  window.document.getElementById("tempo").value //tempo em mes
var capital = window.document.getElementById("capital").value

var continha = capital*[(1 + taxa)**tempo]
var resultado = acrescimo*[(1+taxa)**tempo - 1]/taxa + continha

var totalinvestido = parseFloat(capital) + acrescimo*tempo
var totalJuros = resultado - totalinvestido

if(resultado < 5000) {
    alert("voce recebeu prejuizo")
} else {
    alert("voce lucrou")
}

localStorage.setItem("total_investido", totalinvestido)
localStorage.setItem("total_juros", totalJuros)
localStorage.setItem("resultado_total", resultado)
localStorage.setItem("valor_moeda",valor)
location.href = "resultado_cripto.html"

}