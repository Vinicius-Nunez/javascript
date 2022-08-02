function verificador(){
     var data = new Date()
    var ano = data.getFullYear()
    var nasci = window.document.getElementById('Nascimento')
    var res = window.document.getElementById('foto')
    if(nasci.value.length == 0 || nasci.value >ano){
        alert('verifiqueos dados')
    }else{
        var sexo = window.document.getElementsByName('nomem')
        var idade = ano - Number(nasci.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        
        
        } 
            if (sexo[0].checked) {
                genero = 'Homem'
                if (idade >= 0 && idade < 10) {
                    img.setAttribute('src', 'fotos/menino_0.jpg')
                    img.style.borderRadius = '50%'
                    img.style.margin = 'auto'
                    img.style.width = '250px'
                    img.style.height = '250px'
    
                } else if (idade <= 21) {
                    img.setAttribute('src', 'fotos/menino_1.jpg')
                    img.style.borderRadius = '50%'
                    img.style.margin = 'auto'
                    img.style.width = '250px'
                    img.style.height = '250px'
                } else if (idade < 50) {
                    img.setAttribute('src', 'fotos/homem_2.jpg')
                    img.style.borderRadius = '50%'
                    img.style.margin = 'auto'
                    img.style.width = '250px'
                    img.style.height = '250px'
                } else {
                    img.setAttribute('src', 'fotos/idoso_3.jpg')
                    img.style.borderRadius = '50%'
                    img.style.margin = 'auto'
                    img.style.width = '250px'
                    img.style.height = '250px'
                }
                } else if (sexo[1].checked) {
                    genero = 'Mulher'
                    if (idade >= 0 && idade < 10) {
                        img.setAttribute('src', 'fotos/menina_0.jpg')
                        img.style.borderRadius = '50%'
                        img.style.margin = 'auto'
                        img.style.width = '250px'
                        img.style.height = '250px'
                    } else if (idade <= 21) {
                        img.setAttribute('src', 'fotos/menina_1.jpg')
                        img.style.borderRadius = '50%'
                        img.style.margin = 'auto'
                        img.style.width = '250px'
                        img.style.height = '250px'
                    } else if (idade < 50) {
                        img.setAttribute('src', 'fotos/mulher_2.jpg')
                        img.style.borderRadius = '50%'
                        img.style.margin = 'auto'
                        img.style.width = '250px'
                        img.style.height = '250px'
                    } else {
                        img.setAttribute('src', 'fotos/idosa_3.jpg')
                        img.style.borderRadius = '50%'
                        img.style.margin = 'auto'
                        img.style.width = '250px'
                        img.style.height = '250px'
                    }
                }
                res.innerHTML = `Detectamos ${genero} com ${idade} anos`
                res.appendChild(img)
        }
        
    
        
 


    