
// ---------------------первое задание ------------------------


// function getSum() {
//     const num1 = Number(prompt('Первое число'));
//     const num2 = Number(prompt('Второе число'));
    
//     const sum = num1 + num2;
    
//     alert('сумма: ' + sum)
// }


// getSum ();


// const sum2 = (a, b) => a + b;

// const res = sum2 (10, 20)
// console.log(res)


// ---------------Задание 2 ------------------------------------

// const age = 30;
// const userAge = Number(prompt('Сколько Вам лет?'));
// const userName = prompt('Ваше имя');

// function helloUser() {
//     if ( userAge >= age ){
//           userHi = "Здравствуйте"}
//         else userHi =  "Привет" ;
//     const result = userHi + " " + userName;
//     return result;
        
// }

// const hello = helloUser();
// alert(hello);


// ---------------------Задача 3-----------------------





const num1 = Number(prompt('Введите число'));
const num2 = Number(prompt('Введите степень'));


function deg () { 
    if ( num2 == ""){
       return num1 **2;
    }
    const result = num1 ** num2;
    return result;
}
        


const result = deg();
alert(result)







