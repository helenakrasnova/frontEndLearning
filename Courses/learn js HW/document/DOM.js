// document.addEventListener("DOMContentLoaded", function () {
//     let table = document.getElementById("ourTable");
//     let tableRows = table.rows;
//     for (let i = 0; i < tableRows.length; i++) {
//         for (let j = 0; j < tableRows[i].cells.length; j++) {
//             if (i === j){
//                 tableRows[i].cells[j].style.backgroundColor = 'red';
//             }
//         }
//     }
//     let currentCell = tableRows[0].cells.length-1;
//     for (let currentRow = 0; currentRow < tableRows.length; currentRow++) {
//         tableRows[currentRow].cells[currentCell].style.backgroundColor = 'green';
//         currentCell--;
//     }
// });
// window.onload = function () {
//     for (let li of document.querySelectorAll('li')) {
//         let title = li.firstChild.data;
//         console.log(title);
//     }
// }
// let elem = document.querySelector('div[data-widget-name=menu]');
// // let result = elem.getAttribute('data-widget-name');
// let result = elem.dataset.widgetName;
// console.log(result);



// let links = document.querySelectorAll('ul>li>a');
// for (let item of links) {
//     let url = item.getAttribute('href');
//     if (url.includes('://') && !url.includes('http://internal.com')) {
//         item.style.color = 'orange';
//     }
// }
// let elem = document.getElementById('one');
// let liFirst = document.createElement('li');
// liFirst.innerHTML = '3';
// elem.after(liFirst);

// let liLast = document.createElement('li');
// liLast.innerHTML = '2';
// elem.after(liLast);

//     let table = document.getElementById('table');
//     // for (let item of table.rows) {
//     //     arr.push(item.cells[0]);
//     // }
//     // arr.sort();
//     let arr = Array.from(table.rows);
//     arr = arr.slice(1, table.rows.length);
//     arr.sort((rowA, rowB) => {
//         let textA = rowA.cells[0].textContent;
//         let textB = rowB.cells[0].textContent;
//         if (textA > textB) {
//             return 1;
//         }
//         if (textA === textB) {
//             return 0;
//         }
//         if (textA < textB) {
//             return -1;
//         }
//     });
//     arr.splice(0, 0, table.rows[0]);
//     clearTable(table);
//     fillTable(table, arr);
// }

// function clearTable(table) {
//     let rowCount = table.rows.length;
//     for (let i = rowCount - 1; i >= 0; i--) {
//         table.deleteRow(i);
//     }
// }

// function fillTable(table, arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let insertRow = table.insertRow(i);
//         for (let j = 0; j < arr[i].cells.length; j++) {
//             let cell = insertRow.insertCell(j);
//             cell.innerHTML = arr[i].cells[j].innerHTML;
//         }
//     }
// }
window.onload = function () {

    function createHeader(table) {
        let thead = table.createTHead();
        let firstRow = thead.insertRow(0);
        let days = ['mo', 'th', 'we', 'th', 'fr', 'sa', 'su']
        for (let i = 0; i < days.length; i++) {
            let cell = firstRow.insertCell(i);
            cell.innerHTML = days[i];
        }
    }
    function createBody(table, year, month) {
        let date = new Date(+year, +month, 0);
        let firstDay = new Date(+year, +month-1, 1);
        let totalDays = date.getDate();
        let dayOfWeek = firstDay.getDay();
        let currentDay = 1;
        let currentWeek = 0;
        let tbody = table.createTBody();
        while (true) {
            let row = tbody.insertRow(currentWeek);

            for (let i = 0; i < 7; i++) {
                let cell = row.insertCell(i);
                if (currentWeek === 0 && dayOfWeek != 1) {
                    if (dayOfWeek === 0 && i === 6) {
                        cell.innerHTML = currentDay;
                    }
                    else if (dayOfWeek > 1 && i > dayOfWeek -2){
                        
                        cell.innerHTML = currentDay;
                    }
                    else {
                        cell.innerHTML = '';
                        continue;
                    }
                }
                else {
                    cell.innerHTML = currentDay;
                }

                if (currentDay === totalDays) {
                    return;
                }
                currentDay++;
            }
            currentWeek++;
        }
    }

    function createCalendar(elem, year, month) {
        let table = document.createElement('table');
        createHeader(table);
        createBody(table, year, month);
        elem.append(table);
    }
    let cal = document.getElementById('calendar');
    createCalendar(cal, 2019, 7);
}
