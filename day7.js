
// function multiply(num1, num2){
//    return num1 * num2

// }
// let num1 = 5, 
//     num2 = 2
// let total = multiply(5,2)

// function sumArrayValues(array){
//     let total = 0
//    for (let i = 0; i<array.length; i++){
//     total += array[i]

//    }
// return total

// }
// let dizi = [2,4,6,8,10,20]
// sumArrayValues(dizi)


// console.log('toplam', sumArrayValues(dizi))

function topla(){
    let total = 0
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i]
    }
        return total

}
    
    
console.log(topla(2,5,7,9,10))


const sayHello = function(name){
    return `Hello ${name}`
}

console.log(sayHello('levent'));

(function(){

    console.log('heyyy')

})()

let sayHello2 = (function(name){

        console.log(`Hello ${name}`)
})('Levent')

//normal fonksiyon(regular function)

function hello(){
    return `hello ${name}`

}

// ok fonksiyonu(array function)
const hello2 = (name, surname) =>`hello ${name} ${surname}`



const toplama = (num1,num2, ...numbers) => {
    console.log(numbers)
    console.log(num1)
    console.log(num2)

}
toplama(2,5,7,8,10)


console.log(hello2('SEHER', 'KURU'))



function multiply(num1, num2 = 2){
    return num1 * num2
}

console.log(multiply(10))
console.log(multiply(15, 5))