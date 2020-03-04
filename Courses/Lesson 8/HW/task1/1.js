function isLeapYear(enteredYear) {
    if ((enteredYear % 4 == 0) && (enteredYear % 100 != 0 || enteredYear % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
let year = +prompt('введите год');

let leapYear = isLeapYear(year);
if (leapYear == true) {
    alert('високосный');
}
else {
    alert('невисокосный');
}
