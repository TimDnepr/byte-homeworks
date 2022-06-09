let num1 = Number(prompt('Введите первое число'))
let num2 = Number(prompt('Введите второе число'))


let res1 = ('число ' +  num1 + ' больше числа ' + num2) 
let res2 = ('число ' +  num2 + ' больше числа ' + num1) 

if (num1 > num2) {
    alert (res1)
}


if (num1 < num2) {
    alert (res2)
}


if (num1 === num2) {
    alert('Числа равны')
}


// ------------------------задача 2------------------------------


// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите второе число'));
// const toDo = prompt('необходимое вычисление: "+ ""- ""/ ""*" ');
// let result;

// switch (toDo){
//     case "+":
//         result = num1 + num2;
//         break;
//     case "-":
//        result = num1 - num2;
//        break;
//     case "/":
//         result = num1 / num2;
//         break;
//     case "*" :
//         result = num1 * num2;
// }


// alert(`${num1} ${toDo}${num2} = ${result}`)

// console.log(result)


// ------------------------задача 3 ----------------------------------------

// const minAge = 12;
// const recAge1 = 18;
// const recAge2 = 60;
// const maxAge = 80;

// const visitorAge = Number(prompt('Сколько Вам лет?'));
// const isWithParents = confirm('Вы со взрослыми?')

// if(visitorAge >= recAge2 && visitorAge < maxAge && isWithParents){
//     alert('Доступ разрешён')
// }

// if (visitorAge < minAge || visitorAge > maxAge){
//     alert('возраст не подходит для посещения')
// } else if (visitorAge >= recAge1 && visitorAge <= recAge2){
//     alert('Доступ разрешён')
// } else if( visitorAge >= minAge && isWithParents || visitorAge < recAge1 && isWithParents){
//     alert ('Доступ разрешён')
// }  else  {
//     alert ('Доступ запрещён')
// }  


















