// let city1 = {
//     "name": "CityN",
//     "population": 10000000,
//     getName: function () {
//         return city1.name;
//     },
//     exportStr: function () {
//         return `name=${this.name}\npopulation=${this.population}\n`;
//     },
//     getCity: getObj,
// };
// // console.log(city1.exportStr());
// let city2 = {};
// city2.name = "CityM";
// city2.population = 1e6;
// city2.getName = () => city2.name;
// city2.exportStr = () => {
//     return `name=${city2.name}\npopulation=${city2.population}\n`;
// }

// city2.getCity = getObj;
// // console.log(city2.exportStr());
// function getObj() {
//     return this;
// }
// console.log(city1.getCity());
// console.log(city2.getCity());


// let obj = {
//     method1 : function () { return this},
//     method2 : function () { return this},
//     method3 : ()=> {
//         return "method3"},
// };
// console.log(obj.method1().method2().method3());

//task7
// let d1 = [45, 78, 10, 3];
// d1[7] = 100;
// console.log(d1, d1[6], d1[7]);
//task8
// let d2 = [45, 78, 10, 3];
// let sum = 0;
// for (let i = 0; i < d2.length; i++) {
//     sum += d2[i];
// }
// console.log(sum);
//task9
// let d3 = [45, 78, 10, 3];
// d3[7] = 100;
// let sum3 = 0;
// for (const i of d3) {
//     if (i) {
//         sum3 += i;
//     }
// }
// console.log(sum3);