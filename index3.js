var agora = new Date()
var hora = agora.getHours() 
var minu = new Date()
var minus = minu.getMinutes()
console.log(` agora sao exatamente ${hora} horas:${minus} minutos`)
if(hora>=7 && hora<12){
    console.log(`bom dia`)
}else if(hora >=12 && hora<=18){
    console.log(`boa tarde`)
}else if(hora<6 && hora>=00){
    console.log(`boa madrugada`)
}else{
    console.log(`boa noite!`)
}


