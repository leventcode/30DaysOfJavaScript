 let name = 'levent'
 let surname = 'karabacakoglu'

 function letsLearnScope(){
    console.log(name, surname)
    if(true){
            let name='Gökhan'
            let surname='kandemir'
            console.log(name, surname)
    }
    console.log(name, surname)
 }
 letsLearnScope()
 console.log(name, surname)

 for (let i = 1; i<= 5 ; i++){
    console.log('i', i)
 }
 


