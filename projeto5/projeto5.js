
var lista = document.getElementById('vetor')
var res= document.getElementById('res')
var valores = []
function adicionar(){
    var num = Number(document.getElementById('valor'))
    if(thenumber(num.value) && !inlista(num, valores)){
        window.alert('tudo ok')

    }else{
        window.alert('valores invalidos ou ja encontrados na lista')
    }
}

function thenumber(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inlista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

