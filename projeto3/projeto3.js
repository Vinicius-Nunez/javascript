function contar(){
    let ini =document.getElementById('inicio')
    let fim =document.getElementById('fim')
    let pass =document.getElementById('passos')
    let res = document.getElementById('resu')

    if(ini>fim || ini.value.length == 0 || fim.value.length == 0){
        window.alert('Revise os dados')
    }else{
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pass.value)
        if(p<=0){
            window.alert('Passo Invalido! Considerando Passo 1')
            p = 1
        }
        if(i<f){
            for(let c = i; c<= f; c+=p){
            res.innerHTML += `${c} \u{1F449}`
            }
            res.innerHTML += `\u{1F3C1}`
        }else{
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449} `
            } res.innerHTML += `\u{1F3C1}`
        }   
    
    }
}
