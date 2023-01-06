function calcular(){
    var num = window.document.getElementById('input_tabuada')
    var select = window.document.getElementById('select_num')
    select.innerHTML = ''
 if(num.value.length ==  0){
    alert("Por favor digite um número")
    num.value = 1
}
else{
  var n = Number(num.value)
  for(i=1;i<=10;i++){
    let item = document.createElement('option')
    item.text = `${n} * ${i} = ${n * i}`
    item.value = `tab${i}`
    select.appendChild(item)
  }
}

}