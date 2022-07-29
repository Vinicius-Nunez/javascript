function Calcular() {
    var txtv = window.document.querySelector('input#txtvel')
    var res= window.document.querySelector('div#res')
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${vel} km`
    if(vel>60){
        res.innerHTML += '<p>voce esta  <strong>Multado</strong> por execo de velocidade</p> '
    }else{
        res.innerHTML += '<p>Dirija com seguranca</p>'
    }
    
    
}