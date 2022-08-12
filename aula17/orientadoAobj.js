let amigo = {nome:'Vinicius', sexo: 'M', peso: 113, engordar(p=0){
    console.log('engordou')
    this.peso += p

}}
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)