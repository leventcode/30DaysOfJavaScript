let result = parseInt(prompt('2 + 5 kaç yapar?'))



if (result === 7 ){
  console.log('doğru cevap verdin ')
}   else {
  console.log('hatalı cevap verdin doğru cevap 7 olmalıydı')
}
  
console.log(
    result === 7 ? 'DOĞRU CEVAP' : 'YANLIŞ CEVAP'
)


switch(result) {

    case  7 : 
 console.log('Doğru cevap - switch')
    break

    case  5 :
      console.log('cevap hatalı ama aferin')
    break

    default:
      console.log('Hatalı cevap -switch')

}


