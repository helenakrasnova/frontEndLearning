function returnWords(str) {
    let stringWithoutSymbol = '';
    for (let i = 0; i < str.length; i++) {

        if (str[i] != ',' && str[i] != '!') {
            stringWithoutSymbol += str[i];
        }
    }
    let arr = stringWithoutSymbol.split(' ');
    return arr;
}
let str = prompt('введите строку');
console.log(returnWords(str));



let str = 'Привет мир'


function count (stringToScan){
 let charCount = [{}];


for (const symbol of stringToScan) {
    const itemExist = charCount.find(v=>v == symbol);


    if(itemExist){

    }
}



}