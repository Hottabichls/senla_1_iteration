/*
/!*Арифметические операции*!/
let int1 = 5;
let int2 = 30;
let int3 = 1;
let int4 = 2;
let multiplication = int1 * int2; /!*умножение*!/
let division = int2 / int1; /!*деление*!/
let subtraction = int2 - int1; /!*вычитание*!/
let summation = int2 + int1; /!*сложение*!/
let module = int2 % int1; /!*деление по модулю*!/
let increment = int3++; /!*увеличивает переменную на 1*!/
let increment1 = int4--; /!*уменьшает переменную на 1*!/
console.log(multiplication + 5);
console.log(division);
console.log(subtraction);
console.log(summation);
console.log(module);
console.log(int3);
console.log(int4);


/!*конкатенация*!/
let con1, con2;
con1 = "Привет";
con2 = "Андрей";
let concatenation = con1 + " " + con2;
console.log(concatenation);

/!*экранирование*!/
alert("Найди точку 55.5".match(/\d\.\d/)); //находит точку и возвращает два символа справа и слева от нее
alert("Найди точку 555".match(/\d\.\d/)); //нет точки возвращает null
alert("I\'am is a new programmer"); //чтобы JS не понял что это конец строки то мы спец.символом \ (слешь) экранируем его

/!*шаблонизация*!/
console.log(`наверное я не понял что от меня нужно
было`); //обратные кавычки позволяют делать перенос строки таким као=кой задан в коде еще в них можно писать конструкцию ${выражение} передаваемоую в функцию

/!*логические операции*!/
let myInt1, myInt2, myInt3, myInt4
myInt1 = 3;
myInt2 = 6;
myInt3 = true;
myInt4 = false;
console.log(myInt1 > myInt2);
console.log(myInt1 < myInt2);
console.log(myInt3 || myInt4);
console.log(myInt3 && myInt4);
console.log(!myInt4);
console.log(myInt1 !== myInt2);
if (myInt3 == true) {/!*цикл конструкции if else*!/
    alert("Правильно");
} else {
    alert("неправильно");
}
;

/!*обработчик ошибок try/catch - простой пример*!/
try {
    x = 4;
    console.log(x);
} catch {
    alert("ошибка в переменной Y значение не определено!");
}
; /!*код работает*!/

try {
    x = 4;
    console.log(y);
} catch {
    alert("ошибка в переменной Y значение не определено!");
}
; /!*код не работает*!/


/!*- функции JS (как отдельный пункт, помимо синтаксиса)*!/
const myFunc = function () {
    let arr1 = prompt();
    let arr2 = prompt();
    let arrSumm = parseInt(arr1) + parseInt(arr2);
    let arrSumm1 = parseInt(arr1) * parseInt(arr2);
    return (arrSumm + arrSumm1);
};
console.log(myFunc())
/!*стрелочная функция*!/
const myFunc1 = () => {
    let arr1 = prompt();
    let arr2 = prompt();
    let arrSumm = parseInt(arr1) + parseInt(arr2);
    let arrSumm1 = parseInt(arr1) * parseInt(arr2);
    return (arrSumm + arrSumm1);
};
console.log(myFunc1())






*/
//калькулятор
function plus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 + num2;
    document.getElementById('out').innerHTML = result;


};

function minus() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 - num2;
    document.getElementById('out').innerHTML = result;


};

function umnozit() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 * num2;
    document.getElementById('out').innerHTML = result;


};

function podelit() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = num1 / num2;
    document.getElementById('out').innerHTML = result;


};

function koren() {
    let num1, num2, result;
    num1 = document.getElementById('n1').value;
    num1 = parseInt(num1);

    num2 = document.getElementById('n2').value;
    num2 = parseInt(num2);

    result = Math.sqrt(num1);
    document.getElementById('out').innerHTML = result;


};
