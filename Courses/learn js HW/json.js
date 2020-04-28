// let user = {
//     name: "Василий Иванович",
//     age: 35
//   };
//   let json = JSON.stringify(user);
//   console.log(json);
//   let newUser = JSON.parse(json);
//   console.log(newUser);
// let room = {
//     number: 23
// };

// let meetup = {
//     title: "Совещание",
//     occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
//     place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log(JSON.stringify(meetup, function replacer(key, value) {
//     /* ваш код */
//     return (key == 'self') ? undefined : value;

// }));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/
// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   /* ваш код */
//   return (value === meetup && key !='') ? undefined : value;
// }));

// /* в результате должно быть:
// {
//   "title":"Совещание",
//   "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
//   "place":{"number":23}
// }
// */