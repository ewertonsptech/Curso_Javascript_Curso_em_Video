function carregar(){
var img = document.getElementById('foto')
var data = new Date()
var hora = data.getHours()

var resultado = document.getElementById('mensagem')

resultado.innerHTML = `Agora são ${hora} horas`

if(hora >=0 && hora <12){
    img.innerHTML = `<img src="Img/manha.jpg">`
    window.document.body.style.background = `#eaee10` 
}
else if(hora >12 && hora <18){
   img.innerHTML = `<img src="Img/tarde.jpg">`
   window.document.body.style.background = `rgb(3, 221, 119)` 
}
else{
    img.innerHTML = `<img src="Img/noite.jpg">`
    window.document.body.style.background = `#000201`
}
 }