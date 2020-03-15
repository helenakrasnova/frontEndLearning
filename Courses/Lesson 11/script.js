// let a = true;
// let b = 2 > 1 && 3 > 2 || 4 < 3 && 3 < 4 || true && false;
// console.log(b);
let a;
do {
    a = +prompt("Введите число от 0 до 59");
    if (a === 'null') { break };
}
while (a < 0 || a >= 60);

if (a > 0 && a <= 15) {
    alert('первая четверть');
}
if (a <= 30 && a > 15) {
    alert('вторая четверть');
}
if (a <= 45 && a > 30) {
    alert('третья четверть');
}
if (a < 60 && a > 45) {
    alert('четвертая четверть');
}
