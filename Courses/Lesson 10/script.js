// alert( true || true );   // true
// alert( false || true );  // true
// alert( true || false );  // true
// alert( false || false ); // false

// if (1 || 0) { // работает как if( true || false )
//     alert( 'truthy!' );
//   }
// let hour = +prompt();

// if (hour < 10 || hour > 18) {
//   alert( 'Офис закрыт.' );
// }
// else{
//     alert('Офис открыт.');
// }
// const result = 0 || false || 0;
// console.log(result);
// let currentUser = null;
// let defaultUser = "John";

// let name = currentUser || defaultUser || "unnamed";
// console.log(name);
// alert(name); // выбирается "John" – первое истинное значение

// let r = 2 > 1 || 3 < 1;
// console.log(typeof(r));
// let x;

// true || (x = 1);

// alert(x); // undefined, потому что (x = 1) не вычисляется
// let hour = prompt();
// let minute = prompt();

// if (hour == 12 && minute == 30) {
//   alert( 'The time is 12:30' );
// }
// let hour=!0;
// console.log(hour);
// let i = 0;
// while (i < 3) { // выводит 0, затем 1, затем 2
//   alert( i );
//   i++;
//   console.log(i);
// }
// let i = 3;
// while (i) { // когда i будет равно 0, условие станет ложным, и цикл остановится
//   alert( i );
//   i--;
// }
// let i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);
// for (; ;) { // выведет 0, затем 1, затем 2
//   alert();
// }
// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');

//   if (!value) break; // (*)

//   sum += value;

// }
// alert('Сумма: ' + sum);
// for (let i = 0; i < 10; i++) {

//   // если true, пропустить оставшуюся часть тела цикла
//   if (i % 2 == 0) continue;

//   alert(i); // 1, затем 3, 5, 7, 9
// }
// for (let i = 0; i < 10; i++) {

//   if (i % 2) {
//     alert( i );
//   }

// }
if (i > 5) {
  alert(i);
} else {
  continue;
}