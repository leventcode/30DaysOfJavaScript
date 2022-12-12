  //  let name = Array(5).fill(5)

    //console.log(name)

    //let name2 = ['levent',20, 2002, 'Karabacakoglu']
    //name2 [0]= 'ahmet'
    //console.log(name2)

    //console.log('levent'.split(''))
 
    //let array1 =[1, 2, 3]
    //let array2 =[4, 5, 6]

    //let result = array1.concat(array2, 10 ,11 ,12)
    //console.log(result)


    //let names = ['tayfun', 'mehmet', 'ahmet']
    //let names2 = 'tayfun'.split('')
    //console.log(Array.isArray(names))

    //console.log(names.toString())


//const numbers = [1, 2, 3, 4, 5]
//numbers.reverse()

//console.log(numbers)

//console.log('levent'.split('').reverse().join(''))

let result = parseInt(prompt('2 + 5 kaç yapar?'))



if (result === 7 ){
  console.log('doğru cevap verdin ')

}   else if(result === 6)
{
    console.log('cevap 6 yazıldı')

  } else 
  {
    console.log('hatalı cevap verdin doğru cevap 7 olmalıydı')
  }
  
console.log(
    result === 7 ? 'DOĞRU CEVAP' : 'YANLIŞ CEVAP'
)


switch(result) {

    case  7 : 
 console.log('Doğru cevap - switch')
    break

    case  6 :
      console.log('cevap hatalı ama aferin')
    break

    default:
      console.log('Hatalı cevap -switch')

}



