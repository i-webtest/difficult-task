"use strict";

// через многомерный массив без ифов и switch
let lang;
lang = {
  ru: [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ],
  en: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
};
console.log(lang.ru.join());
console.log(lang.en.join());
// console.log(lang.ru[0]);
// console.log(lang.ru[1]);
// console.log(lang.ru[2]);
// console.log(lang.ru[3]);
// console.log(lang.ru[4]);
// console.log(lang.ru[5]);
// console.log(lang.ru[6]);

// console.log(lang.en[0]);
// console.log(lang.en[1]);
// console.log(lang.en[2]);
// console.log(lang.en[3]);
// console.log(lang.en[4]);
// console.log(lang.en[5]);
// console.log(lang.en[6]);
// let arr = Object.values(lang).map(Object.values).flat();
// console.log(arr);

// через if
lang = "ru";
if (lang === "ru") {
  console.log(
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье"
  );
} else if (lang === "en") {
  console.log(
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
  );
} else {
  console.log("Что-то пошло не так...");
}

// через switch-case
switch (lang) {
  case "ru":
    console.log(
      "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье"
    );
    break;
  case "en":
    console.log(
      "Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday"
    );
    break;
  default:
    console.log("Упс...");
}

// Решить задачу с помощью нескольких тернарных операторов, без использования if или switch
let namePerson = "";
console.log(
  namePerson === "Артём"
    ? "директор"
    : namePerson === "Александр"
    ? "преподаватель"
    : "студент"
);
