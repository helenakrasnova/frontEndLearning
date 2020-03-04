// let a = 1;
// let b = a;
// let c;
// let d;
// let e = c + d;
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);
// console.log(a+b+c+d);
// alert(a+b+c+d);
// console.log(1/3);
// let s = "alena";
// let n = 1000;
// console.log('Скажи,как тебя зовут?');
// console.log('Скажи,как тебя зовут? ' + n + " " + s);
// console.log(s+(n+2));
// let z=(n+'2');
// console.log(typeof (z));
// let d = prompt('привет');
// console.log(typeof (d));

// let a = prompt('hi');
// console.log(typeof (a));
// let rez = a + d;
// console.log('rezult' + '=' + (a - d));
// let age = prompt('Сколько тебе лет?', 100);

// alert(`Тебе ${age} лет!`); // Тебе 100 лет!
// console.log(typeof (age));
// let conf= confirm('Is your name lesha?');
// console.log(typeof (conf));
// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0
// let counter = 2;
// counter--;        // работает как counter = counter + 1, просто запись короче
// alert( counter ); // 3

// let n = 2;
// n += 5; // теперь n=7 (работает как n = n + 5)
// n *= 2; // теперь n=14 (работает как n = n * 2)

// alert( n ); // 14
// let b = 2;
// let a = (b + 2, b + 4);
// console.log(b);

// alert(a);


// let b = +prompt('input number');
// if (b > 0) { alert('число больше нуля'); }
// else if (b == 0) { alert('число равно нулю'); }
// else { alert('число меньше нуля'); }

// let accessAllowed;
// let age = prompt('Сколько вам лет?', '');

// if ((age >= 18)&& (age <= 27)) {
//     accessAllowed = true;
// } else {
//     accessAllowed = false;
// }

// alert(accessAllowed);

// let age=+prompt();
// let accessAllowed = (age > 18) ? "privet" : "poka";
// alert(accessAllowed);

let age = prompt('Возраст?', 18);

let message = (age < 3) ? 'Здравствуй, малыш!' :
  (age < 18) ? 'Привет!' :
  (age < 100) ? 'Здравствуйте!' :
  'Какой необычный возраст!';

alert( message );



