function carregar(){
var msg = window.document.getElementById('puxa')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
msg.innerHTML = `agora sao ${hora}:${minutos} minutos`

if(hora>=0 && hora<12){
    img.src='fotos/bom_dia.jpg'
    document.body.style.background = '#e7d636'

}else if( hora >=12 && hora <18){
    img.src='fotos/boa_tarde.jpg'
    document.body.style.background = 'rgb(255, 183, 135)'

} else {
    img.src='fotos/boa_noiitee.jpg'
    document.body.style.background = '#25485C'
}

}