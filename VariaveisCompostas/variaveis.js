let num = [1,2,3,8,5,6]
num[4]= 'ulala'// cria um elemento expecifico e coloca um valor
num.push('corno')// cria um elemento na ultima pociçao e coloca um valor
num.length// dentro do console.log, mosta quantos vetores tem
num.sort()// ordem numerica/alfabetica

console.log(`${num}`)
for(let n=0;n<num.length;n++){
    console.log(num[n])
}
for(let pos in num){
    console.log(num[pos])
}
let lok =num.indexOf(6)
console.log(lok)// procura se tem o valor dentro do parentese em uma Array e mostra a pociçao/index