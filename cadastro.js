var mensagemnoenvio = document.getElementById("botaoenviar");
mensagemnoenvio.addEventListener("click",clicar)
mensagemnoenvio.addEventListener("mouseout",saiu)
mensagemnoenvio.addEventListener("mouseenter",entrou)

function clicar(){
var mensagemnoenvio = document.getElementById("botaoenviar");
mensagemnoenvio.innerText = "Enviado";
}
function entrou(){
    var mensagemnoenvio = document.getElementById("botaoenviar");
    mensagemnoenvio.innerText = "Clica logo!"
    mensagemnoenvio.style.background = "red"
}
function saiu(){
    var mensagemnoenvio = document.getElementById("botaoenviar");
    mensagemnoenvio.innerText = "Desistiu?"
    mensagemnoenvio.style.background = "green"
}