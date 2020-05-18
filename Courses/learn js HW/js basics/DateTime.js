// let date = new Date(2012,1,20,3,12);
// console.log(date);

// let date = new Date(2012, 0, 3);
// function getWeekDay(d) {
//     let days = ['ВС','ПН','ВТ','СР','ЧТ','ПТ','СБ'];
//     let dt = d.getDay();
//     return days[dt];
// }
// console.log(getWeekDay(date));  

// let date = new Date(2014, 0, 6);
// function getLocalDay(date) {
//     let dt = date.getDay();
//     if (dt === 0) {
//         dt = 7;
//     }
//     return dt;
// }
// console.log(getLocalDay(date));

// let date = new Date(2015, 0, 2);
// function getDateAgo(ourDate, ourDays) {
//    let day = new Date(ourDate.getTime(ourDate) - 86400000 * ourDays);
//    return day.getDate(day);
// }
// console.log(getDateAgo(date, 2));

// function getLastDayOfMonth(year, month) {
//     let date = new Date(year, month+1,0);
//     return date.getDate(date);
// }
// console.log(getLastDayOfMonth(2012,11));

// function getSecondsToday() {
//     let date = new Date();
//     let dayToday = new Date(date.getFullYear(date), date.getMonth(date), date.getDate(date));
//     dayToday = dayToday.getTime(dayToday);
//     date = date.getTime(date);
//     date = Math.round((date - dayToday) / 1000);
//     return date;
// }
// console.log(getSecondsToday());

// function getSecondsToday() {
//     let date = new Date();
//     let dayToday = new Date(date.getFullYear(date), date.getMonth(date), date.getDate(date));
//     return Math.round((date.getTime(date) - dayToday.getTime(dayToday)) / 1000);
// }
// console.log(getSecondsToday());

// function getSecondsToTomorrow() {
//     let date = new Date();
//     let dayTomorrow = new Date(date.getFullYear(date), date.getMonth(date), date.getDate(date)+1);
//     return Math.round((dayTomorrow.getTime(dayTomorrow) - date.getTime(date)) / 1000);
// }
// console.log(getSecondsToTomorrow());

// function formatDate(date) {
//     let now = new Date();
//     let nowDate = Math.round(now.getTime() / 1000);
//     let anotherDate = Math.round(date.getTime() / 1000);
//     let sec = nowDate - anotherDate;
//     if (sec < 1) {
//         return 'прямо сейчас';
//     }
//     else if (sec > 1 && sec < 60) {
//         return `${sec} сек. назад`;
//     }
//     else if (sec / 60 > 1 && sec / 3600 < 60) {
//         let min = sec / 60;
//         return `${min} мин. назад`;
//     }
//     else {

//         let fullYear = date.getFullYear().toString().substring(2, 2);
//         let fullDate = `${date.getDate()}.${date.getMonth() + 1}.${fullYear} ${date.getHours()}:${date.getMinutes()}`;
//         return fullDate;
//     }
// }