function calcular() {
    var incio = Number(input_inicio.value)
    var fim = Number(input_fim.value)
    var passo = Number(input_passo.value)
    var resultado = document.getElementById('res')
    resultado.innerHTML = ''

    if (incio == 0 || fim == 0 || passo == 0 ) {
        resultado.innerHTML = `<p>Impossível contar!</p>`
    }
    else if (passo == 0) {
        alert("Passo inválido! Considerado PASSO 1")
        passo = 1
    }
    else{
        if(incio <fim){
    for (count = incio; count <= fim; count+= passo) {
        resultado.innerHTML += `👉${count}`
  } 
      }
      else{
        for(e= incio; e >= fim; e-= passo){
            resultado.innerHTML += `👉${e}`
        }
      }

    resultado.innerHTML += `🏁`

    }
}