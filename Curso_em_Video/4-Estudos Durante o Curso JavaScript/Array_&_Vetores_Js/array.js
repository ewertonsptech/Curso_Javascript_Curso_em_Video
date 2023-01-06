var num = [5 , 8 , 4 , 3 , 12, 89 , 90 , 112 , 989 , 657  , 111]
num[3] = 6
num.push(7)

num.sort()
console.log(`O vetor tem ${num.length} posições`)
console.log(`Temos no vetor os seguintes números ${num}`)

for(pos = 0; pos < num.length;pos++){
    console.log(`A posição ${pos} tem o número ${num[pos]}`)
}

for(var prop in num){
    confirm.log(`A posição ${prop} tem o número ${num[prop]}`);
}

var pos = num.indexOf(8)


if(pos == -1){
    console.log(`O valor está na posição ${pos} e  não foi encontrado`)
}
else{
    console.log(`o valor está na posição ${pos}`)
}