let num = 266219; //создал переменную
let num2 = Array.from(String(num), Number); //преобразовал число в массив
console.log(num2);

//перемножил элементы массива
let result = num2.reduce(function (a, b) {
  return a * b;
});
console.log("результат перемножения элементов массива: " + result);

result **= 3; //возведение результата в степень 3
console.log("результат возведения в степень 3: " + result);

//Вывести в консоль первые 2 цифры полученного числа
console.log(String(result).substring(0, 2));
