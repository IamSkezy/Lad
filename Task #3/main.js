let size_number;
//Проверка на ввод корректного числа для указания размерности
do {
    size_number = prompt("Введите размерность угадаемого числа:");
    if (size_number < 3 || size_number > 6) {
        alert("Укажите размерность от 3 до 6!");
    }
    if (size_number >= 3 && size_number <= 6) {
        size_number = Number(size_number);
    }
}while (size_number < 3 || size_number > 6 || typeof size_number != 'number')

let random_number, min = 0, max = 999;
//Генерирование угадаемого числа
function getRandomNumber(min,max) {
    random_number =  Math.floor(Math.random() * (max - min + 1) ) + min;
}
function getMax() {
    for(let i = 3; i < size_number; i++) {
        max = max.toString() + max.toString().slice(-1);
    }
    return max;
}
//Проверка угадаемого числа на адекватность
function AnalyzeNumber() {
    //Проверка на недостаток нулей в начале числа
    if(random_number.toString().length != size_number) {
        random_number = random_number.toString().padStart(size_number,'0');
    }
    random_number = random_number.toString();
    //Проверка на повторяющиеся цифры
    let arr_num = ["1", "2", "3", "4", "5","6", "7", "8","9", "0"];
    for (let n = 0; n < size_number; n++) {
        for (let j = 0; j < size_number; j++) {
            if((random_number[n] == random_number[j+1+n]) == true) {
                let new_rand_number = Math.floor(Math.random() * arr_num.length);
                random_number = random_number.replace(random_number[j+1+n], arr_num[new_rand_number]);
            }
        }
    }
}
getMax();
getRandomNumber(min,max);
console.log(`Число до обработки = ${random_number}`);
AnalyzeNumber();
console.log(`Загаданное число = ${random_number}`);

let attemps;
//Проверка на ввод корректного числа для указания количества попыток
do {
    attemps = prompt("Введите количество попыток:");
    if (attemps < 1 || attemps > 10) {
        alert("Укажите количество попыток от 1 до 10!");
    }
    if (attemps >= 1 && attemps <= 10) {
        attemps = Number(attemps);
    }
}while (attemps < 1 || attemps > 10 || typeof attemps != 'number');
console.log(`Количество попыток = ${attemps}`);

//Создание функции самой игры
let user_number, arr_bulls = [], arr_cows = [],count_bulls = 0, count_cows = 0;
function Game() {
    let step;
    for(step = 1; step < attemps+1; step++) {
        user_number = prompt(`Попытка №${step}\nВведите предпологаемое число:`);
        for(let n = 0; n < size_number; n++) {
            if(user_number[n] == random_number[n]) {
                arr_bulls[n] = user_number[n];
                count_bulls++;
            }
            else {
                for (let j = 0; j < size_number; j++) {
                    if((user_number[j] == (random_number[n])) && (user_number[n] != random_number[n])) {
                        arr_cows[j] = random_number[n];
                        count_cows++;
                    } 
                }
            }
        }
        alert(`Совпавших цифр не на своих местах - ${count_cows}(${arr_cows})\nЦифр на своих местах - ${count_bulls}(${arr_bulls})`);
        let win,lose;
        //Выигрыш
        if (count_bulls == size_number) {
            win = confirm("Поздравляем, вы выиграли!\nХотите сыграть ещё?")
            if (win == true) {
                location.reload()
            }
        }
        //Если попытки кончились
        if (step == attemps && win != true) {
            lose = confirm("Попытки кончились, вы проиграли!\nХотите сыграть ещё?")
            if (lose == true) {
                location.reload()
            }
        }
        arr_bulls = [];
        count_bulls = 0;
        arr_cows = [];
        count_cows = 0;
    }
}
Game();