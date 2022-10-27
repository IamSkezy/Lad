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

const week = {
    Monday: "ПОНЕДЕЛЬНИК",
    Tuesday: "ВТОРНИК",
    Wednesday: "СРЕДА",
    Thursday: "ЧЕТВЕРГ",
    Friday: "ПЯТНИЦА",
    Saturday: "СУББОТА",
    Sunday: "ВОСКРЕСЕНЬЕ"
}

const arr_keys = Object.keys(week);
const arr_values = Object.values(week);

for(let i = 0; i < Object.keys(week).length; i++) {
    while(str.includes(arr_values[i])) {
        str = str.replace(arr_values[i], arr_keys[i])
    }
}
console.log(str);