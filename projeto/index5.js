function carregar(){
var msg = window.document.getElementById('puxa')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var hora = 9
msg.innerHTML = `agora sao ${hora} horas`

if(hora>=0 && hora<12){
    img.src='fotos/bom_dia.jpg'
    document.body.style.background = '#d69f28cc'

}else if( hora >=12 && hora <18){
    img.src='fotos/boa_tarde.jpg'
    document.body.style.background = ''

} else {
    img.src='fotos/boa_noiitee.jpg'
    document.body.style.background = 'pink'
}

}