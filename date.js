const date = new Date()

let year = date.getFullYear(),
    month = date.getMonth(),
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds(),
    dayNumber = date.getDay()

let months = [
    'Ocak',
    'Şubat' ,
    'Mart' ,
    'Nisan' ,
    'Mayıs' ,
    'haziran' ,
    'Temmuz' ,
    'Ağustos' ,
    'Eylül' ,
    'Ekim' ,
    'Kasım' ,
    'Aralık' 
]

let days =[
    'pazar',
    'pazartesi',
    'salı',
    'çarşamba',
    'perşembe',
    'cuma',
    'cumartesi',

]

let humanReadableDate = '${days} ${months[month]} ${year}, ${days[dayNumber]}, ${hour}:${minute}:${second}'

console.log(humanReadableDate)




