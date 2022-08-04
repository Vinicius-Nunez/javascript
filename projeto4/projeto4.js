function tabuada(){
    var num =document.getElementById('tabua')
    var tab = document.getElementById('seltab') 
    if(num.value.length==0 ){
        window.alert('Revise os dados')
    
    
    }else{
        var n = Number(num.value)
        var m = 1
        tab.innerHTML = ''
        while(m<=10){
            let item = document.createElement('option')
            item.text = `  ${n} x ${m} = ${n*m}  `
            tab.appendChild(item)
            m++
        }
    }
}