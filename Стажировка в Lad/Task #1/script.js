let str = `Старший братец ПОНЕДЕЛЬНИК –
работяга, не бездельник.
Он неделю открывает
всех трудиться зазывает.

ВТОРНИК следует за братом
у него идей богато.

А потом СРЕДА-сестрица,
не пристало ей лениться.

Брат ЧЕТВЕРГ и так, и сяк,
он мечтательный чудак.

ПЯТНИЦА-сестра сумела
побыстрей закончить дело.

Предпоследний брат СУББОТА
не выходит на работу.

В гости ходит ВОСКРЕСЕНЬЕ,
очень любит угощенье
`;

let newstr

function ReplaceStr(str){
    newstr = str.replace(/ПОНЕДЕЛЬНИК/i, 'MONDAY');
    newstr = newstr.replace(/ВТОРНИК/i, 'TUESDAY');
    newstr = newstr.replace(/СРЕДА/i, 'WEDNESDAY');
    newstr = newstr.replace(/ЧЕТВЕРГ/i, 'THURSDAY');
    newstr = newstr.replace(/ПЯТНИЦА/i, 'FRIDAY');
    newstr = newstr.replace(/СУББОТА/i, 'SATURDAY');
    newstr = newstr.replace(/ВОСКРЕСЕНЬЕ/i, 'SUNDAY');
}

ReplaceStr(str);
console.log(newstr);

function showStr() {
    document.getElementById("Content").innerHTML = newstr;
}