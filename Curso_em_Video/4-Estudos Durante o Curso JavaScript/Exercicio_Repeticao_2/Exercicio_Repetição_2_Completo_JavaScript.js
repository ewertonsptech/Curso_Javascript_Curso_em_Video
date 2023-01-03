function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = Number(ano_usuario.value)
    var res = document.getElementById('res')

    if (fano == 0 || fano > ano) {
        alert(`Verifique os dados e tente novamente`)
    }
    else {
        var fsexo = document.getElementsByName('radsex')

        var idade = ano - fano
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')

        if (fsexo[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <10){
      img.setAttribute('src' , 'Criança_Menino.jpg')
            }
            else if(idade <21){
                img.setAttribute('src' , 'Jovem_Homem.jpg')
            }
            else if(idade <50){
                img.setAttribute('src' , 'Homem_adulto.jpg')
            }
            else{
                img.setAttribute('src' , 'Idoso.jpg')
            }
        }
        else if (fsexo[1].checked) {
            genero = 'Mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src' , 'Criança_Menina.jpg')
            }
            else if(idade <21){
                img.setAttribute('src' , 'Jovem_Mulher.jpg')
            }
            else if(idade <50){
                img.setAttribute('src' , 'Mulher_adulta.jpg')
            }
            else{
                img.setAttribute('src' , 'Idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}