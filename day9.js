// const a = s1 => {
//     const b = s2 => {
//         const c = s3 => {
//             return s1+s2+s3
//         }
//         return c
//     }
//     return b
// }

// //console.log(a(5)(10)(20))

// const numbers = [1,3,5,7,9]
// let total = 0
// numbers.forEach(number => total += number)
// console.log(total)


// function sayHello(){
//     console.log('hello!')
// }

// const interval = setInterval(sayHello, 1000)

// const timeout = setTimeout(()=> {
//     clearInterval(interval)
//     console.log('interval işlemi iptal edildi')

// },5000)

// setTimeout(() => {
//     clearTimeout(timeout)
//     console.log('timeout işlemi iptal edildi interval devam edecek')
// },3000)

// let users = [ 
//     {
//         id: 1,
//         name: 'Levent',
//         age:20,
//         gender : 1

// },
// {
//     id : 2,
//     name:'ahmet',
//     age: 21,
//     gender: 1
// },

// {

//     id :3,
//     name:'mehmet',
//     age : 28,
//     gender : 1

// },
// {

//     id :3,
//     name:'buse',
//     age : 28,
//     gender: 2

// },

// ]

// users = users.map(user => {
//     if( user.id ==2 ){
//     user.name ='hakan'
//     }
//     return user
// })

// const women =users.filter(user => user.gender==2)
// const men = users.filter(user => user.gender == 1 && user.age < 23 )

// console.log(men)
