/*📍Домашнее задание: Создать сравниваемую введенные данные, конструкцию:

💯Требования:
• Оставить комментарии ко всем данным (своими словами разъяснить);
• Использовать инструкцию promt для ввода данных;
• Использовать условия;
• Создать понятный дружелюбный интерфейс; 
• Залить все файлы на гит репозиторий под названием "JShw3";
• Отправить ссылку на веб страницу МНЕ В ЛИЧКУ, НЕ В ГРУППУ;

📌Тоесть: Вы берете две введенные переменные, и сравниваете их. 

⁉️Сдать до 23 декабря 17:00⁉️
Домашние задания сданные после срока не будут засчитаны. */




let n = Number(prompt("Input first num:" )); //first num 
let her = prompt("what do u want? ");         //action
let m = Number(prompt("Input second num:" )); //second num
if (her == "=") {                             // =
  console.log("first num is:  " );
  console.log(n);
  console.log(her);
  console.log("second num is:");
  console.log(m);
  console.log("result will be:  ");
  console.log(n == m);
}
else if (her == "<") {                        // <
    console.log("first num is:  ");
    console.log(n);
    console.log(her);
    console.log("second num is:  ");
    console.log(m);
    console.log("result will be:  ");
    console.log(n < m);
}
else if (her == ">") {                      // >
    console.log("first num is:  ");
    console.log(n);
    console.log(her);
    console.log("second num is:  ");
    console.log(m);
    console.log("result will be:  ");
    console.log(n > m);
} 
else if (her == "<=") {                     // <=
    console.log("first num is:  ");
    console.log(n);
    console.log(her);
    console.log("second num is:  ");
    console.log(m);
    console.log("result will be:  ");
    console.log(n <= m);
} 
else if (her == ">=") {                       // >=
    console.log("first num is:  ");
    console.log(n);
    console.log(her);
    console.log("second num is:  ");
    console.log(m);
    console.log("result will be:  ");
    console.log(n >= m);
}
else{                                 // error part
  alert("error");
  console.log(alert);
}

