function convertToHoursAndMinutes(dateInMinutes) {
    let hour;
    let min;
    if (dateInMinutes < 60) {
        hour = 0;
        min = dateInMinutes % 60;
    }
    else {
        hour = Math.floor(dateInMinutes / 60);
        min = dateInMinutes % 60;
    }
    // let days = parseIn(hour/24);
    // min=
    return hour + ' : ' + min;
}
let num = +prompt('введите число минут от 0 до 100000');
let convertedDate = convertToHoursAndMinutes(num);
alert(convertedDate);


