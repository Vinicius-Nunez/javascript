/*function parmimp(n){
    if(n%2==0){
        return 'par'
    }else{
        return 'impar'
    }
    
        
    
}console.log(parmimp(10))*/

/*function soma(n1, n2){// n1=0 faz com que o parametro seja 0 se nenhum valor for passado.
    return n1 + n2
}
console.log(soma(2, 5))*/

/*function fatorial(n){
    let fat = 1
    for(let c =n; c>1; c--){
        fat *= c
    }
    return fat
}
    console.log(fatorial(5))*/
//Recursiva
function fatorial(n){
    if(n == 1){
        return 1
    }else{
        return n * fatorial(n-1)// faz o fatorial de n-1 primeiro e depois faz a multiplicaçao de n.
    }
}
console.log(fatorial(5))