function executar() {
    var corpo = document.querySelector("body")
    var mostrar = document.querySelector("#resultado")
    var imagem = document.createElement("img")
    var bloco_img = document.querySelector("#imgn")
    var horas = new Date().getHours()
    var minutos = new Date().getMinutes()
    var segundos = new Date().getSeconds()
    mostrar.innerHTML = ""
    bloco_img.innerHTML = ""
    if (minutos < 10) {
        minutos =  "0" + minutos
    }
    if (segundos < 10) {
        segundos = "0" + segundos
    }
    if (horas < 18 && horas >= 5) {
        corpo.style.backgroundColor = "burlywood"
        imagem.setAttribute("src", "imagens/sol.png")
    } else {
        corpo.style.backgroundColor = "dimgrey"
        imagem.setAttribute("src", "imagens/lua.png")
    }
    mostrar.textContent += `${horas}:${minutos}:${segundos}`
    bloco_img.append(imagem)
}
setInterval(executar,1000)